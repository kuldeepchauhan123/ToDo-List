import React, { useState } from "react";
import "./Todo.css";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [inpvalue, setInpvalue] = useState('');
  const [data, setData] = useState([]);

  const getInput = (e) => {    
    setInpvalue(e.target.value);
  };

  const addData = () => {
    const trimmedValue = inpvalue.trim();
    if (trimmedValue === "") {
      alert("Please add some value");
      return;
    }
    if (data.includes(trimmedValue)) {
      alert("This item already exists.");
      setInpvalue("");
      return;
    }
    setData([...data, trimmedValue]);
    setInpvalue("");    
  };

  const deleteList = (index) => {   
    const filterData = data.filter(( _ , id) => id != index)    
    setData(filterData);
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <h3 className="title">ToDo List</h3>
          <div className="inputbox">
            <input type="text" value={inpvalue} onChange={getInput} />
            <button onClick={addData}>Add</button>
          </div>
          {data.map((curVal, index) => {
            return (
              <div className="list-wrapper" key={index}>
                <ul>
                  <li key={index}>
                    {curVal}
                    <MdDeleteForever onClick={() => deleteList(index)} />
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
