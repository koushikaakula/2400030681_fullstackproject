import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Avatar, Button, TextField, Grid,
  Box, Typography, Paper, Alert
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!name || !email || !password){
      setError("All fields required");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    const result = signup(name,email,password);

    if(!result.success){
      setError(result.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Grid container component="main" sx={{ height:"100vh" }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Box sx={{ my:8,mx:4 }}>
          <Avatar sx={{ bgcolor:"#EC4899" }}>
            <PersonAddIcon/>
          </Avatar>

          <Typography variant="h5">Sign Up</Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField fullWidth label="Full Name" margin="normal"
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField fullWidth label="Email" margin="normal"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField fullWidth label="Password" type="password" margin="normal"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Button fullWidth type="submit"
              sx={{
                mt:2,
                background:"linear-gradient(90deg,#9333EA,#EC4899)",
                color:"white"
              }}
            >
              Create Account
            </Button>

            <Typography sx={{ mt:2 }}>
              Already have account? <Link to="/login">Sign In</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        item xs={false} sm={4} md={7}
        sx={{
          background:"linear-gradient(90deg,#4F46E5,#9333EA,#EC4899)"
        }}
      />
    </Grid>
  );
}