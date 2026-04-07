import { ImageResponse } from "next/og";

export const alt = "Studio KT — Votre site internet professionnel, livré clé en main";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Load a Google Font subset at build time (only the glyphs we need).
async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const match = css.match(
    /src: url\((https:\/\/[^)]+)\) format\('(?:opentype|truetype|woff|woff2)'\)/
  );
  if (!match) {
    throw new Error(`Failed to parse Google Font CSS for ${family}`);
  }
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(`Failed to fetch font file for ${family}`);
  }
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage() {
  const title = "Studio KT";
  const subtitle1 = "Votre site internet professionnel,";
  const subtitle2 = "livré clé en main";
  const badge = "SITES LIVRÉS EN 5 JOURS";
  const domain = "studiokt.fr";

  const allText = `${title}${subtitle1}${subtitle2}${badge}${domain}`;

  const [playfair700, dmSans400, dmSans600] = await Promise.all([
    loadGoogleFont("Playfair+Display:wght@700", title),
    loadGoogleFont("DM+Sans:wght@400", `${subtitle1}${domain}`),
    loadGoogleFont("DM+Sans:wght@600", `${subtitle2}${badge}`),
  ]);

  void allText;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050510",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(212,167,74,0.18) 0%, rgba(212,167,74,0) 60%), radial-gradient(ellipse 45% 40% at 80% 85%, rgba(100,50,200,0.12) 0%, rgba(100,50,200,0) 70%)",
          position: "relative",
          fontFamily: "DM Sans",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 100,
            right: 100,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(212,167,74,0) 0%, rgba(232,201,122,0.7) 50%, rgba(212,167,74,0) 100%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 26px",
            borderRadius: 999,
            border: "1px solid rgba(212,167,74,0.4)",
            backgroundColor: "rgba(212,167,74,0.08)",
            color: "#d4a74a",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2,
            marginBottom: 36,
          }}
        >
          {badge}
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: 148,
            fontWeight: 700,
            color: "#e8c97a",
            lineHeight: 1,
            marginBottom: 36,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 400,
              color: "#e2e8f0",
            }}
          >
            {subtitle1}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#d4a74a",
            }}
          >
            {subtitle2}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 110,
            left: 100,
            right: 100,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(212,167,74,0) 0%, rgba(232,201,122,0.7) 50%, rgba(212,167,74,0) 100%)",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 54,
            fontSize: 22,
            fontWeight: 500,
            color: "#94a3b8",
            letterSpacing: 3,
          }}
        >
          {domain}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair700,
          weight: 700,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSans400,
          weight: 400,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSans600,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
