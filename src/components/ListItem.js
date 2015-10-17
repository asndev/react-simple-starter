import React, { Component, PropTypes } from 'react';

let style = {
  item: {
    listStyle: 'none',
    padding: '20px 10px 20px 20px',
    borderBottom: '1px solid #E3E3E3',
    display: 'flex'
  },
  itemRow: {
    flex: '1 0 auto'
  }
};

export default class ListItem extends Component {
  static propTypes = {
    // Properties
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    // Callbacks
    deleteEntity: PropTypes.func.isRequired,
    clickEntity: PropTypes.func.isRequired
  }

  render() {
    const {clickEntity, deleteEntity} = this.props;
    return (
      <a href='#'
         onClick={() => clickEntity(this.props.id)}
         style={style.item} className='list-group-item'>
        <div style={style.itemRow}>
          <div>
            <span
              style={this.props.isDone ? {textDecoration: 'line-through'} : {}}>
            {this.props.value}
            </span>
          </div>
        </div>
        <div>
          <button
            className={`btn btn-default `}
            onClick={() => deleteEntity(this.props.id)}>
            <i className='fa fa-trash' />
          </button>
        </div>
      </a>
    );
  }

}
