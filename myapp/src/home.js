import { useState } from "react";
import './App.css';
export default function Form()
{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [submitted,setSubmitted]=useState(false);
    const handleName=(e)=>{
        setName(e.target.value);
    };
     const handleEmail=(e)=>{
        setEmail(e.target.value);
    };
        const handlePassword=(e)=>{
        setPassword(e.target.value);
    };
        const handleSubmit=(e)=>{
        e.preventDefault();
        if(name===''||email===''||password===''){
            alert("please enter all the fields");
        }else{
            setSubmitted(true);
        }
    };
    const successMessage=()=>{
        if(submitted)
            return(
            <div className="success">
                <h1>user  {name} successfully registered!!</h1>
            </div>
            );
    };
    return(
        <div className="form">
            <div>
                <h1>user registered!!</h1>
            </div>
            <div className="messages">
                {successMessage()}
            </div>
            <form>
                <fieldset>
                    <label className="label">Name</label>
                    <input onChange={handleName} value={name} type="text"/><br></br>
                    <label className="label">Email</label>
                    <input onChange={handleEmail} value={email} type="email"/><br></br>
                      <label className="label">Password</label>
                    <input onChange={handlePassword} value={password} type="password"/><br></br>
                     <button onClick={handleSubmit}  type="submit">Submit</button>
                </fieldset>
            </form>
            </div>
            );
}
