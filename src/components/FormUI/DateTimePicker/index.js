import { TextField } from '@material-ui/core'
import React from 'react';
import { useField } from "formik";

export default function DateTimePicker({
  name,
  ...otherProps
}) {
  
  const [field, meta] = useField(name);
  const configDateTime = {
    ...otherProps,
    ...field,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    }
  };

  if (meta && meta.touched && meta.error) {
    configDateTime.error = true;
    configDateTime.helperText = meta.error;
  }

  return (
    <TextField {...configDateTime}/>
  )
}
