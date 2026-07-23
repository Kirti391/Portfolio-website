import { useState } from "react";


function ContactForm() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

function handleChange(event) {
  const { name, value } = event.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
}

  return (
    <div>
    
    </div>
  );
}
export default ContactForm;
