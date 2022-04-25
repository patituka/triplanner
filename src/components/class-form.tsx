
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import { IFlyOptions } from './form'

export default function ClassForm({ value, onChange }: ({
    value: IFlyOptions;
    onChange: (...event: any[]) => void;
})) {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const classOptions: Array<{ key: string, label: string }> = [
        { key: 'eco', label: 'Économique' },
        { key: 'eco_sup', label: 'Éco. supérieur' },
        { key: 'affaire', label: 'Affaires' },
        { key: 'premium', label: 'Premiere' }
    ]
    
    return (

        <div className="col-span-2">
            <label
                htmlFor="datepicker"
                className="block text-xs font-medium text-left text-white truncate"
            >
                Classe de cabine et voyageurs

            </label>
            <Popover className="relative col-span-1">
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'row block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            )}
                        >
                            <span>
                                {value.adult + value.child} voyageurs, {classOptions.find(o => o.key ===value.class)?.label}
                            </span>
                            <ChevronDownIcon
                                className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 cursor-pointer absolute top-0 right-0 px-3 py-2 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 px-2 py-2 bg-white sm:gap-6 sm:p-8">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-left text-gray-700">
                                                Classe de cabine
                                            </label>
                                            <select
                                                id="country"
                                                autoComplete="country-name"
                                                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                onChange={(e) => {
                                                    value.class = e.target.value
                                                }}
                                            >{classOptions.map((option, index) => (
                                                <option value={option.key}>{option.label}</option>
                                            ))}
                                            </select>
                                        </div>

                                        <div className="col-span-1">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-left text-gray-700">
                                                Adultes
                                            </label>

                                            <div className="flex flex-row items-center justify-items-start">
                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" disabled={value.adult === 1} onClick={() => value.adult -= 1}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                                    </svg>
                                                </button>

                                                <div className="text-center">{value.adult}</div>

                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" onClick={() => value.adult += 1}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-1">
                                            <label htmlFor="country" className="block text-sm font-medium text-left text-gray-700">
                                                Enfants
                                            </label>
                                            <div className="flex flex-row items-center justify-items-start">
                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" disabled={value.child === 0} onClick={() => value.child -= 1}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                                    </svg>
                                                </button>

                                                <div className="text-center">{value.child}</div>

                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" onClick={() => value.child += 1}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2 py-2 text-right bg-white sm:px-6">
                                        <button
                                            onClick={() => {
                                                onChange(value);
                                                close()
                                            }}
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Terminer
                                        </button>
                                    </div>


                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
