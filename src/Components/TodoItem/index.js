import React from "react";
// 3ndna object 3yzen n-pass it here.
// zy fi TodoApp.js 3amel propery esmha todoItemData dy
//shayla data ely hya gowaha el items
//w agy aktab hena props
// props ht5leny a-access el todoItemData properties

const TodoItem = (props) => {
  const { todoItemData, emitTodoItemDataUpdate, emitTodoItemDataDelete } =
    props; // dy btnfa3 law fi another property

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            // ana 3ayz a8ayr el value bta3t isDone in the parent component
            // msh bas el child.
            // e7na gebna data from parent to todoItem child component using PROPS
            todoItemData.isDone = !todoItemData.isDone;
            emitTodoItemDataUpdate(todoItemData, true);
          }}
        />
        {todoItemData.isDone ? (
          <>
            <label
              style={
                todoItemData.isDone ? { textDecoration: "line-through" } : {}
              }
            >
              {todoItemData.todoItemName}
            </label>
          </>
        ) : (
          <>
            <input
              placeholder="New todo item here"
              type="text"
              value={todoItemData.todoItemName}
              onChange={(e) => {
                todoItemData.todoItemName = e.target.value;
                emitTodoItemDataUpdate(todoItemData, false);
              }}
              onBlur={(e) => {
                todoItemData.todoItemName = e.target.value;
                emitTodoItemDataUpdate(todoItemData, true);
              }}
            />
          </>
        )}
        <span
          style={{ marginLeft: "1em", cursor: "pointer" }}
          onClick={(e) => {
            emitTodoItemDataDelete(todoItemData);
          }}
        >
          ➖
        </span>
      </>
      {/* react fragment; root element wraps everything; 3lshan n2alil el klam  */}
    </div>
  );
};

export default TodoItem;
