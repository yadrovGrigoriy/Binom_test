import React, { Component } from 'react';
import Form from './components/Form/Form';
import Services from './components/Services';
import Buttons from './components/Buttons';

export default class App extends Component {
    render() {
        return (
            <section className="buisiness-trip">
                <div className="title title--section ">Командировки</div>
                <div className="buisiness-trip__inner">
                    <div className="container">
                        <Form />
                    </div>
                    <Services />
                    <Buttons />
                </div>
            </section>
        );
    }
}
