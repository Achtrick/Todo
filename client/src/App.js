import Home from "./Pages/Home";
import { useState } from "react";
import { TodoContext } from "./Contexts/TodoContext";
import axios from "axios";

function App() {
  const [todosList, setTodosList] = useState([]);
  const [editVisible, setEditVisible] = useState(false);
  function toggleBlur(value) {
    document.getElementById("blurredBackground").hidden = !value;
  }

  function refreshData() {
    axios.get("http://localhost:3001/api/getTodos").then((result) => {
      setTodosList(result.data);
    });
  }

  return (
    <div>
      <TodoContext.Provider
        value={{
          todosList,
          setTodosList,
          editVisible,
          setEditVisible,
          toggleBlur,
          refreshData,
        }}
      >
        <Home />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
