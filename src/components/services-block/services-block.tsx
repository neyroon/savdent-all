import React from "react";
import Tabs from "../tabs";
import { Section } from "../section/section";

export const ServicesBlock = (props) => {
  return (
    <Section className="bg-bg" id="price">
      <Tabs {...props} />
    </Section>
  );
};
