import React from 'react';
import { inject, observer } from 'mobx-react';
import Routes from '../Routes';

@inject('store') @observer
export default class MainContainer extends React.Component {

  componentDidMount() {
    this.props.store.retrieveAllCrops();
    this.props.store.polling();
    this.props.store.retrieveAllCrops();
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
