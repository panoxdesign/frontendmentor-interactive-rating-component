import React, { useState } from "react";
import { Content } from "@/layout/Content";
import { Card } from "./components/Card";
import Button from "./components/Button";
import StarSelect from "./components/StarSelect";
import { Headline } from "./components/Headline";

import IconStar from "../images/IconStar.svg";
import ThankYou from "../images/ThankYou.svg";

export function App() {
  const [selectedStar, setSelectedStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  return (
    <Content>
      {!submitted ? (
        <Card>
          <Card.Header>
            <span className="star">
              <IconStar />
            </span>
          </Card.Header>
          <div className="top--2">
            <Headline value={"How did we do?"} className="top" />
            <p className="card__description top">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!{" "}
            </p>
          </div>
          <div className="top--2">
            <StarSelect
              starAnz={5}
              onChange={(star) => setSelectedStar(star)}
              value={selectedStar}
            />
          </div>
          <Button
            className="top--2"
            onClick={() => selectedStar > 0 && setSubmitted(true)}
          >
            Submit
          </Button>
        </Card>
      ) : (
        <Card center>
          <Card.Header>
            <ThankYou />
          </Card.Header>
          <p className="top text--center">
            <span className="pill">You selected {selectedStar} out of 5</span>
          </p>
          <div className="text--center top--2">
            <Headline value="Thank you!" />
            <p className="card__description top">
              We appreciate you taking the time to give a rating. If you ever
              need more support, dont hesitate to get in touch!
            </p>
          </div>
        </Card>
      )}
    </Content>
  );
}

export default App;
