

function Header() {
  return (
    <header className="w-full p-4 flex items-center justify-between text-white text-xl">
      <button className="px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition">←</button>
      <div className="font-semibold tracking-widest uppercase">zen</div>
      <button className="px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition">→</button>
    </header>
  )
}

export default Header