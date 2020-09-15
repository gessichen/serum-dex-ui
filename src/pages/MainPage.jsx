import React from 'react';
import { Timeline } from 'antd';
import {
  InfoCircleOutlined,
  TwitterOutlined,
  TransactionOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import * as contentful from 'contentful';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: rgb(26, 32, 41);
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(26, 32, 41);
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
`;

const client = contentful.createClient({
  space: 'xyk48s9q88lo',
  accessToken: 'YLajhegrrTCvQ8LhjsAy-H69gZBi54-GovlstPhkvY4',
});

client
  .getEntries({
    content_type: 'serumnews',
  })
  .then(function (entry) {
    // logs the entry metadata
    console.log(entry);

    // logs the field with ID title
    //console.log(entry.fields.productName)
  });

export default function MainPage() {
  const news = [
    {
      title: 'ERC20 Wrapper is online',
      link: 'https://baidu.com',
      type: 'news',
      time: new Date(),
    },
    {
      title: 'Sam said serum is the best dex',
      link: 'https://baidu.com',
      type: 'twitter',
      time: new Date(),
    },
    {
      title: 'Heght listed now',
      link: '',
      type: 'coin',
      time: new Date(),
    },
  ];

  return (
    <Wrapper>
      <div
        style={{
          color: '#2abdd2',
          fontSize: '20px',
          marginLeft: '100px',
          marginBottom: '20px',
        }}
      >
        Feeds
      </div>
      <Timeline
        mode={'left'}
        style={{
          minWidth: '400px',
          justifyItems: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {news.map((newsItem) => {
          let dot = <InfoCircleOutlined />;
          if (newsItem.type === 'coin') {
            dot = <TransactionOutlined />;
          } else if (newsItem.type === 'twitter') {
            dot = <TwitterOutlined />;
          }

          return (
            <Timeline.Item label={newsItem.time.toLocaleTimeString()} dot={dot}>
              <div>{newsItem.title}</div>
              {newsItem.link && <a href={newsItem.link}>See link</a>}
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Wrapper>
  );
}
