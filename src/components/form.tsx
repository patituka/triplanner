import React from "react";
import CountrySelect from "./place-form";
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./datepicker";

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

export default function Form() {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="md:grid md:grid-cols-3 md:gap-6">

        <label htmlFor="field-wind" className="block text-sm font-medium text-gray-700">
          <input
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"

            {...register("type")}
            type="radio"
            name="weather"
            value="wind"
            id="field-wind"
          />
          Aller-retour
        </label>

        <label htmlFor="field-sun" className="block text-sm font-medium text-gray-700">
          <input
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"

            {...register("type")}
            type="radio"
            name="weather"
            value="sun"
            id="field-sun"
          />
          Aller simple
        </label>

        <label htmlFor="field-sun" className="block text-sm font-medium text-gray-700">
          <input
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"

            {...register("type")}
            type="radio"
            name="weather"
            value="sun"
            id="field-sun"
          />
          Multi-destinations
        </label>
      </div>

      <div className="md:grid md:grid-cols-4 md:gap-6">


      <CountrySelect control={control} {...register("to", { required: true })} />
      <CountrySelect control={control} {...register("from", { required: true })} />

      <Controller
        control={control}
        name="depart"
        render={
          ({ field: { onChange, onBlur, value, ref } }) => (
            <CustomDatePicker key="depart" label="Départ"/>
          )
        }
      />

      <Controller
        control={control}
        name="return"
        render={
          ({ field: { onChange, onBlur, value, ref } }) => (
            <CustomDatePicker key="return" label="Retour"/>
          )
        }
      />

      </div>

      <div className="col-span-2 sm:col-span-3">
        <label htmlFor="country" className="text-left block text-sm font-medium text-gray-700">
          Classe
        </label>
        <select
          id="country"
          autoComplete="country-name"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register("class", { required: true })}
        >
          <option value="eco">Economique</option>
          <option value="No">Eco. supérieur</option>
          <option value="No">Affaires</option>
          <option value="No">Premiere</option>
        </select>
      </div>

      <div className="col-span-2 sm:col-span-3">
        <label htmlFor="country" className="text-left block text-sm font-medium text-gray-700">
          Adulte
        </label>
        <input className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="number" placeholder="Adulte" {...register("adult", { required: true })} />
      </div>

      <div className="col-span-2 sm:col-span-3">
        <label htmlFor="country" className="text-left block text-sm font-medium text-gray-700">
          Classe
        </label>
        <input className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="number" placeholder="Child" {...register("child")} />
      </div>


      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer
        </button>
      </div>

    </form>

  );
}