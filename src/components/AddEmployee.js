import React, { useState } from 'react'

import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    })

    const navigate =  useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee,[e.target.name]:value});
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList")
        }).catch((err) => {
            console.log(err);
        })
    }
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        })
    }


  return (
    <div className='flex max-w-2xl mx-auto shadow border'>
        <div className='px-8 py-9'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add new Employee</h1>
            </div>
            <div className='items-centre justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-sans font-normal'>
                    First Name
                </label>
                <input 
                type='text'
                className='h-8 w-96 border mt-2 px-2 py-2'
                name='firstName'
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
                ></input>
            
            </div>
            <div className='items-centre justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-sans font-normal'>
                    Last Name
                </label>
                <input 
                type='text'
                className='h-8 w-96 border mt-2 px-2 py-2'
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                ></input>
            </div>
            <div className='items-centre justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-sans font-normal'>
                    E-mail Address
                </label>
                <input 
                type='email'
                className='h-8 w-96 border mt-2 px-2 py-2'
                name='emailId'
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                ></input>
            </div>
            <div className='items-centre justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                onClick={saveEmployee}
                className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'> 
                    Save
                </button>
                <button 
                onClick={reset}
                className='rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700'> 
                    Clear
                </button>

            </div>

        </div>
    </div>
  )
}

export default AddEmployee
