"use client";

import { useState } from "react";
import Layout from "./components/Layout";
import AnimatedBackground from "./components/AnimatedBackground";
import JokeDisplay from "./components/JokeDisplay";

const Home = () => {
  const [showJokes, setShowJokes] = useState(false);

  const initialJoke = {
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts!",
  };

  return (
    <Layout>
      <AnimatedBackground />
      {showJokes ? (
        <section className="flex flex-col items-center h-screen text-center">
          <JokeDisplay initialJoke={initialJoke} />
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center h-screen p-6 text-center">
          <h1 className="text-5xl font-extrabold text-white animate__animated animate__fadeInDown">
            Welcome to JokesApp
          </h1>
          <p className="mt-4 text-lg text-white animate__animated animate__fadeInUp">
            Your daily dose of laughter awaits!
          </p>
          <button
            onClick={() => setShowJokes(true)}
            className="mt-4 px-6 py-3 bg-accentBlue text-white rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </button>
        </section>
      )}
    </Layout>
  );
};

export default Home;
