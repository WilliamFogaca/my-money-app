import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { selectTab, showTabs } from '../common/tab/tabActions'
import { getList } from './billingCycleActions'

class BillingCycles extends Component {
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
    this.props.getList()
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclo de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList' >Lista</TabContent>
              <TabContent id='tabCreate' >Incluir</TabContent>
              <TabContent id='tabUpdate' >Alterar</TabContent>
              <TabContent id='tabDelete' >Excluir</TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, getList }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycles)