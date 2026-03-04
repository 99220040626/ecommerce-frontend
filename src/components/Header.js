import { ShoppingCart, User, Home, Store } from "lucide-react";

export default function Header({ setPage, cartCount = 0 }) {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #f97316, #ec4899)",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => setPage("home")}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        🛍️ <span>ShopHub</span>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: 14 }}>
        <HeaderButton
          label="Home"
          icon={<Home size={18} />}
          onClick={() => setPage("home")}
        />

        <HeaderButton
          label="Products"
          icon={<Store size={18} />}
          onClick={() => setPage("products")}
        />

        {/* Cart with badge */}
        <HeaderButton
          icon={
            <div style={{ position: "relative" }}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -8,
                    background: "#22c55e",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: "50%",
                    padding: "2px 6px",
                    minWidth: 18,
                    textAlign: "center",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>
          }
          onClick={() => setPage("cart")}
        />

        <HeaderButton
          label="Account"
          icon={<User size={20} />}
          onClick={() => setPage("login")}
        />
      </nav>
    </header>
  );
}

/* ---------- Reusable Button ---------- */

function HeaderButton({ label, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "none",
        color: "#fff",
        padding: "9px 16px",
        borderRadius: 10,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 15,
        fontWeight: 600,
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.35)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}
