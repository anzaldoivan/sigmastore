const ItemCard = ({ itemData }) => {
  return (
    <div style={{ border: "solid green 2px", margin: "20px", padding: "20px" }}>
      <strong>{itemData.name}</strong>
      <div>{itemData.price}</div>
    </div>
  );
};
export default ItemCard;
