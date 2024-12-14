import React, { useState, useEffect } from 'react';
import './App.css';
import { EmployeeData } from './EmployeeData';

function App() {
  const [data, setData] = useState([]);
  const[firstName, SetfirstName] = useState('')
  const[lastName, SetlastName] = useState('')
  const[age, Setage] = useState(0)
  const[id, SetId] = useState(0)

  useEffect(() => {
    setData(EmployeeData);
  }, []);


  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if(dt !== undefined)
    {
      SetId(id);
      SetfirstName(dt[0].firstName);
      SetlastName(dt[0].LastName);
      Setage(dt[0].age);
    }

  }
  const handleDelete = (id) => {
    if (id > 0);
    {
      if (window.confirm("are you sure to delete this item?")) {
      const dt = data.filter(item => item.id !== id);
      setData(dt);
      }
    }
  }
  const handleSave = () => {
    
  }
  const handleClear = () => {
    SetId(0);
      SetfirstName('');
      SetlastName('');
      Setage('')
    
  }
  return (
     
     <><div className="App">


      <div style={{ display: 'flex', justifyContent: 'center',marginTop:"10px",marginbottom:"10px" }}>
      </div>
      <label>firstName :
        <input type='text' placeholder='Enter first name' onchange={(e) => SetfirstName(e.target.value)}value={firstName} />
      </label>
    </div><div>

        <label>lastName :
          <input type='text' placeholder='Enter last name' onchange={(e) => SetlastName(e.target.value)}value={lastName} />
        </label>
      </div><div>

        <label>age :
          <input type='text' placeholder='Enter age' onchange={(e) => Setage(e.target.value)}value={age} />
        </label>
      </div>
      <div>
      <button className='btn btn-primary' onClick={() => handleSave()}>Save</button>&nbsp;
      <button className='btn btn-danger' onClick={() => handleClear()}>Clear</button>
       
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                  <button className='btn btn-danger' onClick={() => handleEdit(item.id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  );
}

export default App;
         