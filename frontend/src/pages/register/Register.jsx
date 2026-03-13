import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { registerUser } from "../../utils/apiBackend";

const Register = () => {
const navigate = useNavigate();

```
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async (e) => {
    e.preventDefault();

    try {
        await registerUser({
            name,
            email,
            password
        });

        alert("Account created successfully");
        navigate("/login");
    } catch (error) {
        alert("Registration failed");
    }
};

return (
    <div className="authPage">
        <ContentWrapper>
            <div className="authBox">
                <h2>Register</h2>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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

                    <button type="submit">
                        Register
                    </button>
                </form>

                <p>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </ContentWrapper>
    </div>
);
```

};

export default Register;
