import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, onClose, onEdit }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail-overlay" onClick={onClose}>
      <div className="recipe-detail" onClick={(e) => e.stopPropagation()}>
        <div className="recipe-detail-header">
          <h1>{recipe.title}</h1>
          <div className="recipe-detail-actions">
            <button onClick={() => onEdit(recipe)} className="edit-btn">
              Edit Recipe
            </button>
            <button onClick={onClose} className="close-btn">
              ×
            </button>
          </div>
        </div>
        
        <div className="recipe-detail-meta">
          <span className="cuisine-tag">{recipe.cuisine}</span>
          <span className="meal-type-tag">{recipe.meal_type}</span>
        </div>

        <div className="recipe-detail-content">
          <div className="recipe-section">
            <h3>Ingredients</h3>
            <div className="recipe-ingredients">
              {recipe.ingredients.split('\n').map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  {ingredient}
                </div>
              ))}
            </div>
          </div>

          <div className="recipe-section">
            <h3>Instructions</h3>
            <div className="recipe-instructions">
              {recipe.instructions.split('\n').map((step, index) => (
                <div key={index} className="instruction-step">
                  <span className="step-number">{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;