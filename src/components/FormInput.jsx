import React, { Component } from 'react';
import { Input, DatePicker, AutoComplete, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/ru';

export default class FormInput extends Component {
    autoCompleteOnChange = event => {
        const res = { ...this.props.value };
        if (this.props.type === 'autocomplete--multi') {
            this.props.onChange(res.push(event), this.props.name);
        } else {
            this.props.onChange(event, this.props.name);
        }
    };
    datePickerOnChange = event => {
        this.props.onChange(event._d, this.props.name);
    };
    inputOnChange = event => {
        this.props.onChange(event.target.value, this.props.name);
    };

    render() {
        const format = 'D MMM ddd';
        const { label, type, options, placeholder } = this.props;
        return (
            <div className="input-wrap">
                <label className="input-label"> {label}</label>
                {(() => {
                    switch (this.props.type) {
                        case 'date':
                            return (
                                <DatePicker
                                    defaultValue={moment()}
                                    onChange={this.datePickerOnChange}
                                    format={format}
                                    size="large"
                                />
                            );
                        case 'autocomplete':
                        case 'autocomplete--multi':
                            return (
                                <AutoComplete
                                    dataSource={options}
                                    placeholder={placeholder}
                                    size="large"
                                    onSelect={this.autoCompleteOnChange}
                                    allowClear
                                    filterOption={(inputValue, option) =>
                                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            );

                        default:
                            return <Input type={type} onChange={this.inputOnChange} size="large" />;
                    }
                })()}
            </div>
        );
    }
}
