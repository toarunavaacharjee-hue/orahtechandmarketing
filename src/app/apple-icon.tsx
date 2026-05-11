import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a0f2c 0%, #050a18 50%, #0a1530 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 78,
            height: 78,
            borderRadius: 20,
            background: "#ff5c1a",
            boxShadow: "0 0 48px rgba(0, 212, 255, 0.45), 0 12px 40px rgba(0, 0, 0, 0.45)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
