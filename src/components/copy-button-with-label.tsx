"use client";

import { LucideCheck, LucideCopy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type CopyButtonWithLabelProps = {
  children: string;
};

const CopyButtonWithLabel = ({ children }: CopyButtonWithLabelProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" onClick={handleCopy}>
      {copied ? <LucideCheck></LucideCheck> : <LucideCopy></LucideCopy>}
      {copied ? "Copied!" : children}
    </Button>
  );
};

export default CopyButtonWithLabel;
