import React, { useState } from "react";
import { Label } from "theme-ui";
import CountrySelect from "./place-form";
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export interface IFormInput {
  from: string;
  to: string;
  depart: Date;
  return: Date;
  adult: number;
  child: number;
  class: string
}

export default function Form() {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CountrySelect control={control} {...register("to", { required: true })} />
      <CountrySelect control={control} {...register("from", { required: true })} />

      <Controller
        control={control}
        name="depart"
        render={
          ({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              onChange={onChange}
              onBlur={onBlur} // notify when input is touched
              placeholderText="Enter your departure date"
              selected={value} // return updated value
              ref={ref} // set ref for focus management
            />
          )
        }
      />

      <Controller
        name="return"
        control={control}
        defaultValue={new Date()}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            onChange={onChange}
            selected={value}
            placeholderText="Enter your birth date"
          />
        )
        }
      />

      <select {...register("class", { required: true })}>
        <option value="eco">Economique</option>
        <option value="No">Eco. supérieur</option>
        <option value="No">Affaires</option>
        <option value="No">Premiere</option>
      </select>
      <input type="number" placeholder="Adulte" {...register("adult", { required: true })} />
      <input type="number" placeholder="Child" {...register("child")} />
      <input type="submit" />
    </form>
  );
}