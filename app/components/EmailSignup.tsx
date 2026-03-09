"use client";

export default function EmailSignup() {
  return (
    <section
      style={{
        maxWidth: "650px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>
        Fight Night Updates
      </h2>
      <p style={{ opacity: 0.7, marginBottom: "2rem", lineHeight: 1.7 }}>
        New posts, fight previews, and women's MMA breakdowns delivered straight to your inbox. No spam, just the good stuff.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        <input
          type="email"
          placeholder="your@email.com"
          required
          style={{
            flex: "1 1 240px",
            padding: "0.85rem 1.25rem",
            borderRadius: "4px",
            border: "2px solid rgba(217,119,6,0.35)",
            backgroundColor: "rgba(29,52,97,0.4)",
            color: "var(--cream)",
            fontSize: "1rem",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "var(--gold)",
            color: "var(--dark)",
            padding: "0.85rem 1.75rem",
            borderRadius: "4px",
            border: "none",
            fontWeight: 800,
            fontSize: "1rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Subscribe
        </button>
      </form>
      <p style={{ fontSize: "0.75rem", opacity: 0.45, marginTop: "1rem" }}>
        Unsubscribe anytime. We hate spam as much as we hate cheap shots.
      </p>
    </section>
  );
}
