import { useEffect,useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [state,datastate]=useState([])
  const [search,searchstate]=useState([])
  const [add,addstate]=useState(false)
  const [details,detailsstate]=useState({name:"",
    email:"",
    age:"",
  })
  const getuser= async()=>{
        const res=await fetch("http://localhost:8000/sample")
        const data=await res.json()
        datastate(data)
        searchstate(data)
  }
  useEffect(()=>{
    getuser()
  },[])

  // search function
  const handlefunc=(e)=>{
    const searchvalue= e.target.value.toLowerCase()
    const searcharrayvalue=state.filter((user)=>(user.name.toLowerCase().includes(searchvalue)||(user.email.toLowerCase().includes(searchvalue))))
    searchstate(searcharrayvalue)
  }
  // delete function
  const delfunc=async(id)=>{
  const condition=window.confirm(`Are you want to Delete this Item: ${id}`)
  if(condition){
   await axios.delete(`http://localhost:8000/sample/${id}`).then((res)=>{
        datastate(res.data)
        searchstate(res.data)
    })
  }}
  const close=()=>{
    detailsstate({name:"",email:"",age:""})
    addstate(false)
  }

  const open=()=>{
    addstate(true)
  }

  const adddata=(e)=>{
    detailsstate({...details,[e.target.name]:e.target.value})
  }
 
const submitform=async()=>{
  if (details.id){
 await axios.patch(`http://localhost:8000/sample/ ${details.id}`,details)
  .then((res)=>{
    console.log(res);
    
  })
  }
  else{
     await axios.post("http://localhost:8000/sample/",details)
  .then((res)=>{
    console.log(res);
    
  })
  }
 addstate(false)
   detailsstate({name:"",email:"",age:""})
}

// update function
const handleupdate=(user)=>{
  detailsstate(user)
  addstate(true)
}
return (
    <>
     <div className="container">
      <h1>User Data Management</h1>
      <div className="searchbar">
        <input type="text" placeholder='Search Text Here' onChange={handlefunc}/><button onClick={open}>ADD RECORD</button>
      </div>
      <div className="table">
      <table>
        <thead>
          <tr>
            <th>Employe ID</th>
            <th>Employe Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {
         search && search.map((user,index)=>(
               <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td><button className='edit' onClick={()=>handleupdate(user)}>Edit</button></td>
            <td><button className='delete'onClick={()=>delfunc(user.id)}>Delete</button></td>
          </tr>
          ))
         }
         
       
         
        </tbody>
      </table>
      </div>
     {add && <div className="addbox">
        <div className='model-record'>
          <span className='close' onClick={close}> &times;</span>
            <h2>{details.id ? "Update Record":"Add Record"}</h2>

              <div className="details">
         <label htmlFor="name">Name
          <input type="text"  id='name' value={details.name} name='name' onChange={adddata}/>
         </label>
          <label htmlFor="email">Email
          <input type="text"  id='email' value={details.email} name='email' onChange={adddata} />
         </label>
          <label htmlFor="age">Age
          <input type="text"  id='age' value={details.age}onChange={adddata} name='age'/>
         </label>
         <button className='edit' onClick={submitform}>Submit</button>
        </div>
        </div>
      
      </div>}
     </div>
    </>
  )
}

export default App
