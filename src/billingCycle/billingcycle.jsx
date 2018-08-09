import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentheader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsheader'
import TabsContent from '../common/tab/tabscontent'
import TabHeader from '../common/tab/tabheader'
import TabContent from '../common/tab/tabcontent'

import List from './billingcyclelist'
import Form from './billingcycleform'
import { init, create, update, remove } from './billingcycleactions'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabcreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabupdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabdelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tablist'><List /></TabContent>
                            <TabContent id='tabcreate'> <Form onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary' /> </TabContent>
                            <TabContent id='tabupdate'><Form onSubmit={this.props.update} submitLabel='Alterar' submitClass='info' /></TabContent>
                            <TabContent id='tabdelete'><Form onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger' /></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
