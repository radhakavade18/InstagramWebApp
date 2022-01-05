import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <PageWrapper>
        <LoginPage/>
        {/* <SignUpPage /> */}
        {/* <Masthead /> */}
      </PageWrapper>
    </>
  );
}
