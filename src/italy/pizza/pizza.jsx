import React from "react";
import Header from "../../header";
import "./pizza.css";
import Chatbot from "../../chatbot";

const Pizza = () => {
  const ingredients = [
    "200g Spaghetti",
    "2 tablespoons olive oil",
    "2 cloves garlic, minced",
    "1 cup cherry tomatoes, halved",
    "1/4 cup grated Parmesan cheese",
    "Salt and pepper to taste",
    "Fresh basil leaves for garnish",
  ];

  return (
    <body className="pizza">
      <Header />
    <div className="recipe-page-pizza">
      
      <div className="recipe-hero">
        <h1>Pasta Primavera</h1>
        <p>A classic Italian dish that brings freshness and flavor to your table.</p>
      </div>
      <div className="recipe-content">
        <div className="recipe-left">
          <img
            src="assets/pasta.jpg"
            alt="Pasta Primavera"
            className="recipe-image"
          />
        </div>
        <div className="recipe-right">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <Chatbot />
    </div>
    </body>
  );
};

export default Pizza;
