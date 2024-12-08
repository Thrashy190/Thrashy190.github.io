const ImageNode = ({ data }: any) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={data.imageUrl}
        alt="Node"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImageNode;
