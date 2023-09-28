import InitAOS from "@/components/aosConfig";
import React, { useEffect, ReactNode } from "react";

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    InitAOS();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
