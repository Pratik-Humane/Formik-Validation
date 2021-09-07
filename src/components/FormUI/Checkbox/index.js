import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

export default function CheckBoxInput({
  name,
  label,
  legend,
  ...otherProps
}) {
  
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  
  const handleChange = evt => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  }
  const configCheckBox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox}/>}
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}
