import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
