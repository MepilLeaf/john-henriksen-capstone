import "./BrowseRecipes.scss";
import Button from "../../components/Button/Button";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeDisplay from "../../components/RecipeDisplay/RecipeDisplay";

const BrowseRecipes = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const navigate = useNavigate();

  const id = useParams().id ?? null;

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/recipes/${id}`
        );
        setSelectedRecipe(result.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) getRecipe();
  }, [id]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/recipes`
        );
        setRecipes(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `${
          process.env.REACT_APP_BASE_URL
        }/recipes/search?search_query=${searchInput.replaceAll(/\s/g, "+")}`
      );
      setRecipes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedRecipe]);

  return (
    <main className="browse-recipes-page">
      <form className="recipe-search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          className="recipe-search__input"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Button isBlue={true} content="Search" type="submit" />
      </form>

      <section className="search-results">
        {recipes.map((recipe) => {
          const title =
            recipe.recipeTitle.length > 33
              ? recipe.recipeTitle.substring(0, 30) + "..."
              : recipe.recipeTitle;

          return (
            <Link className="link" to={`/browse/${recipe.id}`}>
              <RecipeCard title={title} />
            </Link>
          );
        })}
      </section>

      {selectedRecipe && (
        <div className="create-recipe-popup">
          <RecipeDisplay
            isBrowser={true}
            recipeData={selectedRecipe}
            onBack={() => {
              navigate("/browse");
              setSelectedRecipe(null);
            }}
            onSubmit={() => {}}
          />
        </div>
      )}
    </main>
  );
};

export default BrowseRecipes;
