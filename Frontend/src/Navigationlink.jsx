const { Link } = require("react-router-dom");

const NavigationLink = (props) => {
  return (
    React.createElement(Link, {
      onClick: props.onClick,
      className: "nav-link",
      to: props.to,
      style: { background: props.bg, color: props.textColor }
    }, props.text)
  );
};

module.exports = NavigationLink;
