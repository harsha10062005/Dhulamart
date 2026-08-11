import { useState } from "react";
import SignUp from "../components/signup";
import Login from "../components/login";
import "../css/UserPage.css";

export const UserPage = () => {

    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="user-page">

            <div className="auth-layout">

                {/* ================= TOGGLE ================= */}

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


                {/* ================= FLIP CARD ================= */}

                <div
                    className={`auth-scene ${
                        isSignUp
                            ? "show-signup"
                            : "show-login"
                    }`}
                >

                    <div className="auth-card">

                        {/* ================= SIGN UP ================= */}

                        <div className="auth-face signup-face">

                            <SignUp
                                setIsSignUp={setIsSignUp}
                            />

                        </div>


                        {/* ================= LOGIN ================= */}

                        <div className="auth-face login-face">

                            <Login
                                setIsSignUp={setIsSignUp}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserPage;