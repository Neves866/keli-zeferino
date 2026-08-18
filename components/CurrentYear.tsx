"use client";

import { useEffect, useState } from "react";

/**
 * Renderiza o ano atual somente após a hidratação no cliente.
 *
 * Evita hydration mismatch: o SSR não emite o ano (que dependeria do
 * relógio do servidor/build), e o cliente o preenche via useEffect,
 * garantindo que o HTML do primeiro render seja idêntico nos dois lados.
 */
export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year ?? ""}</>;
}