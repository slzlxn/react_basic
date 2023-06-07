import React from "react";

export const Footer = (props) => {
  //(props)대신에 ({name, location})을 넣어도 됨.
  //js신문법 구조분해에 있음.
  const { name, location } = props;
  return (
    <div>
      {name}의 고향은 {location}입니다.
    </div>
  );
};
