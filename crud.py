from sqlalchemy.orm import Session
from models import Recipe
from schemas import RecipeCreate


def get_recipe(db: Session, recipe_id: int): # to get/Read a recipe by its id
    return db.query(Recipe).filter(Recipe.id == recipe_id).first()

def get_recipes(db: Session, skip: int = 0, limit: int = 10): # to get/Read multiple recipes but with a limit, if we for example filter by cuisine or meal type
    return db.query(Recipe).offset(skip).limit(limit).all()

def create_recipe(db: Session, recipe: RecipeCreate): # to Create a new recipe 
    db_recipe = Recipe(**recipe.dict()) # creating a new recipe object using the data from the RecipeCreate schema
    db.add(db_recipe) # adding the new recipe to the database session
    db.commit() # saving
    db.refresh(db_recipe) # refreshing the instance to get the new id
    return db_recipe 

def update_recipe(db: Session, recipe_id: int, recipe: RecipeCreate): # to Update an existing recipe by its id
    db_recipe = get_recipe(db, recipe_id) # first we get the existing recipe from the db by id
    if db_recipe: # if the recipe exists
        for key, value in recipe.dict().items(): 
            setattr(db_recipe, key, value) # updating
        db.commit()
        db.refresh(db_recipe)
    return db_recipe

def delete_recipe(db: Session, recipe_id: int): # to Delete a recipe by its id
    db_recipe = get_recipe(db, recipe_id)
    if db_recipe:
        db.delete(db_recipe)
        db.commit()
    return db_recipe

def search_recipes(db: Session, query: str): # to search recipes based on query string
    return db.query(Recipe).filter(
        (Recipe.title.contains(query)) |
        (Recipe.cuisine.contains(query)) |
        (Recipe.meal_type.contains(query)) |
        (Recipe.ingredients.contains(query))
    ).all()

def filter_recipes(db: Session, meal_type: str = None, cuisine: str = None): # to filter recipes by meal_type and/or cuisine
    query = db.query(Recipe)
    if meal_type:
        query = query.filter(Recipe.meal_type == meal_type)
    if cuisine:
        query = query.filter(Recipe.cuisine == cuisine)
    return query.all()

def get_unique_meal_types(db: Session): # to get all unique meal types for filter dropdown
    return db.query(Recipe.meal_type).distinct().all()

def get_unique_cuisines(db: Session): # to get all unique cuisines for filter dropdown
    return db.query(Recipe.cuisine).distinct().all()