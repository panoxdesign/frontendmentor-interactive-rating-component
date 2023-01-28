import React from "react";

type ContentProps = {
  children: React.ReactNode;
};

export function Content({ children }: ContentProps) {
  return <div className="content">{children}</div>;
}
