import "./CreateRecipe.scss";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import RecipeDisplay from "../../components/RecipeDisplay/RecipeDisplay";

const CreateRecipes = () => {
  const RECIPES_URL = `${process.env.REACT_APP_BASE_URL}/recipes`;

  const initialValues = {
    title: "",
    ingredients: "",
    content: "",
    tags: "",
  };

  const [values, setValues] = useState(initialValues);

  const [recipe, setRecipe] = useState({
    recipeTitle: "Recipe Title",
    recipeIngredients: "Ingredients",
    recipeContent: "content",
    recipeTags: "tags",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeTitle: values.title,
      recipeIngredients: values.ingredients,
      recipeContent: values.content,
      recipeTags: values.tags,
    };

    console.log(newRecipe);

    try {
      const res = await axios.post(RECIPES_URL, newRecipe);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="create-recipes-page">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <TextareaAutosize
          className="recipe-form__title-input"
          placeholder="Recipe Title"
          name="title"
          onChange={handleInputChange}
          value={values.title}
        />
        <h4 className="recipe-form__ingredients-title">Ingredients:</h4>
        <TextareaAutosize
          className="recipe-form__ingredients-input"
          placeholder="Ingredients"
          name="ingredients"
          onChange={handleInputChange}
          value={values.ingredients}
        />
        <h4 className="recipe-form__steps-title">Steps:</h4>
        <TextareaAutosize
          className="recipe-form__steps-input"
          placeholder="Steps"
          name="steps"
          onChange={handleInputChange}
          value={values.content}
        />
        <h4 className="recipe-form__tags-title">Tags:</h4>
        <div className="recipe-form__tags-container">
          <TextareaAutosize
            className="recipe-form__tags-input"
            placeholder="Tags (Optional)"
            name="tags"
            onChange={handleInputChange}
            value={values.tags}
          />
          <p className="recipe-form__tags-footnote">
            *you must separate tags with a comma:
          </p>
          <p className="recipe-form__tags-footnote">
            sweet, savory, 30 minutes, vegetarian
          </p>
        </div>
        <Button type="submit" isBlue={false} content="content time" />
      </form>
      {recipe && (
        <div className="create-recipe-popup">
          <RecipeDisplay isBrowser={false} recipeData={recipe} />
        </div>
      )}
    </main>
  );
  //for tags use a map with a ternary to either return a string or a span, may have to use items in a string literal
};

export default CreateRecipes;
