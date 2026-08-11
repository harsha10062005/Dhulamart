import { useState } from "react";
import "../css/signup.css";

const SignUp = ({ setIsSignUp }) => {

    let [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    let [err, setErr] = useState("");
    let [success, setSuccess] = useState(false);

    let Pattern = {
        errName: /^[A-Za-z ]{3,}$/,
        errEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errMobile: /^[6-9]\d{9}$/,
        errPassword: /^.{8,}$/,
    };

    function handleData(e) {
        let { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    }

    function validation(e) {
        e.preventDefault();
        let { name, email, mobile, password } = form;
        let {
            errName,
            errEmail,
            errMobile,
            errPassword
        } = Pattern;

        setSuccess(false);

        if (!errName.test(name.trim())) {
            setErr("Please enter a valid name.");
            return;
        }

        if (!errEmail.test(email.trim())) {
            setErr("Please enter a valid email.");
            return;
        }

        if (!errMobile.test(mobile.trim())) {
            setErr("Please enter a valid mobile number.");
            return;
        }

        if (!errPassword.test(password)) {
            setErr("Password must contain at least 8 characters.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(form));

        setSuccess(true);
        setErr("Registration Successful!");

        setTimeout(() => {
            setIsSignUp(false);
        }, 2000);

    }

    return (
        <div className="signup-page">
            <div className="signup-wrapper">
                <div className="signup-container">
                    <form onSubmit={validation}>
                        <h2>Create Account</h2>
                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                name="name"
                                value={form.name}
                                onChange={handleData}
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={form.email}
                                onChange={handleData}
                            />
                        </div>

                        <div className="input-group">
                            <label>Mobile</label>
                            <input
                                type="text"
                                placeholder="Enter your mobile number"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleData}
                                maxLength="10"
                            />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={form.password}
                                onChange={handleData}
                            />
                        </div>

                        <button type="submit">
                            Sign Up
                        </button>

                        <p className="login-link">
                            Already have an account?{" "}
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsSignUp(false);
                                }}
                            >
                                Login
                            </a>
                        </p>
                    </form>

                </div>

                {
                    err && (
                        <div className={`message-box ${success ? "success" : "error"}`}>
                            <h3>
                                {success
                                    ? "Success"
                                    : "Validation Error"
                                }
                            </h3>
                            <p>
                                {err}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SignUp;