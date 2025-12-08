"use client"

export default function FloatingBackground() {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Large soft blue blob - top right */}
      <div
        className="absolute rounded-full blur-3xl animate-blob"
        style={{
          width: "600px",
          height: "600px",
          background: "linear-gradient(135deg, #0052cc 0%, #3b82f6 100%)",
          opacity: 0.15,
          top: "-10%",
          right: "-5%",
        }}
      />

      {/* Medium amber blob - left side */}
      <div
        className="absolute rounded-full blur-3xl animate-blob animation-delay-2000"
        style={{
          width: "500px",
          height: "500px",
          background: "linear-gradient(135deg, #fca311 0%, #fcd34d 100%)",
          opacity: 0.12,
          top: "20%",
          left: "-8%",
        }}
      />

      {/* Small blue blob - bottom left */}
      <div
        className="absolute rounded-full blur-3xl animate-blob animation-delay-4000"
        style={{
          width: "400px",
          height: "400px",
          background: "linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)",
          opacity: 0.14,
          bottom: "10%",
          left: "10%",
        }}
      />

      {/* Medium amber blob - right side middle */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-slow animation-delay-1000"
        style={{
          width: "450px",
          height: "450px",
          background: "linear-gradient(135deg, #fca311 0%, #fb923c 100%)",
          opacity: 0.1,
          top: "50%",
          right: "-5%",
        }}
      />

      {/* Small blue accent - center top */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-slow animation-delay-3000"
        style={{
          width: "300px",
          height: "300px",
          background: "linear-gradient(135deg, #0052cc 0%, #93c5fd 100%)",
          opacity: 0.12,
          top: "5%",
          left: "30%",
        }}
      />

      {/* Tiny amber accent - bottom right */}
      <div
        className="absolute rounded-full blur-3xl animate-blob animation-delay-5000"
        style={{
          width: "350px",
          height: "350px",
          background: "linear-gradient(135deg, #fcd34d 0%, #fca311 100%)",
          opacity: 0.1,
          bottom: "-5%",
          right: "20%",
        }}
      />

      {/* Extra large subtle blue - background layer */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-slower"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          opacity: 0.08,
          bottom: "20%",
          right: "30%",
        }}
      />
    </div>
  )
}
