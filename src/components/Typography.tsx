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
}

export function Title({ children, style, isH1 }: TitleProps) {
  const sharedClasses = "font-black tracking-tight font-roboto";

  return isH1 ? (
    <h1
      className={`${sharedClasses} pb-2 text-[40px] leading-10 md:pb-4 md:leading-[40px] lg:text-[48px] lg:leading-[50px] 2xl:text-[56px] 2xl:leading-[54px]`}
    >
      {children}
    </h1>
  ) : (
    <h2 className={`${style} ${sharedClasses} text-3xl md:text-4xl`}>
      {children}
    </h2>
  );
}

export function Paragraph({ children, style }: TypographyProps) {
  return (
    <p
      className={`${style} font-normal leading-7 tracking-wide opacity-70 md:text-base lg:text-lg`}
    >
      {children}
    </p>
  );
}
