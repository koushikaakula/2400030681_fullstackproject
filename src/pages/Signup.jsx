import { useState } from "react";
import { TextField, Button, Paper, Alert } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ IMPORTANT

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth(); // ✅ USE CONTEXT

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [strength, setStrength] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // 🔥 Password strength checker
    if (name === "password") {
      if (value.length < 6) setStrength("Weak");
      else if (/[A-Z]/.test(value) && /[0-9]/.test(value))
        setStrength("Strong");
      else setStrength("Medium");
    }
  };

  // ✅ FIXED SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required ❌");
      return;
    }

    // ❌ Password mismatch
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    // ❌ Weak password
    if (strength === "Weak") {
      alert("Password too weak ❌");
      return;
    }

    // ✅ CALL AUTH CONTEXT
    const result = signup(form.name, form.email, form.password);

    if (result.success) {
      alert("Account Created ✅");
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <Paper sx={{ p: 5, width: "100%", maxWidth: 500, borderRadius: 4 }}>
        <h2>Sign Up</h2>

        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            onChange={handleChange}
          />

          {/* 🔥 PASSWORD STRENGTH */}
          {form.password && (
            <p
              style={{
                color:
                  strength === "Strong"
                    ? "green"
                    : strength === "Medium"
                    ? "orange"
                    : "red",
                margin: "5px 0",
              }}
            >
              Strength: {strength}
            </p>
          )}

          {/* 🔥 CONFIRM PASSWORD */}
          <TextField
            fullWidth
            label="Re-enter Password"
            name="confirmPassword"
            type="password"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            CREATE ACCOUNT
          </Button>
        </form>

        <p style={{ marginTop: 20 }}>
          Already have account? <Link to="/login">Sign In</Link>
        </p>
      </Paper>
    </div>
  );
}