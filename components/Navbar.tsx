export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="text-4xl">🌍</div>
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            LingoWorld
          </h1>
          <p className="text-sm text-gray-500">
            Speak. Play. Learn Together.
          </p>
        </div>
      </div>

      <div className="flex gap-6 font-semibold text-blue-800">
        <button>Home</button>
        <button>Play</button>
        <button>Classroom</button>
        <button>Leaderboard</button>
        <button>Profile</button>
      </div>
    </nav>
  )
}