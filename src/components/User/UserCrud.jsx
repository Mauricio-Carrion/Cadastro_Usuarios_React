import React, { Component } from 'react';
import axios from 'axios'
import Main from '../Main/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir'
}

baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class UserCrud extends Component {
  state = { ...initialState }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdateList(resp.data)
        this.setState({ user: initialState.user, list })
      })
  }

  getUpdateList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }

  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.targer.value
    this.setState({ user })
  }

  renderForm() {

  }

  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuario
      </Main>
    )
  }
}