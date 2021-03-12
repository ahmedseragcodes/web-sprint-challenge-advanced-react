import React, { useState } from "react";

const useForm=(key, initialValue)=>{

    const [values, setValues]=useState(()=>{
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : localStorage.setItem(key, JSON.stringify(initialValue))
    })
  
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      localStorage.setItem(key, JSON.stringify(values));
    };
  
    return [values, handleChanges];
  }


export default useForm;