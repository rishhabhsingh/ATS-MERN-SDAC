import {useState} from 'react'

const UseStateArray = () => {
    const [employees, setemployees] = useState([])
    const [name, setname] = useState('')
    const [salary, setsalary] = useState(0)

    const add = () => {
        setemployees([
            ...employees, {
                id: employees.length+1,
                ename: name,
                esal: salary
            }
        ])
    }

  return (
    <div>
        Name:
        <input type="text" onChange={(e) => setname(e.target.value)}/>
        Salary
        <input type="number" onChange={(e) => setsalary(e.target.value)}/>
        <button onClick={add}>Add Employee</button>

        <ul>
            {
                employees.map((employees) => {
                    return <li key = {employees.id}>ID: {employees.id} Name: {employees.ename} Salary: {employees.esal}</li>
                })
            }
            
        </ul>
    </div>
  )
}

export default UseStateArray