import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom';



const Landing = ({ setDetails }) => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [course, setCourse] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")

  const [invalidDob, setInvlaidDob] = useState(false)
  const [invalidContact, setInvalidContact] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidAddress, setInvalidAddress] = useState(false)

  //  console.log(address);


  const validateInput = (inputTag) => {
    // console.log(inputTag);
    const { name, value } = inputTag

    if (name =='dob') {
      setDob(value)
      if (!!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        setInvlaidDob(false)
      } else {
        setInvlaidDob(true)
      }
    } else if (name =='contact') {
      setContact(value)
      if (!!value.match(/^[6-9]\d{9}$/)) {
        setInvalidContact(false)
      } else {
        setInvalidContact(true)
      }
    } else if (name =='email') {
      setEmail(value)
      if (!!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setInvalidEmail(false)
      } else {
        setInvalidEmail(true)
      }
    } else {
      setAddress(value)
      if (!!value.match(/^[a-zA-Z0-9\s,.()'-]*$/)) {
        setInvalidAddress(false)
      } else {
        setInvalidAddress(true)
      }
    }

  }

  const resetForm=()=>{
    setAddress("")
    setDob("")
    setContact("")
    setEmail("")
    setCourse("")
    setGender("")
    setName("")
    setInvlaidDob(false)
    setInvalidContact(false)
    setInvalidEmail(false)
    setInvalidAddress(false)
  }

  const saveFormDetails=(e)=>{
    // e.preventDefault()
    if (name && gender && course && email && contact && dob && address) {
      if (invalidAddress || invalidContact || invalidDob || invalidEmail) {
        alert("Invalid input !!!")
        e.preventDefault()

      } else {
        alert('Candidate Details Saved Successfully !!!')
      setDetails({
        name:name,gender:gender,dob:dob,address:address,contactNo:contact,email:email,course:course
      })
      }
    } else {
      alert('Please fill out the form !!!')
      e.preventDefault()

    }
  }
  


  return (
    <>
      {/* Form */}
      <div className='container mt-4 p-3'>
        <div className='row'>
          <div className="col"></div>
          <div style={{ backgroundColor: '#fbfcf7' }} className="col border shadow rounded">
            <div className='p-1 mb-3' style={{backgroundColor:'#bf7419'}}>
              <h3 style={{ width: '700px'}} className='text-center mb-3 fs-1 fw-bold pt-2 text-light'>Higher Secondary Admission Form</h3>
              <h5 className='text-center fw-bold mb-4 text-light'>St Mary's Convent Senior Secondary School, Kalamassery -658849</h5>
            </div>

            <div className='p-5'>
              <Form>
                <Form.Group className="mb-3 text-dark fw-bold" >
                  <Form.Label>Name :</Form.Label>
                  <Form.Control onChange={(e) => setName(e.target.value)} value={name || ""} className='form-control border border-dark rounded' type="text" placeholder="Enter your name..." required />
                </Form.Group>
                <Form.Group className="mb-3 text-dark">
                  <Form.Label className='fw-bold'>Gender :</Form.Label>
                  <Form.Label className='ms-3'>Female </Form.Label>
                  <input onClick={() => setGender("Female")} value={gender || ""} className="form-check-input border border-dark ms-2" type="radio" name="gender" id="flexRadioDefault1" required />
                  <Form.Label className='ms-3'>Male  </Form.Label>
                  <input onClick={() => setGender("Male")} value={gender || ""} className="form-check-input border border-dark ms-2" type="radio" name="gender" id="flexRadioDefault1" required />
                  <Form.Label className='ms-3'>Others </Form.Label>
                  <input onClick={() => setGender("Others")} value={gender || ""} className="form-check-input border border-dark ms-2" type="radio" name="gender" id="flexRadioDefault1" required />
                </Form.Group>
                <Form.Group className="mb-3 text-dark fw-bold">
                  <Form.Label>Date of Birth :</Form.Label>
                  <Form.Control onChange={(e) => validateInput(e.target)} value={dob||""} name='dob' className='form-control border border-dark rounded' type="date" placeholder="Enter your DOB.." required />
                </Form.Group>
  
                {/* invalid dob */}
                {invalidDob && <div className='text-danger fw-bold'>Invalid DOB !!</div>}
  
                <Form.Group className="mb-3 text-dark fw-bold" >
                  <Form.Label>Address :</Form.Label>
                  <Form.Control onChange={(e) => validateInput(e.target)} value={address||""} name='address' className='form-control border border-dark rounded' as="textarea" rows={3} placeholder='Enter your address...' required />
                </Form.Group>
  
                {/* invalid address */}
                {invalidAddress && <div className='text-danger fw-bold'>Invalid Address !!</div>}
  
                <Form.Group className="mb-3 text-dark fw-bold" >
                  <Form.Label>Mobile Number :</Form.Label>
                  <Form.Control onChange={(e) => validateInput(e.target)} value={contact || ""} name='contact' className='form-control border border-dark rounded' type="text" placeholder="Enter your contact number..." required />
                </Form.Group>
  
                {/* invalid Contact */}
                {invalidContact && <div className='text-danger fw-bold'>Invalid Mobile Number !!</div>}
  
                <Form.Group className="mb-3 text-dark fw-bold" >
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control onChange={(e) => validateInput(e.target)} value={email || ""} name='email' className='form-control border border-dark rounded' type="email" placeholder="Enter your email..." required />
                </Form.Group>
  
                {/* invalid email */}
                {invalidEmail && <div className='text-danger fw-bold'>Invalid Email !!</div>}
  
                <Form.Group className="mb-3">
                  <Form.Label className='me-3 text-dark fw-bold'>Course :</Form.Label>
                  <select className='border border-dark rounded p-1' id="course" onChange={(e) => setCourse(e.target.value)} defaultValue={"-- Select Course --"} required>
                    <option value="-- Select Course --" disabled>-- Select Course --</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Biology Science">Biology Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanities</option>
                  </select>
                </Form.Group>
                <div style={{width:"200px"}} className='d-flex mt-5 justify-content-between align-items-center'>
                  <Link to={'/candidatedetails'} onClick={saveFormDetails} className='btn btn-primary'  type='submit' >Register</Link>
                  <Button className='btn btn-danger' onClick={resetForm} as="input" type="reset" value="Cancel" />
                </div>
              </Form>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  )
}

export default Landing