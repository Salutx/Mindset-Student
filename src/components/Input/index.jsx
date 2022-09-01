import React from 'react';
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, LabelText }) => {
  return (
    <>
      <C.FormItem>  
        <C.Label> {LabelText} </C.Label>
        <C.Input 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
      </C.FormItem> 
    </>
  );
};

export default Input;