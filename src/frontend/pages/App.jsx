import React from 'react';
import { inject, observer } from 'mobx-react';
import Routes from '../Routes';

@inject('store') @observer
export default class MainContainer extends React.Component {

  componentDidMount() {
    this.props.store.polling();
  }
  
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

// export default () => (
//   <div>
//     <Routes />
//   </div>
// );
