"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sparkles, Eye, Maximize2, ShieldCheck, Compass, CheckCircle2, ArrowUpRight, RotateCcw, Box, Camera, Sun, Moon, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BookTourModal from "@/app/components/ui/BookTourModal";

const HOTSPOTS = [
  {
    id: "pool",
    title: "Private Courtyard & Plunge Pool",
    subtitle: "Open Courtyard Deck · Frangipani Garden · Italian Marble",
    desc: "Private Indian villa courtyard featuring an open-to-sky water pool, teakwood pergola, frangipani plumeria gardens, and warm ambient LED lanterns.",
    spec: "Courtyard Deck · Italian Marble",
    image: "/properties/indian-villa-courtyard.png",
    pos: { x: 4, y: 1.5, z: 6 },
    camPos: { x: 12, y: 6, z: 14 },
    materials: ["Italian Marble Decking", "Teakwood Pergola", "Brass Jaali Screens"],
    highlights: ["Private plunge pool", "Frangipani lush garden", "Ambient lantern lighting"]
  },
  {
    id: "atrium",
    title: "Double-Height Grand Living Lounge",
    subtitle: "24ft Ceilings · Teak Wood Paneling · Stone Accent Wall",
    desc: "24ft ceiling grand living lounge with floor-to-ceiling glass facades, custom brass jaali room dividers, and natural stone accent walls.",
    spec: "24ft Height · Double Ceiling",
    image: "/properties/indian-villa-living.png",
    pos: { x: 0, y: 3.5, z: 0 },
    camPos: { x: 0, y: 5, z: 18 },
    materials: ["Teak Wood Paneling", "Brass Jaali Dividers", "Statement Chandelier"],
    highlights: ["Acoustic sound isolation", "Floor-to-ceiling glass sliding doors", "Custom brass accents"]
  },
  {
    id: "solar",
    title: "Dholpur Sandstone Luxury Exterior",
    subtitle: "Sandstone Facade · Geometric Jaali · Manicured Lawns",
    desc: "Grand Indian villa elevation featuring warm Dholpur sandstone, geometric brass jaali lattice work, manicured tropical lawns, and sleek reflection pools.",
    spec: "Sandstone Facade · Jaali Work",
    image: "/properties/indian-villa-exterior.png",
    pos: { x: 2, y: 7.5, z: -2 },
    camPos: { x: 6, y: 14, z: 8 },
    materials: ["Dholpur Sandstone", "Brass Jaali Lattice", "Lotus Reflection Pool"],
    highlights: ["Sandstone facade", "Custom brass jaali screens", "Lotus reflection water feature"]
  },
  {
    id: "garage",
    title: "Private Gated Entrance & Portico",
    subtitle: "Granite Driveway · Covered Portico · Multi-Car Bay",
    desc: "Gated Indian villa entry with wide granite stone driveway, automated entrance gates, and spacious covered vehicle portico.",
    spec: "Multi-Car Portico · Gated Entry",
    image: "/properties/indian-villa-exterior.png",
    pos: { x: -5, y: -2, z: 3 },
    camPos: { x: -14, y: 2, z: 12 },
    materials: ["Granite Stone Paving", "Brass Accent Gates", "Portico Lighting"],
    highlights: ["Automated entry gates", "Wide granite driveway", "Covered car portico"]
  }
];

export default function Interactive3DVilla() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<typeof HOTSPOTS[0]>(HOTSPOTS[0]);
  const [viewMode, setViewMode] = useState<"3d" | "photo">("3d");
  const [isNightMode, setIsNightMode] = useState(true);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Fog, Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isNightMode ? 0x050505 : 0x1a1a24, 0.012);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(18, 14, 22);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // 2. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.02;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(
      isNightMode ? 0x222233 : 0xffffff,
      isNightMode ? 0.8 : 1.4
    );
    scene.add(ambientLight);

    // Key Sunset/Gold Directional Light
    const dirLight = new THREE.DirectionalLight(0xe3b968, isNightMode ? 2.0 : 3.5);
    dirLight.position.set(25, 40, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Cool Rim Light
    const rimLight = new THREE.DirectionalLight(0x4a90e2, 1.2);
    rimLight.position.set(-20, 20, -20);
    scene.add(rimLight);

    // Warm Interior Point Lights
    const interiorLight1 = new THREE.PointLight(0xffa500, 4, 30);
    interiorLight1.position.set(0, 3, 0);
    scene.add(interiorLight1);

    const interiorLight2 = new THREE.PointLight(0xffd700, 3, 25);
    interiorLight2.position.set(2, 7, -1);
    scene.add(interiorLight2);

    // Pool Glowing Light
    const poolLight = new THREE.PointLight(0x00e5ff, 5, 20);
    poolLight.position.set(4, 0.5, 6);
    scene.add(poolLight);

    // 4. Construct High-Detail Architectural Villa Group
    const villaGroup = new THREE.Group();

    // Statuario Marble Podium Base
    const podiumGeo = new THREE.BoxGeometry(26, 1.2, 20);
    const podiumMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.1,
    });
    const podium = new THREE.Mesh(podiumGeo, podiumMat);
    podium.position.y = -0.6;
    podium.receiveShadow = true;
    villaGroup.add(podium);

    // Main Atrium Volume (Tinted Reflective Glass with Framed Steel Multi-Panes)
    const glassGeo = new THREE.BoxGeometry(14, 5.5, 12);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.05,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75,
    });
    const glassBlock = new THREE.Mesh(glassGeo, glassMat);
    glassBlock.position.set(0, 2.75, 0);
    glassBlock.castShadow = true;
    villaGroup.add(glassBlock);

    // Interior Warm Living Core Mesh
    const coreGeo = new THREE.BoxGeometry(10, 4.5, 8);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd4a359,
      emissive: 0x8a5a1b,
      emissiveIntensity: 0.6,
      roughness: 0.4,
    });
    const coreBlock = new THREE.Mesh(coreGeo, coreMat);
    coreBlock.position.set(0, 2.25, 0);
    villaGroup.add(coreBlock);

    // Upper Master Cantilever Volume (Wooden Architectural Louvers)
    const upperGeo = new THREE.BoxGeometry(17, 4.2, 10);
    const upperMat = new THREE.MeshStandardMaterial({
      color: 0x3d2b1f,
      roughness: 0.4,
      metalness: 0.3,
    });
    const upperBlock = new THREE.Mesh(upperGeo, upperMat);
    upperBlock.position.set(1.5, 7.6, -1);
    upperBlock.castShadow = true;
    villaGroup.add(upperBlock);

    // Cantilever Structural Metallic Columns
    const colGeo = new THREE.CylinderGeometry(0.3, 0.3, 10, 16);
    const colMat = new THREE.MeshStandardMaterial({
      color: 0xe3b968,
      metalness: 0.9,
      roughness: 0.1,
    });
    [-7.5, 7.5].forEach((xPos) => {
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(xPos, 5, 5.5);
      villaGroup.add(col);
    });

    // Infinity Pool Volume (Glowing Cyan Glass Surface)
    const poolGeo = new THREE.BoxGeometry(10, 0.8, 5.5);
    const poolMat = new THREE.MeshStandardMaterial({
      color: 0x00c4cc,
      emissive: 0x005566,
      emissiveIntensity: 0.8,
      roughness: 0.05,
      metalness: 0.95,
      transparent: true,
      opacity: 0.85,
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(4, 0.4, 6.5);
    villaGroup.add(pool);

    // Fire Pit & Lounger Elements
    const firePitGeo = new THREE.BoxGeometry(2, 0.5, 1);
    const firePitMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const firePit = new THREE.Mesh(firePitGeo, firePitMat);
    firePit.position.set(4, 1.0, 3.2);
    villaGroup.add(firePit);

    const fireGlowGeo = new THREE.SphereGeometry(0.3, 8, 8);
    const fireGlowMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });
    const fireGlow = new THREE.Mesh(fireGlowGeo, fireGlowMat);
    fireGlow.position.set(4, 1.3, 3.2);
    villaGroup.add(fireGlow);

    // Roof Solar Canopy & Pergola Frame
    const roofGeo = new THREE.BoxGeometry(18, 0.3, 11);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.8,
      roughness: 0.2,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(1.5, 9.85, -1);
    villaGroup.add(roof);

    // Architectural Wireframe Gold Lines Overlay
    const wireframeGeo = new THREE.WireframeGeometry(upperGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xe3b968,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeLines = new THREE.LineSegments(wireframeGeo, wireframeMat);
    wireframeLines.position.copy(upperBlock.position);
    villaGroup.add(wireframeLines);

    scene.add(villaGroup);

    // 5. Hotspot Interactive 3D Nodes
    const hotspotNodes: { mesh: THREE.Mesh; data: typeof HOTSPOTS[0] }[] = [];
    const sphereGeo = new THREE.SphereGeometry(0.6, 16, 16);

    HOTSPOTS.forEach((spot) => {
      const spotMat = new THREE.MeshStandardMaterial({
        color: 0xf4d58a,
        emissive: 0xb17a3a,
        emissiveIntensity: 1.0,
        roughness: 0.1,
      });
      const nodeMesh = new THREE.Mesh(sphereGeo, spotMat);
      nodeMesh.position.set(spot.pos.x, spot.pos.y, spot.pos.z);
      scene.add(nodeMesh);
      hotspotNodes.push({ mesh: nodeMesh, data: spot });
    });

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Pulsate Hotspot Spheres
      const time = Date.now() * 0.003;
      hotspotNodes.forEach((node, i) => {
        const scale = 1 + Math.sin(time + i * 1.5) * 0.2;
        node.mesh.scale.set(scale, scale, scale);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, [isNightMode]);

  // Handle camera transition when selecting a hotspot
  const handleSelectHotspot = (spot: typeof HOTSPOTS[0]) => {
    setActiveHotspot(spot);
    if (cameraRef.current && controlsRef.current && viewMode === "3d") {
      const cam = cameraRef.current;
      cam.position.set(spot.camPos.x, spot.camPos.y, spot.camPos.z);
      controlsRef.current.target.set(spot.pos.x, spot.pos.y, spot.pos.z);
      controlsRef.current.update();
    }
  };

  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.set(18, 14, 22);
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.update();
    }
  };

  return (
    <section className="relative bg-[#050505] py-28 text-white overflow-hidden border-t border-white/10">
      {/* Background Soft Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-125 w-125 rounded-full bg-[#B17A3A]/10 blur-[180px]" />

      <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968] mb-4">
              <Sparkles size={13} />
              <span>3D Spatial Architectural Inspection</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
              Interactive Luxury Villa Model
            </h2>
          </div>

          {/* Mode Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle: 3D vs Photorealistic */}
            <div className="flex items-center rounded-xl border border-white/15 bg-black/60 p-1 backdrop-blur-md">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "3d"
                    ? "bg-[#B17A3A] text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Box size={14} />
                <span>3D WebGL Model</span>
              </button>

              <button
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "photo"
                    ? "bg-[#B17A3A] text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Camera size={14} />
                <span>Photorealistic Renders</span>
              </button>
            </div>

            {/* Night / Sunset Lighting Mode */}
            {viewMode === "3d" && (
              <button
                onClick={() => setIsNightMode(!isNightMode)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/60 text-[#E3B968] hover:border-[#B17A3A] transition-all"
                title="Toggle Evening / Day Lighting"
              >
                {isNightMode ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Viewport (3D WebGL Canvas OR Photorealistic Renderer) */}
          <div className="lg:col-span-8 relative aspect-16/10 min-h-120 w-full overflow-hidden rounded-2xl border border-white/15 bg-linear-to-b from-[#111111] via-[#0A0A0A] to-[#050505] shadow-2xl group">
            
            {viewMode === "3d" ? (
              <div className="h-full w-full cursor-grab active:cursor-grabbing">
                <div ref={mountRef} className="h-full w-full" />
              </div>
            ) : (
              <div className="relative h-full w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeHotspot.image}
                      alt={activeHotspot.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover brightness-95"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30" />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {/* Top Viewport Overlay Tag */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/50 bg-black/80 px-4 py-1.5 text-[9.5px] font-semibold uppercase tracking-widest text-[#F4D58A] backdrop-blur-md shadow-xl">
                <span className="h-2 w-2 rounded-full bg-[#E3B968] animate-pulse" />
                <span>
                  {viewMode === "3d" ? "Real-Time 3D WebGL Orbit Controls" : `HD Architectural View: ${activeHotspot.title}`}
                </span>
              </div>
            </div>

            {/* Bottom Controls Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="rounded-xl border border-white/15 bg-black/80 px-4 py-2 text-xs text-white/80 backdrop-blur-md shadow-xl">
                <span className="text-[#E3B968] font-semibold uppercase tracking-wider text-[10px] block">Currently Inspecting</span>
                <span className="font-display font-medium text-white">{activeHotspot.title}</span>
              </div>

              {viewMode === "3d" && (
                <button
                  onClick={handleResetCamera}
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:border-[#B17A3A] hover:bg-[#B17A3A] transition-all shadow-xl"
                  title="Reset 3D View"
                >
                  <RotateCcw size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Premium Architectural Dossier & Feature Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/15 bg-linear-to-b from-[#141414] via-[#0F0F0F] to-[#0A0A0A] p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#E3B968]">
                  Architectural Features
                </span>
                <span className="text-[10px] text-white/40 font-light">4 Key Zones</span>
              </div>

              {/* Feature Selector Cards */}
              <div className="space-y-3">
                {HOTSPOTS.map((spot) => {
                  const isActive = activeHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => handleSelectHotspot(spot)}
                      className={`group w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                        isActive
                          ? "border-[#E3B968] bg-[#B17A3A]/20 text-white shadow-xl ring-1 ring-[#E3B968]/50"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10"
                      }`}
                    >
                      {/* Mini Thumbnail Preview */}
                      <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-black">
                        <Image
                          src={spot.image}
                          alt={spot.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs font-semibold truncate ${isActive ? "text-[#E3B968]" : "text-white"}`}>
                            {spot.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/50 block truncate mt-0.5">{spot.spec}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Feature Deep Dossier */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-[#B17A3A]/40 bg-black/60 p-5 space-y-4 shadow-xl"
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#E3B968]">
                      Feature Overview
                    </span>
                    <h4 className="text-sm font-semibold text-white mt-0.5">
                      {activeHotspot.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-white/70 font-light mt-2">
                      {activeHotspot.desc}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 border-t border-white/10 pt-3">
                    {activeHotspot.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-white/90 font-light">
                        <CheckCircle2 size={13} className="text-[#E3B968] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Material Specs */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {activeHotspot.materials.map((m, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[9.5px] text-white/60 font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => setIsBookTourOpen(true)}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xl hover:opacity-95 transition-all mt-4"
            >
              <span>Schedule 3D Villa Inspection</span>
              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

      </div>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />
    </section>
  );
}
