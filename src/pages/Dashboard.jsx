import { Grid, Paper, Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"; 
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout"; 
import PublicIcon from "@mui/icons-material/Public"; 
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { user, logout } = useAuth(); 
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Box sx={{ padding: "120px 60px 60px 60px", backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
      {/* HEADER SECTION */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#1f2937", display: 'flex', alignItems: 'center', gap: 2 }}>
             {t("dashboard")} <VerifiedUserIcon sx={{ color: '#7C3AED', fontSize: 40 }} />
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#6b7280", mt: 1 }}>
            Helping the world, one hive at a time.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
            <p style={{ color: "#6b7280", margin: 0 }}>Welcome back,</p>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#7C3AED" }}>{user.name || user.email || "User"}</Typography>
        </Box>
      </Box>

      {/* QUICK ACTIONS */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "50px" }}>
        <ActionCard title={t("browse")} icon="📦" path="/browse" />
        <ActionCard title={t("donate")} icon="❤️" path="/donate" />
        <ActionCard title={t("request")} icon="🙋‍♂️" path="/request" />
        <ActionCard title={t("profile")} icon="👤" path="/profile" />
        <Box
          onClick={() => { logout(); navigate("/login"); }}
          sx={{
            padding: "15px 35px",
            borderRadius: "50px",
            background: "#f3f4f6",
            color: "#ef4444",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "0.3s",
            "&:hover": { background: "#fee2e2" }
          }}
        >
          <LogoutIcon fontSize="small" /> Logout
        </Box>
      </Box>

      {/* PRIMARY STATS */}
      <Grid container spacing={4}>
        <StatCard title="Total Donations" value="128" icon={<VolunteerActivismIcon sx={{ fontSize: 32, color: "#7C3AED" }} />} />
        <StatCard title="Active Requests" value="34" icon={<InventoryIcon sx={{ fontSize: 32, color: "#EC4899" }} />} />
        <StatCard title="People Helped" value="76" icon={<PeopleIcon sx={{ fontSize: 32, color: "#7C3AED" }} />} />
        <StatCard title="Growth This Month" value="+22%" icon={<TrendingUpIcon sx={{ fontSize: 32, color: "#EC4899" }} />} />
      </Grid>

      {/* NEW: THEORY OF CHANGE & STRATEGY */}
      <Box sx={{ marginTop: "60px" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <AssignmentTurnedInIcon color="primary" /> Strategic Priorities
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                    <Typography variant="h6" sx={{ color: "#7C3AED", mb: 1 }}>Direct Impact</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Our core mission facilitates the rapid movement of surplus resources to high-need zones. By utilizing real-time request tracking, we ensure zero-waste distribution within 48 hours of item logging.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                    <Typography variant="h6" sx={{ color: "#7C3AED", mb: 1 }}>Circular Economy</Typography>
                    <Typography variant="body2" color="text.secondary">
                        We are shifting the charity paradigm from "one-way giving" to a circular model. Items donated via HopeHive are tracked for longevity, promoting repair and reuse over traditional disposal.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 4, height: '100%' }}>
                    <Typography variant="h6" sx={{ color: "#7C3AED", mb: 1 }}>Data Transparency</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Every transaction on the hive is ledger-backed. We provide donors with impact reports that detail exactly how their contribution reduced local poverty indices and carbon footprints.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
      </Box>

      {/* ANALYTICS SECTION */}
      <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Monthly Engagement 📊</Typography>
            <Box
            sx={{
                height: "250px",
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                borderRadius: "24px",
                padding: "40px",
                color: "white",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)",
            }}
            >
            {[40, 70, 50, 90, 60, 100, 80, 95].map((h, i) => (
                <Box
                key={i}
                sx={{
                    width: "45px",
                    height: `${h}%`,
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "10px 10px 4px 4px",
                    transition: "height 0.3s ease",
                    "&:hover": { background: "#fff", cursor: 'pointer', transform: 'scaleX(1.1)' }
                }}
                />
            ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Resource Split</Typography>
            <Paper sx={{ p: 3, borderRadius: 4, border: "1px solid #f0f0f0" }}>
                <List>
                    <ImpactListItem label="Food & Nutrition" percent={45} color="#7C3AED" />
                    <ImpactListItem label="Education & Books" percent={25} color="#EC4899" />
                    <ImpactListItem label="Clothing & Apparel" percent={20} color="#7C3AED" />
                    <ImpactListItem label="Healthcare Items" percent={10} color="#EC4899" />
                </List>
            </Paper>
          </Grid>
      </Grid>

      {/* MISSION IMPACT SECTION */}
      <Box sx={{ marginTop: "70px" }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FavoriteIcon sx={{ color: "#EC4899" }} /> Global Impact & Resilience
        </h2>
        <Divider sx={{ mb: 4 }} />

        <Paper elevation={0} sx={{ p: 4, borderRadius: 6, border: "1px solid #f0f0f0", backgroundColor: "#fff" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ color: '#7C3AED', fontWeight: 'bold' }}>
                    <PublicIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Community Outreach
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    <strong>HopeHive</strong> operates on a decentralized model, connecting hyper-local donors with verified recipients. This year, we successfully launched the "Rural Connect" initiative, ensuring that 30% of our resources reach off-grid areas.
                </Typography>
                <p>🤝 <strong>Radical Transparency:</strong> Every donation is tracked with a unique ID, ensuring end-to-end accountability.</p>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ color: '#EC4899', fontWeight: 'bold' }}>
                    <TrendingUpIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Sustainability Goals
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    Our logistics optimization engine has effectively lowered the carbon cost of giving. By grouping donations by neighborhood, we minimize the travel distance of delivery vehicles.
                </Typography>
                <p>♻️ <strong>Eco-Friendly:</strong> We’ve diverted 2.4 tons of textile waste from local landfills this quarter.</p>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

/* HELPER COMPONENTS */

function ImpactListItem({ label, percent, color }) {
    return (
        <ListItem sx={{ px: 0 }}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{percent}%</Typography>
                </Box>
                <Box sx={{ width: '100%', height: 8, bgcolor: '#f0f0f0', borderRadius: 4 }}>
                    <Box sx={{ width: `${percent}%`, height: '100%', bgcolor: color, borderRadius: 4 }} />
                </Box>
            </Box>
        </ListItem>
    );
}

function ActionCard({ title, icon, path }) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(path)}
      sx={{
        padding: "15px 35px",
        borderRadius: "50px",
        background: "linear-gradient(45deg, #7C3AED, #EC4899)",
        color: "white",
        fontWeight: 600,
        boxShadow: "0 6px 15px rgba(124, 58, 237, 0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        "&:hover": { transform: "translateY(-3px)", boxShadow: "0 10px 20px rgba(124, 58, 237, 0.4)" }
      }}
    >
      <span>{icon}</span>
      {title}
    </Box>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 6, border: "1px solid #f0f0f0", textAlign: 'center' }}>
        <Box sx={{ mb: 1 }}>{icon}</Box>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>{value}</Typography>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>{title}</Typography>
      </Paper>
    </Grid>
  );
}