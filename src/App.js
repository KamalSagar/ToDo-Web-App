import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); // state update
  }

  const addToDoHandler = (item) => {
    // console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col justify-center items-center p-3 space-y-4 pt-5 pb-10">
        <h1 className="text-slate-500 text-bold text-[50px] border-b mt-10"> ToDo Web App</h1>
        <div className="rounded mx-auto max-w-[750px] min-w-[500px] shadow-2xl bg-white">
            <Input handler={addToDoHandler} />
        </div>
        <div className="rounded max-w-[750px] min-w-[600px] min-h-[400px] max-h-screen shadow-lg shadow-gray-400 bg-white">
            <Box data={todos} removeHandler={removeToDo}/>
        </div>
    </div>
  );
}

export default App;