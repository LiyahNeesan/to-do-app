import { useEffect, useState } from 'react';
import './App.css';
import SingleTodo from './components/SingleTodo';
import {v4 as uuidv4} from 'uuid';
import ErrorModal from './components/ErrorModal';

function App() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [newTodoText, setNewTodoText] = useState("")
  const [activeStatus, setActiveStatus] = useState('todo')
  const [toDoList, setToDoList] = useState([
    {id: uuidv4(), name: 'Play Chess', status: 'todo'},
    {id: uuidv4(), name: 'Watch KDramas', status: 'todo'},
    {id: uuidv4(), name: 'Go for a Walk', status: 'done'},
    {id: uuidv4(), name: 'Read Comics', status: 'todo'},
    {id: uuidv4(), name: 'In trash', status: 'trash'}
  ])

  const changeStatus = (status) => {
    setActiveStatus(status)
  }

  const changeStatusInSingleTodo = (id, changedStatus) => {
    const changedItem = toDoList.find((item) => item.id === id);  
    changedItem.status = changedStatus;
    const newToDoListWithoutItem = toDoList.filter(item => item.id !== id )
    setToDoList([...newToDoListWithoutItem, changedItem])
}

  const addToTodo = () => {
    console.log(newTodoText)
    // setIsAddModalVisible(false)
    setNewTodoText("")
  }

  const filteredTodos = toDoList.filter((item) => item.status === activeStatus)
  console.log(filteredTodos)
  // const [isAddModalVisible, setIsModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsErrorModalVisible(true);
  //   }, 5000);
  // }, []);

  // onClick={() => changeStatus(activeStatus === 'todo' ? 'done' : 'todo')}

  return (
    <div className="App">
      <div className='container-button'>
        <button 
          className='button'
          onClick={() => setIsAddModalVisible(!isAddModalVisible)}
            >
            <p className="button-text">+</p>
          </button>
      </div>
      <div>
        <h3>{activeStatus === 'todo' ? 'ToDo' : 'Done'}</h3>  
        <button className="todo-buttons" onClick={() => changeStatus("todo")}> 
          <p> ToDo </p>
        </button>
        <button className="todo-buttons" onClick={() => changeStatus("done")}> 
          <p> Done </p>
        </button>
        <button className="todo-buttons" onClick={() => changeStatus("trash")}> 
          <p> Trash </p>
        </button>
        {filteredTodos.map((item, _i) => 
          <SingleTodo 
            key={_i} 
            item={item} 
            changeStatusInSingleTodo={changeStatusInSingleTodo}
            
            // changeStatus={changeStatus}
            // activeStatus={activeStatus}
            />
          // <SingleTodo key={_i} item={item} />
        )}      
      </div>
      

      {/* <button onClick={() => setIsErrorModalVisible(!isErrorModalVisible)}
      >It is an error
      </button> */}

      {isAddModalVisible && (
        <div className='modal'>
          <p style={{color: 'black'}}>Add New To Do</p>
          <textarea 
            className='modal-textarea' 
            onChange={(e) => {setNewTodoText(e.target.value)}}
            placeholder="Enter text..."
            value={newTodoText}
            >
            </textarea>
          <button onClick={() => addToTodo() } className='modal-addbutton'>Add</button>
        </div>
      )}

      {isErrorModalVisible && <ErrorModal/>} 
    </div>
  );
}

export default App;
