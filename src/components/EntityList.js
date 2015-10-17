import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import ListItem from './ListItem';

export default class EntityList extends Component {
  static propTypes = {
    entitylist: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className='list-group'>
        {
          mapValues(this.props.entitylist, (entity) => {
            return (<ListItem
              key={entity.id}
              id={entity.id}
              value={entity.value}
              isDone={entity.isDone}
              {...this.props.actions} />);
          })
        }
      </div>
    );
  }

}
