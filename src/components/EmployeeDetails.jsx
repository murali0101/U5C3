import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const EmployeeDetails = () => {
  const { id } = useParams();
  const [data1, setData1] = useState(false);
  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    axios
    .get(`http://localhost:8080/employee/${id}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData1({ ...response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
console.log(data1,"ddd")
  return data1 ? (<div className="user_details">
  <img className="user_image" src={data1.image} />
  <h4 className="user_name">{data1.username}</h4>
  <span className="user_salary">${data1.salary}</span>
  <span className="tasks">
  {data1.tasks.map((e1) => {
     return (<li className="task">{e1}</li>)
   })}
  </span>
  Status: <b className="status"></b>
  Title: <b className="title"></b>
  {/* Show this button only if user is not already terminated (users status is working) */}
 {data1.status=="terminated"?"": <button className="fire">Fire Employee</button>}
    {/* Show this button only if user is not already team lead or terminated */}
    {data1.team=="Team Lead"?"":  <button className="promote">promote</button>}
 
</div>):"Loading..............."
  
};
