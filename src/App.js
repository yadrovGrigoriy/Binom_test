import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FormInput from './components/FormInput';

export default class App extends Component {
    state = {
        form: {
            from: '',
            to: '',
            date: '',
            changedPeople: ['Burns Road', 'Djon Doe', 'Sam Smith']
        }
    };
    people = ['Burns Road', 'Djon Doe', 'Sam Smith'];
    places = ['Москва', 'Санкт Петербург', 'Лондон', 'Варшава', 'Берлин', 'Капенгаген', 'Париж', 'Барселона'];

    inputOnChange = (value, name) => {
        console.log(value, name);
        this.setState({
            form: { ...this.state.form, [name]: value }
        });
    };
    removeChangedPerson(removePerson) {
        const updatedChangedPeople = this.state.form.changedPeople.filter(person => person !== removePerson);
        this.setState({
            form: {
                ...this.state.form,
                changedPeople: updatedChangedPeople
            }
        });
    }

    render() {
        return (
            <section className="buisiness-trip">
                <div className="section__title">Командировки</div>
                <div className="container">
                    <div className="wrapper">
                        <form className="form">
                            <Row justify="space-between">
                                <Col xl={8}>
                                    <FormInput
                                        type={'autocomplete'}
                                        label={'Откуда'}
                                        onChange={this.inputOnChange}
                                        options={this.places}
                                        name="from"
                                    />
                                </Col>
                                <Col xl={8}>
                                    <FormInput
                                        type={'autocomplete'}
                                        label={'Куда'}
                                        onChange={this.inputOnChange}
                                        options={this.places}
                                        name="to"
                                    />
                                </Col>
                                <Col xl={8}>
                                    <FormInput type={'date'} label={'Дата'} onChange={this.inputOnChange} name="date" />
                                </Col>
                                <Col xl={10}>
                                    <FormInput
                                        type={'autocomplete--multi'}
                                        label={'Ф. И. О. участника'}
                                        placeholder="Введите Ф. И. О. и выберите из списка"
                                        onChange={this.inputOnChange}
                                        options={this.people}
                                        value={this.state.form.changedPeople}
                                        name="changedPeople"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <ul className="people-list">
                                        {this.state.form.changedPeople.map((person, index) => (
                                            <li className="people-list__item" key={index}>
                                                {person}

                                                <span
                                                    className="icon--del"
                                                    onClick={() => this.removeChangedPerson(person)}
                                                >
                                                    <img src="/cancel.png" alt="" />
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
