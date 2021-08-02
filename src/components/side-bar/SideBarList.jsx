/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import styles from './SideBarList.css';

const SideBarList = ({ methods, onClick }) => {
  const methodsClicked = methods.map((item, i) => {
    return (
      <li key={i} onClick={onClick}>
        <SideBar method={item.method} url={item.url} id={`${item.url}+${item.method}`} />
      </li>
    );
  });

  return (
    <ul className={styles.SideBar}>
      {methodsClicked}
    </ul>
  );
};

SideBarList.propTypes = {
  methods: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default SideBarList;
