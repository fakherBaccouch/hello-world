import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import burger_logo from '../images/burger_logo.png';
import { useAuth } from "../contexts/AuthContext";

import {
    BrowserRouter as Router,
    useHistory,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Signup = () => {
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()

    const [error, setError] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
       console.log(emailRef.current.value)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/addorder")

        } catch {
            setError("Failed to create an account")
        }


    }
    return (
        <div className="signin">
            <div style={{ position: "relative" }} className="signin_container">

                <h1 id='signin_title'>SIGNUP</h1>
                <img src={burger_logo} style={{ height: "100px", left: "33%", textAlign: "center", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                <form onSubmit={(event) => handleSubmit(event)}>

                    <div class="group">
                        <input name="email"
                            ref={emailRef} type="email" required></input>
                        <span class="highlight"></span>

                        <label>email addresse*</label>
                    </div>

                    <div class="group">
                        <input ref={passwordRef} name="password" type="password" required></input>
                        <span class="highlight"></span>
                        <label>password*</label>
                    </div>
                    <div class="group">
                        <input name="passwordConfirmation" ref={passwordConfirmationRef}
                            type="password" required></input>
                        <span class="highlight"></span>
                        <label>confirm password</label>
                    </div>
                    <button type="submit"
                        className="button button_signin">SIGN UP</button>
                </form>
                <p>Already have an account?</p>
                <Link to="/signin"><button className="button button_to_signup">SIGN IN</button></Link>
            </div>


        </div>
    )
}
export default Signup