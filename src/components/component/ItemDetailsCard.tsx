import ImageComponent from "../image/ImageComponent";
import ReadMore from "./ReadMore";

interface Item {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  [key: string]: unknown; // Add this if there are additional properties
}
const ItemDetailsCard = ({ item }: { item: Item }) => {
  
  const handleAddToCart = () => {
    // Logic to add the item to the cart
    
    console.log(`${item.name} added to cart!`);
  };

  return (
    <div className="restro-detail-card">
      <div>
        <h2>{item.name}</h2>
        <p>
          <ReadMore text={item.description} maxLength={150} />
        </p>
        <p>Price: ${item.price}</p>
      </div>
      <div className="card-image"></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ImageComponent src={item.image} alt={item.name} size={200} />
        <button style={{marginTop:'-20px', backgroundColor: '#ccc', color:'black'}} onClick={handleAddToCart} >Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetailsCard;
