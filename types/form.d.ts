export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'range'
  | 'file'
  | 'hidden'
  | 'image'
  | 'reset'
  | 'submit'
  | 'button'

export interface FormInput {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type: InputType
}
