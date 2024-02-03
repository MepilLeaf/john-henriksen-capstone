import "./Nav.scss";
import Button from "../Button/Button";
import home from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";

const Nav = ({ borderColor }) => {
  return (
    <nav
      className={`nav ${
        borderColor === "red"
          ? "nav--red"
          : borderColor === "blue"
          ? "nav--blue"
          : ""
      }`}
    >
      <Link to="/create" className="link">
        <Button type="button" content="Create" isBlue={false} />
      </Link>

      <Link to="/" className="link">
        <div className="nav__home-button">
          <img src={home} alt="" className="nav__home-icon" />
        </div>
      </Link>
      <Link to="/browse" className="link">
        <Button type="button" content="Browse" isBlue={true} />
      </Link>
    </nav>
  );
};

export default Nav;
