import React, { useState } from 'react';
import axios from 'axios';

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
    <div className='joke-add'>
        <h1>Contribute a Joke</h1>
        <form className='form' onSubmit={handleSubmit}>

            <textarea
                value={setup}
                placeholder='Enter setup'
                onChange={(e) => setSetup(e.target.value)}
                required
            />
            <textarea
                value={punchline}
                placeholder='Enter Punchline'
                onChange={(e) => setPunchline(e.target.value)}
                required
            />
            <input
                type="number"
                value={categoryId}
                placeholder='Category ID'
                onChange={(e) => setCategoryId(e.target.value)}
                required
                min="1"
                max="6"
            />
            <button type="submit">Post</button>
        </form>
    </div>
  );
};

export default AddJoke;
