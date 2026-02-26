import { Grid, Paper } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Browse() {
  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ color: "#7C3AED" }}>Browse Items</h1>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <ItemCard
          image="https://img.freepik.com/free-psd/stylish-kids-yellow-black-puffer-jacket-warm-winter-coat_191095-80567.jpg"
          title="Winter Coats"
          qty="10"
          location="New York, NY"
        />

        <ItemCard
          image="https://www.bing.com/images/search?view=detailV2&ccid=q7TMZq11&id=8BB0BC9CB2FF1F130DAB53A872FC1E11C8F29203&thid=OIP.q7TMZq11Ker5SJbwgiKvWgHaEK&mediaurl=https%3a%2f%2fwww.daniatrading.com%2fwp-content%2fuploads%2f2020%2f11%2fcanned-food.jpg&exph=900&expw=1600&q=canned+food&FORM=IRPRST&ck=9A849C75B5407EA932CC570E5D993D79&selectedIndex=0&itb=0"
          title="Canned Food"
          qty="50"
          location="Los Angeles, CA"
        />

        <ItemCard
          image="https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-backpack--school-backpack-for-kids--collage-backpack--school-bag-for-boys-amp-girls-159493333683945_l.jpg"
          title="School Backpacks"
          qty="15"
          location="Chicago, IL"
        />

        {/* NEW ITEMS ADDED */}

        <ItemCard
          image="https://www.jiomart.com/images/product/original/rvwpkcpvky/relaxfeel-royal-blue-floral-embossed-fur-double-blanket-for-heavy-winter-210-x-240-cm-product-images-orvwpkcpvky-p600797114-0-202304220424.jpg"
          title="Blankets"
          qty="20"
          location="Houston, TX"
        />

        <ItemCard
          image="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          title="Story Books"
          qty="35"
          location="Seattle, WA"
        />

        <ItemCard
          image="https://images.unsplash.com/photo-1586201375761-83865001e31c"
          title="Rice Bags"
          qty="25"
          location="Miami, FL"
        />
      </Grid>
    </div>
  );
}

function ItemCard({ image, title, qty, location }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
          },
        }}
      >
        <img
          src={image}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />

        <h3 style={{ marginBottom: "10px" }}>{title}</h3>

        <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Inventory2Icon sx={{ fontSize: 18, color: "#7C3AED" }} />
          Quantity: {qty}
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <LocationOnIcon sx={{ fontSize: 18, color: "#EC4899" }} />
          {location}
        </p>
      </Paper>
    </Grid>
  );
}