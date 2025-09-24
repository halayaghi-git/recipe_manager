from sqlalchemy import create_engine # using this library to connect to the database
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# using sqlite for persistent storage
DATABASE_URL = "sqlite:///./recipes.db" # this url points to the database file

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False}) # this creates the database engine which is used to interact with the database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) 
Base = declarative_base()