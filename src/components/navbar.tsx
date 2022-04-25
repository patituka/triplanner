
import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function NavBar() {

  const navigation = [
    { name: 'Vols', href: '/' },
    { name: 'Blog', href: '/blog' }
  ]

  return (
    <Popover>
      <div className="relative px-4 py-6 bg-white sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a className="flex flex-row items-center" href="/">
                <svg className="w-12 h-12 stroke-indigo-500" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                    <path d="M6025 12789 c-704 -44 -1375 -194 -2005 -447 -1709 -688 -3040 -2075
-3657 -3812 -126 -355 -237 -804 -293 -1184 -39 -268 -70 -638 -70 -848 l0
-98 6400 0 6400 0 0 98 c0 210 -31 580 -70 848 -145 984 -536 1954 -1116 2764
-1220 1704 -3166 2702 -5244 2689 -118 -1 -273 -6 -345 -10z" />
                    <path d="M44 5653 c14 -144 81 -544 102 -615 5 -17 312 -18 6254 -18 5942 0
6249 1 6254 18 21 71 88 471 102 615 l7 67 -6363 0 -6363 0 7 -67z" />
                    <path d="M350 4312 c0 -26 141 -381 222 -559 l61 -133 5767 0 5767 0 61 133
c81 178 222 533 222 559 0 4 -2722 8 -6050 8 -3327 0 -6050 -4 -6050 -8z" />
                    <path d="M1048 2888 c57 -90 259 -367 371 -506 l127 -157 4854 0 4854 0 127
157 c112 139 314 416 371 506 l20 32 -5372 0 -5372 0 20 -32z" />
                    <path d="M2280 1505 c19 -23 220 -181 355 -280 157 -115 372 -256 515 -339
l114 -66 3136 0 3136 0 114 66 c143 83 358 224 515 339 135 99 336 257 355
280 11 13 -422 15 -4120 15 -3698 0 -4131 -2 -4120 -15z" />
                  </g>
                </svg>
                <h5 className="px-4 text-xl font-extrabold text-indigo-500 ">
                  Triplanner
                </h5>
              </a>
              <div className="flex items-center mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}