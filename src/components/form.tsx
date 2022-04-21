import React, { useState } from "react";
import CountrySelect from "./place-form";
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./datepicker";
import Autocomplete from "./autocomplete";
import Example from "./classe-form";

export interface IFormInput {
  type: string;
  from: string;
  to: string;
  depart: Date;
  return: Date;
  adult: number;
  child: number;
  class: string
}

export interface IFlyOptions {
  adult: number;
  child: number;
  class: string
}


export default function Form() {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const [flyOptions, setFlyOptions] = useState<IFlyOptions>({
    adult: 0,
    child: 0,
    class: ''
  });

  const handleFlyOptions = (options: IFlyOptions) => {
    setFlyOptions(options);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Example handleFlyOptions={handleFlyOptions} />

      <div className="md:grid md:grid-cols-3 md:gap-1">

        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            type="radio"
            name="type"
            value="ar"
          /><span className="px-4"
          >Aller-retour</span>

        </label>

        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            type="radio"
            name="type"
            value="a"
          />
          Aller simple
        </label>

        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            type="radio"
            name="type"
            value="multi"
          />
          Multi-destinations
        </label>
      </div>

      <div className="md:grid md:grid-cols-4 md:gap-2">
        <Controller
          control={control}
          name="from"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <Autocomplete name="from" label="From" />
            )
          }
        />

        <Controller
          control={control}
          name="to"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <Autocomplete name="to" label="To" />
            )
          }
        />

        <Controller
          control={control}
          name="depart"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker key="depart" label="Départ" />
            )
          }
        />

        <Controller
          control={control}
          name="return"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker key="return" label="Retour" />
            )
          }
        />

      </div>

      <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer
        </button>
      </div>

    </form>

  );
}