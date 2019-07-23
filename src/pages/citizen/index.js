import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    citizen: [],
    citizenInfo: {},
    page: 1,
  } // Always should be an object

  // This function will be executed as soon as the component is loaded on screen
  componentDidMount() {
    this.loadCitizen();
  }

  // If we make on this way, it won't be possible the use of 'this'
  // loadCitizen() {
  //   var codigoaqui;
  // } Por isso usa-se as arrow functions
  loadCitizen = async (page = 1) => {
    const response = await api.get(`/citizen?page=${page}`);

    const { docs, ...citizenInfo } = response.data;

    this.setState({ citizen: docs, citizenInfo, page });
    // console.log(response.data.docs);
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadCitizen(pageNumber);
  }

  nextPage = () => {
    const { page, citizenInfo } = this.state;

    if (page === citizenInfo.pages) return;

    const pageNumber = page + 1;

    this.loadCitizen(pageNumber);
  }

  render() {
    const { citizen, page, citizenInfo } = this.state;

    return (
      <div className="citizen-list">
        {citizen.map(citiz => (
          // É preciso uma identificação única para a iteração, deve-se add o atributo 'key'
          // <h2 key={citiz._id}>{citiz.title}</h2>
          <article key={citiz._id}>
            <strong>{citiz.title}</strong>
            <p>{citiz.description}</p>

            {/* <a href="/">Acessar</a> */}
            <Link to={`/citizen/${citiz._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <Button disabled={page === 1} onClick={this.prevPage}>Anterior</Button>
          <Button disabled={page === citizenInfo.pages} onClick={this.nextPage}>Próximo</Button>
        </div>
      </div>
    );
    // return <h1>Contagem de Produtos: {this.state.citizen.length}</h1>
  }
}
