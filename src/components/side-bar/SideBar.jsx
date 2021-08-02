import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ method, url, id }) => {
  return (
    <div id={id}>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span>
    </div>
  );
};

SideBar.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default SideBar;
