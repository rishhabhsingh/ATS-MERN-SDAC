const ListRender = () => {
    const employees = [
        {
            id:1,
            name: "Tom"
        },
        {
            id:2,
            name: "Tomy"
        },
        {
            id:3,
            name: "Tony"
        },
        {
            id:4,
            name: "Toni"
        }
    ]
  return (
    <div>
        {
            employees.map((emp) => {
                return <li key = {emp.id}>ID: {emp.id} Name: {emp.name}</li>
            })
        }
    </div>
  )
}

export default ListRender