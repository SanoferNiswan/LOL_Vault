import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [joke, setJoke] = useState({
    setup: '',
    punchline: ''
  });

  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke({
        setup: response.data.setup,
        punchline: response.data.punchline
      });
      setShowPunchline(false);  
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  // useEffect(() => {
  //   fetchJoke();
  // }, []);

  return (
    <div className='Home'>
      <h1>Random Joke Generator</h1>
      <div className="joke-container">
        <div className="joke-card">
          <p className="setup">{joke.setup || 'Have fun!'}</p>
          {showPunchline && <h6 className="punchline">{joke.punchline}</h6>}
          {!showPunchline && <h1 onClick={() => setShowPunchline(true)}>...</h1>}
        </div>
        <button onClick={fetchJoke}>New Joke</button>
      </div>
    </div>
  );
};

export default Home;
