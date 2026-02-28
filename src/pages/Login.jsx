import { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Added CAPTCHA states
  const [captcha, setCaptcha] = useState(
    Math.random().toString(36).substring(2, 7)
  );
  const [captchaInput, setCaptchaInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ CAPTCHA validation added
    if (captchaInput !== captcha) {
      alert("Verification code does not match");
      return;
    }

    login(email);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Paper sx={{ p: 5, width: 400, borderRadius: 4 }}>
        <h2 style={{ textAlign: "center" }}>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ✅ CAPTCHA UI Added */}
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                background: "#f3f4f6",
                padding: "10px",
                fontWeight: "bold",
                letterSpacing: "3px",
                fontSize: "20px",
                textAlign: "center",
                borderRadius: "8px",
                userSelect: "none",
                marginBottom: "10px",
              }}
            >
              {captcha}
            </div>

            <TextField
              fullWidth
              label="Enter verification code"
              margin="normal"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <Button
              onClick={() =>
                setCaptcha(Math.random().toString(36).substring(2, 7))
              }
              size="small"
              sx={{ mt: 1 }}
            >
              Refresh Code
            </Button>
          </div>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>

        <p style={{ marginTop: 20 }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </Paper>
    </div>
  );
}