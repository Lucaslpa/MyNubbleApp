import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '../PasswordInput';

type FormTypes<T extends FieldValues> = Pick<
  ControllerProps<T, FieldPath<T>>,
  'control' | 'name' | 'rules'
>;

interface FormPasswordInputProps<T extends FieldValues>
  extends FormTypes<T>,
    PasswordInputProps {}

export function FormPasswordInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: FormPasswordInputProps<T>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          {...rest}
          onChangeText={field.onChange}
          value={field.value}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
