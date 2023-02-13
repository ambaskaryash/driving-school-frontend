import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputPrimaryPhone = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    const PATTERN = /\D/g;

    const getInputNumbersValue = (value: string) => {
      return value.replace(PATTERN, "");
    };

    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      let formattedInputValue = "";
      const selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        return;
      }

      console.log(inputNumbersValue);

      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      formattedInputValue = "+91 ";

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue;
      }

      input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      const input = event.target as HTMLInputElement;
      if (
        event.key === "Backspace" &&
        getInputNumbersValue(input.value).length === 1
      ) {
        input.value = "";
      }

      return input;
    };

    return (
      <input
        onInput={handlePhoneInput}
        onKeyDown={handlePhoneKeyDown}
        ref={ref}
        {...props}
      />
    );
  }
);

InputPrimaryPhone.displayName = "InputPrimaryPhone";

export default InputPrimaryPhone;
