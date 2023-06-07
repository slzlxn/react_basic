import React from "react";

export const Children = ({ children }) => {
  console.log(children);
  return (
    <>
      <div className="red">{children}</div>
      <div style={{ color: "red" }}>인라인스타일</div>
    </>
  );
};
