import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [inputValue, setInputValue] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
        ...inputValue,
        [name]: value
        });
    }

    return { 
        handleChange,
        inputValue
    };
}