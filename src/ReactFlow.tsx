import { Background, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { useMemo } from 'react';
import { ColoredVerticalLine, RegularNode, TitleNode } from './Nodes';
import { edges as initialEdges, nodes as initialNodes } from './data';

export default function ReactFlowComp() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({
    title: TitleNode,
    coloredVerticalLine: ColoredVerticalLine,
    regularNode: RegularNode
  }), []);


  return (
    <div className='w-full h-[600px] max-w-[827px] border border-[rgb(65, 69, 82)]  '>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background
          // @ts-expect-error - the type definitions are incorrect
          variant={"dots"}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}
