import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4eee6",
          color: "#3a2a22",
          fontSize: 180,
          fontWeight: 700,
        }}
      >
        ●
      </div>
    ),
    { ...size },
  );
}
