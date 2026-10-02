"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ArchitecturalCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Architectural Wireframe Mesh (Icosahedron & Octahedron lattice)
    const geometry = new THREE.IcosahedronGeometry(12, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xc99545,
      transparent: true,
      opacity: 0.18,
    });
    
    const wireframeMesh = new THREE.LineSegments(wireframe, lineMaterial);
    scene.add(wireframeMesh);

    // Inner Core Geometry
    const innerGeo = THREE.OctahedronGeometry ? new THREE.OctahedronGeometry(6, 0) : new THREE.IcosahedronGeometry(6, 0);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xe3b968,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.LineSegments(innerWire, innerMat);
    scene.add(innerMesh);

    // 3. Floating Gold Particles Field
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.25,
      color: 0xf4d58a,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 4. Mouse interaction & animation loop
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate 3D structure
      wireframeMesh.rotation.x += 0.0015;
      wireframeMesh.rotation.y += 0.002;

      innerMesh.rotation.x -= 0.0025;
      innerMesh.rotation.y -= 0.003;

      particlesMesh.rotation.y += 0.0008;

      // Mouse parallax smooth lerp
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 4 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineMaterial.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
