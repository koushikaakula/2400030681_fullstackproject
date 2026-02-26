export default function DonationCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Donate</button>
    </div>
  );
}