import "./RecipeDisplay.scss";
import Button from "../Button/Button";

const RecipeDisplay = ({ isBrowser, onBack, onSubmit, recipeData }) => {
  const { recipeTitle, recipeIngredients, recipeContent, recipeTags } =
    recipeData;

  return (
    <div className="scroll-container">
      <article
        className={`recipe-display ${
          isBrowser ? "recipe-display--browser" : ""
        }`}
      >
        <button
          className={`recipe-display__back ${
            isBrowser ? "recipe-display__back--browser" : ""
          }`}
          onClick={onBack}
        >
          Back
        </button>
        <div
          className={`recipe-display__recipe ${
            isBrowser ? "recipe-display__recipe--browser" : ""
          }`}
        >
          <h3 className="recipe-display__recipe-title">{recipeTitle}</h3>
          <h4 className="recipe-display__recipe-section-title">Ingredients:</h4>
          <pre className="recipe-display__recipe-section-content">
            {recipeIngredients}
          </pre>
          <h4 className="recipe-display__recipe-section-title">Steps:</h4>
          <pre className="recipe-display__recipe-section-content">
            {recipeContent}
          </pre>
          <h4 className="recipe-display__recipe-tags-title">Tags:</h4>
          <p className="recipe-display__recipe-tags">{recipeTags}</p>
        </div>

        {!isBrowser && (
          <button
            className={`recipe-display__submit ${
              isBrowser ? "recipe-display__submit--browser" : ""
            }`}
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </article>
    </div>
  );
};

export default RecipeDisplay;
