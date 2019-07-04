import React from 'react';
import styles from './myRecipe.module.css';


const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div >
            <h1 className={styles.recipe}>{title}</h1>
            <p>{calories} Calories</p>
            <img className={styles.image} src={image} alt={title}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={Math.random()}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe