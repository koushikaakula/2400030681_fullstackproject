import ChatBot from "./ChatBot";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LoginIcon from "@mui/icons-material/Login";
import ParticlesBackground from "./ParticlesBackground";
import { Link, Outlet, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const location = useLocation();
  const { i18n, t } = useTranslation();

  return (
    <>
      <nav style={navStyle}>
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FavoriteIcon sx={{ color: "#7C3AED" }} />
          <h2 style={{ margin: 0, color: "#7C3AED" }}>HopeHive</h2>
        </div>

        {/* MENU */}
        <div style={menuStyle}>
          <NavItem
            to="/"
            label={t("home")}
            icon={<HomeIcon />}
            active={location.pathname === "/"}
          />
          <NavItem
            to="/browse"
            label={t("browse")}
            icon={<SearchIcon />}
            active={location.pathname === "/browse"}
          />
          <NavItem
            to="/donate"
            label={t("donate")}
            icon={<VolunteerActivismIcon />}
            active={location.pathname === "/donate"}
          />
          <NavItem
            to="/request"
            label={t("request")}
            icon={<HelpOutlineIcon />}
            active={location.pathname === "/request"}
          />
          <NavItem
            to="/login"
            label={t("login")}
            icon={<LoginIcon />}
            active={location.pathname === "/login"}
          />

          {/* LANGUAGE SELECT */}
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            style={selectStyle}
          >
            <option value="en">EN</option>
            <option value="te">TE</option>
            <option value="hi">HI</option>
          </select>
        </div>

        {/* ⚠️ FIX: Prevent particles from breaking layout */}
        <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
          <ParticlesBackground />
        </div>
      </nav>

      {/* ✅ FIX: Add spacing so navbar doesn't overlap */}
      <div style={{ marginTop: "120px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <p>© 2026 HopeHive. Connecting donors with those in need.</p>
        <p>
          You can connect at: <strong>koushikaakula0@gmail.com</strong>
        </p>
      </footer>

      <ChatBot />
    </>
  );
}

/* NAV ITEM */
function NavItem({ to, label, icon, active }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        textDecoration: "none",
        padding: "10px 18px",
        borderRadius: "20px",
        background: active
          ? "linear-gradient(45deg, #7C3AED, #EC4899)"
          : "transparent",
        color: active ? "white" : "#333",
        fontWeight: 500,
        transition: "0.3s",
      }}
    >
      <span style={{ fontSize: "18px" }}>{icon}</span>
      {label}
    </Link>
  );
}

/* STYLES */
const navStyle = {
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "75%",
  maxWidth: "1100px",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 35px", // slightly increased
  background: "white",
  borderRadius: "25px",
  boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
};

const menuStyle = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  marginLeft: "auto",
};

const selectStyle = {
  marginLeft: "15px",
  padding: "5px 10px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  cursor: "pointer",
};

const footerStyle = {
  textAlign: "center",
  padding: "30px",
  background: "#f3f4f6",
  marginTop: "60px",
};