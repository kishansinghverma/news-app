import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Space, Layout, Breadcrumb, Menu, Skeleton } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import { NewsCard } from './components/newscard';
import { News, NewsResponse } from './types/newsresponse';
import axios from 'axios';

function App() {
  const [news, setNews] = useState<NewsResponse>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
      .then(response => {
        setNews(response.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(()=>setIsLoading(false));
  }, []);

  return (
    <Layout>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div style={{ 'color': '#fff', 'fontSize': '20px' }}> News Paper </div>
        <Menu
          theme="dark"
          mode="horizontal"
        />
      </Header>
      {isLoading ? <Skeleton active /> :
        <Content style={{ padding: '30px 50px' }}>
          {news.map((data: News) => (
            <NewsCard {...data} />
          ))}
        </Content>}

    </Layout>
  )
}

export default App;
