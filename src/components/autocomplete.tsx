
import React, { useState } from "react";
import { countries } from "./countries";

export default function Autocomplete({ name, label, value, onChange, placeholder }: {
    name: string;
    label: string;
    value: string;
    placeholder: string;
    onChange: (...event: any[]) => void;
}) {

    const [options, setOptions] = useState<string[]>([]);

    const searchCountries = (value: string) => {
        const values: string[] = countries
            .filter(country => country.label.toLowerCase().match(value.toLowerCase()))
            .map(country => country.label)
            .slice(0, 5);
        onChange(undefined);
        setOptions(values);
    }

    const selectOption = (value: string) => {
        onChange(value);
        setOptions([]);
    }

    return (

        <div className="col-span-1">
            <label htmlFor="country" className="block px-2 text-xs font-medium text-left text-white">
                {label}
            </label>
            <input type="text"
                placeholder={placeholder}
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={value}
                onChange={(data: any) => searchCountries(data.target.value)}></input>
            <div>
                <ul className="divide-y divide-gray-200">
                    {options.map((option) => (
                        <li key={option} className="flex px-3 hover:bg-indigo-100" onClick={() => selectOption(option)}>
                            <p className="text-sm font-medium text-gray-900">{option}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};