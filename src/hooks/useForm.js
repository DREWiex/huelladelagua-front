import { useState } from "react";

export const useForm = () => {

    const [ form, setForm ] = useState(undefined);
    

    const handleChange = ({ target }) => {

        const { name, value } = target;

        if(form == '') return;

        setForm({
            ...form,
            [name]: value
        });

    }; //FUNC-HANDLECHANGE


    return{
        form,
        handleChange
    };

};