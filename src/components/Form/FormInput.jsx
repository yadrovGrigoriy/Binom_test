import React, { Component } from 'react';
import { Input, DatePicker, AutoComplete, Select } from 'antd';
import moment from 'moment';
import 'moment/locale/ru';
const { Option } = Select;

export default class FormInput extends Component {
    autoCompleteOnChange = event => {
        this.props.onChange(event, this.props.name);
    };
    selectOnChange = event => {
        const value = this.props.value;
        if (value.find(item => item === event)) return;
        value.push(event.label);
        this.props.onChange(value, this.props.name);
    };
    datePickerOnChange = event => {
        this.props.onChange(event._d, this.props.name);
    };
    inputOnChange = event => {
        this.props.onChange(event.target.value, this.props.name);
    };
    filteredOption = (inputValue, option) => {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
    };

    render() {
        const format = 'D MMM ddd';
        const { label, type, options, placeholder, value } = this.props;
        return (
            <div className="input-wrap">
                <label className="input-label"> {label}</label>
                {(() => {
                    switch (this.props.type) {
                        case 'date':
                            return (
                                <div className="dateInput">
                                    <DatePicker
                                        defaultValue={moment()}
                                        onChange={this.datePickerOnChange}
                                        format={format}
                                        size="large"
                                    />
                                </div>
                            );
                        case 'autocomplete':
                            return (
                                <div className="inputSearch">
                                    <AutoComplete
                                        dataSource={options}
                                        placeholder={placeholder}
                                        size="large"
                                        onSelect={this.autoCompleteOnChange}
                                        onFocus={this.autoCompleteOnChange}
                                        onChange={this.autoCompleteOnChange}
                                        allowClear
                                        filterOption={this.filteredOption}
                                        value={value}
                                    />
                                </div>
                            );
                        case 'select':
                            return (
                                <div className="selectSearch">
                                    <Select
                                        showSearch
                                        size="large"
                                        labelInValue
                                        placeholder={placeholder}
                                        showArrow={false}
                                        filterOption={this.filteredOption}
                                        onChange={this.selectOnChange}
                                    >
                                        {options.map((option, index) => (
                                            <Option key={index}>{option}</Option>
                                        ))}
                                    </Select>
                                </div>
                            );

                        default:
                            return <Input type={type} onChange={this.inputOnChange} size="large" />;
                    }
                })()}
            </div>
        );
    }
}
