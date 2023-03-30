import ToDo from "./components/ToDo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
import { useState, useEffect } from "react";


function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo)
  }, []);

const updateMode = (_id, text)=> {
  setUpdate(true);
  setText(text);
  setToDoId(_id);
}

  return (
    <div className="App">
      <div className="container">

        <h1>Your ToDo List...</h1>
        <div className="top">
          <input type="text"
          placeholder="Add ToDo's..." 
          value={text} 
          onChange={(e) => setText(e.target.value)}/>

        <div className="add" 
          onClick={update ? 
          () => updateTodo(toDoId, text, setTodo, setText, setUpdate) 
          : 
          ()=> addTodo(text, setText, setTodo)}>
            {update ? "update" : "add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item)=> <ToDo 
          key={item._id} 
          text={item.text}
          updateMode = {()=> updateMode(item._id, item.text)}
          deleteTodo = {()=> deleteTodo(item._id, setTodo)} />)}
          {/* <ToDo text="No Pain, No Gain..."/> */}
        </div>

      </div>
    </div>
  );
}

export default App;
