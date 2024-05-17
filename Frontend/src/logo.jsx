const { Typography } = require('@mui/material');
const React = require('react');
const { Link } = require('react-router-dom');

const Logo = () => {
  return (
    React.createElement("div", { style: {
      display: "flex",
      marginRight: "auto",
      alignItems: "center",
      gap: "8px"
    } },
      React.createElement(Link, { to: "/" }),

      React.createElement("img", { src: "icon.jpeg", alt: "icon", width: '50px', height: '50px', className: 'image-inverted' }),
      React.createElement(Typography, { sx: { display: { md: "block", sm: "none", xs: "none" }, marginRight: "auto", fontWeight: "800", fontSize: "30px", textShadow: "2px" } }, "Email Marketing Sequence")
    )
  );
};

module.exports = Logo;
