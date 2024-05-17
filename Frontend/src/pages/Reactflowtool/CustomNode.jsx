const React = require('react');
const { memo } = require('react');
const { Position } = require('@xyflow/react');

const sourceHandleStyleA = { left: 50 };
const sourceHandleStyleB = { right: 50, left: 'auto' };

const CustomNode = ({ data, positionAbsoluteX, positionAbsoluteY }) => {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Handle, { type: "target", position: Position.Top }),
      React.createElement("div", null,
        React.createElement("div", null,
          "Label: ", React.createElement("strong", null, data.label)
        ),
        React.createElement("div", null,
          "Position: ",
          React.createElement("strong", null, positionAbsoluteX.toFixed(2), ",", positionAbsoluteY.toFixed(2))
        )
      ),
      React.createElement(Handle, { type: "source", position: Position.Bottom, id: "a", style: sourceHandleStyleA }),
      React.createElement(Handle, { type: "source", position: Position.Bottom, id: "b", style: sourceHandleStyleB })
    )
  );
};

module.exports = memo(CustomNode);
