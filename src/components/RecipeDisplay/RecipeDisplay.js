import "./RecipeDisplay.scss";
import Button from "../Button/Button";
import download from "../../assets/icons/download.svg";
import html2canvas from "html2canvas";

const RecipeDisplay = ({ isBrowser, onBack, onSubmit, recipeData }) => {
  const { recipeTitle, recipeIngredients, recipeContent, recipeTags } =
    recipeData;

  const downloadRecipe = async () => {
    const recipe = document.getElementById("print");

    const canvas = await html2canvas(recipe);

    const data = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = data;
    link.download = `${recipeTitle.toLowerCase().replaceAll(/\s/g, "-")}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          id="print"
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
        <div className="recipe-display__buttons-container">
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
          <button
            className="recipe-display__download"
            type="button"
            onClick={downloadRecipe}
          >
            <img
              src={download}
              alt="download"
              className="recipe-display__download-image"
            />
          </button>
        </div>
      </article>
    </div>
  );
};

export default RecipeDisplay;
