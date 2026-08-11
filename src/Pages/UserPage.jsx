import { useState } from "react";
import SignUp from "../components/signup";
import Login from "../components/login";
import "../css/UserPage.css";

export const UserPage = () => {

    const [isSignUp, setIsSignUp] = useState(true);

    return (

        <div className="user-page">

            <div className={`toggle-container ${!isSignUp ? "login" : ""}`}>

                <button
                    className={`toggle-btn ${isSignUp ? "active" : ""}`}
                    onClick={() => setIsSignUp(true)}
                >
                    Sign Up
                </button>

                <button
                    className={`toggle-btn ${!isSignUp ? "active" : ""}`}
                    onClick={() => setIsSignUp(false)}
                >
                    Login
                </button>

            </div>

            {
                isSignUp
                    ? <SignUp setIsSignUp={setIsSignUp} />
                    : <Login setIsSignUp={setIsSignUp} />
            }

        </div>

    );
};

export default UserPage;