import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FormInput from './FormInput';
import { connect } from 'react-redux';

class Form extends Component {
    render() {
        const { form, places, people, onChange } = this.props;
        return (
            <form className="form">
                <Row gutter={[24, { xl: 48, md: 48, sm: 24, xs: 24 }]}>
                    <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                        <FormInput
                            type={'autocomplete'}
                            label={'Откуда'}
                            onChange={onChange}
                            options={places}
                            name="from"
                            value={form.from}
                        />
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                        <FormInput
                            type="autocomplete"
                            label={'Куда'}
                            onChange={onChange}
                            options={places}
                            name="to"
                            value={form.to}
                        />
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={12} xs={24}>
                        <FormInput type={'date'} label={'Дата'} onChange={onChange} name="date" />
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col xl={16} sm={24} xs={24}>
                        <FormInput
                            type="select"
                            label={'Ф. И. О. участника'}
                            placeholder="Введите Ф. И. О. и выберите из списка"
                            onChange={onChange}
                            options={people}
                            value={form.changedPeople}
                            name="changedPeople"
                        />
                    </Col>
                </Row>
                <div className="people-list">
                    {form.changedPeople.map((person, index) => (
                        <div className="people-list__item" key={index}>
                            {person}

                            <span className="icon--del" onClick={() => this.props.onDel(person)}>
                                <img src="/cancel.png" alt="" />
                            </span>
                        </div>
                    ))}
                </div>
            </form>
        );
    }
}

export default connect(
    state => ({
        form: state.form,
        places: state.places,
        people: state.people
    }),
    dispatch => ({
        onChange: (value, name) => {
            dispatch({
                type: 'INPUT_CHANGE',
                payload: { name, value }
            });
        },
        onDel: person => {
            dispatch({
                type: 'REMOVE_PERSON',
                payload: person
            });
        }
    })
)(Form);
