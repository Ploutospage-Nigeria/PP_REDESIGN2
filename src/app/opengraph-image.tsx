import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt =
  "Ploutos Page: Your business deserves to be seen, understood and ready to grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(
  join(process.cwd(), "public/images/footer/logo.png"),
  "base64",
);

// Shared preview for the homepage and any page without its own image.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0c1e31",
          color: "white",
        }}
      >
        <img
          src={`data:image/png;base64,${logo}`}
          width={230}
          height={78}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Your business deserves to be seen, understood and ready&nbsp;
            <span style={{ color: "#00b4d8" }}>to grow.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#d5dee8" }}>
            Financial management for small and growing businesses.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
