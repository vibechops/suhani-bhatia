import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6a1b4d",
          color: "#ffffff",
          fontSize: 15,
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
        }}
      >
        SB
      </div>
    ),
    { ...size }
  );
}
