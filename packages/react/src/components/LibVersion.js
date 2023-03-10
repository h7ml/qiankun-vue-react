import React, { version as reactVersion } from 'react';
import { version as antdVersion } from 'antd';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <h1 className="app-title">React Demo</h1>
      <p className="app-lib">
        React version: {reactVersion}, AntD version: {antdVersion}
      </p>
    </>
  );
}
