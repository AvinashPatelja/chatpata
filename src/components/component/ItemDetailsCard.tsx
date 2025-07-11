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
  return (
    <div className="restro-detail-card">
          <div>
            <h2>{item.name}</h2>
            <p><ReadMore text={item.description} maxLength={150} /></p>
            <p>Price: ${item.price}</p>
          </div>
          <div className="card-image"></div>
          <ImageComponent
            src={item.image}
            alt={item.name}
            size={200}
          />
        </div>
  );
};

export default ItemDetailsCard;
