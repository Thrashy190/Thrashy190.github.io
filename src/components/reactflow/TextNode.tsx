import { Handle, Position } from "@xyflow/react";

const TextNode = ({ data }: any) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Handle
        type="target"
        position={data.position === "top" ? Position.Top : Position.Bottom}
      />
      <span className="text-2xl">{data.label}</span>
    </div>
  );
};

export default TextNode;
