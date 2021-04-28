import React from "react";
import { ButtonArrow } from "../common/ButtonArrow/ButtonArrow";

export const FooterBottom = () => {
  return (
    <>
      <div className="footer__invitation">
        <ButtonArrow text="GET AN INVITE" theme="light" />
      </div>
      <div className="footer__copyright">
        Copyright 2019. All Rights Reserved
      </div>
    </>
  );
};
