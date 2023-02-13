import React from "react";
import { Card } from "./Card";
import { Headline } from "./Headline";

import ThankYou from "@images/ThankYou.svg";

type SecondCardProps = { star: string };
export function SecondCard({ star }: SecondCardProps) {
  return (
    <Card center>
      <Card.Header>
        <ThankYou />
      </Card.Header>
      <p className="top text--center">
        <span className="pill">You selected {star} out of 5</span>
      </p>
      <div className="text--center top--2">
        <Headline value="Thank you!" />
        <p className="card__description top">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
}
