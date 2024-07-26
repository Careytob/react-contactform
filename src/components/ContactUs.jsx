import React, { useState } from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import CustomToast from './CustomToast'





const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    queryType: '',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({...prev, [name]: type === 'checkbox' ? checked: value}));
  }


   const validateEmail = (email) => {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const formValidation = () => {
    let validationError = {};
    if (!formData.firstName) validationError.firstName = 'This field is required';
    if (!formData.lastName) validationError.lastName = 'This field is required';
    if (!formData.emailAddress) {
      validationError.emailAddress = 'Please enter a valid email address';
    } else if (!validateEmail(formData.emailAddress)) {
      validationError.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.queryType) validationError.queryType = 'Please select query type';
    if (!formData.message) validationError.message = 'This field is required';
    if (!formData.consent) validationError.consent = 'To submit this form, please consent to being contacted';
    return validationError;
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = formValidation();
    if (Object.keys(validationError).length === 0) {
      setShowToast(true);
      setErrors({});
      setTimeout(() => setShowToast(false), 5000); // Hide toast after 3 seconds
      //console.log(formData);

      // Clear form data
      setFormData({
        firstName: '',
        lastName: '',
        emailAddress: '',
        queryType: '',
        message: '',
        consent: false,
      });
      
    } else {
      setErrors(validationError);
     
      //console.log(errors);
    }
  }
  
  return (
    <>
      <main className=' text-karla bg-white  p-4 my-20 rounded   shadow-md mx-5 sm:min-w-full'>
        
        <form onSubmit={handleSubmit} className='flex flex-col mt-7  p-4  '>
          <div>
            <h1 className='text-xl  font-bold'>Contact Us</h1>
          </div>
         <fieldset className='flex flex-col sm:flex-row sm:space-x-4 mt-1 w-full'>
            <div className='flex flex-col sm:w-1/2 w-full'>
              <label htmlFor='firstName' className='flex flex-col mt-6 mb-2 text-base'>
                First Name *
              </label>
              <input
                onChange={handleInputChange}
                value={formData.firstName}
                type='text'
                id='firstName'
                name='firstName'
                className='flex flex-col w-full border border-grey500 rounded cursor-pointer hover:border-grey900 focus:ring focus:ring-green600'
                aria-required='true'
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstNameError' : null}
              />
              {errors.firstName && (
                <span id='firstNameError' className='text-red mt-1' role='alert' aria-live='assertive'>
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className='flex flex-col sm:w-1/2 w-full'>
              <label htmlFor='lastName' className='flex flex-col mt-6 mb-2'>
                Last Name *
              </label>
              <input
                onChange={handleInputChange}
                value={formData.lastName}
                type='text'
                id='lastName'
                name='lastName'
                className='flex flex-col w-full border border-grey500 hover:border-grey900 rounded cursor-pointer focus:ring focus:ring-green600'
                aria-required='true'
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastNameError' : null}
              />
              {errors.lastName && (
                <span id='lastNameError' className='text-red mt-1' role='alert' aria-live='assertive'>
                  {errors.lastName}
                </span>
              )}
            </div>
          </fieldset>
          
          <div className='mt-6 '>
            <label htmlFor="emailAddress" >Email Address *</label>
            <input onChange={handleInputChange} value={formData.emailAddress} type="text" id='email' name='emailAddress' className='border border-grey500 hover:border-grey900 rounded w-full mt-2 cursor-pointer'
              aria-required='true'
                aria-invalid={!!errors.emailAddress}
                aria-describedby={errors.emailAddress ? 'emailAddress' : null}
            />
            {errors.emailAddress && (<span id='emailAddressError' className='text-red mt-1' role='alert'>{errors.emailAddress }</span>)}
          </div>
          
          
              
          <fieldset className='flex flex-col   mt-6 mb-2 '>
            <label className='mt-6 mb-2'>Query Type *</label>
            <div className='flex flex-col sm:flex-row '>
              <div className='relative flex  w-full sm:w-1/2  border border-grey500 hover:border-grey900 rounded p-2 mr-5 '>
                <input onChange={handleInputChange} checked={formData.queryType === 'General Enquiry'} type='radio' value='General Enquiry' name='queryType' id='generalEnquiry' readOnly className='hidden cursor-pointer'
                  aria-describedby={errors.queryType ? 'queryTypeError' : null}
                />
                <label htmlFor="generalEnquiry" >
                  {formData.queryType === 'General Enquiry' ? (<IoMdRadioButtonOn  className=' text-green600 absolute top-0 mt-2 ml-3 cursor-pointer text-2xl'/>) : (<IoMdRadioButtonOff className='text-green600 absolute  top-0 mt-2 ml-3 cursor-pointer text-2xl' />)}
                  <span className='ml-11 text-xs'>General Enquiry</span></label>
                </div>
                <div className='relative flex  w-full sm:w-1/2 mt-4 sm:mt-0  border border-grey500 hover:border-grey900 rounded p-2 mr-5'>
                <input onChange={handleInputChange} checked={formData.queryType === 'Support Request'} type='radio' value='Support Request' name='queryType' id='supportRequest' readOnly className='hidden cursor-pointer'
                  aria-describedby={errors.queryType ? 'queryTypeError' : null}
                />
                <label htmlFor="supportRequest" >
                  {formData.queryType === 'Support Request' ? (<IoMdRadioButtonOn  className=' text-green600 absolute top-0 mt-2 ml-3 cursor-pointer text-2xl'/>) : (<IoMdRadioButtonOff className='text-green600 absolute  top-0 mt-2 ml-3 cursor-pointer text-2xl' />)}
                  <span className='ml-11 text-xs'>Support Request</span></label>
                </div>
            </div>
            {errors.queryType && (<span id='queryTypeError' className='text-red mt-1' role='alert'>{errors.queryType }</span>)}
              </fieldset>
          
            
          
          <p className='mt-6 mb-2'>Message *</p>
          <textarea
            onChange={handleInputChange}
            value={formData.message}
            name='message'
            id='message'
            className='w-full border border-grey500 hover:border-grey900 rounded h-20 resize-none cursor-pointer focus:ring focus:ring-green600'
            aria-required='true'
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'messageError' : null}
          ></textarea>
          {errors.message && (<span id='messageError' className='text-red mt-1' role='alert'>{errors.message }</span>)}
          
          <div className='flex mt-6  sm:text-justify sm:items-center'>
            <input onChange={handleInputChange} type="checkbox" name='consent' value='Consented' id='consent' checked={formData.consent}
              aria-required='true'
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consentError' : null}
              className='hidden' />
            <label  htmlFor="consent" className='cursor-pointer text-base flex items-center '>
            {formData.consent ? (<MdCheckBox className='cursor-pointer text-green-500 sm:mr-2 mr-3 text-2xl sm:text-2xl '  />) : (<MdCheckBoxOutlineBlank className='cursor-pointer  sm:mr-2 mr-3 text-2xl sm:text-2xl' />)}
            
            
            I consent to being contacted by the team *</label>
            
          </div>
          {errors.consent && (<span id='consentError' className='text-red mt-1'>{errors.consent }</span>)}
          <button className='bg-green600 text-white w-full rounded mt-6 mb-2 py-2 cursor-pointer hover:bg-green-900 transition duration-300 hover:duration-300 hover:ease-in-out'>Submit</button>
        </form>
        
      </main>
      <CustomToast show={showToast} />
      <div className="attribution ml-20">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Carey Tobore</a>.
  </div>
    </>
    
  )
}

export default ContactUs