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

def search_recipes(db: Session, ingredient=None, cuisine=None, meal_type=None): # to search recipes based on ingredient, cuisine, or meal type (the extra feature)
    query = db.query(Recipe)
    if ingredient:
        query = query.filter(Recipe.ingredients.contains(ingredient))
    if cuisine:
        query = query.filter(Recipe.cuisine == cuisine)
    if meal_type:
        query = query.filter(Recipe.meal_type == meal_type)
    return query.all()