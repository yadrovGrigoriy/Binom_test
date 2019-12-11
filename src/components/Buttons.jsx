import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

class Buttons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button className="btn" shape="round" size="large" onClick={this.props.onSave}>
                    Сохранить командировку
                </Button>
                <Button className="btn btn--dark-blue" shape="round" size="large" onClick={this.props.onSubmit}>
                    Показать варианты
                </Button>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onSubmit: () => {
            dispatch({
                type: 'SUBMIT'
            });
        },
        onSave: () => {
            dispatch({
                type: 'SAVE'
            });
        }
    })
)(Buttons);
