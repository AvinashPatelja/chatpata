import React from "react";
import Card from "./Card";

const Test = () => {
  const testList = [
    {
      id: 1,
      name: "test", //Add cake icon
      description: "Cake and pastries",
    },
    {
      id: 2,
      name: "Yummies",
      description: "Chats and snacks",
    },
    {
      id: 3,
      name: "Tasty Treats",
      description: "Sweet and savory delights",
    },
  ];
  return (
    <>
        <h1>Test Component</h1>
      {testList.map((item) => (
        <div key={item.id} >
          <Card item={item} />
        </div>
      ))}
    </>
  );
};

export default Test;
