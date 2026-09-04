import { ImageResponse } from "next/og";

export const alt = "Suhani Bhatia, public policy researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F0EBDE",
          color: "#1F2BE0",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontFamily: "Georgia, serif",
            opacity: 0.7,
          }}
        >
          <span>Mumbai</span>
          <span>TISS ’27</span>
          <span>suhanibhatia.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              fontFamily: "Georgia, serif",
            }}
          >
            Suhani Bhatia
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              maxWidth: 720,
              lineHeight: 1.3,
              fontFamily: "Georgia, serif",
            }}
          >
            How public services perform against what they are mandated to deliver.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
