import './App.css';
import { useState } from 'react';
function App() {

  const [list, updateList] = useState([]);
  const addNewTask = (task) => {
    console.log(list.length);
    const listCopy = [...list]; // copy value by value
    listCopy.push(task);
    updateList(listCopy);
  }

  const handleDelete = (dIdx) => {
    const filteredContent = list.filter(function (task, idx) {
      return idx !== dIdx;
    })

    updateList(filteredContent);
  }

  return (
    <>
      <div>Todo Example</div>
      <InputTask addNewTask={addNewTask}></InputTask>
      <TaskList list={list} handleDelete={handleDelete}></TaskList>
    </>
  );
}

function InputTask(props) {

  const { addNewTask } = props
  const [cValue, setValue] = useState("");

  const setCInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  const setFinalTask = () => {
    addNewTask(cValue);
    setValue("");
  }

  return (
    <>
      <div>InputTask</div>
      <input type="text" value={cValue} onChange={setCInput}></input>
      <input type="button" value="submit" onClick={setFinalTask}></input>
    </>
  )
}

function TaskList(props) {
  const { list, handleDelete } = props;

  const deleteTask = (task, idx) => {
    console.log("Delete called to " + task + " delete this task");
    handleDelete(idx);
  }
  return (
    <>
      <div>TaskList</div>
      <br></br>
      <h2>==============================================================</h2>
      <>
        {
          list.map(function (task, idx) {
            return <div key={idx}>
              <div>{task}</div>
              <input type="button" value="Delete" onClick={() => {
                deleteTask(task, idx);
              }}></input>
            </div>
          })
        }
      </>
    </>
  )
}

export default App;
