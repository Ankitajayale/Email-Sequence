const React = require('react');
const { useCallback } = require('react');
const {
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  Background,
  Controls,
  Position,
} = require('@xyflow/react');
const CustomNode = require('./Reactflowtool/CustomNode.js');
const Backgrounds = require('./Reactflowtool/background.js');
require('@xyflow/react/dist/style.css');

const nodeSize = {
  width: 200,
  height: 40,
};

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Send Email' },
    position: { x: 450, y: 0 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
    ],
  },
  {
    id: '2',
    data: { label: 'Group or Ungroup' },
    position: { x: -250, y: 50 },
    ...nodeSize,
    handles: [
      {
        type: 'source',
        position: Position.Bottom,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
      },
      {
        type: 'target',
        position: Position.Top,
        x: nodeSize.width * 0.5,
        y: 0,
      },
    ],
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const nodeTypes = {
  custom: CustomNode,
};

function KYC() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    React.createElement("div", { style: { width: 1300, height: 720 } },
      React.createElement(ReactFlow, {
        nodes: nodes,
        onNodesChange: onNodesChange,
        edges: edges,
        onEdgesChange: onEdgesChange,
        onConnect: onConnect,
        nodeTypes: nodeTypes,
        fitView: true,
        width: 700,
        height: 400
      },
        React.createElement(Backgrounds, null),
        React.createElement(Controls, null)
      )
    )
  );
}

module.exports = KYC;
