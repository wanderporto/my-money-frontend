import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingcycleactions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                        label='Mes' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly} label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel}</button>
                    <button type='button' className='btn btn-dafult' onClick={this.props.init} > Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'BillingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector('BillingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)