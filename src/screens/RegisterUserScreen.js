import {useState,useContext} from "react";
import {  Form,Button } from 'react-bootstrap'
import { UserContext } from "../contexts/usersContext";
import {Link} from "react-router-dom"

const RegisterUserScreen = () => {
    const {registerUser}=useContext(UserContext)

    const [name, setName] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    function handleSubmit(e){
        e.preventDefault();
        const newuser ={
            name,
            email,
            password
        }
        registerUser(newuser)
    }
    return( <div
    style={{
      height: "80vh",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "50%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: "1fr",
        width:"500px",
        gridGap: 20,
        padding: "20px",
        border: "1px solid white",
      }}
    >
      <h1 className="text-center">SIGN UP</h1>
      <Form.Control
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Form.Control>
      <Form.Control type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Form.Control>
      <Link to="/login"><Button type="submit">SIGN UP</Button></Link>
      
    </Form>
  </div>)
}

export default RegisterUserScreen;
