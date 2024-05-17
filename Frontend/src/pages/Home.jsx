const React = require('react');
const { useTheme } = require('@emotion/react');

const Home = () => {
  const theme = useTheme();
  return (
    React.createElement("div", null,
      React.createElement("img", { src: "image.jpeg", alt: "", style: { width: '900px', marginLeft: '80px', marginTop: '50px' } })
    )
  );
};

module.exports = Home;
