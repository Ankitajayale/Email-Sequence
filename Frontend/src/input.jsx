const { TextField } = require('@mui/material');
const React = require('react');

const CustomizedInput = (props) => {
    return React.createElement(TextField, {
        margin: 'normal',
        InputLabelProps: { style: { color: "white" } },
        name: props.name,
        label: props.label,
        type: props.type,
        InputProps: { style: { width: "400px", borderRadius: 10, fontSize: 20, color: "white" } }
    });
};

module.exports = CustomizedInput;
