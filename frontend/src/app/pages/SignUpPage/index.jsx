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

const SignUpPage = () => {
  return (
    <Container className="mainSection">
      <Row className="d-flex justify-content-center">
        <Col lg="4" md="6" xs="12">
          <Card className="bg-white">
            <CardBody>
              <h1 className="text-center instaLogo">Instagram</h1>
              <h6 className="text-center">
                Sign up to see photos and videos from your friends.
              </h6>
              <Button block color="primary" size="sm">
                Login with Facebook
              </Button>
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
              <Form className="py-3">
                <Input
                  type="text"
                  className="mb-2 customInput"
                  id="emailAddress"
                  placeholder="Mobile number or email address"
                />
                <Input
                  type="text"
                  className="mb-2 customInput"
                  id="fullName"
                  placeholder="Full Name"
                />
                <Input
                  type="text"
                  className="mb-2 customInput"
                  id="userName"
                  placeholder="User name"
                />
                <Input
                  type="password"
                  className="mb-2 customInput"
                  placeholder="Password"
                  id="userPassword"
                />
                <Button block color="primary" size="sm" disabled>
                  Sign Up
                </Button>
              </Form>
              <small className="d-flex justify-content-center text-center">
                By signing up, you agree to our Terms, Data Policy and Cookie
                Policy.
              </small>
            </CardBody>
          </Card>
          <Card className="mt-3">
            <CardBody>
              <p className="mb-0 text-center">
                Have an account? <a href="">Log in</a>
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
export default SignUpPage;
