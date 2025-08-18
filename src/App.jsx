import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
      <div className="container mx-auto my-5 rounded-xl bg-violet-200 border-2 w-2xl mt-10 min-h-[80vh]">

        {/* TodoList heading */}
        <h1 className="flex justify-center font-bold text-5xl mt-5">
          TodoList
        </h1>
         {/* TodoList heading*/}

        <div className="flex justify-between mx-30 mt-10 items-center">

          {/* Text area and add button */}
          <div>
            <input onChange={handlechange} value={todo} className="border border-black focus:outline-none bg-white w-80 " type="text" placeholder="Add todo here"/>
          </div>
          <div>
            <button onClick={handleadd} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-1">
              Add
            </button>
            {/* Text area and add button */}

          </div>

        </div>




        <h2 className="text-lg font-bold">Your Todos</h2>




        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex justify-between mx-30 mt-10">
                <input onChange={() => handlecheckbox(item.id)} type="checkbox" value={item.isCompleted}/>
                <div className={item.iscompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleedit(item.id)} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-0 h-9">
                    Edit
                  </button>
                  <button onClick={() => handledelete(item.id)} className="cursor-pointer bg-blue-700 hover:bg-blue-900 text-white font-bold border rounded-md p-3 py-0 h-9">
                    Delete
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
