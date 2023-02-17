import React from "react";
import { Container, Card, Col, Button, Row } from "react-bootstrap";
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
}
export const Blogs: React.FC<usersProps> = ({ user }: usersProps) => {
  return (
    <>
      <Row className="mx-2">
        {user.map((item) => {
          return (
            <Col md={4} lg={4} sm={12} xl={3} className="mt-2">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
                />
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Title>Phone</Card.Title>
                  <Card.Text>{item.phone}</Card.Text>
                  <Card.Title>Username</Card.Title>
                  <Card.Text>{item.username}</Card.Text>
                  <Card.Title>Email</Card.Title>
                  <Card.Text>{item.email}</Card.Text>
                  <Card.Link href={item.website}>{item.website}</Card.Link>
                  <br />
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default Blogs;
