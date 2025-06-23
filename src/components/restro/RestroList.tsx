import Card from "../component/Card";


interface restorentsProps {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}

const RestroList = ({ restroList }: { restroList: restorentsProps[] }) => {
  return (
    <>
      {restroList.length > 0 ? (
        <div className="restro-list">
          {restroList.map((restro) => (
            <div key={restro.id} className="restro-card">
              <Card item={restro} />
            </div>
          ))}
        </div>
      ) : (
        <p>No restros found</p>
      )}
    </>
  );
};

export default RestroList;