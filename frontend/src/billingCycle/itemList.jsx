import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import If from '../common/operator/if'
import IconButton from '../common/template/iconButton'

class ItemList extends Component {

  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, index)
    }
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((item, index) => (
      <tr key={index}>
        <td><Field name={`${this.props.field}[${index}].name`} component={Input}
          placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
        <td><Field name={`${this.props.field}[${index}].value`} component={Input}
          placeholder='Informe o valor' readOnly={this.props.readOnly} /></td>
        <If test={this.props.showStatus}>
          <td><Field name={`${this.props.field}[${index}].status`} component={Input}
            placeholder='Informe o status' readOnly={this.props.readOnly} /></td>
        </If>
          <td>
            <IconButton type='button' color='success' 
              onClick={() => this.add(index + 1)}
              icon='plus' />
            <IconButton type='button' color='warning' 
              onClick={() => this.add(index + 1, item)}
              icon='clone' />
            <IconButton type='button' color='danger' 
              onClick={() => this.remove(index)}
              icon='trash-o' />
          </td>
      </tr>
        ))
      }
    
  render() {
        return (
      <Grid cols={this.props.cols}>
          <fieldset>
            <legend>{this.props.legend}</legend>
            <table className='table'>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Valor</th>
                  <If test={this.props.showStatus}>
                    <th>Status</th>
                  </If>
                  <th className='table-actions'>Ações</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
          </fieldset>
        </Grid>
        )
      }
    }
    
const mapDispatchToProps = dispatch => bindActionCreators({
          arrayInsert, arrayRemove
      }, dispatch)
      
export default connect(null, mapDispatchToProps)(ItemList)