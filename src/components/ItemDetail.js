import "./styles/ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <article className="product-detail">
        <img src={item.thumbnail} alt="" className="product-detail-img" />
        <div className="product-detail-info">
          <h2 className="name">{item.name}</h2>
          <p className="description">{item.description}</p>
          <ul className="info-grid">
            <li>Price:</li>
            <li>${item.price}</li>
            <li>Detail:</li>
            <li>{item.detail}</li>
            <li>Size:</li>
            <li>{item.size}</li>
            <li>Publisher:</li>
            <li>{item.publisher}</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
