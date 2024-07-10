import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextInput.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextInput({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        // <TextField
        //   {...field}
        //   fullWidth
        //   value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
        //   error={!!error}
        //   helperText={error ? error?.message : helperText}
        //   {...other}
        // />

        <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
        sx={{
            width: '100%',
        }}
    />
      )}
    />
  );
}
