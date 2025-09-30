import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onEdit, onDelete, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <div className="recipe-card-header">
        <h3>{recipe.title}</h3>
        <div className="recipe-card-actions">
          <button
            className="edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(recipe);
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(recipe.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe-card-content">
        <div className="recipe-meta">
          <span className="cuisine-tag">{recipe.cuisine}</span>
          <span className="meal-type-tag">{recipe.meal_type}</span>
        </div>
        <div className="recipe-ingredients">
          <strong>Ingredients:</strong> {recipe.ingredients.substring(0, 100)}
          {recipe.ingredients.length > 100 && '...'}
        </div>
        <div className="recipe-instructions">
          <strong>Instructions:</strong> {recipe.instructions.substring(0, 100)}
          {recipe.instructions.length > 100 && '...'}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;