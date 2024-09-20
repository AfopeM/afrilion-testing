import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  style?: string;
}

interface TaglineProps extends TypographyProps {
  textSize?: string;
}

export function Tagline({ children, style, textSize }: TaglineProps) {
  return (
    <h4
      className={`${style} ${
        textSize || "text-sm lg:text-base"
      } font-light uppercase tracking-widest opacity-90`}
    >
      {children}
    </h4>
  );
}

interface TitleProps extends TypographyProps {
  isH1?: boolean;
  isSub?: boolean;
}

export function Title({ children, style, isH1, isSub }: TitleProps) {
  const sharedClasses = "font-black font-roboto";

  return isH1 ? (
    <h1
      className={`${sharedClasses} ${style} pb-2 text-[40px] leading-10 tracking-tight md:pb-4 md:text-[44px] md:leading-[40px] lg:text-[48px] lg:leading-[50px] 2xl:text-[56px] 2xl:leading-[54px]`}
    >
      {children}
    </h1>
  ) : isSub ? (
    <h3 className={`${style} ${sharedClasses} text-2xl md:text-3xl`}>
      {children}
    </h3>
  ) : (
    <h2
      className={`${style} ${sharedClasses} text-3xl tracking-tight md:text-4xl`}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, style }: TypographyProps) {
  return (
    <p
      className={`${style} font-normal leading-7 tracking-wide opacity-70 md:text-base 2xl:text-lg`}
    >
      {children}
    </p>
  );
}
