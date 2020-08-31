import React from 'react';
import { Button, Col, Input, Row, Select } from 'antd';
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: rgb(26, 32, 41);
  align-items: center;
  justify-content: center;
`

export default function MainPage() {

  return (
    <>
      <Banner>
        <div style={{ fontSize: 48, color: 'white' }}>
          World No.1 decentralized exchange
        </div>
      </Banner>
    </>
  );
}
