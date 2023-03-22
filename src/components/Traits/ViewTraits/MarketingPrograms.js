import React from "react";

import { Container } from "@material-ui/core";

export default function MarketingPrograms({ marketingPrograms }) {
  return (
    <Container>
      <ul className="marketingProgramsList">
        {marketingPrograms.map((program) => {
          return (
            <li>
              <h3>{program.description}</h3>
              <h4 style={{ color: "grey" }}>ECOSYSTEMS</h4>
              <p>{program.ecosystems}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
