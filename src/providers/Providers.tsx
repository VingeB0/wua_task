import React from "react";
import { ReactQueryProvider } from "./reactQuery/ReactQueryProvider";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
