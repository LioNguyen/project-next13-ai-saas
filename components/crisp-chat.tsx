"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("56c9f524-438e-4aed-b814-3003ddb66186");
  }, []);

  return null;
};
