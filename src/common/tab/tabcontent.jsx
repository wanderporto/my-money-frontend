import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../operator/if'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id}
                    className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStatToProps = state => ({ tab: state.tab })
export default connect(mapStatToProps)(TabContent)