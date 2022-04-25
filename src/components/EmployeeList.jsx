import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
export const EmployeeList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/employee")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData([...response.data]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  const nav1=useNavigate()
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((e) => {
        return (
          <div className="employee_card" onClick={() => {
            console.log("jjj")
            nav1(`/employees/${e.id}`)
          }}>
            <img className="employee_image" src={e.image} />
            <br></br>
            <span className="employee_name">{e.employee_name}</span>
            <br></br>
            <span className="employee_title">{e.title}</span>
          </div>
        );
      })}
    </div>
  );
};
