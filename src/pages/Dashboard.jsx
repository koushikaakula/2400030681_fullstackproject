import { Grid, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Dashboard() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: 30 }}>Dashboard</h1>

      {/* ACTION BUTTONS */}
      <div style={{ display: "flex", gap: "25px", marginBottom: "50px" }}>
        <ActionCard title="Browse Donations" icon="📦" />
        <ActionCard title="Donate Now" icon="❤️" />
        <ActionCard title="Request Help" icon="🙋‍♂️" />
        <ActionCard title="Profile" icon="👤" />
      </div>

      {/* STATS SECTION */}
      <Grid container spacing={4}>
        <StatCard
          title="Total Donations"
          value="128"
          icon={<VolunteerActivismIcon sx={{ color: "#7C3AED" }} />}
        />
        <StatCard
          title="Active Requests"
          value="34"
          icon={<InventoryIcon sx={{ color: "#EC4899" }} />}
        />
        <StatCard
          title="People Helped"
          value="76"
          icon={<PeopleIcon sx={{ color: "#7C3AED" }} />}
        />
        <StatCard
          title="Growth This Month"
          value="+22%"
          icon={<TrendingUpIcon sx={{ color: "#EC4899" }} />}
        />
      </Grid>

      {/* GRAPH SECTION */}
      <div style={{ marginTop: "60px" }}>
        <h2>Monthly Activity 📊</h2>
        <div
          style={{
            height: "200px",
            background: "linear-gradient(45deg, #7C3AED, #EC4899)",
            borderRadius: "20px",
            marginTop: "20px",
            padding: "20px",
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            gap: "15px",
          }}
        >
          {[40, 70, 50, 90, 60, 100].map((h, i) => (
            <div
              key={i}
              style={{
                width: "40px",
                height: `${h}%`,
                background: "white",
                borderRadius: "8px",
              }}
            />
          ))}
        </div>
      </div>

      {/* IMPACT SECTION */}
      <div style={{ marginTop: "70px" }}>
        <h2>
          <FavoriteIcon sx={{ color: "#7C3AED" }} /> Our Impact
        </h2>

        <Paper sx={{ p: 4, mt: 3, borderRadius: 4 }}>
          <p>
            🌍 HopeHive connects donors with families in need across multiple
            cities.
          </p>
          <p>
            📦 Over <strong>500+ essential items</strong> have been distributed
            including food, clothes, and school supplies.
          </p>
          <p>
            👨‍👩‍👧‍👦 More than <strong>300 families</strong> supported through
            community-driven donations.
          </p>
          <p>
            ♻️ Promoting sustainability by reducing waste and encouraging reuse.
          </p>
          <p>
            🤝 Building a stronger, caring community — one donation at a time.
          </p>
        </Paper>
      </div>
    </div>
  );
}

function ActionCard({ title, icon }) {
  return (
    <div
      style={{
        padding: "20px 30px",
        borderRadius: "20px",
        background: "linear-gradient(45deg, #7C3AED, #EC4899)",
        color: "white",
        fontWeight: 500,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <span style={{ marginRight: 8 }}>{icon}</span>
      {title}
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Grid item xs={12} md={3}>
      <Paper sx={{ p: 4, borderRadius: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {icon}
          <h3>{value}</h3>
        </div>
        <p>{title}</p>
      </Paper>
    </Grid>
  );
}