import React from "react";
import styles from "./myRecipe.module.css";


const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
   

      <h1>{title}</h1>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <p>{calories} Calories</p>
      
      <img className={styles.image} src={image} alt={title} />
      
      

      <ol>
        {ingredients.map(ingredient => (
          <li key={Math.random()}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
