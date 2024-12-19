'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout'; 
import { usePathname } from 'next/navigation';

// Categories list
const categories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Animals' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Food' },
  { id: 5, name: 'Miscellaneous' },
  { id: 6, name: 'Dad Jokes' },
];

export default function JokesPage() {
  const [jokes, setJokes] = useState([]);
  const [categoryName, setCategoryName] = useState('All');

  const path = usePathname();

  const categoryId = path.split('/').pop();

  console.log(categoryId);
  
  useEffect(() => {
    const fetchJokes = async () => {
      let url = 'http://localhost:3001/jokes';
      if (categoryId && categoryId !== '0') {
        url = `http://localhost:3001/jokes/category/${categoryId}`;
      }

      try {
        const response = await axios.get(url);
        setJokes(response.data);

        // Set category name based on the categoryId
        const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));
        setCategoryName(selectedCategory ? selectedCategory.name : 'All');
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, [categories]);

  return (
    <Layout>
      <section className="p-10 text-center text-white min-h-screen">
        <h2 className="text-4xl mb-8 font-bold">{categoryName} Jokes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {jokes.length > 0 ? (
            jokes.map((joke) => (
              <div key={joke.jokeId} className="card bg-darkBlue p-4 rounded shadow-lg">
                <img src={joke.img} alt="Joke" className="rounded mb-4 w-full h-40 object-cover" />
                <div className="card-content text-left">
                  <p className="setup font-semibold text-lg">{joke.setup}</p>
                  <p className="punchline text-sm text-gray-300 mt-2">{joke.punchline}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-gray-300">No jokes available.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
