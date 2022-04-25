import { useState } from "react";
import axios from "axios";
export const Admin = () => {
  const [admin, setadmin] = useState({})
  function adminHandler(e) {
    const { name, value } = e.target
    setadmin({...admin,[name]:value})
  }
  function formHandler(e) {
    e.preventDefault()
    axios.post('http://localhost:8080/employee', {
     ...admin
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  alert("user added successfully")
  }
  console.log(admin)
  return (
    <form className="createEmployee" onSubmit={formHandler}>
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={adminHandler}/>
      <input type="text" placeholder="Employee id" name="employee_id"  onChange={adminHandler} />
      <select name="title" onChange={adminHandler}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select >
      <input type="number" placeholder="Salary" name="salary" onChange={adminHandler}/>
      <input type="text" placeholder="Image" name="image" onChange={adminHandler} />
      <input type="text" placeholder="User Name" name="username" onChange={adminHandler} />
      <input type="password" placeholder="Password" name="password" onChange={adminHandler}/>
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={adminHandler}
      />
      <select name="status" id="status" onChange={adminHandler}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={adminHandler}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
