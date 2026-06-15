"use client";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
  className?: string;
}

export default function Breadcrumb({ items, variant = "light", className = "" }: BreadcrumbProps) {
  const textBase = variant === "dark" ? "text-gray-500" : "text-white/60";
  const textHover = variant === "dark" ? "hover:text-gray-900" : "hover:text-white";
  const textActive = variant === "dark" ? "text-gray-900" : "text-white";
  const separator = variant === "dark" ? "text-gray-400" : "text-white/40";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-sm ${textBase} ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && <span className={separator} aria-hidden="true">/</span>}
            {isLast || !item.href ? (
              <span className={isLast ? textActive : ""} aria-current={isLast ? "page" : undefined}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={`${textHover} transition-colors`}>
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
