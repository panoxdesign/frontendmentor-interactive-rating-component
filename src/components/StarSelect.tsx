import React, { useMemo } from "react";
import Star from "./Star";

type StarSelect = {
  starAnz: number;
  onChange: (starNum: number) => void;
  value: number;
};

function StarSelect({ starAnz, onChange, value }: StarSelect) {
  const stars = useMemo(
    () =>
      new Array(starAnz).fill(0).map((_, index) => (
        <li key={index}>
          <Star
            active={index + 1 === value}
            onClick={(value) => onChange(value)}
          >
            {"" + (index + 1)}
          </Star>
        </li>
      )),
    [starAnz, onChange, value]
  );

  return (
    <ul className="star-list" onClick={(event) => console.log(event)}>
      {stars}
    </ul>
  );
}

export default StarSelect;
