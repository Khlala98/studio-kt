export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  navLinks: NavLink[];
  services: string[];
  demos: Demo[];
}

export interface Demo {
  title: string;
  category: string;
}

export type BgVariant = "main" | "alt" | "navy";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
}
