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
          background: "#f7f3ee",
          color: "#3a3530",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#a56b62",
            fontFamily: "Georgia, serif",
          }}
        >
          <span>Mumbai</span>
          <span>TISS 2027</span>
          <span>suhanibhatia.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontFamily: "Georgia, serif",
            }}
          >
            Suhani Bhatia
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              maxWidth: 760,
              lineHeight: 1.35,
              fontFamily: "Georgia, serif",
              color: "#7a7268",
            }}
          >
            Public policy. Welfare, gender, and how a scheme meets a person.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
