import React from 'react'

const Display = ({details}) => {
  // console.log(details.address);

  return (
    <>
    <div className='container'>
      <div className="row mt-5">
        <div className="col"></div>
        <div style={{width:'700px',backgroundColor:'#e8d3ba'}} className="col-4 border shadow">
          <div className='p-3 mt-3' style={{backgroundColor:'#bf7419'}}>
            <h1 style={{fontFamily:'"Inter", serif',fontStyle:'oblique'}} className='text-center mb-2 fw-bold text-light'>Higher Secondary Admission</h1>
            <h6 className='text-center fw-bold mb-3 text-light'>St Mary's Convent Senior Secondary School, Kalamassery -658849</h6>
          </div>
          <u><h4 className='text-center fw-bold mb-3 mt-3'>Candidate details</h4></u>
          <div style={{textAlign:'justify',lineHeight:'1.5'}}  className='m-3 p-4'>
            <p><span className='fw-bold'>Name : </span> {details.name}</p>
            <p><span className='fw-bold'>Gender : </span>{details.gender}</p>
            <p><span className='fw-bold'>Date of Birth : </span>{details.dob.split("-").reverse().join("-")}</p>
            <p style={{whiteSpace:'pre-wrap'}}><span className='fw-bold'>Address : </span>{details.address}</p>
            <p><span className='fw-bold'>Mobile Number : </span>{details.contactNo}</p>
            <p><span className='fw-bold'>Email : </span>{details.email}</p>
            <p><span className='fw-bold'>Course : </span>{details.course}</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </>
  )
}

export default Display