import Badge from "./Badge";
import type { SectionHeadingProps } from "@/types";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  dark = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && <Badge text={badge} />}
      <h2
        className={`font-playfair text-3xl font-bold md:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            dark ? "text-text-light" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
