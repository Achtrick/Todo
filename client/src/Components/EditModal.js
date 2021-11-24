import classes from "../Css/Todo.module.css";
import { useState, useContext } from "react";
import axios from "axios";
import { TodoContext } from "../Contexts/TodoContext";

function EditModal(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const { setEditVisible, toggleBlur, refreshData } = useContext(TodoContext);

  function updateTodo(e) {
    axios
      .put("http://localhost:3001/api/updateTodo", {
        todoId: props.todoId,
        title: title,
        text: text,
        date: date,
      })
      .then((result) => {
        if (result.data === "ERROR") {
        } else if (result.data === "SUCCESS") {
          refreshData();
          document.getElementById("update-alert").hidden = false;
          setTimeout(() => {
            document.getElementById("update-alert").hidden = true;
          }, 1500);
          setEditVisible(false);
          toggleBlur(false);
        }
      });

    e.preventDefault();
  }

  return (
    <div id="edit-modal" className={classes.todoEditCard}>
      <h4>Edit Todo</h4>
      <br />
      <form onSubmit={updateTodo}>
        <div className="form-group w-50">
          <input
            id="todoTitle"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ marginBottom: "5px" }}
            className="form-control"
            type="text"
            placeholder={props.title}
          />
        </div>
        <div className="form-group w-50">
          <textarea
            id="todoText"
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ marginBottom: "5px" }}
            className="form-control"
            placeholder={props.text}
          />
        </div>
        <div className="form-group w-50">
          <input
            id="todoDate"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            style={{ marginBottom: "5px" }}
            className="form-control"
            type="Date"
            placeholder={props.date.toString()}
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            style={{ display: "inline-block" }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
