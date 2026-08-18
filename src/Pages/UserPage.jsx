import { useState } from "react";
import SignUp from "../components/signup";
import Login from "../components/login";
import "../css/UserPage.css";
import Header from "../components/header";

export const UserPage = () => {

    const [isSignUp, setIsSignUp] = useState(true);

    return (

        <>
            <div className="user-page">
            <div className="auth-layout">
                <div className="toggle-container">

                    <button
                        type="button"
                        className={`toggle-btn ${
                            isSignUp ? "active" : ""
                        }`}
                        onClick={() => setIsSignUp(true)}
                    >
                        Sign Up
                    </button>

                    <button
                        type="button"
                        className={`toggle-btn ${
                            !isSignUp ? "active" : ""
                        }`}
                        onClick={() => setIsSignUp(false)}
                    >
                        Login
                    </button>
                </div>

                <div
                    className={`auth-scene ${
                        isSignUp
                            ? "show-signup"
                            : "show-login"
                    }`}
                >

                    <div className="auth-card">
                        <div className="auth-face signup-face">
                            <SignUp
                                setIsSignUp={setIsSignUp}
                            />
                        </div>

                        <div className="auth-face login-face">
                            <Login
                                setIsSignUp={setIsSignUp}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
        
    );
};

export default UserPage;