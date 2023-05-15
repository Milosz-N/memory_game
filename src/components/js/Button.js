import { useState, useEffect } from "react";

function Button({ action, name, xd }) {
  return (
    <>
      <label className={`toogle-1`}>
        <input
          type="checkbox"
          id="toggle1"
          className={` ${"toogle-1_input"}`}
        />
        <span
          className={` ${`toogle-1_button ${name}`}`}
          onClick={action}
        ></span>
      </label>
    </>
  );
}

export default Button;
