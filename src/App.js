import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
require('dotenv').config()

const App = () => {
  //const APP_ID = "2d014b95";
  const APP_ID = process.env.REACT_APP_API_ID;
  //const APP_KEY = "374bf4b05d9a82c0666c6a3dff2505c8";
  const APP_KEY = process.env.REACT_APP_API_KEY;

  console.log(process.env.REACT_APP_API_ID)
  console.log(process.env.REACT_APP_API_KEY)

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
