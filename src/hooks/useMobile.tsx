"use client";
import { useMediaQuery } from "@mantine/hooks";

export function useMobileScreen() {
  const mobile = useMediaQuery("(max-width:850px)");
  return mobile;
}
