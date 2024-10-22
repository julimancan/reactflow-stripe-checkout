import { Background, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { useMemo } from 'react';
import { ColoredVerticalLine, RegularNode, TitleNode } from './Nodes';
import CustomEdge, { ArrowEdge, RegularEdge } from './Edges';
import { initialEdges, initialNodes } from './data';





export default function ReactFlowComp() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodeTypes = useMemo(() => ({
    title: TitleNode,
    coloredVerticalLine: ColoredVerticalLine,
    regularNode: RegularNode
  }), []);
  const edgeTypes = {
    'custom-edge': CustomEdge,
    regularEdge: RegularEdge,
    arrowEdge: ArrowEdge
  };
  // nodes
  return (
    <div className='w-full h-[600px] max-w-[827px] border border-[rgb(65, 69, 82)]  '>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        className='relative'
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <Background
          // @ts-ignore
          variant={"dots"}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}
