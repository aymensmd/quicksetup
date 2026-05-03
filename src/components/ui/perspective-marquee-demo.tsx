"use client";

import * as React from "react";
import { Player } from "@remotion/player";
import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee";

function usePrefersDark() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDark;
}

function PerspectiveMarqueeScene({ isDark }: { isDark: boolean }) {
  return (
    <PerspectiveMarquee
      items={["Vercel", "Linear", "Stripe", "Figma", "Notion", "Raycast", "Arc", "Cursor"]}
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      pixelsPerFrame={2}
      background={isDark ? "#050505" : "#fafafa"}
      fadeColor={isDark ? "#050505" : "#fafafa"}
      color={isDark ? "#fafafa" : "#171717"}
    />
  );
}

export default function PerspectiveMarqueeDemo() {
  const isDark = usePrefersDark();

  return (
    <div
      className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/20"
      style={{ backgroundColor: isDark ? "#050505" : "#fafafa" }}
    >
      <div className="aspect-[16/9] w-full">
        <Player
          component={PerspectiveMarqueeScene}
          inputProps={{ isDark }}
          durationInFrames={240}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          style={{ width: "100%", height: "100%" }}
          controls={false}
          autoPlay
          loop
          clickToPlay={false}
        />
      </div>
    </div>
  );
}
