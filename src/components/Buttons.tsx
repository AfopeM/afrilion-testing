import React from "react";

interface PrimaryButtonsProps {
  text: string;
  blue?: boolean;
  textSize?: string;
}

export function PrimaryButtons({ text, blue, textSize }: PrimaryButtonsProps) {
  return (
    <span>
      <span
        className={`${
          blue ? "bg-primary" : "bg-light"
        } ${textSize} brand-ease relative z-10 flex h-full w-full items-center justify-center rounded-md border border-dark px-6 py-4 capitalize tracking-wider hover:translate-x-0.5 hover:translate-y-0.5`}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 block h-full w-full translate-x-1 translate-y-1 rounded-md bg-dark"
      />
    </span>
  );
}

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
}

export function SmoothScrollLink({
  href,
  children,
  className,
  setIsOpen,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
