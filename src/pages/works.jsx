/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Navigation from '../components/navigation';

const IndexPage = () => (
  <Layout>
    <SEO title="Works" />
    <div
      sx={{
        position: 'fixed',
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        sx={{
          width: '60%',
          maxWidth: '300px',
        }}
      />
    </div>
    <Navigation />
  </Layout>
);

export default IndexPage;
