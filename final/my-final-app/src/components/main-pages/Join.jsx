import { useState } from "react";
import Title2 from "../main-page-components/Title2";

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wantemail: true,
    event: '',
    reason: ''
  });

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    handleClearData();
    alert('Your data was sent to server successfully');
  };

  const handleClearData = () => {
    setFormData({
      name: '',
      email: '',
      wantemail: false,
      event: '',
      reason: ''
    });
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes("@")) {
      newErrors.email = 'There must be a @ in email address.';
    }

    if (!formData.event) {
      newErrors.event = 'Please! Pick an city you like better.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  return (
    <div className="join">
      <Title2 title2={'Join us'}></Title2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name*: &nbsp;</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {errors.name && <p className="validation-failure">{errors.name}</p>}
        <label>
          <span>Email*:&nbsp;</span>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        {errors.email && <p className="validation-failure">{errors.email}</p>}
        <label>
          <span>
            Do you want us to send you some ads?&nbsp;
          </span>
          <input
            type="checkbox"
            name="wantemail"
            checked={formData.wantemail}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>
            Which city you like better*?&nbsp;
          </span>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">Select an city</option>
            <option value="y">Boston</option>
            <option value="t">Cambridge</option>
          </select>
        </label>
        {errors.event && <p className="validation-failure">{errors.event}</p>}
        {formData.event === 'y' &&
          <label>
            <span>
              Why you like boston better?&nbsp;
            </span>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Select a reason</option>
              <option value="category1">Small city for walk</option>
              <option value="category2">Ocean</option>
            </select>
          </label>}
        {formData.event === 't' &&
          <label>
            <span>
              Why you like Cambridge better?&nbsp;
            </span>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Select a reason</option>
              <option value="category1">university city</option>
              <option value="category2">Various ocean view</option>
            </select>
          </label>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Join;