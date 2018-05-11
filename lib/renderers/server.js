import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../components/app';
import DataApi from '../DataApi';
import { host, port } from '../config';

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(resp.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  return ReactDOMServer.renderToString(<App initialData={initialData} />);
};

export default serverRender;
