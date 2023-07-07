import { useState } from "react"

const App = () =>{
    const submits = (event)=>{
        event.preventDefault()
    }
    const[name,cd] = useState("");
    const[fullName,ef] = useState();
    const[password,ij] = useState();
    const[nums,pl] = useState("");
    const chill = (event) =>{
pl (event.target.value)
    }
    const boom = ()=>{
        ij(nums)
    }


    const change = (event)=>{
        cd(event.target.value)
       
      
    }
    const click = ()=>{
        ef(name)
    }


 


    return(<>
   <form onSubmit={submits}>
    <div>
    <h1>you type =  {fullName} <br></br> password = {password} </h1>
        <input type ="text" placeholder="name" onChange={change} value={name} ></input>
        <button  onClick={click }>click me</button>
    </div>
    <br></br>
    <div>
        <input type ="number" placeholder="password" onChange={chill} value={nums} ></input>
        <button  onClick={boom }>submit</button>
    </div>
   </form>
   
    </>)
}
export default App;