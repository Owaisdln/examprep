import React, { useState } from "react";
import axios from "axios";

const ExamineeTable = () => {
 const [data , setData] = useState([]);
 const handlefetch= async()=>{
  const res = await axios.get('http://localhost:5000/api/examinee')
    setData(res.data.data)
  // console.log(res.data.data)
 }
 useState(()=>{
  handlefetch()
 },[])

  return (
    <div >
      <h2>Examinee Information</h2>
      <table className="table table-bordered table-hover">
   
          <tr>
            <th >S.no</th>
            <th >Name</th>
            <th >Email</th>
            <th >College</th>
            <th >Qualification</th>
            <th >Address</th>
            <th >Number</th>
          </tr>
  
          
          {data.map((item, i)=>(
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.college}</td>
              <td>{item.qualification}</td>
              <td>{item.address}</td>
              <td>{item.number}</td>
            </tr>
            ))}
          
    
      </table>
    </div>
  );
};

export default ExamineeTable;

