import { Paper, Button, Avatar, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div style={{ padding: "60px", marginTop: "120px" }}>
      <Paper sx={{ p: 5, borderRadius: 4 }}>
        {/* HEADER SECTION */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "#7C3AED" }}>
            {user?.email?.charAt(0).toUpperCase()}
          </Avatar>

          <div>
            <h2 style={{ margin: 0 }}>Profile</h2>
            <p style={{ margin: 0, color: "gray" }}>
              Active HopeHive Member
            </p>
          </div>
        </div>

        <hr style={{ margin: "30px 0" }} />

        {/* USER INFO */}
        <p><strong>Name:</strong> {user?.email?.split("@")[0]}</p>
        <p><strong>Email:</strong> {user?.email}</p>

        {/* SMALL STATS */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>12</h3>
              <p>Donations Made</p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>5</h3>
              <p>Requests Posted</p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>Gold</h3>
              <p>Member Level</p>
            </Paper>
          </Grid>
        </Grid>

        {/* ACTION BUTTONS */}
        <div style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      </Paper>
    </div>
  );
}