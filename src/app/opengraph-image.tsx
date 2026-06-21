import { ImageResponse } from "next/og";

export const alt ="Khansumber Altankhuyag — Full-Stack Developer & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(124,58,237,0.55), transparent 45%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.45), transparent 45%), radial-gradient(circle at 60% 50%, rgba(236,72,153,0.35), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#9a9ab0",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          khansumber.dev
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#f5f5fa",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Khansumber
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            background: "linear-gradient(120deg,#a78bfa,#22d3ee,#ec4899)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Altankhuyag
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#c4c4d4",
            marginTop: 36,
            maxWidth: 900,
          }}
        >
          Full-stack developer &amp; founder — building things end-to-end, from
          Gridwave to algorithmic trading systems.
        </div>
      </div>
    ),
    { ...size }
  );
}
