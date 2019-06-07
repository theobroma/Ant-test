import React from 'react';

import TableSection from 'containers/TableSection';
import FormSection from 'containers/FormSection';
import AntFormSection from 'containers/AntFormSection';

export default class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">{/* <TableSection /> */}</main>
        <aside className="right-sidebar">
          <AntFormSection />
        </aside>
      </div>
    );
  }
}
