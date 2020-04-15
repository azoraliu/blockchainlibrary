import React from 'react';
import { Button } from '@material-ui/core';
import withRoot from '../libs/withRoot';
import Layout from '../components/Layout'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Button variant="contained" color="primary">
          Welocome to DApp!
        </Button>
      </Layout>
    );
  }
}

export default withRoot(Index);