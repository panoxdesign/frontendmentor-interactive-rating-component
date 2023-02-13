import React from "react";

type CardProps = { children: React.ReactNode; center?: boolean };

function Card({ children, center }: CardProps) {
  return <div className={`card ${center && "center"}`}>{children}</div>;
}

type CardHeaderProps = { children: React.ReactNode };
function Header({ children }: CardHeaderProps) {
  return <p className="card__header">{children}</p>;
}

type CardDescriptionProps = { children: React.ReactNode; className: string };
function Paragraph({ children, className }: CardDescriptionProps) {
  return <p className={`${className} card__description`}>{children}</p>;
}

Card.Header = Header;
Card.Paragraph = Paragraph;

export { Card };
