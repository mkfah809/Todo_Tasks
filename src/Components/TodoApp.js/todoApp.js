import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function addItem() {
  console.log("Adding item to Todo list");
}
const TodoApp = () => {
  //getter , setter
  const [name, setName] = useState(); // default value


  useEffect(() => {
    console.log("I'm ", name);
  });

  return (
    <div>
      <Header />
      <div>
        <label
          htmlFor="name"
          style={{
            marginRight: "1rem",
          }}
        >
          name
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <h4>My Name is {name}</h4>
      <Footer />
    </div>
  );
};

export { addItem };
export default TodoApp;
