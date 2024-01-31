import "./BrowseRecipes.scss";
import Button from "../../components/Button/Button";

const BrowseRecipes = ({ id }) => {
  return (
    <main className="browse-recipes-page">
      <form className="recipe-search">
        <input type="text" name="input" className="recipe-search__input" />
        <Button isBlue={true} content="Search" type="submit" />
      </form>
    </main>
  );
};

export default BrowseRecipes;
