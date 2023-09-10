import React, { useState } from "react";

export default function Home(props) {
  return (
    <div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
