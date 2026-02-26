import { useState } from "react";
import { TextField, Button, Paper, MenuItem, Grid } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function Donate() {
  const { user } = useAuth();
  if (!user) return null;

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    condition: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation Submitted!");
  };

  return (
    <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 5, width: "100%", maxWidth: 900, borderRadius: 4 }}>
        <h2 style={{ marginBottom: 30 }}>Donate Items</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Item Title *"
            name="title"
            placeholder="e.g., Winter Coats, Canned Food, Backpacks"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description *"
            name="description"
            placeholder="Describe the items in detail..."
            margin="normal"
            onChange={handleChange}
          />

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Category *"
                name="category"
                value={form.category}
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
                label="Quantity *"
                name="quantity"
                type="number"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <TextField
            select
            fullWidth
            label="Condition *"
            name="condition"
            margin="normal"
            onChange={handleChange}
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Used - Good">Used - Good</MenuItem>
            <MenuItem value="Used - Fair">Used - Fair</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Location *"
            name="location"
            placeholder="City, State"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Submit Donation
          </Button>
        </form>
      </Paper>
    </div>
  );
}