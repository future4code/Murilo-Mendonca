import { useState } from "react";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    const newForm = {...form, [name]: value}

    setForm(newForm)
  }
  
  return { form, onChange,  };
}

export default useForm;