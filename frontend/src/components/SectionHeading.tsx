import Reveal from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, sub, align = "left", dark = false }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span className={`eyebrow ${dark ? "!text-mint" : ""}`}>{eyebrow}</span>
      <h2 className={`max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-inkMuted"}`}>{sub}</p>}
    </Reveal>
  );
}
