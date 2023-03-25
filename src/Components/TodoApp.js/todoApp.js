import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoId, setTodoId] = useState(4);
  useEffect(() => {
    const dataFromDb = [
      {
        id: 1,
        todoItemName: "Get the milk",
        isDone: false,
      },
      {
        id: 2,
        todoItemName: "pick up the kids",
        isDone: false,
      },
      {
        id: 3,
        todoItemName: "Go to work",
        isDone: false,
      },
    ];
    setTodoItems(dataFromDb);
  }, []);

  function handleTodoItemDataUpdate(data) {
    let todoItemsCopy = [...todoItems]; // brand new dublicate object
    //find the index
    const i = todoItemsCopy.findIndex((todoItem) => todoItem.id === data.id);
    todoItems[i] = data;
    //setTodoItems(todoItems) // msh htsht8al 3lshan lazm n assign the entire array to another variable
    setTodoItems(todoItemsCopy);
  }

  function handleTodoItemDataDelete(data) {
    console.log("I supposed to delete " + data);
    let todoItemsCopy = [...todoItems];
    todoItemsCopy = todoItemsCopy.filter(
      (todoItems) => todoItems.id !== data.id
    ); // we filter out the data at the I'th index

    setTodoItems(todoItemsCopy)
  }

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>
          Todo List  <span style={{ fontSize: "40px" }}></span>
        </h1>
        <div
          style={{
            fontSize: "16px",
            alignItems: "center",
            marginLeft: "1.5em",
            cursor: "pointer",
          }}
          onClick={(e) => {
            const todoItemsCopy = [...todoItems];
            todoItemsCopy.push({
              id: todoId,
              todoItemName: "",
              isDone: false,
            });
            setTodoId(todoId + 1);
            setTodoItems(todoItemsCopy);
          }}
          
        >
         ➕ 
        </div>

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
