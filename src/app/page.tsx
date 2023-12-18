"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const phraseToGuess = "Vamos a Marrocos em Fevereiro";

  const [pressedLetters, setPressedLetters] = useState<string[]>([]);

  const getAlphabet = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("");
  };

  const areAllLettersGuessed = () => {
    return phraseToGuess
      .split("")
      .every(
        (letter) =>
          !/[a-zA-Z]/.test(letter) ||
          pressedLetters.includes(letter.toLowerCase())
      );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-wrap justify-center gap-2">
        {phraseToGuess.split("").map((letter, key) => (
          <Button
            key={key}
            className="w-14 h-14 border text-4xl border-gray-400 rounded"
          >
            {pressedLetters.includes(letter.toLowerCase())
              ? letter
              : letter === " "
              ? " "
              : "_"}
          </Button>
        ))}
      </div>

      {areAllLettersGuessed() && (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-2xl font-bold">💃</p>
          <p className="text-xl">Mais especificamente de 12 a 16!</p>
        </div>
      )}

      {!areAllLettersGuessed() && (
        <div className="flex flex-wrap justify-center gap-1">
          {getAlphabet().map((letter, key) => (
            <Button
              key={key}
              className="w-14 h-14 border text-4xl border-gray-400 rounded"
              onClick={() => setPressedLetters([...pressedLetters, letter])}
              disabled={pressedLetters.includes(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
      )}
    </main>
  );
}
