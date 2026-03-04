import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        width: 230,
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
      }}
    >
      {/* Product Image */}
      <div style={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: 160,
            objectFit: "cover",
          }}
        />

        {/* Wishlist */}
        <button
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: 8,
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Heart size={18} color="#ec4899" />
        </button>
      </div>

      {/* Product Info */}
      <div style={{ padding: 14 }}>
        <h4
          style={{
            margin: "5px 0",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {product.name}
        </h4>

        <p
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#16a34a",
            marginBottom: 12,
          }}
        >
          ₹ {product.price}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            padding: "10px 0",
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(90deg, #f97316, #ec4899)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
