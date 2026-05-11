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
          background: "linear-gradient(145deg, #0a0f2c 0%, #050a18 55%, #0a1530 100%)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 4,
            background: "#ff5c1a",
            boxShadow: "0 0 14px rgba(0, 212, 255, 0.55)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
