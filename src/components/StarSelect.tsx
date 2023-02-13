import React, { useMemo } from "react";
import Star from "./Star";

type StarSelectProps = {
  starAnz: number;
  onChange: (starNum: string) => void;
  value: string;
};

function StarSelect({ starAnz, onChange, value }: StarSelectProps) {
  const stars = useMemo(
    () =>
      new Array(starAnz).fill(0).map((_, index) => {
        const starIndex = `${index + 1}`;
        return (
          <StarSelectItem
            key={index}
            active={starIndex === value}
            value={`${starIndex}`}
          />
        );
      }),
    [starAnz, value]
  );

  return (
    <ul
      className="star-list"
      onClick={(event) => {
        const targetEl = event.target as HTMLUListElement;
        const value = targetEl.dataset.value;
        value && onChange(value);
      }}
    >
      {stars}
    </ul>
  );
}

export default StarSelect;

type StarSelectItemProps = { active: boolean; value: string };
const StarSelectItem = React.memo(function ({
  active,
  value,
}: StarSelectItemProps) {
  console.log("changed ", value);
  return (
    <li>
      <Star active={active} value={value} />
    </li>
  );
});
