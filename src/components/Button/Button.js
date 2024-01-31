import "./Button.scss";

const Button = ({ isBlue, content, type }) => {
  return (
    <button type={type} className={`button ${isBlue ? "button--blue" : ""}`}>
      <div
        className={`button__inner-container ${
          isBlue ? "button__inner-container--blue" : ""
        }`}
      >
        {content}
      </div>
    </button>
  );
};

export default Button;
