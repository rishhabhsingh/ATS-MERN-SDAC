import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormHandling = () => {
    const [user, setuser] = useState({uname: '', upass:''})

    const handleLogin = (e) => {
        e.preventDefault()
        alert(`Welcome, ${user.uname}!`)
    }
  return (
    <div>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e) => setuser({...user, uname: e.target.value})}
                                    />
                                    <label for="formId1">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="formId2"
                                        id="formId2"
                                        placeholder=""
                                        onChange={(e) => setuser({...user, upass: e.target.value})}
                                    />
                                    <label for="formId2">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>  
    </div>
  )
}

export default FormHandling