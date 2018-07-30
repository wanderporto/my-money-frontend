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
import { selectTab, showTabs } from '../common/tab/tabactions'
import List from './billingcyclelist'
import Form from './billingcycleform'
import { create } from './billingcycleactions'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tablist')
        this.props.showTabs('tablist', 'tabcreate')
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
                            <TabContent id='tabcreate'> <Form onSubmit={this.props.create} /> </TabContent>
                            <TabContent id='tabupdate'><Form /></TabContent>
                            <TabContent id='tabdelete'><h1>Deletar</h1> </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
