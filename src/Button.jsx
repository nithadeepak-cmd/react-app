// function Button(){
//     return(
//     <button style={{
//         color:"white",
//         backgroundcolor:"red",
//         padding:"10px 20px"
//         }}>
//         Click me
//         </button>
//         );
// }
// export default Button;
import { useNavigate } from "react-router-dom";

// function Button() {
//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() => navigate("/learn")}
//       style={{
//         color: "black",
//         backgroundColor: "blue",
//         padding: "10px 20px",
//         borderRadius: "8px",
//         cursor: "pointer"
//       }}
//     >
//       Click me to learn React
//     </button>
//   );
//}

//Creating multiple buttons in same reusable Button Component
function Button({text,to}){
  const navigate=useNavigate();
  const btnStyle={color: "black",
        backgroundColor: "blue",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer"};
        return(
          <button onClick={()=>navigate(to)} style={btnStyle}>{text}</button>
        );
}



export default Button;