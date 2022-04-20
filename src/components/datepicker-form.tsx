/* eslint-disable no-use-before-define */
import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerForm({ name, control }: {
    name: string;
    control: any;
}) {

    return (
        <Controller
            control={control}
            name={name}
            render={
                ({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                        onChange={onChange}
                        onBlur={onBlur} // notify when input is touched
                        placeholderText="Enter your departure date"
                        value={value} // return updated value
                        ref={ref} // set ref for focus management
                    />
                )
            }
        />
    );
}

