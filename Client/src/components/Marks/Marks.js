import { useState } from "react";
import Axios from "axios";
import "./style.css";

function Marks() {
  const [rollno, setRollno] = useState(1);
  const [name, setName] = useState("");
  const [maths, setMaths] = useState(0);
  const [phy, setPhy] = useState(0);
  const [chem, setChem] = useState(0);
  let formRef = null;

  const addStudent = e => {
    e.preventDefault();

    Axios.post("http://localhost:3001/create", {
      rollno: parseInt(rollno),
      name: name,
      maths: parseInt(maths),
      phy: parseInt(phy),
      chem: parseInt(chem)
    }).then(() => {
      console.log("Succesfully added");
      alert("Successfully Submitted");
    });
    formRef.reset();
  };

  return (
    <div>
      <h1>Enter marks</h1>

      <div className="form">
        <form ref={ref => (formRef = ref)}>
          <label>Roll No.</label>
          <input
            type="number"
            placeholder="Enter Your RollNo "
            onChange={e => {
              setRollno(e.target.value);
            }}
            min="1"
            className="field"
            required
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name "
            onChange={e => {
              setName(e.target.value);
            }}
            pattern="[A-Z][a-z]"
            className="field"
            required
          />
          <label>Maths Marks</label>
          <input
            type="number"
            placeholder="Enter Your Maths Marks "
            onChange={e => {
              setMaths(e.target.value);
            }}
            min="1"
            max="100"
            className="field"
            required
          />
          <label>Physics Marks</label>
          <input
            type="number"
            placeholder="Enter Your Physics Marks "
            onChange={e => {
              setPhy(e.target.value);
            }}
            min="1"
            max="100"
            className="field"
            required
          />
          <label>Chemistry Marks</label>
          <input
            type="number"
            placeholder="Enter Your Chemistry Marks "
            onChange={e => {
              setChem(e.target.value);
            }}
            min="1"
            max="100"
            className="field"
            required
          />

          <button onClick={addStudent}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Marks;
