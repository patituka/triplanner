import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./datepicker";
import Autocomplete from "./autocomplete";
import ClassForm from "./class-form";

export interface IFormInput {
  type: string;
  from: string;
  to: string;
  depart: Date;
  return: Date;
  options: IFlyOptions
}

export interface IFlyOptions {
  adult: number;
  child: number;
  class: string;
}

export default function Form() {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const [flyOptions, setFlyOptions] = useState<IFlyOptions>({
    adult: 0,
    child: 0,
    class: 'eco'
  });

  const handleFlyOptions = (options: IFlyOptions) => {
    setFlyOptions(options);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="justify-start py-6 md:flex sm:grid sm:grid-cols-4">

        <label htmlFor="type" className="block text-sm font-medium">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            defaultChecked={true}
            type="radio"
            name="type"
            value="ar"
          />
          <span className="px-2 text-white">Aller-retour</span>
        </label>

        <label htmlFor="type" className="block text-sm font-medium">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            type="radio"
            name="type"
            value="a"
          />
          <span className="px-2 text-white" >Aller simple</span>
        </label>

        <label
          htmlFor="type"
          className="block text-sm font-medium">
          <input
            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            {...register("type")}
            type="radio"
            name="type"
            value="multi"
          />
          <span className="px-2 text-white">Multi-destinations</span>
        </label>
      </div>

      <div className="md:grid md:grid-cols-6 md:gap-2">

        <Controller
          control={control}
          name="from"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <Autocomplete 
                name="from" 
                label="From" 
                value={value}
                placeholder="Pays, ville ou aéroport"
                onChange={onChange} />
            )
          }
        />

        <Controller
          control={control}
          name="to"
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <Autocomplete
                name="to"
                label="To"
                placeholder="Pays, ville ou aéroport"
                value={value}
                onChange={onChange} />
            )
          }
        />

        <Controller
          control={control}
          name="depart"
          defaultValue={new Date()}
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker
                key="depart"
                label="Départ"
                value={value}
                onChange={onChange}
              />
            )
          }
        />

        <Controller
          control={control}
          name="return"
          defaultValue={new Date()}
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <CustomDatePicker key="return" label="Retour"
                value={value}
                onChange={onChange} />
            )
          }
        />

        <Controller
          control={control}
          name="options"
          defaultValue={{
            adult: 1,
            child: 0,
            class: 'eco'
          }}
          render={
            ({ field: { onChange, onBlur, value, ref } }) => (
              <ClassForm 
                value={value}
                onChange={onChange} />
            )
          }
        />
      </div>

      <div className="px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Trouver un vol
        </button>
      </div>

    </form>

  );
}