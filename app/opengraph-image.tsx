import { ImageResponse } from "next/og";

export const alt = "Suhani Bhatia";
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
          background: "#f3eee4",
          color: "#1c1814",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 18, color: "#6f2430" }}>
          Public policy · research · strategy
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.95,
              fontFamily: "Georgia, serif",
            }}
          >
            Suhani Bhatia
          </div>
          <div style={{ marginTop: 24, fontSize: 26, maxWidth: 760, color: "#6a6158" }}>
            Where policy meets the person it is supposed to serve.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
