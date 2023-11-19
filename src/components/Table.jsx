import React from "react";
import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>1. Name</th>
       <th>2. Type of Sattelite</th>
       <th>3. Launch Date</th>
       <th>4. Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id) => (
     <tr key={data.id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational ? "Active": "Inactive"}</td>
     </tr>
      ))}
     </tbody>
   </table>
  );
};

export default Table;