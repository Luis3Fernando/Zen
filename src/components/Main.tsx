
function Main() {
    return (
        <main className="flex flex-col items-center justify-center gap-6 mt-24">
            <input
                type="number"
                placeholder="Tiempo en minutos..."
                className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 text-lg w-64 text-center shadow-lg"
            />
            <button className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-lg shadow-md transition">
                ▶ Empezar
            </button>
        </main>
    )
}

export default Main