import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Programming' },
    { id: 2, name: 'Animals' },
    { id: 3, name: 'Technology' },
    { id: 4, name: 'Food' },
    { id: 5, name: 'Miscellaneous' }, 
    { id: 6, name: 'Dad_Jokes' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(''); 
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);

    if (categoryId === '') {
      navigate('/');
    }else if(categoryId === '0'){
      navigate('/jokes');
    }
     else {
      navigate(`/category/${categoryId}`);
    }
  };

  return (
    <nav className="Nav">
      {/* Humour Hive */}
     <h1 className="custom-font">LOL Vault 😂</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/addJoke">Add Joke</Link></li>
        {/* <li>Quiz</li> Will implement later */}
        <li className="dropdown-container">

          <select
            id="category-dropdown"
            className="dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Categories</option> 
            {categories.map((category) => (
              <option className={"option"} key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
