import React from "react";
import "antd/dist/antd.css";
import QRCode from "react-qr-code";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function temp() {
  return (
    <>
      <h1>This is a test</h1>
      <QRCode
        value="agasdgasdfasdfasd"
        size={150}
        level={"H"}
        includeMargin={true}
      />
    </>
  );
}

function Qrdata() {
  return (
    <>
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
    </>
  );
}

export default function Lost(props) {
  return (
    <div>
      <Card
        style={{ width: 400, height: 400 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description={temp()}
        />
      </Card>
    </div>
  );
}
