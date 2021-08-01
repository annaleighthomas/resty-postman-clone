/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import MethodButtons from '../buttons/MethodButtons';
import styles from './Form.css';

const Form = ({ url, body, method, onSubmit, onChange }) => {
  return (
    <div className={styles.Form}>
      <form onSubmit={onSubmit}>
        <input type="text" name="url" placeholder="URL" value={url} onChange={onChange} />
        <div>
          <MethodButtons method={method} onChange={onChange}/>
          <button>GO!</button>
        </div>
        <textarea placeholder="Raw JSON body" name={body} value={body} onChange={onChange}></textarea>
      </form>
    </div>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
