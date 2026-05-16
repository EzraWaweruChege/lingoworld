export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef3ff]">
      {/* TOP NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-3xl md:text-4xl">🌍</div>

          <div>
            <h1 className="text-2xl md:text-3xl font-black text-blue-700 leading-none">
              LingoWorld
            </h1>

            <p className="text-blue-700 text-lg mt-1">
              Speak. Play. Learn Together.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-2xl font-bold text-blue-900">
            <button className="border-b-4 border-blue-700 pb-1">
              Home
            </button>

            <button>Play</button>
            <button>Classroom</button>
            <button>Leaderboard</button>
            <button>Profile</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-4xl">🔔</div>
            <div className="text-4xl">🌐</div>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-4 border-pink-300"
              />

              <div>
                <h3 className="font-black text-2xl text-blue-900">
                  Lucas
                </h3>

                <p className="text-blue-700 font-bold">
                  Level 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTAINER */}
      <div className="max-w-[1500px] mx-auto p-3 md:p-6">
        {/* TITLE */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-700 text-white px-20 py-4 rounded-full shadow-2xl border-4 border-blue-800">
            <h2 className="text-2xl md:text-3xl font-black">
              Peer-to-Peer Game Mode
            </h2>
          </div>
        </div>

        {/* MAIN GAME AREA */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-[40px] p-8 shadow-2xl border-[12px] border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* PLAYER 1 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-2xl border-4 border-black">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop"
                alt="player1"
                className="h-[260px] md:h-[360px] w-full object-cover"
              />

              <div className="bg-black text-white text-4xl font-black py-6 text-center">
                🇧🇷 Lucas - Brazil
              </div>
            </div>

            {/* CENTER GAME */}
            <div className="bg-gradient-to-b from-blue-700 to-blue-950 rounded-[35px] p-8 shadow-2xl border-4 border-blue-900">
              <h2 className="text-center text-4xl md:text-2xl md:text-3xl font-black text-yellow-400 mb-6">
                Word Duel!
              </h2>

              <p className="text-center text-white text-3xl font-bold mb-8">
                Pick the synonym for “Happy”:
              </p>

              <div className="grid gap-5">
                <button className="bg-gray-100 rounded-2xl py-5 text-4xl font-black text-left px-8 shadow-xl">
                  A &nbsp; Sad
                </button>

                <button className="bg-gray-100 rounded-2xl py-5 text-4xl font-black text-left px-8 shadow-xl">
                  B &nbsp; Angry
                </button>

                <button className="bg-yellow-400 rounded-2xl py-5 text-4xl font-black text-left px-8 shadow-xl">
                  C &nbsp; Joyful
                </button>
              </div>

              <div className="text-center mt-10">
                <h2 className="text-4xl md:text-2xl md:text-3xl font-black text-orange-300">
                  Mai Wins!
                </h2>

                <p className="text-white text-2xl md:text-3xl font-black mt-2">
                  +1 Point!
                </p>
              </div>
            </div>

            {/* PLAYER 2 */}
            <div className="bg-white rounded-[30px] overflow-hidden shadow-2xl border-4 border-black">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="player2"
                className="h-[260px] md:h-[360px] w-full object-cover"
              />

              <div className="bg-black text-white text-4xl font-black py-6 text-center">
                🇻🇳 Mai - Vietnam
              </div>
            </div>
          </div>

          {/* GAME BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            <button className="bg-green-500 rounded-2xl py-5 text-white text-3xl font-black shadow-2xl border-b-8 border-green-700">
              📖 Story Builder
            </button>

            <button className="bg-blue-500 rounded-2xl py-5 text-white text-3xl font-black shadow-2xl border-b-8 border-blue-700">
              🎤 Pronunciation Battle
            </button>

            <button className="bg-red-500 rounded-2xl py-5 text-white text-3xl font-black shadow-2xl border-b-8 border-red-700">
              🔍 Spot the Error
            </button>

            <button className="bg-orange-500 rounded-2xl py-5 text-white text-3xl font-black shadow-2xl border-b-8 border-orange-700">
              😀 Emoji Translator
            </button>
          </div>
        </section>

        {/* CLASSROOM TITLE */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="bg-red-500 text-white px-20 py-4 rounded-full shadow-2xl border-4 border-red-700">
            <h2 className="text-2xl md:text-3xl font-black">
              Global Live Classroom
            </h2>
          </div>
        </div>

        {/* CLASSROOM AREA */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-[40px] p-8 shadow-2xl border-[12px] border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT */}
            <div className="bg-blue-800 rounded-[30px] p-6 shadow-2xl">
              <div className="bg-blue-600 inline-block px-6 py-3 rounded-2xl mb-6">
                <h3 className="text-white text-3xl font-black">
                  🔴 Live Class with Ms. Smith
                </h3>
              </div>

              <div className="bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center h-[500px] rounded-[30px] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute top-10 left-10 text-4xl md:text-2xl md:text-3xl">🇺🇸</div>
                <div className="absolute top-20 right-20 text-4xl md:text-2xl md:text-3xl">🇯🇵</div>
                <div className="absolute bottom-20 left-40 text-4xl md:text-2xl md:text-3xl">🇧🇷</div>
                <div className="absolute bottom-32 right-24 text-4xl md:text-2xl md:text-3xl">🇬🇧</div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-red-500 rounded-[30px] p-8 shadow-2xl">
              <h2 className="text-center text-white text-3xl md:text-4xl font-black mb-12">
                Tug of War
              </h2>

              <div className="flex justify-between items-center text-white">
                <div className="text-center">
                  <div className="text-4xl">🇺🇸</div>
                  <div className="text-4xl font-black mt-4">
                    32
                  </div>
                </div>

                <div className="text-4xl md:text-2xl md:text-3xl font-black">
                  VS
                </div>

                <div className="text-center">
                  <div className="text-4xl">🇨🇦</div>
                  <div className="text-4xl font-black mt-4">
                    28
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-red-500 rounded-[30px] p-8 shadow-2xl">
              <h2 className="text-white text-4xl font-black">
                Debate
              </h2>

              <p className="text-white text-4xl font-black mt-6">
                FOR vs AGAINST
              </p>
            </div>

            <div className="bg-yellow-400 rounded-[30px] p-8 shadow-2xl">
              <h2 className="text-white text-4xl font-black">
                Spelling Bee
              </h2>

              <p className="text-white text-4xl font-black mt-6">
                Spell: Elephant
              </p>
            </div>

            <div className="bg-blue-500 rounded-[30px] p-8 shadow-2xl">
              <h2 className="text-white text-4xl font-black">
                Quiz Bowl
              </h2>

              <p className="text-white text-4xl font-black mt-6">
                Race To Answer!
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl">
              <div className="text-3xl md:text-4xl">🏅</div>
              <h2 className="text-3xl md:text-4xl font-black mt-4">
                5
              </h2>
              <p className="text-blue-700 font-bold text-2xl">
                Level
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl">
              <div className="text-3xl md:text-4xl">🏆</div>
              <h2 className="text-3xl md:text-4xl font-black mt-4">
                1250
              </h2>
              <p className="text-blue-700 font-bold text-2xl">
                XP
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl">
              <div className="text-3xl md:text-4xl">🔥</div>
              <h2 className="text-3xl md:text-4xl font-black mt-4">
                7
              </h2>
              <p className="text-blue-700 font-bold text-2xl">
                Streak
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl">
              <div className="text-3xl md:text-4xl">🎮</div>
              <h2 className="text-3xl md:text-4xl font-black mt-4">
                24
              </h2>
              <p className="text-blue-700 font-bold text-2xl">
                Games Won
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 text-center shadow-2xl">
              <div className="text-3xl md:text-4xl">👥</div>
              <h2 className="text-3xl md:text-4xl font-black mt-4">
                12
              </h2>
              <p className="text-blue-700 font-bold text-2xl">
                Friends
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <button className="bg-blue-700 hover:bg-blue-800 transition-all rounded-[30px] py-8 text-white text-2xl md:text-3xl font-black shadow-2xl border-b-[12px] border-blue-900">
              👥 Find Partner
            </button>

            <button className="bg-green-600 hover:bg-green-700 transition-all rounded-[30px] py-8 text-white text-2xl md:text-3xl font-black shadow-2xl border-b-[12px] border-green-800">
              ➜ Join Room
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}