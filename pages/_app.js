import React from 'react';

import Layout from '../components/Layout';

import '../styles/styles.scss';

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
