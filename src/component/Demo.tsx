import React from "react";
type usersDetails = {
  firstName: string;
  lastName: string;
};
const Demo = (props: usersDetails) => {
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
};

export default Demo;
