import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../common/template/iconButton'

import { getList, showTab } from './billingCycleActions'

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
    
    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <IconButton color='warning' 
            onClick={() => this.props.showTab('tabUpdate', bc)}
            icon='pencil' />
          <IconButton color='danger' 
            onClick={() => this.props.showTab('tabDelete', bc)}
            icon='trash-o' />
        </td>
      </tr>
    ))
  }

  render() {
    
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className='table-actions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToPros = dispatch => bindActionCreators({ 
  getList, showTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(BillingCycleList)
