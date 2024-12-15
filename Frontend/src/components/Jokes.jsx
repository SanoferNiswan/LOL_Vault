import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Jokes = () => {
  const { categoryId } = useParams(); 
  const [jokes, setJokes] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchJokes = async () => {
      let url = 'http://localhost:3001/jokes';
      if (categoryId && categoryId !== '0') {
        url = `http://localhost:3001/jokes/category/${categoryId}`;
      }
      
      try {
        const response = await axios.get(url);
        setJokes(response.data);

        const categories = [
          { id: 0, name: 'All' },
          { id: 1, name: 'Programming' },
          { id: 2, name: 'Animals' },
          { id: 3, name: 'Technology' },
          { id: 4, name: 'Food' },
          { id: 5, name: 'Miscellaneous' },
          { id: 6, name: 'Dad Jokes' },
        ];

        const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));
        setCategoryName(selectedCategory ? selectedCategory.name : 'All');
      } catch (error) {
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, [categoryId]);

  return (
    <div className="jokes-container">
      <h2>{categoryName} Jokes</h2>
      <div className="cards-container">
        {jokes.map((joke) => (
          <div key={joke.jokeId} className="card">
            <img src={joke.img} alt="Joke" />
            <div className="card-content">
              <p className="setup">{joke.setup}</p>
              <p className="punchline">{joke.punchline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jokes;
