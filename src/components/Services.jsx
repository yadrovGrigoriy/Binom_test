import React, { Component } from 'react';
import { Collapse, Icon, Checkbox } from 'antd';
import { connect } from 'react-redux';
const { Panel } = Collapse;

class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="title title--services">Необходимые услуги</div>
                <div className="services-list">
                    <Collapse
                        bordered={false}
                        accordion
                        expandIconPosition="right"
                        expandIcon={({ isActive }) => <Icon type="down" rotate={isActive ? 180 : 0} />}
                    >
                        {this.props.servicesList.map((item, index) => (
                            <Panel
                                header={
                                    <Checkbox
                                        onClick={event => event.stopPropagation()}
                                        onChange={() => this.props.onCheckBoxCahnge(item)}
                                    >
                                        <div className="services-list__item">{item}</div>
                                    </Checkbox>
                                }
                                key={index}
                            >
                                Здесь возможно список каких то опций по услуге или подробное описание услуги
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        servicesList: state.servicesList
    }),
    dispatch => ({
        onCheckBoxCahnge: item => {
            dispatch({
                type: 'SERVICE_CHANGED',
                payload: item
            });
        }
    })
)(Services);
