import React, {useState} from "react"
import List from "./List"
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState("")


  const handleSubmit = (e) =>{
    e.preventDefault()

    const newItem = {id:uuidv4(), title: name}
    setList([...list, newItem])
    setName("")


    

    
  }
  

  return (
    <section className="hero">
      <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
              <button></button>
            </div>       
      </form>

      <div className="list-items">
        <List items={list}/>
      </div>
    </section>
  );
}

export default App;
