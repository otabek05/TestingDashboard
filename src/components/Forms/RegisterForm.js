import React ,{useState} from 'react';
import axios from 'axios';


const RegisterForm = () => {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
     // Sending data to the backend to register the employee
     const data  = JSON.stringify(formData);

      axios
      .post('api/register', {
        data
      })
      .then((response) => {
        
        if (response.data.token) {
      
        

          // Redirect to the protected page or perform any other action
          // Replace `protected-page.html` with the actual URL of your protected page
          window.location.href = 'protected-page.html';
        } else {
        
          alert(response.data.message);
        }
        
      })
      .catch((error) => {
        console.error('Error:', error);
        
      });
     console.log(formData);
     setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        address: ''
     })
     
     //history.push('/employees');
  };

  return (
    <div className="container" style={{marginTop:'10%'}}>
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number:</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address:</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
