import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { loginUser } from "../../utils/apiBackend";
import { Navigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser({ email, password });

            localStorage.setItem("user", JSON.stringify(res.data));

            alert("Login Successful");
            navigate("/");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="authPage">
            <ContentWrapper>
                <div className="authBox">
                    <h2>Login</h2>

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Login</button>
                    </form>

                    <p>
                        Don't have an account?{" "}
                        <span onClick={() => navigate("/register")}>
                            Register
                        </span>
                    </p>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Login;