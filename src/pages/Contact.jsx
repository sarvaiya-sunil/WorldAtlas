import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    //console.log(formData.entries()); // This method returns an iterator of key/value pairs from the form data. -> iterator is an array
    const formInputData = Object.fromEntries(formData.entries()); // Convert the iterator to an object. -> convert from array to an plain object
    //console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            name="message"
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
