import React from "react";
import { ColorfulTriangle } from "../common/ColorfulTriangle/ColorfulTriangle";
import { Headline } from "../common/Headline/Headline";

export const FooterHeadline = () => {
  return (
    <div className="footer__headline">
      <ColorfulTriangle />
      <Headline theme="light" level="h3" text="PHOTOSNAP" />
    </div>
  );
};
