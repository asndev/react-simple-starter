import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as EntityActions from '../actions/EntityActions';
import { EntityList, AddEntityInput } from '../components';

const divStyle = {
  container: {
    width: 500,
    margin: 25
  },
  list: {}
};

@connect(state => ({
  entitylist: state.entitylist
}))
export default class FriendListApp extends Component {

  render() {
    const {entitylist: {entitiesById}, dispatch} = this.props;
    const actions = bindActionCreators(EntityActions, dispatch);
    return (
      <div style={divStyle.container}>
        <h2>todos.</h2>
        <AddEntityInput addCallbackFn={actions.addEntity} />
        <EntityList
          style={divStyle.list}
          entitylist={entitiesById}
          actions={actions} />
      </div>
    );
  }
}
