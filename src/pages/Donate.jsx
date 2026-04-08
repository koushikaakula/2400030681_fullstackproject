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

  // ✅ FIXED SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName: form.title,
          quantity: Number(form.quantity), // ✅ FIXED (important)
          location: form.location,
        }),
      });

      // ✅ CHECK RESPONSE
      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      console.log("Saved:", data);

      alert("Donation Submitted Successfully ✅");

      // reset form
      setForm({
        title: "",
        description: "",
        category: "",
        quantity: "",
        condition: "",
        location: "",
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect backend ❌");
    }
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
            value={form.title}
            margin="normal"
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description *"
            name="description"
            value={form.description}
            margin="normal"
            onChange={handleChange}
            required
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
                required
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
                value={form.quantity}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          <TextField
            select
            fullWidth
            label="Condition *"
            name="condition"
            value={form.condition}
            margin="normal"
            onChange={handleChange}
            required
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Used - Good">Used - Good</MenuItem>
            <MenuItem value="Used - Fair">Used - Fair</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Location *"
            name="location"
            value={form.location}
            margin="normal"
            onChange={handleChange}
            required
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