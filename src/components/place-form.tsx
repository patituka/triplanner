/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Controller } from "react-hook-form";
import { countries } from "./countries";

export default function CountrySelect({ name, control }: {
    name: string;
    control: any;
}) {

    return (
        <Controller
            render={(props) => (
                <Autocomplete
                    {...props}
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    renderOption={(option) => (
                        <span>
                            {option.label}
                        </span>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            variant="outlined"
                        />
                    )}
                    onChange={(_, data) => props.field.onChange(data)}
                />
            )}
            name={name}
            control={control}
        />
    );
}

