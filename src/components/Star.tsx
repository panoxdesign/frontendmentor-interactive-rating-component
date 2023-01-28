import React from "react";

type StarProps = {
  children: string;
  active: boolean;
  onClick: (value: number) => void;
};

function Star({ children, active, onClick }: StarProps) {
  return (
    <button
      className={`star ${active && "active"}`}
      type="button"
      onClick={() => {
        console.log(children);
        onClick(+children);
      }}
    >
      {children}
    </button>
  );
}

export default Star;
