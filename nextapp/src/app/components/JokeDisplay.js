"use client";

import { useState } from "react";
import axios from "axios";

const JokeDisplay = ({ initialJoke }) => {
  const [joke, setJoke] = useState(initialJoke);
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchNewJoke = async () => {
    try {
      const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
      const data = res.data; // axios response data is in res.data
      setJoke(data);
      setShowPunchline(false);
    } catch (error) {
      console.error("Failed to fetch a new joke", error);
    }
  };
  

  return (
    <div className="h-screen flex flex-col items-center mt-10">
      <h1 className="text-5xl font-extrabold text-white animate__animated animate__fadeInDown mb-8">
        Random Jokes
      </h1>
      <div className="joke-container mt-12 p-16 bg-opacity-50  text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
        <p className="text-lg font-semibold">{joke.setup}</p>
        {showPunchline ? (
          <p className="text-yellow-300 mt-2">{joke.punchline}</p>
        ) : (
          <h1
            onClick={() => setShowPunchline(true)}
            className="mt-2 font-extrabold text-blue-400 cursor-pointer font-bold"
          >
            click to reveal
          </h1>
        )}
        <button
          onClick={fetchNewJoke}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Get Another Joke
        </button>
      </div>
    </div>    
);
};

export default JokeDisplay;


