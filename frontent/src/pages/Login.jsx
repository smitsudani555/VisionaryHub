import React,{useState} from "react";
import '../styles/login.css'

const Login = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Login Data : ",{username,email,password});
        
    }

    return (
        <>
            <div className="login-container">
                <h2 className="login-heading">Login</h2>
                <form action="" onSubmit={handlesubmit}>
                    <div className="input-group">
                        <label className="input-label">Username</label>
                        <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login