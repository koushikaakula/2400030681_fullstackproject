import { useState } from "react";
import { TextField, Button, Paper, Alert, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const [captcha, setCaptcha] = useState(
    Math.random().toString(36).substring(2, 7)
  );
  const [captchaInput, setCaptchaInput] = useState("");

  // ✅ ONLY THIS FUNCTION UPDATED
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (captchaInput !== captcha) {
      setError("Verification code does not match ❌");
      return;
    }

    const result = login(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed ❌");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backgroundColor: "rgba(255, 255, 255, 0.3)", 
        backdropFilter: "blur(10px)", 
      }}
    >
      <Paper 
        elevation={10} 
        sx={{ 
          p: 5, 
          width: "90%", 
          maxWidth: 400, 
          borderRadius: 4,
          backgroundColor: "#fff" 
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0 }}>Sign In</h2>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                background: "#f3f4f6",
                padding: "10px",
                fontWeight: "bold",
                letterSpacing: "4px",
                fontSize: "22px",
                textAlign: "center",
                borderRadius: "8px",
                userSelect: "none",
                marginBottom: "10px",
                fontFamily: "monospace",
                color: "#555"
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
              required
            />

            <Button
              onClick={() =>
                setCaptcha(Math.random().toString(36).substring(2, 7))
              }
              size="small"
              sx={{ mt: 1, textTransform: "none" }}
            >
              Refresh Code
            </Button>
          </div>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ 
              mt: 3, 
              py: 1.2,
              borderRadius: "8px",
              background: "linear-gradient(90deg, #7c4dff, #ab47bc)",
              fontWeight: "bold"
            }}
          >
            Login
          </Button>
        </form>

        <p style={{ marginTop: 25, textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#7c4dff", fontWeight: "bold", textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </Paper>
    </Box>
  );
}