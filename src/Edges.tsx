import { BaseEdge, EdgeProps, getStraightPath, MarkerType, EdgeMarkerType } from '@xyflow/react';

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
}

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


export const ArrowEdge = ({ id, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}

        style={{ stroke: "blue" }}
      />
      {"here"}
    </>
  );
};