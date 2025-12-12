import { useState } from "react";
import { Link } from "react-router-dom";

function InputPage() {
  const [text, setText] = useState("");
  const [form, setForm] = useState({name:"",email:"",age:""});
  const [errors, setErrors] = useState({});
  const[isSubmitting,setlsSubmitting]=useState(false);
  const[submittedData,setSubmittedData]=useState(null);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setlsSubmitting(true);
    //Simulate async submit(replace with fetch/axios to backend)
    setTimeout(()=>{
      setSubmittedData({...form});
      setForm({ name: "" , email: "", age: ""});
      setlsSubmitting(false);
    },700);
  };

  //handle input changes (controlled inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    //clear specific field error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //basic validation
  const validate=()=>{
    const err={};
    if(!form.name.trim()) err.name="Name is required";
    if(!form.email.trim()) {
      err.email="Email is required"
    }
    else{
      const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) err.email = "Enter a valid email";
    }
    if (!form.age.toString().trim()) {
      err.age = "Age is required";
    } else {
      const n = Number(form.age);
      if (!Number.isInteger(n) || n <= 0) err.age = "Enter a valid whole number";
    }
    return err;
  }

  return (
    <div style={{ padding: "10px" }}>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/learn" style={{ marginRight: "20px" }}>
          Learn
        </Link>
        {/* <Link to="/input">Input Page</Link> */}
      </nav>
      <h2>React Input Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleInput}
        style={{ padding: "8px", width: "250px" }}
      />
      <p>You typed: {text}</p>
      <div>
        <h2>Input Form</h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div style={{ display: "flex" }}>
            <label htmlFor="name">Name</label> &nbsp;&nbsp;&nbsp;
            <input
              id="name"
              name="name"
              value={form.name}
              placeholder="Enter name"
              onChange={handleChange}
              style={{ padding: 8, width: "100%" }} 
            ></input>
            {errors.name && (
              <div style={{ color: "crimson", marginTop: 6 }}>
                {errors.name}
              </div>
            )}
          </div><br/>
          {/* Email */}
          <div style={{marginBottom:12,display: "flex"}}>
            <label htmlFor="Email">Email</label>&nbsp;&nbsp;&nbsp;
            <input id="email" name="email" value={form.email}
            onChange={handleChange} placeholder="you.example.com" type="email"
            style={{padding:8,width:"100%"}}
            />
            {errors.email && <div style={{ color: "crimson", marginTop: 6 }}>{errors.email}</div>}
          </div>
          {/* Age */}
        <div style={{ marginBottom: 12,display: "flex" }}>
          <label htmlFor="age">Age</label>&nbsp;&nbsp;&nbsp;
          <input
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
            inputMode="numeric"
            style={{ padding: 8, width: "100%" }}
          />
          {errors.age && <div style={{ color: "crimson", marginTop: 6 }}>{errors.age}</div>}
        </div>
          {/* buttons */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <button type="submit"  disabled={isSubmitting} style={{ padding: "8px 16px" }}>
           {isSubmitting?"Submitting...":"Submit"} 
          </button>
          <button
            type="button"
            onClick={() => { setForm({ name: "", email: "",age:"" }); 
            setErrors({}); setSubmittedData(null); }}
            style={{ padding: "8px 16px" }}
          >
            Clear
          </button>

          </div>
        </form>
        {/* show submitted result */}
        {submittedData &&(
          <div style={{marginTop:24,padding:12,background:"white",borderRadius:6,color:"black"}}>
            <h3>Submitted Data</h3>
             <div>
              <strong>Name:</strong>{submittedData.name}
             </div>
             <div><strong>Email:</strong> {submittedData.email}</div>
          <div><strong>Age:</strong> {submittedData.age}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputPage;
