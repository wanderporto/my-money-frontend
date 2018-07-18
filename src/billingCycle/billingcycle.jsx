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
import { selectTab } from '../common/tab/tabactions'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tablist')
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>/
                            <TabHeader label='Listar' icon='bars' target='tablist' />
                            <TabHeader label='Incluir' icon='plus' target='tabcreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabupdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabdelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tablist'><h1>Listar</h1> </TabContent>
                            <TabContent id='tabcreate'><h1>Incluir</h1> </TabContent>
                            <TabContent id='tabupdate'><h1>Alterar</h1> </TabContent>
                            <TabContent id='tabdelete'><h1>Deletar</h1> </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
