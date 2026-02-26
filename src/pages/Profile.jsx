import { useAuth } from "../context/AuthContext";
import { Paper } from "@mui/material";

export default function Profile(){
  const { user } = useAuth();

  return(
    <div style={{ padding:"60px" }}>
      <Paper sx={{ p:4, borderRadius:4 }}>
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </Paper>
    </div>
  );
}