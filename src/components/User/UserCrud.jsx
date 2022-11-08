import React, { Component } from 'react';
import Main from '../Main/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuario
      </Main>
    )
  }
}