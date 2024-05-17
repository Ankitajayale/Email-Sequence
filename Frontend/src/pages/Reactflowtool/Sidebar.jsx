const styles = require('./module.css');

const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    React.createElement("aside", { className: styles.aside },
      React.createElement("div", { className: styles.description }, "You can drag these nodes to the pane on the left."),
      React.createElement("div", { className: "react-flow__node-input", onDragStart: (event) => onDragStart(event, 'input'), draggable: true },
        "Input Node"
      ),
      React.createElement("div", { className: "react-flow__node-default", onDragStart: (event) => onDragStart(event, 'default'), draggable: true },
        "Default Node"
      ),
      React.createElement("div", { className: "react-flow__node-output", onDragStart: (event) => onDragStart(event, 'output'), draggable: true },
        "Output Node"
      )
    )
  );
};

module.exports = Sidebar;
