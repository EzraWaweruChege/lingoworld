'use client'

import { useState } from 'react'

export default function WordDuel() {
  const [winner, setWinner] = useState('')

  const chooseAnswer = (answer: string) => {
    if (answer === 'Joyful') {
      setWinner('Mai Wins! +1 Point')
    } else {
      setWinner('Wrong Answer')
    }
  }

  return (
    <div className="bg-blue-900 rounded-3xl p-6 shadow-2xl text-white">
      <h2 className="text-5xl font-bold text-yellow-400 text-center mb-4">
        Word Duel!
      </h2>

      <p className="text-center text-2xl mb-6">
        Pick the synonym for "Happy"
      </p>

      <div className="grid gap-4 max-w-md mx-auto">
        <button
          onClick={() => chooseAnswer('Sad')}
          className="bg-white text-black rounded-xl py-4 text-2xl font-bold"
        >
          A. Sad
        </button>

        <button
          onClick={() => chooseAnswer('Angry')}
          className="bg-white text-black rounded-xl py-4 text-2xl font-bold"
        >
          B. Angry
        </button>

        <button
          onClick={() => chooseAnswer('Joyful')}
          className="bg-yellow-400 text-black rounded-xl py-4 text-2xl font-bold"
        >
          C. Joyful
        </button>
      </div>

      <div className="text-center mt-8 text-4xl font-bold text-orange-300">
        {winner}
      </div>
    </div>
  )
}