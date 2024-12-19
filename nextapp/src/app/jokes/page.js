'use client';

import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const categories = [
  { id: 0, name: 'All' },
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Animals' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Food' },
  { id: 5, name: 'Miscellaneous' },
  { id: 6, name: 'Dad Jokes' },
];

const Jokes = ({ categoryId }) => {
  const [jokes, setJokes] = useState([]);
  const [categoryName, setCategoryName] = useState('All');

  useEffect(() => {
    const fetchJokes = async () => {
      let url = 'http://localhost:3001/jokes';
      if (categoryId && categoryId !== '0') {
        url = `http://localhost:3001/jokes/category/${categoryId}`;
      }

      try {
        const response = await axios.get(url);
        setJokes(response.data);

        const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));
        setCategoryName(selectedCategory ? selectedCategory.name : 'All');
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, [categoryId]);

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
};

export default Jokes;


// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Layout from '../components/Layout';
// import axios from 'axios';

// const categories = [
//   { id: 0, name: 'All' },
//   { id: 1, name: 'Programming' },
//   { id: 2, name: 'Animals' },
//   { id: 3, name: 'Technology' },
//   { id: 4, name: 'Food' },
//   { id: 5, name: 'Miscellaneous' },
//   { id: 6, name: 'Dad Jokes' },
// ];

// const ITEMS_PER_PAGE = 6; // Number of jokes per page

// const Jokes = ({ categoryId }) => {
//   const [jokes, setJokes] = useState([]);
//   const [categoryName, setCategoryName] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchJokes = async () => {
//       let url = 'http://localhost:3001/jokes';
//       if (categoryId && categoryId !== '0') {
//         url = `http://localhost:3001/jokes/category/${categoryId}`;
//       }

//       try {
//         const response = await axios.get(url);
//         setJokes(response.data);

//         const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));
//         setCategoryName(selectedCategory ? selectedCategory.name : 'All');
//         setCurrentPage(1); // Reset to the first page when category changes
//       } catch (error) {
//         console.error('Error fetching jokes:', error);
//       }
//     };

//     fetchJokes();
//   }, [categoryId]);

//   // Calculate jokes to display for the current page
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentJokes = jokes.slice(startIndex, endIndex);

//   // Calculate total pages
//   const totalPages = Math.ceil(jokes.length / ITEMS_PER_PAGE);

//   return (
//     <Layout>
//       <section className="p-10 text-center text-white min-h-screen">
//         <h2 className="text-4xl mb-8 font-bold">{categoryName} Jokes</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {currentJokes.length > 0 ? (
//             currentJokes.map((joke) => (
//               <div key={joke.jokeId} className="card bg-darkBlue p-4 rounded shadow-lg">
//                 <img src={joke.img} alt="Joke" className="rounded mb-4 w-full h-40 object-cover" />
//                 <div className="card-content text-left">
//                   <p className="setup font-semibold text-lg">{joke.setup}</p>
//                   <p className="punchline text-sm text-gray-300 mt-2">{joke.punchline}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-xl text-gray-300">No jokes available.</p>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="mt-6 flex justify-center space-x-4">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded bg-gray-700 text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               Previous
//             </button>
//             <span className="text-lg text-gray-300">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded bg-gray-700 text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// };

// export default Jokes;
