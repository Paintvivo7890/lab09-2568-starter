import {useState} from "react";

export default function HelloMyNamePage() {
  const [name,setName] = useState("");
  const [result,setResult] = useState("");
  const nameInput = (event:any)=>{
    setName(event.target.value);
  };
  
  const greetBtnOnclicke = () => {
    setResult(`Hi kub ${name}`);
  };
  
  
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclicke}>Greet Me</button>
      {/* Result Text */}
      <p>{result}</p>
    </div>
  );
}