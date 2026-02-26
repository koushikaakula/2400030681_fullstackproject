import { useState } from "react";
import { TextField, Button, Paper, MenuItem, Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Request() {
  const { user } = useAuth();
  if (!user) return null;

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted!");
  };

  return (
    <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 5, width: "100%", maxWidth: 900, borderRadius: 4 }}>
        <h2 style={{ marginBottom: 30 }}>Request Items</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="What do you need? *"
            name="title"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description *"
            margin="normal"
            name="description"
            onChange={handleChange}
          />

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Category *"
                name="category"
                onChange={handleChange}
              >
                <MenuItem value="Clothes">Clothes</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Books">Books</MenuItem>
                <MenuItem value="Furniture">Furniture</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Quantity Needed *"
                type="number"
                name="quantity"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Location *"
            margin="normal"
            name="location"
            placeholder="City, State"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Contact Information *"
            margin="normal"
            name="contact"
            placeholder="Phone or Email"
            onChange={handleChange}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Submit Request
          </Button>
        </form>
      </Paper>
    </div>
  );
}