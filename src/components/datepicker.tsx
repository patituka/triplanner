import React, { useState, useEffect } from "react";
import {
    format,
    subMonths,
    addMonths,
    subYears,
    addYears,
    isEqual,
    getDaysInMonth,
    getDay
} from "date-fns";

type DatepickerType = "date" | "month" | "year";

export default function CustomDatePicker({ key, label }: {
    key: string;
    label: any;
}) {
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [dayCount, setDayCount] = useState<Array<number>>([]);
    const [blankDays, setBlankDays] = useState<Array<number>>([]);
    const [showDatepicker, setShowDatepicker] = useState(false);
    const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [type, setType] = useState<DatepickerType>("date");

    const decrement = () => {
        switch (type) {
            case "date":
                setDatepickerHeaderDate((prev) => subMonths(prev, 1));
                break;
            case "month":
                setDatepickerHeaderDate((prev) => subYears(prev, 1));
                break;
            case "year":
                setDatepickerHeaderDate((prev) => subMonths(prev, 1));
                break;
        }
    };

    const increment = () => {
        switch (type) {
            case "date":
                setDatepickerHeaderDate((prev) => addMonths(prev, 1));
                break;
            case "month":
                setDatepickerHeaderDate((prev) => addYears(prev, 1));
                break;
            case "year":
                setDatepickerHeaderDate((prev) => subMonths(prev, 1));
                break;
        }
    };

    const isToday = (date: number) =>
        isEqual(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
            selectedDate
        );

    const setDateValue = (date: number) => () => {
        setSelectedDate(
            new Date(
                datepickerHeaderDate.getFullYear(),
                datepickerHeaderDate.getMonth(),
                date
            )
        );
        setShowDatepicker(false);
    };

    const getDayCount = (date: Date) => {
        let daysInMonth = getDaysInMonth(date);

        // find where to start calendar day of week
        let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
        let blankdaysArray = [];
        for (let i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }

        let daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }

        setBlankDays(blankdaysArray);
        setDayCount(daysArray);
    };

    const isSelectedMonth = (month: number) =>
        isEqual(
            new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
            selectedDate
        );

    const setMonthValue = (month: number) => () => {
        setDatepickerHeaderDate(
            new Date(
                datepickerHeaderDate.getFullYear(),
                month,
                datepickerHeaderDate.getDate()
            )
        );
        setType("date");
    };

    const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

    const showMonthPicker = () => setType("month");

    const showYearPicker = () => setType("date");

    useEffect(() => {
        getDayCount(datepickerHeaderDate);
    }, [datepickerHeaderDate]);

    return (

        <div className="col-span-1">
            <label
                htmlFor="datepicker"
                className="block px-2 text-xs font-medium text-left text-white"
            >
                {label}
            </label>
            <div className="relative">
                <input type="hidden" name="date" />
                <input
                    type="text"
                    readOnly
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Select date"
                    value={format(selectedDate, "yyyy-MM-dd")}
                    onClick={toggleDatepicker}
                />
                <div
                    className="absolute top-0 right-0 px-3 py-2 cursor-pointer"
                    onClick={toggleDatepicker}
                >
                    <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
                {showDatepicker && (
                    <div
                        className="absolute top-0 left-0 p-4 mt-12 bg-white rounded-lg shadow"
                        style={{ width: "17rem" }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-200"
                                    onClick={decrement}
                                >
                                    <svg
                                        className="inline-flex w-6 h-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {type === "date" && (
                                <div
                                    onClick={showMonthPicker}
                                    className="flex-grow p-1 text-lg font-bold text-gray-800 rounded-lg cursor-pointer hover:bg-gray-200"
                                >
                                    <p className="text-center">
                                        {format(datepickerHeaderDate, "MMMM")}
                                    </p>
                                </div>
                            )}
                            <div
                                onClick={showYearPicker}
                                className="flex-grow p-1 text-lg font-bold text-gray-800 rounded-lg cursor-pointer hover:bg-gray-200"
                            >
                                <p className="text-center">
                                    {format(datepickerHeaderDate, "yyyy")}
                                </p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex p-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-200"
                                    onClick={increment}
                                >
                                    <svg
                                        className="inline-flex w-6 h-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {type === "date" && (
                            <>
                                <div className="flex flex-wrap mb-3 -mx-1">
                                    {DAYS.map((day, i) => (
                                        <div
                                            key={i}
                                            style={{ width: "14.26%" }}
                                            className="px-1"
                                        >
                                            <div className="text-xs font-medium text-center text-gray-800">
                                                {day}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap -mx-1">
                                    {blankDays.map((_, i) => (
                                        <div
                                            key={i}
                                            style={{ width: "14.26%" }}
                                            className="p-1 text-sm text-center border border-transparent"
                                        ></div>
                                    ))}
                                    {dayCount.map((d, i) => (
                                        <div
                                            key={i}
                                            style={{ width: "14.26%" }}
                                            className="px-1 mb-1"
                                        >
                                            <div
                                                onClick={setDateValue(d)}
                                                className={`cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 ${isToday(d)
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-700 hover:bg-blue-200"
                                                    }`}
                                            >
                                                {d}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {type === "month" && (
                            <div className="flex flex-wrap -mx-1">
                                {Array(12)
                                    .fill(null)
                                    .map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={setMonthValue(i)}
                                            style={{ width: "25%" }}
                                        >
                                            <div
                                                className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${isSelectedMonth(i)
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-700 hover:bg-blue-200"
                                                    }`}
                                            >
                                                {format(
                                                    new Date(
                                                        datepickerHeaderDate.getFullYear(),
                                                        i,
                                                        datepickerHeaderDate.getDate()
                                                    ),
                                                    "MMM"
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}{" "}
                        {type === "year" && (
                            <Datepicker
                                datepickerHeaderDate={datepickerHeaderDate}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                                closeDatepicker={() => setShowDatepicker(false)}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>

    );
}
