import { Paper, Button, Avatar, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // ✅ ADD THIS

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ ADD THIS

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
            <h2 style={{ margin: 0 }}>{t("profile")}</h2> {/* ✅ CHANGED */}
            <p style={{ margin: 0, color: "gray" }}>
              {t("activeMember")}
            </p> {/* ✅ CHANGED */}
          </div>
        </div>

        <hr style={{ margin: "30px 0" }} />

        {/* USER INFO */}
        <p><strong>{t("name")}:</strong> {user?.email?.split("@")[0]}</p> {/* ✅ */}
        <p><strong>{t("email")}:</strong> {user?.email}</p> {/* ✅ */}

        {/* SMALL STATS */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>12</h3>
              <p>{t("donationsMade")}</p> {/* ✅ */}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>5</h3>
              <p>{t("requestsPosted")}</p> {/* ✅ */}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <h3>{t("gold")}</h3> {/* ✅ */}
              <p>{t("memberLevel")}</p> {/* ✅ */}
            </Paper>
          </Grid>
        </Grid>

        {/* ACTION BUTTONS */}
        <div style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
          >
            {t("goHome")} {/* ✅ */}
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/dashboard")}
          >
            {t("goDashboard")} {/* ✅ */}
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            {t("logout")} {/* ✅ */}
          </Button>
        </div>
      </Paper>
    </div>
  );
}