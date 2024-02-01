import "./Landing.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="landing-page">
      <section className="create">
        <h2 className="create__title">Create</h2>
        <h4 className="create__description">
          Create or copy recipes with a simple and intuitive tool
        </h4>
        <Link className="link">
          <Button type="button" content="Create" isBlue={false} />
        </Link>
      </section>
      <section className="browse">
        <h2 className="browse__title">Browse</h2>
        <h4 className="browse__description">
          Browse the entirety of our recipe database
        </h4>
        <Link to="/browse" className="link">
          <Button type="button" content="Browse" isBlue={true} />
        </Link>
      </section>
    </main>
  );
};

export default Landing;
