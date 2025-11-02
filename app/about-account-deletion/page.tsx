import React from "react";

export default async function page() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div
        className="h-full justify-items-center text-white justify-center bg-gradient-to-tl from-teal-400 to bg-[#6d28d9]"
        style={{minHeight: "92vh"}}
      ></div>
      <div className="snap-center container col-span-3 p-8 bg-white ">
        <h1 className='m-2'>TRIP Contract Services Account Deletion</h1>
        <p className='m-2'>
          At TRIP Contract Services, we respect your right to control your data, including the right to request
          permanent account deletion. This guide explains how to securely request deletion without needing an in-app
          feature.
        </p>
        <h3 className='m-2'>How to Request Deletion</h3>
        <p className='m-2'>To delete your TRIP Passenger or TRIP Driver account, please send an email from your <b>registered
          email address</b> to:</p>
        <p className='m-2'>
          - <b>Email</b>: <i>triptransports@gmail.com</i>
          <br/>
          - <b>Subject line</b>: <i>Account Deletion Request</i>
        </p>
        <b>In the body of your email, simply write:</b><br/>
        <p className='m-2'>
          "I would like to request account deletion."
        </p>
        <br/>
        <h2 className='m-2'>Security & Verification</h2>
        <p>After receiving your request, we will:
        </p><br/>
        <div className='m-2'>
          <b className='ml-5'>1. Verify that the email matches an existing account.</b>
          <br/>
          <br/>
          <p className='ml-5'>2. Send a <b>confirmation SMS</b> with a one-time code to ensure the request was
            intentional.</p>
          <br/>
          <p className='ml-5'>3. Proceed with deletion once you reply with the confirmation code.</p>
        </div>
        <br/>
        <h2 className='m-2'>What Will Be Deleted</h2>
        <p className='m-2'>Upon successful verification and confirmation, we will permanently delete:
        </p><br/>
        <p className='m-2 ml-5'> - Your personally identifiable information (name, phone number, email, profile photo,
          TIN, driver’s license)
        </p><br/>
        <br/>
        <p className='m-2 ml-5'> - Any registered children’s data (if applicable), upon request
        </p><br/>
        <p>This process may take <b>3–5 business days.</b>
        </p>
        <h2 className='m-2'>What We Must Retain</h2>
        <p className='m-2'>As explained in our Privacy Policy, we are required by law to retain some information even
          after account deletion, including:
        </p><br/>
        <p className='m-2 ml-5'> - <b>Your National ID Number (FIN)</b> and its image(s), for fraud prevention and
          regulatory compliance
        </p><br/>
        <p className='m-2 ml-5'> - <b>System-assigned User ID</b> for operational integrity
        </p><br/>
        <p>These records are:
        </p><br/>
        <p className='m-2 ml-5'> - Encrypted and access-controlled
        </p><br/>
        <p className='m-2 ml-5'> - Never used for marketing or profiling</p><br/>
        <h2>Children's Data Deletion</h2>
        <p>Guardians can request deletion of children's data using the same email-based process. Please include the
          child’s full name and clarify that the request includes child data.
        </p><br/>
        <h4>Important Notes</h4>
        <p className='m-2 ml-5'> - Account deletion is <b>permanent and irreversible</b></p><br/>
        <p className='m-2 ml-5'> - Only the <b>registered email address</b> can request deletion</p><br/>
        <p className='m-2 ml-5'> - We do <b>not</b> process deletion requests via phone or SMS</p><br/>
      </div>
      <div
        className="h-full justify-items-center text-white justify-center bg-gradient-to-tl from-teal-400 to bg-[#6D28D9]"
        style={{minHeight: "92vh"}}
      ></div>
    </div>
  )
}