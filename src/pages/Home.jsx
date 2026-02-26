import { useAuth } from "../context/AuthContext";
import { Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { user } = useAuth();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <>
      {/* HERO */}
      <motion.div
        style={{ ...heroStyle, y }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: 60, fontWeight: 700 }}>
          Make a Difference Today
        </h1>
        <p style={{ fontSize: 20, maxWidth: 800 }}>
          Connect with your community by donating essential items or
          requesting what you need. Together, we can reduce waste,
          support families, and build a stronger and more caring society.
        </p>

        {!user && (
          <Link to="/login">
            <Button
              variant="contained"
              sx={{
                mt: 3,
                background: "white",
                color: "#7C3AED",
                borderRadius: "20px",
              }}
            >
              Get Started
            </Button>
          </Link>
        )}
      </motion.div>

      {/* STATS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <Grid container spacing={4} justifyContent="center" sx={{ p: 6 }}>
          <StatCard number="6" text="Available Donations" />
          <StatCard number="4" text="Active Requests" />
          <StatCard number="150+" text="Community Members" />
        </Grid>
      </motion.div>

      {/* HOW IT WORKS */}
      <div style={{ background: "#f3f4f6", padding: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          How It Works
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariant}
        >
          <Grid container spacing={4}>
            <StepCard
              number="1"
              title="Browse or Post"
              text="Browse donations or post items. Easily explore categories and find what you need."
            />
            <StepCard
              number="2"
              title="Connect"
              text="Connect safely with donors or recipients and coordinate the exchange."
            />
            <StepCard
              number="3"
              title="Make an Impact"
              text="Complete the exchange and make a real difference in someone’s life."
            />
          </Grid>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        style={ctaStyle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: 40 }}>Ready to Make a Difference?</h2>
        <Link to="/login">
          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "white",
              color: "#7C3AED",
              borderRadius: "20px",
            }}
          >
            Join Now
          </Button>
        </Link>
      </motion.div>
    </>
  );
}

function StatCard({ number, text }) {
  return (
    <Grid item xs={12} md={3}>
      <motion.div variants={itemVariant}>
        <Paper sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
          <h2 style={{ color: "#7C3AED" }}>{number}</h2>
          <p>{text}</p>
        </Paper>
      </motion.div>
    </Grid>
  );
}

function StepCard({ number, title, text }) {
  return (
    <Grid item xs={12} md={4}>
      <motion.div variants={itemVariant}>
        <Paper
          sx={{
            p: 4,
            borderRadius: "30px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 18px 35px rgba(0,0,0,0.12)",
            },
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #7C3AED, #EC4899)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "22px",
              marginBottom: "20px",
            }}
          >
            {number}
          </div>

          <h3 style={{ marginBottom: 12 }}>{title}</h3>
          <p style={{ lineHeight: 1.7, color: "#555" }}>{text}</p>
        </Paper>
      </motion.div>
    </Grid>
  );
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const heroStyle = {
  height: "80vh",
  background: "linear-gradient(-45deg, #4F46E5, #9333EA, #EC4899, #7C3AED)",
  backgroundSize: "400% 400%",
  animation: "gradientMove 10s ease infinite",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
};

const ctaStyle = {
  background: "linear-gradient(90deg, #4F46E5, #EC4899)",
  padding: "80px",
  textAlign: "center",
  color: "white",
};