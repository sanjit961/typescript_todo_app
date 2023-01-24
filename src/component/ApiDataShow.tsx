import React from "react";
interface users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: [];
  };
  phone: string;
  website: string;
  company: {};
}
interface usersProps {
  user: users[];
  heading: string
}
export const ApiDataShow: React.FC<usersProps> = ({ user, heading }: usersProps) => {
  return (
    <>
      <h2 style={{ textTransform: "uppercase" }}>
        ***Users fetched from {heading}***
      </h2>
      {user.map((item) => {
        return (
          <>
            <h3>Name: {item.name}</h3>
            <h3>Phone: {item.phone}</h3>
            <h3>username: {item.username}</h3>
            <h4>email: {item.email}</h4>
            <h4>
              website: <a href={item.website}>{item.website}</a>
            </h4>
            <h4>City: {item.address.city}</h4>
            <h4>zipcode: {item.address.zipcode}</h4>
            <h6>***************************</h6>
          </>
        );
      })}
    </>
  );
};
export default ApiDataShow;
