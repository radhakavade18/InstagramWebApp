import React from 'react';
import './login.css';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const LoginPage = () => {
  return (
    <div>
      <section className="mainSection">
        <Container>
          <Row>
            <Col lg="4">
              <Card>
                <CardHeader>
                  <h1>Instagram</h1>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default LoginPage;
