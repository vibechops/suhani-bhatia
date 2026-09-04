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
          background: "#f3eee4",
          color: "#6f2430",
          fontSize: 15,
          fontFamily: "Georgia, serif",
        }}
      >
        SB
      </div>
    ),
    { ...size }
  );
}
