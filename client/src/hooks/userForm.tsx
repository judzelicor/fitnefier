import {
    useEffect,
    useState
} from "react";

interface User {
    [key: string]: string | number;
}

function useForm(initialValues: User) {
    const [formState, setFormState] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})

    const handleFormChanges = (type: string, value: string) => {
        setFormErrors({});

        setFormState({
            ...formState,
            [type]: value
        });
    }

    const handleFormErrors = (errors: {[key: string]: string}) => {
        console.log(errors, "setFormErrors fired")
        setFormErrors(errors);
    }

    useEffect(() => {
    })

    return {
        values: formState,
        handleFormChanges: handleFormChanges,
        errors: formErrors,
        raiseError: handleFormErrors
    }
}

export default useForm;