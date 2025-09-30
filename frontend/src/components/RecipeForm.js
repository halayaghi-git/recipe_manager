import React, { useState, useEffect } from 'react';
import './RecipeForm.css';

const RecipeForm = ({ recipe, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    cuisine: '',
    meal_type: '',
    instructions: ''
  });

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const cuisineOptions = [
    'Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 
    'French', 'Thai', 'Mediterranean', 'American', 'Other'
  ];

  const mealTypeOptions = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Appetizer'
  ];

  return (
    <div className="recipe-form-overlay">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <h2>{recipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cuisine">Cuisine</label>
            <select
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            >
              <option value="">Select cuisine</option>
              {cuisineOptions.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="meal_type">Meal Type</label>
            <select
              id="meal_type"
              name="meal_type"
              value={formData.meal_type}
              onChange={handleChange}
              required
            >
              <option value="">Select meal type</option>
              {mealTypeOptions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List all ingredients..."
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Step-by-step cooking instructions..."
            required
            rows="6"
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            {recipe ? 'Update' : 'Create'} Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;