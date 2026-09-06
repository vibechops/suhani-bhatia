import { ImageResponse } from "next/og";

export const alt = "Suhani Bhatia · Policy analyst";
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
          background: "#ffffff",
          color: "#0f1b2d",
          padding: "64px 72px",
          borderTop: "14px solid #6a1b4d",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, color: "#5f6979", letterSpacing: 2, textTransform: "uppercase" }}>
          Suhani Bhatia · Policy analyst · Mumbai
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              fontFamily: "Georgia, serif",
              maxWidth: 1000,
              letterSpacing: -1,
            }}
          >
            I find where public programmes fail the people they are meant to reach, and what to do about it.
          </div>
          <div style={{ marginTop: 28, fontSize: 24, color: "#5f6979" }}>
            Field research across six states · Stata and NFHS · Excel cost models · TISS MPP 2027
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
