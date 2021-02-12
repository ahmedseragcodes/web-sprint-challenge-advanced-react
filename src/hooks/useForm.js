// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm=(key, initialValue)=>{
    
    const [storedValue, setStoredValue]=useState(()=>{
        
        const item=JSON.parse(window.localStorage.getItem(key));

        return item ? item : initialValue;

    })

  const setData=(value)=>{
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setData];


}


export default useForm;