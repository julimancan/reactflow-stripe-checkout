import { Handle, NodeProps, Position } from "@xyflow/react";



export const TitleNode = ({ data, ...rest }: NodeProps) => {
  const label = data.label as string;

  return (
    <span {...rest}>{label}</span>
  );

};

export const ColoredVerticalLine = ({ data, id }: NodeProps) => {
  const color = data.color as string;
  const height = data.height as number || 14;
  return (
    <div className="colored-vertical-line">
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        style={{
          background: color,
          border: "none",
          minWidth: 4,
          maxWidth: 4,

        }}
      />
      <Handle
        style={{
          background: color,
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="source"
        position={Position.Left}
        id="left"
      // className="hidden"
      />
      <Handle
        style={{
          background: color,
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="target"
        position={Position.Left}
        id="left"
      // className="hidden"
      />
      <Handle
        style={{
          background: color,
          border: 'none',
          minWidth: 0,
          maxWidth: 0,

        }}
        type="source"
        position={Position.Right}
        id="right"
      // className="hidden"
      />
      <Handle
        style={{
          background: color,
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="target"
        position={Position.Right}
        id="right"
      // className="hidden"
      />
      <div className={`w-[4px] rounded-[4px]`} style={{ background: color, height }} />
      <Handle
        style={{
          background: color,
          border: "none",
          minWidth: 4,
          maxWidth: 4,

        }}
        type="source"
        position={Position.Bottom}
        id="bottom"
      // className="hidden"
      />
    </div>
  );
};

export const RegularNode = ({ data }: NodeProps) => {
  const label = data.label as string;
  const height = data.height as number || "auto";
  const width = data.width as number || "auto";
  return (
    <div className="regular-node">
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="target"
        position={Position.Top}
        id="top"
      // className="hidden"
      />
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="source"
        position={Position.Left}
        id="left"
      // className="hidden"
      />
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="target"
        position={Position.Left}
        id="left"
      // className="hidden"
      />
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="source"
        position={Position.Right}
        id="right"
      // className="hidden"
      />
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="target"
        position={Position.Right}
        id="right"
      // className="hidden"
      />
      <div style={{
        color: "rgb(60, 66, 87)",
        textAlign: "center",
        padding: "16px",
        background: "rgb(255, 255, 255)",
        boxShadow: "0px 2px 5px rgba(60,66,87,.08),0px 1px 1px rgba(0,0,0,.12)",
        borderRadius: "12px",
        height,
        width,
        fontSize: "14px"
      }}>{label}</div>
      <Handle
        style={{
          background: "none",
          border: "none",
          minWidth: 0,
          maxWidth: 0,

        }}
        type="source"
        position={Position.Bottom}
        id="bottom"
      // className="hidden"
      />
    </div>
  );
};