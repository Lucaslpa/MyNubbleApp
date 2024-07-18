import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import {TextInput, TextInputProps} from '../TextInput';

type FormTypes<T extends FieldValues> = Pick<
  ControllerProps<T, FieldPath<T>>,
  'control' | 'name' | 'rules'
>;

interface FormTextInputProps<T extends FieldValues>
  extends FormTypes<T>,
    TextInputProps {}

export function FormTextInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: FormTextInputProps<T>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <TextInput
          {...rest}
          boxProps={{mb: 's14'}}
          onChangeText={field.onChange}
          value={field.value}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
