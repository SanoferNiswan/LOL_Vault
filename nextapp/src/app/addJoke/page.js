'use client'
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

const AddJoke = () => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jokeData = {
      setup,
      punchline,
      categoryId: parseInt(categoryId),
    };

    try {
      const response = await axios.post('http://localhost:3001/jokes', jokeData);
      alert('Joke posted successfully!');
      console.log(response.data);
      setSetup('');
      setPunchline('');
      setCategoryId('');
    } catch (error) {
      console.error('Error posting joke:', error);
      alert('Failed to post the joke. Please try again.');
    }
  };

  return (
    <Layout>
      {/* <section className="p-10 text-center text-white rounded-lg shadow-lg h-screen">
        <h1 className="text-3xl font-bold mb-6">Contribute a Joke</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <textarea
              value={setup}
              placeholder="Enter setup"
              onChange={(e) => setSetup(e.target.value)}
              required
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <div>
            <textarea
              value={punchline}
              placeholder="Enter Punchline"
              onChange={(e) => setPunchline(e.target.value)}
              required
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <div>
            <input
              type="number"
              value={categoryId}
              placeholder="Category ID"
              onChange={(e) => setCategoryId(e.target.value)}
              required
              min="1"
              max="6"
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all">
            Post
          </button>
        </form>
      </section> */}
    <section className="p-10 text-center text-white rounded-lg shadow-lg h-screen">
    <h1 className="text-3xl font-bold mb-6">Contribute a Joke</h1>
    <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
        <textarea
            value={setup}
            placeholder="Enter setup"
            onChange={(e) => setSetup(e.target.value)}
            required
            className="w-1/2 p-4 rounded-lg text-white-800 bg-transparent border border-gray-300 shadow-lg"
        />
        </div>
        <div>
        <textarea
            value={punchline}
            placeholder="Enter Punchline"
            onChange={(e) => setPunchline(e.target.value)}
            required
            className="w-1/2 p-4 rounded-lg text-white-800 bg-transparent border border-gray-300 shadow-lg"
        />
        </div>
        <div>
        <input
            type="number"
            value={categoryId}
            placeholder="Category ID"
            onChange={(e) => setCategoryId(e.target.value)}
            required
            min="1"
            max="6"
            className="w-1/2 p-4 rounded-lg text-white-800 bg-transparent border border-gray-300 shadow-lg"
        />
        </div>
        <button type="submit" className="w-1/2 py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all">
        Post
        </button>
    </form>
    </section>

    </Layout>
  );
};

export default AddJoke;
