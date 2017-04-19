import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  button: {
    background: 'white',
    border: 'none',
    outline: 'none',
    height: '32px',
    fontSize: '16px',
    padding: '0 16px',
    color: '#212121',
    borderRadius: '2px',
    background: '#f5f5f5',
    '&:hover': {
      cursor: 'pointer',
      background: '#e0e0e0',
    },
  },
  primary: {
    background: '#64b5f6',
    color: '#ffffff',
    '&:hover': {
      background: '#2196F3',
    },
  },
};

class Button extends Component {
  render() {
    const {
      children,
      onClick,
      classes,
      primary,
    } = this.props;

    const className = classNames(
      classes.button,
      {
        [classes.primary]: primary,
      }
    );

    return (
      <button
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classes: PropTypes.object,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  onClick: () => null,
  primary: false,
};

export default injectSheet(styles)(Button);
