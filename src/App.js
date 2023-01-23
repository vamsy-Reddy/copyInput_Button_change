import React, { useState, useEffect } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Input, Space, Tooltip } from "antd";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(true);
    }, 1000);
  }, [isCopied]);

  return (
    <div className="site-space-compact-wrapper">
      <Space.Compact block style={{ marginTop: 100, marginLeft: 25 }}>
        <Input
          style={{
            // width: "calc(100% - 500px)"
            width: "200px"
          }}
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        {/* <Tooltip title="copy text" placement="right"> */}
        <CopyToClipboard text={text}>
          <Button onClick={() => setIsCopied(false)}>
            {isCopied ? (
              <CopyOutlined />
            ) : (
              <CheckOutlined style={{ color: "green" }} />
            )}
          </Button>
        </CopyToClipboard>
        {/* </Tooltip> */}
      </Space.Compact>
    </div>
  );
}
