import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Editsvg from './assets/Mediamodifier-Design.svg?react';
import Deletesvg from './assets/Delete.svg?react'
import Addsvg from './assets/add.svg?react'

import { v4 as uuidv4 } from "uuid";
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      settodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleedit = (id) => {
    const newText = prompt("Edit your todo:");
    if (newText) {
      settodos(
        todos.map((item) =>
          item.id === id ? { ...item, todo: newText } : item
        )
      );
    }
  };

  const handleadd = () => {
    settodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    settodo("");
  };

  const handlechange = (e) => {
    settodo(e.target.value);
  };

  const handlecheckbox = (id) => {
    settodos(
      todos.map((item) =>
        item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
      )
    );
  };

  const handledelete = (id) => {
    settodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
   
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl bg-[#f7f0ff] xl:w-[44vw] w-[80vw] mt-10 min-h-[80vh] shadow-2xl flex flex-col items-center">

        {/* TodoList heading */}
        <h1 className="flex justify-center font-bold text-5xl mt-5 pt-10 ">
          TodoList
        </h1>
         {/* TodoList heading*/}

        <div className="flex justify-center mt-10 items-center gap-5 ">

          {/* Text area and add button */}
          <div>
            <input onChange={handlechange} value={todo} className="border focus:outline-none bg-white h-9 xl:w-[32.5vw] md:w-[60vw] w-[55vw] rounded-md pl-3 border-amber-200 shadow-2xs" type="text" placeholder="Add todo here"/>
          </div>
          <div>
            <button onClick={handleadd} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-2 px-4 flex items-center gap-1 ">
                              <Addsvg className="w-5 h-5 fill-white" /><span className="md:block hidden">Add</span>
            </button>
            {/* Text area and add button */}

          </div>

        </div>




        <h2 className="text-lg font-bold mt-10 w-full ml-15">Your Todos</h2>



        <div className="todos flex justify-center flex-col">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex justify-between items-center my-5 border border-amber-600 rounded-md xl:w-[40vw] w-[70vw] h-15 p-3">
                <input className="w-4 h-4 border rounded-2xl" onChange={() => handlecheckbox(item.id)} type="checkbox" value={item.isCompleted}/>
                <div className={item.iscompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleedit(item.id)} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-0 h-9 flex items-center gap-1">
                    <Editsvg className="w-5 h-5 fill-white" /> <span className="md:block hidden"> Edit</span>

                  </button>
                  <button onClick={() => handledelete(item.id)} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-0 h-9 flex items-center gap-1">
                  <Deletesvg className="w-5 h-5 fill-white" />  <span className="md:block hidden">Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
