const React = require('react');
const { ReactFlow, Node, ReactFlowProvider, useNodesState, Background } = require('@xyflow/react');
const styles = require ('./module.css')

const initialNodes = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 50, y: 50 },
  },
];

const Flow = ({ id, bgProps }) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);

  return (
    React.createElement(ReactFlowProvider, null,
      React.createElement(ReactFlow, { nodes: nodes, onNodesChange: onNodesChange, id: id },
        bgProps.map((props, idx) =>
          React.createElement(Background, { key: idx, id: idx.toString(), ...props })
        )
      )
    )
  );
};

const Backgrounds = () => (
  React.createElement("div", { className: styles.wrapper },
    
    React.createElement(Flow, { id: "flow-a", bgProps: [{ variant: BackgroundVariant.Dots }] }),
   React.createElement(Flow, { id: "flow-b", bgProps: [{ variant: BackgroundVariant.Lines, gap: [50, 50] }] }),
  React.createElement(Flow, { id: "flow-c", bgProps: [{ variant: BackgroundVariant.Cross, gap: [100, 50] }] }),
  React.createElement(Flow, { id: "flow-d", bgProps: [{ variant: BackgroundVariant.Lines, gap: 10 }, { variant: BackgroundVariant.Lines, gap: 100, offset: 2, color: 'white' }] })
  )
);

module.exports = Backgrounds;
