export default function Background() {
  return (
    <>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        inset: '-50%',
        width: '200%',
        height: '200%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'grain 8s steps(10) infinite',
        opacity: 0.4,
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,200,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,200,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orb — top right */}
      <div style={{
        position: 'fixed',
        top: '5%', right: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(0,255,200,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Glow orb — bottom left */}
      <div style={{
        position: 'fixed',
        bottom: '15%', left: '0%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,150,200,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </>
  );
}
