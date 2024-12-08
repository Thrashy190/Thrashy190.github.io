import { useState, useMemo } from "react";
import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ImageNode from "./ImageNode";
import TextNode from "./TextNode";

import { initialNodes } from "./nodos/Nodos";

const SkillGraph = () => {
  const nodeTypes = useMemo(
    () => ({ imageNode: ImageNode, textNode: TextNode }),
    []
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const getNodeStyle = (categories: any) => {
    if (!selectedCategory) return {};

    if (categories.includes("group")) {
      return;
    }

    return categories.includes(selectedCategory)
      ? {
          opacity: 1,
          tranform: "scale(1.1)",
          background: "#ffffff",
          color: "#000000",
        }
      : { opacity: 0.1 };
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <h3 className="font-bold text-4xl mb-2">My Stacks</h3>
        <span className="font-light text-gray-500 mb-2">
          You can select one!!
        </span>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            "My Main Stack",
            "Frontend Stack",
            "Backend Stack",
            "DevOps Stack",
            "My OS favorites tools",
            "AI/ML Solutions",
          ].map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`p-2 cursor-pointer ${
                selectedCategory === category ? "bg-gray-700" : "bg-transparent"
              } rounded transition-colors duration-300 text-lg hover:bg-gray-700 my-4`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* React Flow */}
      <div style={{ flexGrow: 1 }}>
        <ReactFlow
          minZoom={0.8}
          maxZoom={0.8}
          nodeTypes={nodeTypes}
          nodes={initialNodes.map((node) => ({
            ...node,
            style: { ...node.style, ...getNodeStyle(node.categories) },
          }))}
          fitView
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default SkillGraph;
