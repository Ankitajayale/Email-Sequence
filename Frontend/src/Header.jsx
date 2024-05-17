const React = require('react');
const AppBar = require('@mui/material/AppBar').default;
const Toolbar = require('@mui/material/Toolbar').default;
const Logo = require('./logo').default;
const { useAuth } = require('./Authcontext');
const NavigationLink = require('./Navigationlink').default;

const Header = () => {
  const auth = useAuth();
  return (
    React.createElement(AppBar, { sx: { bgcolor: "transparent", position: "static", boxShadow: "none" } },
      React.createElement(Toolbar, { sx: { display: "flex" } },
        React.createElement(Logo, null),
        React.createElement("div", null,
          auth?.isLoggedIn ? (
            React.createElement(React.Fragment, null,
              React.createElement(NavigationLink, { bg: '#00fffc', to: '/emailflow', text: 'Email Flow', textColor: 'black' }),
              React.createElement(NavigationLink, { bg: '#51538f', to: '/', text: 'Logout', textColor: 'white', onClick: auth.logout })
            )
          ) : (
            React.createElement(React.Fragment, null,
              React.createElement(NavigationLink, { bg: '#00fffc', to: '/login', text: 'Log In', textColor: 'black' }),
              React.createElement(NavigationLink, { bg: '#51538f', to: '/signup', text: 'Sign Up', textColor: 'white' })
            )
          )
        )
      )
    )
  );
};

module.exports = Header;
