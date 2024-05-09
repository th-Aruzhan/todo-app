import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import style from "./home.module.css";
import images from "../assets/klipartz.com.png";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className={style.App}>
      <div className={style.Apps}>
      <h1>React Todo App :P</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
      </div>
      <div className={style.bagraundImages}>
        <img className={style.images} src={images} alt={images} ></img>
      </div>
  

    {/* <section className={style.bgr}>
    <img className={style.images} src={images} alt={images} ></img>
    </section> */}
       </div>
    
    
  );
};

export default App;

{/* <img className={style.images} src={images} alt={images} ></img> */}