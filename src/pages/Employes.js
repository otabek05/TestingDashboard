import React, {useState, useEffect} from "react";
import "../styles/bookings.css";


import EmployeeItem from "../components/Forms/EmployeeItem";
import { NavLink } from "react-router-dom";

const Employees= () => {
  const [employees, setEmployee] = useState([])

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //     setEmployee(res.data)
    //   })
    // .catch((err) => {
    //     console.log(err)
    //
    console.log("Hell World")
  }, [])
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Employees</h2>

        
          <div><NavLink className="btn btn-success" to="/register">Register new Employee</NavLink></div>

        <div className="booking__car-list">
          {employees?.map((item) => (
            <EmployeeItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
