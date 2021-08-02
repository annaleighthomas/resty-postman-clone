/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from '../components/form/Form';
import Json from '../components/json/Json';
import SideBarList from '../components/side-bar/sideBarList';
import { fetchCall } from '../utils/resty-api';
import styles from './Resty.css';

export default class Resty extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    methods: [],
    json: { 'Hello': 'I am bored. PLEASE make a fetch!' }
  }

  componentDidMount() {
    const history = JSON.parse(localStorage.getItem('history'));

    if (!history) {
      this.setState({ history });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history, url, method, body } = this.state;
    const key = `${url}+${method}+${body}`;

    this.fetch();

    if (history.filter(item => item.key === key).length > 0 || method === '') return;
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body,
        key: `${state.url}+${state.method}+${state.body}`
      }]
    }));

    this.setState(state => {
      localStorage.setItem('history', JSON.stringify(state.history));
    });
  }

  handleClick = event => {
    const { id } = event.target;
    let result;

    this.state.history.forEach(item => {
      if (item.key === id) {
        result = item;
      }
    });

    this.setState({
      url: result.url,
      method: result.method,
      body: result.body
    });
  }

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchCall(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render() {
    const { url, method, body, json, methods } = this.state;

    return (
      <>
        <section className={styles.Resty}>
          <SideBarList methods={methods} onClick={this.handleClick} />
          <div>
            <Form
              url={url}
              method={method}
              body={body}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange} />
            <Json json={json} />
          </div>
        </section>

      </>
    );
  }

}
