import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  LANE_WIDTH,
  LANE_LEFT,
  LANE_CENTER,
  LANE_RIGHT,
  FORWARD_SPEED,
  LANE_LERP_SPEED,
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
  const playerXRef = useRef(currentLane * LANE_WIDTH);
  const playerZRef = useRef(0);

  // Swipe gesture detection refs
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const moveLeft = () => {
    if (targetLaneRef.current > LANE_LEFT) {
      targetLaneRef.current -= 1;
      onLaneChange(targetLaneRef.current);
    }
  };

  const moveRight = () => {
    if (targetLaneRef.current < LANE_RIGHT) {
      targetLaneRef.current += 1;
      onLaneChange(targetLaneRef.current);
    }
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

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.7, 0.9, 0.5);
    const torsoMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.4,
    });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.y = 0.95;
    torso.castShadow = true;
    playerGroup.add(torso);

    // Head
    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.3,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.7;
    head.castShadow = true;
    playerGroup.add(head);

    // Visor (indicates forward orientation)
    const visorGeo = new THREE.BoxGeometry(0.42, 0.16, 0.08);
    const visorMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 1.72, 0.26);
    playerGroup.add(visor);

    // Limbs: Left & Right Legs
    const legGeo = new THREE.BoxGeometry(0.24, 0.65, 0.24);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
    });

    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.2, 0.35, 0);
    leftLeg.castShadow = true;
    playerGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.2, 0.35, 0);
    rightLeg.castShadow = true;
    playerGroup.add(rightLeg);

    // Limbs: Left & Right Arms
    const armGeo = new THREE.BoxGeometry(0.18, 0.6, 0.18);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      roughness: 0.4,
    });

    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.46, 0.95, 0);
    leftArm.castShadow = true;
    playerGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.46, 0.95, 0);
    rightArm.castShadow = true;
    playerGroup.add(rightArm);

    // Ground Contact Shadow
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
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isRunningRef.current || e.touches.length === 0) return;
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isRunningRef.current || touchStartXRef.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const dx = touchEndX - touchStartXRef.current;
      const dy = touchEndY - (touchStartYRef.current ?? touchEndY);

      const threshold = 30; // 30px swipe threshold
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
        if (dx < 0) {
          moveLeft();
        } else {
          moveRight();
        }
      } else if (Math.abs(dx) <= threshold && Math.abs(dy) <= threshold) {
        // Tap gesture: Left half = move left, Right half = move right
        const rect = container.getBoundingClientRect();
        const tapX = touchEndX - rect.left;
        if (tapX < rect.width * 0.45) {
          moveLeft();
        } else if (tapX > rect.width * 0.55) {
          moveRight();
        }
      }

      touchStartXRef.current = null;
      touchStartYRef.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

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

        // Smooth lane interpolation
        const targetX = targetLaneRef.current * LANE_WIDTH;
        playerXRef.current += (targetX - playerXRef.current) * LANE_LERP_SPEED * dt;

        // Banking tilt when moving horizontally
        const rollAngle = (targetX - playerXRef.current) * -0.22;
        playerGroup.rotation.z = THREE.MathUtils.lerp(
          playerGroup.rotation.z,
          rollAngle,
          0.2
        );

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

        // Position player in world
        playerGroup.position.set(playerXRef.current, 0, playerZRef.current);

        // Smooth camera follow (chase cam)
        camera.position.set(
          playerXRef.current * 0.45,
          3.2,
          playerZRef.current - 5.5
        );
        camera.lookAt(
          playerXRef.current * 0.2,
          1.2,
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
      container.removeEventListener('touchend', handleTouchEnd);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full cursor-pointer select-none overflow-hidden"
      data-testid="game_canvas"
    />
  );
};
