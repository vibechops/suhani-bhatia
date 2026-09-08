import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
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
          background: "#f4eee6",
          color: "#3a2a22",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 44,
            background: "#3a2a22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f4eee6",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          ●
        </div>
      </div>
    ),
    { ...size },
  );
}
