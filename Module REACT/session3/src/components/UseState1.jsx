import { useState } from 'react'

const UseState1 = () => {
    const [emp, setEmp] = useState({name: "Tom", salary: 1000})
  return (
    <div>
        <input type="text" value={emp.name} onChange={(e) => setEmp({...emp, name: e.target.value})}/>
        <input type="number" value={emp.salary} onChange={(e) => setEmp({...emp, salary: e.target.value})}/>
        <h1>Name: {emp.name}</h1>
        <h1>Salary: {emp.salary}</h1>
    </div>
  )
}

export default UseState1