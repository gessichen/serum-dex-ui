import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
import { LocaleContext } from "../localeContext";
import logo from '../assets/serumqr.jpg';
import styled from 'styled-components';

const { Footer } = Layout;
const { useBreakpoint } = Grid;

const QrcodeWrapper = styled.div`
  position: relative;
  cursor: pointer;

  img {
    height: 30px;
    margin-right: 8px;

    position: absolute;
    z-index: 99;
    top: -135px;
    right: -38px;
    width: 7.5rem;
    max-width: none;
    height: 7.5rem;
    transform: scale(0);
    transform-origin: bottom;
    opacity: 0;
    -webkit-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  &:hover img {
    transform: scale(1);
    opacity: 1;
  }
`;

const footerElements = [
  {
    description: 'Serum Developer Resources',
    link: helpUrls.developerResources,
  },
  { description: 'Discord', link: helpUrls.discord },
  { description: 'Telegram', link: helpUrls.telegram },
  { description: 'GitHub', link: helpUrls.github },
  { description: 'Project Serum', link: helpUrls.projectSerum },
  { description: 'Solana Network', link: helpUrls.solanaBeach },
  { description: 'Tutorial', link: helpUrls.tutorial_en },
];

export const CustomFooter = () => {
  const smallScreen = !useBreakpoint().lg;
  const [locale] = React.useContext(LocaleContext);

  const title = locale === 'zh' ? "教程" : "Tutorial";
  const tlink = locale === 'zh' ? helpUrls.tutorial_zh : helpUrls.tutorial_en;

  for(const ele of footerElements) {
    if (ele.description === "Tutorial" || ele.description === "教程") {
      ele.description = title;
      ele.link = tlink;
    }
  }

  return (
    <Footer
      style={{
        height: '45px',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Row align="middle" gutter={[16, 4]}>
        {!smallScreen && (
          <>
            <Col flex="auto" />
            {footerElements.map((elem, index) => {
              return (
                <Col key={index + ''}>
                  <Link external to={elem.link}>
                    {elem.description}
                  </Link>
                </Col>
              );
            })}
            <Col key={"wechat"}>
                <QrcodeWrapper>
                  <img src={logo} alt="" />
                  <a href="/">Wechat</a>
                </QrcodeWrapper>
            </Col>
          </>
        )}
        <Col flex="auto">{/*  <DexProgramSelector />*/}</Col>
      </Row>
    </Footer>
  );
};
