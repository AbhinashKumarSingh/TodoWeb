import { useState } from "react";
import axios from "axios";
import { useNavigate ,Link} from 'react-router-dom';
function CreateEmployee () {
  const [avatar, setAvatar] = useState('');
  const [performance, setPerformance] = useState('');
const navigate=useNavigate();
  // function handleChange(e) {
  //   setEmployeeInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  // }

  function handleSubmit(e) {
    //e.preventDefault();

    axios
      .post("http://localhost:5000/create", {avatar,performance})
      .then((res) => {
        // setEmployeeInfo({ avatar: "", performance: "" });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
      //if(employeeInfo==true)
      navigate('/')
  }

  return (
      <>
    <section className="container">
    <Link to='/'>
      <button type="button" className="btn btn-primary">
        🔙 back
      </button></Link>

      <section className="todo-data">
        <form onSubmit={handleSubmit} className="form-group" noValidate>
          <label className="label" htmlFor="title">
            Avatar
          </label>
          <input
            type="text"
            name="name"
            value={avatar}
            onChange={(e)=>setAvatar(e.target.value)}
            className="input"
            required
          />
          <label className="label" htmlFor="description">
            Performance
          </label>
          <input
            type="number"
            name="email"
            value={performance}
            onChange={(e)=>setPerformance(e.target.value)}
            className="input"
            required
          />
          <button type="submit" className="btn btn-success">
            ➕ create Employee
          </button>
        </form>
      </section>
    </section>
    </>
  );
};

export default CreateEmployee;