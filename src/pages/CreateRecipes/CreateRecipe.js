import "./CreateRecipe.scss";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../../components/Button/Button";

const CreateRecipes = () => {
  return (
    <main className="create-recipes-page">
      <section className="recipe-form">
        <TextareaAutosize
          className="recipe-form__title-input"
          placeholder="Recipe Title"
        />
        <h4 className="recipe-form__ingredients-title">Ingredients:</h4>
        <TextareaAutosize
          className="recipe-form__ingredients-input"
          placeholder="Ingredients"
        />
        <h4 className="recipe-form__steps-title">Steps:</h4>
        <TextareaAutosize
          className="recipe-form__steps-input"
          placeholder="Steps"
        />
        <Button isBlue={true} content="content time" />
      </section>
    </main>
  );
  //for tags use a map with a ternary to either return a string or a span, may have to use items in a string literal
};

export default CreateRecipes;
