import React from "react";

type HeadlineProps = { value: string; className?: string };

function Headline({ value, className }: HeadlineProps) {
  return <h2 className={`headline ${className}`}>{value}</h2>;
}

export { Headline };
