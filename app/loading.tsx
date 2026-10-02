export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top Gold Progress Bar during Route Transitions */}
      <div className="fixed top-0 left-0 right-0 z-[99999] h-[3px] bg-white/5 overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-[#8F5D22] via-[#E3B968] to-[#F4D58A] shadow-[0_0_12px_#E3B968] animate-pulse" />
      </div>
    </div>
  );
}
