import { useState } from "react";
import {FaCheck} from "react-icons/fa";
import{Link} from "react-router-dom"
function Learn() {
  const [message, setMessage] = useState("Waiting for action...");
//   const [msgComplete,setCompleteMsg]=useState(false)
//   const[showIcon,setShowIcon]=useState(false)
  const[completed,setCompleted]=useState(false)
  const handleClick = () => {
    setMessage("Button was clicked ☑️ ✅");
    // setCompleteMsg("Completed")
    // setShowIcon(true)
    setCompleted(true)
  }; 
  const handleReset = () => {
    setMessage("Waiting for action...");
    // setCompleteMsg(false)
    // setShowIcon(false)
    setCompleted(false)
  };
  return (
    <div style={{ padding: "40px" }}>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      </nav> 
      <h1>📘 Learn React - Events Practice</h1>

      <p>Status: {message}</p>

      <button onClick={handleClick} style={{ marginRight: "10px" }}>
        Click Me
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
      {/*conditional rendering*/}
      {completed &&(
        <p>Completed <FaCheck color="lime"/></p>
      )
      
      }    
      {/* <p> {msgComplete} {showIcon && <FaCheck color="lime"/> }</p> */}
      {completed &&(
      <Link to="/input">
      <button style={{marginTop:"20px"}}>Go to Input Page</button>
      </Link>
)}
    </div>
  );
} 
export default Learn;