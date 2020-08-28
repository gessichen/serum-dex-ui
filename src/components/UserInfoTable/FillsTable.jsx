import React from 'react';
import { Row, Col, Tag } from 'antd';
import { FormattedMessage, injectIntl } from "react-intl";
import { messages } from "../../utils/lang";
import { useFills, useMarket } from '../../utils/markets';
import DataTable from '../layout/DataTable';

function FillsTable({intl}) {
  const fills = useFills();

  const { quoteCurrency } = useMarket();

  const columns = [
    {
      title: <FormattedMessage {...messages.marketName} />,
      dataIndex: 'marketName',
      key: 'marketName',
    },
    {
      title: <FormattedMessage {...messages.side} />,
      dataIndex: 'side',
      key: 'side',
      render: (side) => (
        <Tag
          color={side === 'buy' ? '#41C77A' : '#F23B69'}
          style={{ fontWeight: 700 }}
        >
          {side.charAt(0).toUpperCase() + side.slice(1)}
        </Tag>
      ),
    },
    {
      title: <FormattedMessage {...messages.size} />,
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: <FormattedMessage {...messages.price} />,
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: <FormattedMessage {...messages.liquidity} />,
      dataIndex: 'liquidity',
      key: 'liquidity',
    },
    {
      title: quoteCurrency ? `${intl.formatMessage(messages.fees)} (${quoteCurrency})` : <FormattedMessage {...messages.fees} />,
      dataIndex: 'feeCost',
      key: 'feeCost',
    },
  ];

  const dataSource = (fills || []).map((fill) => ({
    ...fill,
    key: `${fill.orderId}${fill.side}`,
    liquidity: fill.eventFlags.maker ? 'Maker' : 'Taker',
  }));

  return (
    <>
      <Row>
        <Col span={24}>
          <DataTable
            dataSource={dataSource}
            columns={columns}
            pagination={true}
            pageSize={5}
            emptyLabel={<FormattedMessage {...messages.noTrades} />}
          />
        </Col>
      </Row>
    </>
  );
}

export default injectIntl(FillsTable);