export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020617, #0f172a)",
        color: "#e5e7eb",
        padding: "60px 20px 30px",
        marginTop: 60,
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              color: "#f97316",
              fontSize: 26,
              marginBottom: 12,
              letterSpacing: 1,
            }}
          >
            ShopHub
          </h2>
          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            ShopHub is your trusted online shopping destination for
            electronics, fashion, and lifestyle products — delivering quality,
            value, and secure payments every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={headingStyle}>Quick Links</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Home</li>
            <li style={itemStyle}>Products</li>
            <li style={itemStyle}>Cart</li>
            <li style={itemStyle}>My Orders</li>
            <li style={itemStyle}>Login / Register</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 style={headingStyle}>Customer Service</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Help Center</li>
            <li style={itemStyle}>Returns & Refunds</li>
            <li style={itemStyle}>Shipping Information</li>
            <li style={itemStyle}>Privacy Policy</li>
            <li style={itemStyle}>Terms & Conditions</li>
          </ul>
        </div>

        {/* Developer */}
        <div>
          <h3 style={headingStyle}>Developer</h3>
          <p style={{ color: "#cbd5f5", lineHeight: 1.7 }}>
            Designed & Developed by
            <br />
            <strong
              style={{
                color: "#f97316",
                fontSize: 16,
              }}
            >
              Manyam Siva Santhosh Kumar Reddy
            </strong>
          </p>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 14,
              marginTop: 6,
            }}
          >
            Full-Stack Developer <br />
            React • Node.js • MySQL
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #334155",
          marginTop: 40,
          paddingTop: 18,
          textAlign: "center",
          color: "#94a3b8",
          fontSize: 14,
        }}
      >
        © 2026 <span style={{ color: "#f97316" }}>ShopHub</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

/* ---------- Reusable Styles ---------- */

const headingStyle = {
  marginBottom: 14,
  fontSize: 18,
  color: "#ffffff",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: 2.1,
  fontSize: 15,
};

const itemStyle = {
  color: "#cbd5f5",
  cursor: "pointer",
};
