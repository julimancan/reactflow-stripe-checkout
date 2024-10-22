import { BaseEdge, EdgeProps, getStraightPath } from '@xyflow/react';

export const RegularEdge = ({ id, sourceX, sourceY, targetX, targetY, ...props }: EdgeProps) => {
  // console.log({ })
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });


  return (
    // <div className='text-red-200 bg-red-200'>

    <BaseEdge id={id} path={edgePath} {...props} />
    // </div>
  );
};
