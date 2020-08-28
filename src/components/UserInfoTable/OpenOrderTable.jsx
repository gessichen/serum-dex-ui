import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { messages } from "../../utils/lang";
import DataTable from '../layout/DataTable';

import styled from 'styled-components';
import { Button, Row, Col, Tag } from 'antd';
import { cancelOrder } from '../../utils/send';
import { useWallet } from '../../utils/wallet';
import { useSendConnection } from '../../utils/connection';
import { notify } from '../../utils/notifications';
import { DeleteOutlined } from '@ant-design/icons';

const CancelButton = styled(Button)`
  color: #f23b69;
  border: 1px solid #f23b69;
`;

export default function OpenOrderTable({ openOrders, onCancelSuccess }) {
  let { wallet } = useWallet();
  let connection = useSendConnection();

  const [cancelId, setCancelId] = useState(null);

  async function cancel(order) {
    try {
      await cancelOrder({
        order,
        market: order.market,
        connection,
        wallet,
        onBeforeSendCallBack: () => setCancelId(order?.orderId),
        onConfirmCallBack: () => {
          setCancelId(null);
          onCancelSuccess && onCancelSuccess();
        },
      });
    } catch (e) {
      notify({
        message: 'Error cancelling order: ' + e.message,
        type: 'error',
      });
      setCancelId(null);
    }
  }

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
      key: 'orderId',
      render: (order) => (
        <div style={{ textAlign: 'right' }}>
          <CancelButton
            icon={<DeleteOutlined />}
            onClick={() => cancel(order)}
            loading={cancelId + '' === order?.orderId + ''}
          >
            Cancel
          </CancelButton>
        </div>
      ),
    },
  ];
  const dataSource = (openOrders || []).map((order) =>
    Object.assign(order, { key: order.orderId }),
  );

  return (
    <Row>
      <Col span={24}>
        <DataTable
          emptyLabel={<FormattedMessage {...messages.noOrders} />}
          dataSource={dataSource}
          columns={columns}
          pagination={true}
          pageSize={5}
        />
      </Col>
    </Row>
  );
}
