import axios from 'axios';

const baseUrl = "http://localhost:8000/";

const getAllTodo = (setTodo) =>{
    axios.get(baseUrl)
    .then(({data}) =>{
        console.log('Data :::', data.todo);
        setTodo(data.todo)
    });
} 

const addTodo = (text, setText, setTodo) =>{
    axios.post(`${baseUrl}`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (_id, text, setTodo, setText, setUpdate) => {
  axios
    .put(`${baseUrl}${_id}`, {
      _id,
      text      
    })
    .then((data) => {
      setText("");
      setUpdate(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${baseUrl}${_id}`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

console.log(" ");

export {getAllTodo, addTodo, updateTodo, deleteTodo};