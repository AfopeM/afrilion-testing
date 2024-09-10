"use client";
import { useMediaQuery } from "@mantine/hooks";

export function useDesktopScreen() {
  const desktop = useMediaQuery("(min-width:1536px)");
  return desktop;
}
