/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import styles from './SideBarList.css';

const SideBarList = ({ history, onClick }) => {
  const historyClicked = history.map((item, i) => {
    return (
      <li key={i} onClick={onClick}>
        <SideBar method={item.method} url={item.url} id={`${item.url}+${item.method}`} />
      </li>
    );
  });

  return (
    <ul className={styles.SideBar}>
      {historyClicked}
    </ul>
  );
};

SideBarList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default SideBarList;
