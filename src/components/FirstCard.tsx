import React from "react";
import { Card } from "./Card";
import Button from "./Button";
import StarSelect from "./StarSelect";
import { Headline } from "./Headline";

import IconStar from "@images/IconStar.svg";

type FirstCardProps = {
  selectedStar: string;
  onChangeStar: (star: string) => void;
  submitFn: () => void;
};
export function FirstCard({
  selectedStar,
  onChangeStar,
  submitFn,
}: FirstCardProps) {
  return (
    <Card>
      <Card.Header>
        <span className="star">
          <IconStar />
        </span>
      </Card.Header>
      <div className="top--2">
        <Headline value={"How did we do?"} />
        <Card.Paragraph className="top">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Card.Paragraph>
      </div>
      <div className="top--2">
        <StarSelect starAnz={5} onChange={onChangeStar} value={selectedStar} />
      </div>
      <Button className="top--2" onClick={submitFn}>
        Submit
      </Button>
    </Card>
  );
}
3;
