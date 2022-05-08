import ItemDetail from "./ItemDetail";
import "./styles/ItemCard.css";

const ItemCard = ({ itemData }) => {
  return (
    <div className="product-card">
      <ItemDetail item={itemData} />
    </div>
  );
};
export default ItemCard;
