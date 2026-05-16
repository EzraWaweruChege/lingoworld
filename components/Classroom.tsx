export default function Classroom() {
  return (
    <div className="bg-blue-900 rounded-3xl p-6 text-white shadow-2xl mt-12">
      <h2 className="text-5xl font-bold text-center text-red-400 mb-8">
        Global Live Classroom
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-blue-700 rounded-2xl p-6">
          <h3 className="text-3xl font-bold mb-4">
            🌎 Students Online
          </h3>

          <div className="text-2xl leading-loose">
            🇰🇪 Kenya<br />
            🇧🇷 Brazil<br />
            🇻🇳 Vietnam<br />
            🇯🇵 Japan
          </div>
        </div>

        <div className="bg-red-600 rounded-2xl p-6">
          <h3 className="text-3xl font-bold mb-4">
            Tug Of War
          </h3>

          <div className="flex justify-between text-4xl font-bold mt-8">
            <div>🇺🇸 32</div>
            <div>VS</div>
            <div>28 🇨🇦</div>
          </div>
        </div>
      </div>
    </div>
  )
}