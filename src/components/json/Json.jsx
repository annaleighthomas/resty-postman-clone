import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Json.css';

const Json = ({ json }) => {
  return (
    <pre className={styles.Json} id="json">
      <ReactJson src={json} displayDataTypes={false} />
    </pre>
  );
};

Json.propTypes = {
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Json;

