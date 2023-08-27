import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  // const [todoId, setTodoId] = useState(4);
  useEffect(() => {
    fetch("/api/todoItems") // bas keda hygeely moshkela 3lshan b2olo fetch mn 8080 to 3000
      //i need to do => I'm react app i should be consider the same as localhost 8080
      // 3lshan n7il moshkla dy lazm n3ml 2 things:
      //1) nro7 lil package.json w nketb  proxy":"http://localhost:8080",
      //2) w nemsa7 localhost mn fetch
      .then((response) => {
        // once recieved do something
        response.json().then((todoItems) => {
          setTodoItems(todoItems);
        });
      });
  }, []);

  function handleTodoItemDataUpdate(data, shouldSave) {
    // nekteb el code da 3shan n2dar nekteb onChange event fil input. 
    if (!shouldSave) {
      let todoItemsCopy = [...todoItems];
      const i = todoItemsCopy.findIndex((todiItem) => todiItem.id === data.id)
      console.log("index i = "+i);
      todoItemsCopy[i] = data
      setTodoItems(
        todoItemsCopy);
    } else {
    }
    fetch("/api/todoItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => {
        setTodoItems(todoItems);
      });
  }

  function handleTodoItemDataDelete(data) {
    let todoItemsCopy = [...todoItems];
    todoItemsCopy = todoItemsCopy.filter(
      (todoItems) => todoItems.id !== data.id
    ); // we filter out the data at the I'th index

    setTodoItems(todoItemsCopy);
  }

  function handleTodoitemDataAdd() {
    const data = {
      itemName: "get milk",
      isDone: false,
    };

    fetch("/api/todoItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => {
        setTodoItems(todoItems);
      });
  }
  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>
          Todo List{" "}
          <span onClick={handleTodoitemDataAdd} style={{ cursor: "pointer" }}>
            +
          </span>
        </h1>

        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              emitTodoItemDataDelete={handleTodoItemDataDelete}
              emitTodoItemDataUpdate={handleTodoItemDataUpdate} // 7atena dy 3lshan ngeb el data mn el child n8otha fil parent
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
