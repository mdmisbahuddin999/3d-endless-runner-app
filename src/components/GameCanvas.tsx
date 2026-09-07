import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  LANE_WIDTH,
  LANE_LEFT,
  LANE_CENTER,
  LANE_RIGHT,
  FORWARD_SPEED,
  LANE_LERP_SPEED,
  JUMP_DURATION,
  JUMP_HEIGHT,
  SLIDE_DURATION,
} from '../types/game';

interface GameCanvasProps {
  isRunning: boolean;
  onDistanceUpdate: (distance: number) => void;
  onLaneChange: (lane: number) => void;
  currentLane: number;
  triggerMoveLeft: number;
  triggerMoveRight: number;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  isRunning,
  onDistanceUpdate,
  onLaneChange,
  currentLane,
  triggerMoveLeft,
  triggerMoveRight,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Mutable game refs to avoid re-instantiating Three.js scene
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  const currentLaneRef = useRef(currentLane);
  currentLaneRef.current = currentLane;

  const targetLaneRef = useRef(currentLane);
  // In camera view facing +Z, Screen Left is World +X, Screen Right is World -X
  const playerXRef = useRef(-currentLane * LANE_WIDTH);
  const playerZRef = useRef(0);

  // Jump and Slide state refs
  const isJumpingRef = useRef(false);
  const jumpTimerRef = useRef(0);
  const isSlidingRef = useRef(false);
  const slideTimerRef = useRef(0);

  // Touch gesture detection refs
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const swipeHandledRef = useRef<boolean>(false);

  const moveLeft = () => {
    if (!isRunningRef.current) return;
    if (targetLaneRef.current > LANE_LEFT) {
      targetLaneRef.current -= 1;
      onLaneChange(targetLaneRef.current);
    }
  };

  const moveRight = () => {
    if (!isRunningRef.current) return;
    if (targetLaneRef.current < LANE_RIGHT) {
      targetLaneRef.current += 1;
      onLaneChange(targetLaneRef.current);
    }
  };

  const jump = () => {
    if (!isRunningRef.current) return;
    // Cancel slide if sliding and jump immediately
    if (isSlidingRef.current) {
      isSlidingRef.current = false;
      slideTimerRef.current = 0;
    }
    if (!isJumpingRef.current) {
      isJumpingRef.current = true;
      jumpTimerRef.current = 0;
    }
  };

  const slide = () => {
    if (!isRunningRef.current) return;
    // Cancel jump if jumping (fast-fall) and slide immediately
    if (isJumpingRef.current) {
      isJumpingRef.current = false;
      jumpTimerRef.current = 0;
    }
    isSlidingRef.current = true;
    slideTimerRef.current = 0;
  };

  // Respond to prop triggers from on-screen buttons
  const prevMoveLeftTrigger = useRef(triggerMoveLeft);
  useEffect(() => {
    if (triggerMoveLeft !== prevMoveLeftTrigger.current) {
      prevMoveLeftTrigger.current = triggerMoveLeft;
      moveLeft();
    }
  }, [triggerMoveLeft]);

  const prevMoveRightTrigger = useRef(triggerMoveRight);
  useEffect(() => {
    if (triggerMoveRight !== prevMoveRightTrigger.current) {
      prevMoveRightTrigger.current = triggerMoveRight;
      moveRight();
    }
  }, [triggerMoveRight]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1120);
    scene.fog = new THREE.Fog(0x0b1120, 30, 160);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      250
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x7dd3fc, 1.2);
    dirLight.position.set(10, 25, -15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 100;
    dirLight.shadow.camera.left = -15;
    dirLight.shadow.camera.right = 15;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    scene.add(dirLight);

    // 3. Track Setup (Continuous recycled chunks)
    const TRACK_WIDTH = LANE_WIDTH * 3; // 7.2
    const CHUNK_LENGTH = 30;
    const CHUNK_COUNT = 8;
    const trackChunks: THREE.Group[] = [];

    const asphaltMat1 = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.85,
    });
    const asphaltMat2 = new THREE.MeshStandardMaterial({
      color: 0x182334,
      roughness: 0.85,
    });
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    const curbMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.4,
      metalness: 0.2,
    });

    for (let i = 0; i < CHUNK_COUNT; i++) {
      const chunk = new THREE.Group();
      const zPos = i * CHUNK_LENGTH;
      chunk.position.z = zPos;

      // Track roadbed
      const roadGeo = new THREE.BoxGeometry(TRACK_WIDTH, 0.4, CHUNK_LENGTH);
      const roadMesh = new THREE.Mesh(
        roadGeo,
        i % 2 === 0 ? asphaltMat1 : asphaltMat2
      );
      roadMesh.position.y = -0.2;
      roadMesh.receiveShadow = true;
      chunk.add(roadMesh);

      // Left & Right boundary curbs
      const curbGeo = new THREE.BoxGeometry(0.3, 0.3, CHUNK_LENGTH);
      const leftCurb = new THREE.Mesh(curbGeo, curbMat);
      leftCurb.position.set(-TRACK_WIDTH / 2 - 0.15, 0.05, 0);
      chunk.add(leftCurb);

      const rightCurb = new THREE.Mesh(curbGeo, curbMat);
      rightCurb.position.set(TRACK_WIDTH / 2 + 0.15, 0.05, 0);
      chunk.add(rightCurb);

      // Dashed lane divider lines
      const stripeGeo = new THREE.PlaneGeometry(0.12, 3);
      stripeGeo.rotateX(-Math.PI / 2);

      const dividerLanes = [-LANE_WIDTH / 2, LANE_WIDTH / 2];
      for (const divX of dividerLanes) {
        for (let s = -CHUNK_LENGTH / 2 + 3; s < CHUNK_LENGTH / 2; s += 6) {
          const stripe = new THREE.Mesh(stripeGeo, stripeMat);
          stripe.position.set(divX, 0.01, s);
          chunk.add(stripe);
        }
      }

      scene.add(chunk);
      trackChunks.push(chunk);
    }

    // 4. Simple 3D Player Character Placeholder
    const playerGroup = new THREE.Group();

    // Body group for vertical jump / slide crouching
    const characterGroup = new THREE.Group();
    playerGroup.add(characterGroup);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.7, 0.9, 0.5);
    const torsoMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.4,
    });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.y = 0.95;
    torso.castShadow = true;
    characterGroup.add(torso);

    // Head
    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.7;
    head.castShadow = true;
    characterGroup.add(head);

    // Visor (indicates forward orientation)
    const visorGeo = new THREE.BoxGeometry(0.42, 0.16, 0.08);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 1.72, 0.26);
    characterGroup.add(visor);

    // Limbs: Left & Right Legs
    const legGeo = new THREE.BoxGeometry(0.24, 0.65, 0.24);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
    });

    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.2, 0.35, 0);
    leftLeg.castShadow = true;
    characterGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.2, 0.35, 0);
    rightLeg.castShadow = true;
    characterGroup.add(rightLeg);

    // Limbs: Left & Right Arms
    const armGeo = new THREE.BoxGeometry(0.18, 0.6, 0.18);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.4,
    });

    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.46, 0.95, 0);
    leftArm.castShadow = true;
    characterGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.46, 0.95, 0);
    rightArm.castShadow = true;
    characterGroup.add(rightArm);

    // Ground Contact Shadow (remains on road plane at y = 0.02)
    const shadowGeo = new THREE.PlaneGeometry(1.0, 0.8);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.35,
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.position.y = 0.02;
    playerGroup.add(shadow);

    scene.add(playerGroup);

    // 5. Input Listeners (Keyboard + Swipe + Tap)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRunningRef.current) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        moveLeft();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        moveRight();
      } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
        jump();
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        slide();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isRunningRef.current || e.touches.length === 0) return;
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
      swipeHandledRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isRunningRef.current || touchStartXRef.current === null || swipeHandledRef.current) return;
      if (e.touches.length === 0) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = currentX - touchStartXRef.current;
      const dy = currentY - (touchStartYRef.current ?? currentY);

      const threshold = 25; // 25px threshold for quick touch response
      if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
        swipeHandledRef.current = true;
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) {
            moveLeft();
          } else {
            moveRight();
          }
        } else {
          if (dy < 0) {
            jump();
          } else {
            slide();
          }
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isRunningRef.current || touchStartXRef.current === null) return;
      if (!swipeHandledRef.current && e.changedTouches.length > 0) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const dx = touchEndX - touchStartXRef.current;
        const dy = touchEndY - (touchStartYRef.current ?? touchEndY);
        const threshold = 25;

        if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
          if (Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) moveLeft();
            else moveRight();
          } else {
            if (dy < 0) jump();
            else slide();
          }
        } else {
          // Tap gesture
          const rect = container.getBoundingClientRect();
          const tapX = touchEndX - rect.left;
          const tapY = touchEndY - rect.top;
          const relX = tapX / rect.width;
          const relY = tapY / rect.height;

          if (relX < 0.38) {
            moveLeft();
          } else if (relX > 0.62) {
            moveRight();
          } else {
            if (relY < 0.5) {
              jump();
            } else {
              slide();
            }
          }
        }
      }

      touchStartXRef.current = null;
      touchStartYRef.current = null;
      swipeHandledRef.current = false;
    };

    const handleTouchCancel = () => {
      touchStartXRef.current = null;
      touchStartYRef.current = null;
      swipeHandledRef.current = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('touchcancel', handleTouchCancel, { passive: true });

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Game Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    let runCycle = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (isRunningRef.current) {
        // Automatic forward movement
        playerZRef.current += FORWARD_SPEED * dt;
        onDistanceUpdate(Math.floor(playerZRef.current));

        // Smooth lane interpolation:
        // In camera perspective facing +Z, Screen Left is World +X, Screen Right is World -X.
        // LANE_LEFT is -1 => targetX = -(-1) * LANE_WIDTH = +2.4 (Screen Left)
        // LANE_RIGHT is 1 => targetX = -(1) * LANE_WIDTH = -2.4 (Screen Right)
        const targetX = -targetLaneRef.current * LANE_WIDTH;
        playerXRef.current += (targetX - playerXRef.current) * LANE_LERP_SPEED * dt;

        // Banking tilt when moving horizontally (tilts into the turn)
        const rollAngle = (targetX - playerXRef.current) * -0.15;
        playerGroup.rotation.z = THREE.MathUtils.lerp(
          playerGroup.rotation.z,
          rollAngle,
          0.2
        );

        // Jump trajectory calculation
        let jumpY = 0;
        if (isJumpingRef.current) {
          jumpTimerRef.current += dt;
          const progress = jumpTimerRef.current / JUMP_DURATION;
          if (progress >= 1.0) {
            isJumpingRef.current = false;
            jumpTimerRef.current = 0;
            jumpY = 0;
          } else {
            jumpY = Math.sin(progress * Math.PI) * JUMP_HEIGHT;
          }
        }

        // Slide calculation
        if (isSlidingRef.current) {
          slideTimerRef.current += dt;
          if (slideTimerRef.current >= SLIDE_DURATION) {
            isSlidingRef.current = false;
            slideTimerRef.current = 0;
          }
        }

        if (isJumpingRef.current) {
          characterGroup.position.y = jumpY;
          characterGroup.scale.set(1, 1, 1);
          characterGroup.rotation.x = 0;
          leftLeg.rotation.x = -0.35;
          rightLeg.rotation.x = -0.2;
          leftArm.rotation.x = -0.5;
          rightArm.rotation.x = -0.5;
          torso.position.y = 0.95;
          head.position.y = 1.7;
          visor.position.y = 1.72;

          shadow.scale.set(
            Math.max(0.4, 1.0 - jumpY * 0.25),
            Math.max(0.4, 1.0 - jumpY * 0.25),
            1
          );
          shadowMat.opacity = Math.max(0.12, 0.35 - jumpY * 0.1);
        } else if (isSlidingRef.current) {
          characterGroup.position.y = 0;
          characterGroup.scale.set(1.05, 0.45, 1.35);
          characterGroup.rotation.x = 0.2;
          leftLeg.rotation.x = -1.1;
          rightLeg.rotation.x = -1.1;
          leftArm.rotation.x = 0.8;
          rightArm.rotation.x = 0.8;
          torso.position.y = 0.95;
          head.position.y = 1.7;
          visor.position.y = 1.72;

          shadow.scale.set(1.1, 1.3, 1.0);
          shadowMat.opacity = 0.4;
        } else {
          characterGroup.position.y = 0;
          characterGroup.scale.set(1, 1, 1);
          characterGroup.rotation.x = 0;

          // Runner stride & vertical bounce animation
          runCycle += dt * 14;
          const stride = Math.sin(runCycle);
          leftLeg.rotation.x = stride * 0.75;
          rightLeg.rotation.x = -stride * 0.75;
          leftArm.rotation.x = -stride * 0.65;
          rightArm.rotation.x = stride * 0.65;

          const bounceY = Math.abs(Math.sin(runCycle * 2)) * 0.08;
          torso.position.y = 0.95 + bounceY;
          head.position.y = 1.7 + bounceY;
          visor.position.y = 1.72 + bounceY;

          shadow.scale.set(1, 1, 1);
          shadowMat.opacity = 0.35;
        }

        // Position player in world
        playerGroup.position.set(playerXRef.current, 0, playerZRef.current);

        // Smooth camera follow (chase cam)
        camera.position.set(
          playerXRef.current * 0.45,
          3.2 + jumpY * 0.25,
          playerZRef.current - 5.5
        );
        camera.lookAt(
          playerXRef.current * 0.2,
          1.2 + jumpY * 0.15,
          playerZRef.current + 8.0
        );

        // Light follows player Z
        dirLight.position.z = playerZRef.current - 15;
        dirLight.target.position.z = playerZRef.current + 5;
        dirLight.target.updateMatrixWorld();

        // Recycle track chunks
        for (const chunk of trackChunks) {
          if (chunk.position.z < playerZRef.current - CHUNK_LENGTH) {
            chunk.position.z += CHUNK_COUNT * CHUNK_LENGTH;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchCancel);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full cursor-pointer select-none overflow-hidden touch-none"
      data-testid="game_canvas"
    />
  );
};
