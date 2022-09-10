import * as React from 'react';
import Layout from "../components/layout/layout"
import Main from '../components/main/main';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { SEO } from '../components/SEO/seo';

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <Layout>
        <Main/>
        </Layout>
      </Provider>
    </>    
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)