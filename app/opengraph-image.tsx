import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Superior Power Electric - Licensed Electricians in Brampton & GTA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1C1C1E 0%, #2a2a2e 50%, #1C1C1E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Red accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#E31837",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Lightning bolt icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgba(227, 24, 55, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            ⚡
          </div>

          {/* Business name */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-1px",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Superior Power Electric
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#E31837",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Licensed Electricians
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Brampton, Mississauga & GTA
          </div>

          {/* Trust bar */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "24px",
              padding: "16px 32px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>ESA #7014710</div>
              <div style={{ fontSize: "14px", color: "#94a3b8" }}>Licensed</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>15+ Years</div>
              <div style={{ fontSize: "14px", color: "#94a3b8" }}>Experience</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>5.0 ★</div>
              <div style={{ fontSize: "14px", color: "#94a3b8" }}>47 Reviews</div>
            </div>
          </div>
        </div>

        {/* Phone number bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "48px",
            background: "#E31837",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          (905) 452-8439 | superiorpowerelectric.ca
        </div>
      </div>
    ),
    { ...size }
  );
}
