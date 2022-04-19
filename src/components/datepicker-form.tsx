/* eslint-disable no-use-before-define */
import React from "react";
import * as ReactDatePicker from 'react-datepicker'
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({ name, control }: {
    name: string;
    control: any;
}) {

    return (
        <Controller
            control={control}
            name={name}
            render={
                ({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
                    <>
                        <ReactDatePicker
                            onChange={onChange}
                            onBlur={onBlur} // notify when input is touched
                            placeholderText="Enter your departure date"
                            value={value} // return updated value
                            ref={ref} // set ref for focus management
                        />
                        <p>{formState.isSubmitted ? "submitted" : ""}</p>
                        <p>{fieldState.isTouched ? "touched" : ""}</p>
                    </>
                )
            }
        />

    );
}

