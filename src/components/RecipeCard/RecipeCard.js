import "./RecipeCard.scss";

const RecipeCard = ({ title }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-card__inner-container">
        <h3 className="recipe-card__title">{title}</h3>
      </div>
    </article>
  );
};

export default RecipeCard;
