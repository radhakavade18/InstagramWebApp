import React from 'react';
import '../../assets/css/styles.css';
import ImgApple from '../../assets/images/apple.png';
import ImgAndroid from '../../assets/images/android.png';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Row,
} from 'reactstrap';
import { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setLogin] = useState('');
  return (
    <Container className="mainSection">
      <Row className="d-flex justify-content-center">
        <Col lg="4" md="6" xs="12">
          <Card className="bg-white">
            <CardBody>
              <h1 className="text-center instaLogo">Instagram</h1>
              <Form className="py-3">
                <Input
                  type="text"
                  className="mb-3 customInput"
                  id="userName"
                  placeholder="Username, Phone Number or email address"
                  onChange={e => {
                    setLogin(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  className="mb-3 customInput"
                  placeholder="Password"
                  id="userPassword"
                />
                <Button block color="primary" size="sm">
                  Login
                </Button>
              </Form>
              <Row className="d-flex justify-content-center">
                <Col>
                  <Row>
                    <Col lg={5} className="pr-0">
                      <hr />
                    </Col>
                    <Col className="text-center">OR</Col>
                    <Col lg={5} className="pl-0">
                      <hr />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p className="text-center">
                <a
                  className="facebookLogin"
                  href="https://www.facebook.com/login/"
                >
                  log in with Facebook
                </a>
              </p>
              <small className="d-flex justify-content-center">
                <a href="#" className="forgotPassword">
                  Forgotten your password?
                </a>
              </small>
            </CardBody>
          </Card>
          <Card className="mt-3">
            <CardBody>
              <p className="mb-0 text-center">
                Don't have an account? <a href="">Sign Up</a>
              </p>
            </CardBody>
          </Card>
          <small className="d-flex justify-content-center py-3">
            Get the app
          </small>
          <Row className="justify-content-center">
            <Col lg="5" md="6" sm="6">
              <a href="#">
                <img className="img-fluid" src={ImgApple} />
              </a>
            </Col>
            <Col lg="5" md="6" sm="6">
              <a href="#">
                {' '}
                <img className="img-fluid" src={ImgAndroid} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
