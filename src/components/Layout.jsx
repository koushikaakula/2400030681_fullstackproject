import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LoginIcon from "@mui/icons-material/Login";
import ParticlesBackground from "./ParticlesBackground";
import { Link, Outlet, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FavoriteIcon sx={{ color: "#7C3AED" }} />
          <h2 style={{ margin: 0, color: "#7C3AED" }}>HopeHive</h2>
        </div>

        <div style={menuStyle}>
          <NavItem to="/" text="Home" active={location.pathname === "/"} />
          <NavItem to="/browse" text="Browse" />
          <NavItem to="/donate" text="Donate" />
          <NavItem to="/request" text="Request" />
          <NavItem to="/login" text="Login" />
        </div>

        <ParticlesBackground />
      </nav>

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

      <footer style={footerStyle}>
        <p>© 2026 HopeHive. Connecting donors with those in need.</p>
        <p>
          You can connect at: <strong>koushikaakula0@gmail.com</strong>
        </p>
      </footer>
    </>
  );
}

function NavItem({ to, text, active }) {
  let Icon;

  if (text === "Home") Icon = HomeIcon;
  if (text === "Browse") Icon = SearchIcon;
  if (text === "Donate") Icon = VolunteerActivismIcon;
  if (text === "Request") Icon = HelpOutlineIcon;
  if (text === "Login") Icon = LoginIcon;

  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        textDecoration: "none",
        padding: "10px 20px",
        borderRadius: "15px",
        background: active
          ? "linear-gradient(45deg, #7C3AED, #EC4899)"
          : "transparent",
        color: active ? "white" : "#333",
        fontWeight: 500,
      }}
    >
      {Icon && <Icon sx={{ fontSize: 18 }} />}
      {text}
    </Link>
  );
}

const navStyle = {
  position: "fixed",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "75%",          // reduced from 90%
  maxWidth: "1000px",    // smaller max width
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 35px",  // slightly reduced padding
  background: "white",
  borderRadius: "25px",
  boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
};

const menuStyle = {
  display: "flex",
  gap: "25px",
  alignItems: "center",
  marginLeft: "auto",
};

const footerStyle = {
  textAlign: "center",
  padding: "30px",
  background: "#f3f4f6",
  marginTop: "60px",
};