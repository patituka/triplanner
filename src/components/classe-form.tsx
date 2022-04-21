
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import { IFlyOptions } from './form'

export default function Example({handleFlyOptions}:({
    handleFlyOptions: (options: IFlyOptions) => void
})) {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const [adultCount, setAdultCount] = useState<number>(0);
    const [childCount, setChildCount] = useState<number>(0);

    const [flyOptions, setFlyOptions] = useState<IFlyOptions>({
        adult: 0,
        child: 0,
        class: ''
    });

    return (

            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            )}
                        >
                            <span>{adultCount + childCount} voyageurs, </span>
                            <ChevronDownIcon
                                className={classNames(
                                    open ? 'text-gray-600' : 'text-gray-400',
                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                                    <div className="relative grid gap-2 px-5 py-6 bg-white sm:gap-6 sm:p-8">
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
                                            >
                                                <option value="eco">Economique</option>
                                                <option value="No">Eco. supérieur</option>
                                                <option value="No">Affaires</option>
                                                <option value="No">Premiere</option>
                                            </select>
                                        </div>

                                        <div className="col-span-1">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-left text-gray-700">
                                                Adultes
                                            </label>

                                            <div className="flex flex-row items-center justify-center">
                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" disabled={adultCount === 0} onClick={() => setAdultCount(adultCount - 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                                    </svg>
                                                </button>

                                                <div className="text-center">{adultCount}</div>

                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" onClick={() => setAdultCount(adultCount + 1)}>

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
                                            <div className="flex flex-row items-center justify-center">
                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" disabled={childCount === 0} onClick={() => setChildCount(childCount - 1)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                                    </svg>
                                                </button>

                                                <div className="text-center">{childCount}</div>

                                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-500 transition-colors duration-150 border border-gray-300 rounded-full focus:shadow-outline hover:border-indigo-500" onClick={() => setChildCount(childCount + 1)}>

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2 py-2 text-right bg-white sm:px-6">
                                        <button
                                            onClick={() => handleFlyOptions(flyOptions)}
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

    )
}
