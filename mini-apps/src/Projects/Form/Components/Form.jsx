import React from "react";

const initState = {
  name: "",
  email: "",
  type: "",
  status: true,
};

const Form = () => {
  const [details, setDetails] = React.useState(initState);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "status") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  const { name, email, type, status } = details;

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <input
          value={email}
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <br />
        <select
          onChange={handleChange}
          name="type"
          value={type}
          defaultValue={type}
        >
          {["admin", "user"].map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="status">Status</label>
        <input
          type="checkbox"
          checked={status}
          name="status"
          onChange={handleChange}
        />
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export { Form };
