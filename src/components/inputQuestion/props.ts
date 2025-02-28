export interface InputQuestionProps {
  placeholder?: string;
  showIcon?: boolean;
  type?: string
  autocomplete?: string
  name?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  sendAnswer: (value: string) => void;
}