export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          borderBottom: "1px solid #20283d",
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>
          Hostio
        </div>

        <div style={{ display: "flex", gap: "25px" }}>
          <span>Hosting</span>
          <span>Domains</span>
          <span>Login</span>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "100px 25px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#7dd3fc",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          FREE WEB HOSTING
        </p>

        <h1
          style={{
            fontSize: "58px",
            margin: "20px 0",
            lineHeight: 1.1,
          }}
        >
          Apni website free mein
          <br />
          Hostio par host karein.
        </h1>

        <p
          style={{
            color: "#aab3c5",
            fontSize: "19px",
            maxWidth: "650px",
            margin: "0 auto 35px",
          }}
        >
          HTML, CSS aur JavaScript website upload karein aur
          apna free Hostio subdomain hasil karein.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <button
            style={{
              padding: "15px 28px",
              borderRadius: "8px",
              border: "none",
              background: "#38bdf8",
              color: "#06111d",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "15px 28px",
              borderRadius: "8px",
              border: "1px solid #334155",
              background: "transparent",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Explore Hosting
          </button>
        </div>

        <div
          style={{
            marginTop: "70px",
            padding: "20px",
            borderRadius: "12px",
            background: "#111827",
            border: "1px solid #25304a",
          }}
        >
          <span style={{ color: "#94a3b8" }}>
            Your free website:
          </span>{" "}
          <strong>username.hostio.site</strong>
        </div>
      </section>
    </main>
  );
}
