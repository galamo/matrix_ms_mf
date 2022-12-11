import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import "./index.css";

export const Login = () => (
    <div className="container">
        <h2> Login From Remote</h2>
        <div id="loginform">
            <FormHeader title="Login" />
            <Form />
            <OtherMethods />
        </div>
    </div>
);


const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => {
    // useRef Or useState
    const [email, setEmail] = useState("la@matrix.com")
    const [password, setPassword] = useState("pass2")

    async function callApiLogin() {
        try {
            // YOU SHOULD DO THIS WITH POST
            // la@matrix.com
            // pass2
            const result = await axios.get(`http://localhost:4000/login?user=${email}&pass=${password}`)
            const isUserExist = result?.data?.result?.result?.id;
            if (isUserExist) {
                alert("Success!")
                setTimeout(() => {
                    // implement redirect function and pass to props
                    window.location.href = window.location.origin + "/countries"
                }, 1000);
            } else {
                throw new Error()
            }
        } catch (error) {
            alert("Error in login ")
        }
    }


    return (<div>
        <div className="row">
            <label>{"Enter Email"}</label>
            <input onChange={(elm) => {
                setEmail(elm?.target?.value)
            }} value={email} type={"string"} placeholder={"Email"} />
            <span>  {email.length > 20 ? "Email is too long" : ""} </span>
        </div>
        <div className="row">
            <label>{"Enter password"}</label>
            <input onChange={(elm) => {
                setPassword(elm?.target?.value)
            }} value={password} type={"string"} placeholder={"password"} />
        </div>
        <div id="button" className="row">
            <button onClick={() => {
                callApiLogin()
            }} >{"Login"}</button>
        </div>
    </div>)
}






const OtherMethods = props => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
);

const Google = props => (
    <a href="#" id="googleIcon"></a>
);
