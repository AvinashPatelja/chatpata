import React from "react";
import RestroCard from "./restroCard";


interface restorentsProps {
  // Define any props you want to pass to the RestroCard component
  restro: {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
  };
}

const RestroList = ({ restroList }: { restroList: restorentsProps[] }) => {
  return (
    <>      
      {restroList.length > 0 ? (
        <div className="restro-list">
          {restroList.map((restro) => (
            <div key={restro.id} className="restro-card">
              <RestroCard restro={restro} />
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
