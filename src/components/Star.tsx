import React from "react";

type StarProps = {
  active: boolean;
  value: string;
};

function Star({ value, active }: StarProps) {
  return (
    <button
      className={`star ${active && "active"}`}
      type="button"
      data-value={value}
    >
      {value}
    </button>
  );
}

export default Star;
