import axios from "axios";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import classes from "../Css/Home.module.css";
import TodoModal from "../Components/TodoModal";
import EditModal from "../Components/EditModal";
import { TodoContext } from "../Contexts/TodoContext";

function Home() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoId, setTodoId] = useState("");
  const [todoVisible, setTodoVisible] = useState(false);
  const { editVisible, setEditVisible, todosList, refreshData, toggleBlur } =
    useContext(TodoContext);

  useEffect(() => {
    refreshData();
  }, []);

  function createTodo(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/createTodo", {
        title: title,
        text: text,
        date: date,
      })
      .then((result) => {
        if (result.data === "ERROR") {
          document.getElementById("error-alert").hidden = false;
          setTimeout(() => {
            document.getElementById("error-alert").hidden = true;
          }, 1500);
        } else if (result.data === "SUCCESS") {
          refreshData();
          document.getElementById("todoTitle").value = "";
          document.getElementById("todoText").value = "";
          document.getElementById("todoDate").value = "";
          document.getElementById("success-alert").hidden = false;
          setTimeout(() => {
            document.getElementById("success-alert").hidden = true;
          }, 1500);
        }
      });
  }

  function toggleDialog(value) {
    document.getElementById("dialog").hidden = !value;
    document.getElementById("controls").hidden = !value;
  }

  function deleteTodo(todoId) {
    toggleDialog(false);
    toggleBlur(false);
    axios
      .delete(`http://localhost:3001/api/deletepost/${todoId}`)
      .then((result) => {
        if (result.data === "ERROR") {
        } else if ((result.data = "SUCCESS")) {
          refreshData();
          document.getElementById("delete-alert").hidden = false;
          setTimeout(() => {
            document.getElementById("delete-alert").hidden = true;
          }, 1500);
        }
      });
  }

  return (
    <div>
      <div
        id="blurredBackground"
        hidden
        className={classes.blur}
        onClick={() => {
          toggleDialog(false);
          toggleBlur(false);
          setTodoVisible(false);
          setEditVisible(false);
        }}
      />
      {todoVisible ? <TodoModal title={title} text={text} date={date} /> : null}
      {editVisible ? (
        <EditModal todoId={todoId} title={title} text={text} date={date} />
      ) : null}
      <div id="dialog" className={classes.dialogCard} hidden>
        <h5>Do you really want to delete Todo: "{todoTitle}" ?</h5>
        <hr />
        <div
          id="controls"
          hidden
          style={{
            cursor: "pointer",
            display: "inline-block",
            position: "absolute",
            right: "5%",
          }}
        >
          <button
            className="btn btn-success"
            onClick={() => {
              deleteTodo(todoId);
            }}
          >
            Yes
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              toggleBlur(false);
              toggleDialog(false);
            }}
          >
            No
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="alerts">
        <div hidden id="success-alert" className="alert alert-success">
          Todo created successfully :)
        </div>
        <div hidden id="error-alert" className="alert alert-danger">
          An error occured please try again later :(
        </div>
        <div hidden id="delete-alert" className="alert alert-danger">
          Todo deleted !
        </div>
        <div hidden id="update-alert" className="alert alert-warning">
          Todo updated !
        </div>
      </div>
      <div className="container-fluid">
        <div align="center">
          <h1>Todo App</h1>
        </div>
        <br />
        <br />
        <div id="Create Todo">
          <h4>Create Todo</h4>
          <form onSubmit={createTodo}>
            <div className="form-group w-50">
              <input
                id="todoTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{ marginBottom: "5px" }}
                className="form-control"
                type="text"
                placeholder="Title"
                required
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
                placeholder="Text ..."
                required
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
                placeholder="Date"
                required
              />
            </div>
            <div>
              <button
                className="btn btn-success"
                style={{ display: "inline-block" }}
              >
                Create
              </button>
            </div>
          </form>
          <br />
          <br />
          <h4>Todos List</h4>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {todosList.map((todo) => {
                return (
                  <tr className={classes.tr} key={todo._id}>
                    <td
                      onClick={() => {
                        setTitle(todo.title);
                        setText(todo.text);
                        setDate(todo.date);
                        toggleBlur(true);
                        setTodoVisible(true);
                      }}
                    >
                      {todo.title}
                    </td>
                    <td
                      onClick={() => {
                        setTitle(todo.title);
                        setText(todo.text);
                        setDate(todo.date);
                        toggleBlur(true);
                        setTodoVisible(true);
                      }}
                    >
                      {moment(todo.date).format("DD-MM-YYYY")}
                    </td>

                    <td>
                      &nbsp;
                      <button
                        onClick={() => {
                          setTitle(todo.title);
                          setText(todo.text);
                          setDate(todo.date);
                          setTodoId(todo._id);
                          toggleBlur(true);
                          setEditVisible(true);
                        }}
                        className="btn btn-warning"
                      >
                        <i className="far fa-edit" />
                      </button>
                      &nbsp;
                      <button
                        onClick={() => {
                          toggleDialog(true);
                          toggleBlur(true);
                          setTodoTitle(todo.title);
                          setTodoId(todo._id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="far fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
