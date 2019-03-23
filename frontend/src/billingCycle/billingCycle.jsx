import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycles extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Ciclo de Pagamentos' small='Cadastro' />
        <Content>
          Ciclos de Pagamentos
        </Content>
      </div>
    )
  }
}

export default BillingCycles