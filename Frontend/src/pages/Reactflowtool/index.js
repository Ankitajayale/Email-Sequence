const React = require('react');
const { useState } = require('react');
const { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls } = require('@xyflow/react');
const Sidebar = require('./Sidebar');
const styles = require('./module.css');

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeOrigin = [0.5, 0.5];

const DnDFlow = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const onInit = (rfi) => setReactFlowInstance(rfi);

  const onDrop = (event) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    }
  };

  return (
    React.createElement("div", { className: styles.dndflow },
      React.createElement(ReactFlowProvider, { initialNodes: initialNodes, initialEdges: [] },
        React.createElement("div", { className: styles.wrapper },
          React.createElement(ReactFlow, {
            nodes: nodes,
            edges: edges,
            onEdgesChange: onEdgesChange,
            onNodesChange: onNodesChange,
            onConnect: onConnect,
            onInit: onInit,
            onDrop: onDrop,
            onDragOver: onDragOver
          },
            React.createElement(Controls, null)
          )
        ),
        React.createElement(Sidebar, null)
      )
    )
  );
};

module.exports = DnDFlow;
