import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = ({ setIsSignUp }) => {

    let navigate = useNavigate();

    let [form, setForm] = useState({
        email: "",
        password: "",
    });

    let [err, setErr] = useState("");
    let [success, setSuccess] = useState(false);

    function handleData(e) {

        let { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErr("");
        setSuccess(false);
    }

    function validation(e) {

        e.preventDefault();

        let { email, password } = form;

        setErr("");
        setSuccess(false);

        if (!email && !password) {
            setErr("Please fill all the details.");
            return;
        }

        if (!email) {
            setErr("Please enter your email.");
            return;
        }

        if (!password) {
            setErr("Please enter your password.");
            return;
        }

        let data = localStorage.getItem("user");

        if (!data) {
            setErr("No account found. Please Sign Up first.");
            return;
        }

        let user = JSON.parse(data);

        if (email.trim() !== user.email) {
            setErr("Please enter a valid email.");
            return;
        }

        if (password !== user.password) {
            setErr("Please enter a valid password.");
            return;
        }

        setSuccess(true);
        setErr("Login Successful!");

        setTimeout(() => {
            navigate("/");
        }, 1000);
    }

    return (

        <div className="login-page">

            <div className="login-container">

                <h2>Login</h2>

                <form onSubmit={validation}>

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

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={form.password}
                            onChange={handleData}
                        />

                    </div>

                    <div className="options">

                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>

                        <a
                            href="/"
                            onClick={(e) => e.preventDefault()}
                        >
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        className="login-btn"
                        type="submit"
                    >
                        Login
                    </button>

                    <p className="signup">

                        Don't have an account?{" "}

                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSignUp(true);
                            }}
                        >
                            Sign Up
                        </a>

                    </p>

                    {
                        err && (
                            <p className={success ? "login-success" : "login-error"}>
                                {err}
                            </p>
                        )
                    }

                </form>

            </div>

        </div>
    );
};
export default Login;