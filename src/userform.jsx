import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
function Userform(){
    const uservalidate=Yup.object({
      fname:Yup.string().required('*required').min(2,'*min 2 char').max(20,'*max 20 char only'),
      lname:Yup.string().required('*required'),
      age:Yup.string().required('*required'),
      email:Yup.string().required('*required').email('*enter valid email'),
      number:Yup.string().required('*required')
    })
    var userform=useFormik(
        {
            initialValues:{
                'fname':'',
                'lname':'',
                'age':'',
                'email':'',
                'number':''
            },
            onSubmit:(fv)=>{console.log(fv)},
            validationSchema:uservalidate
        }
    )
    console.log(userform);

    return(<div className="form-mdiv">
        <div className="form-subdiv">
            <h1>User Form</h1>
            <form onSubmit={userform.handleSubmit}>
                <label>Firstname:</label><br/>
                <input name='fname' onChange={userform.handleChange} onBlur={userform.handleBlur} type="text"></input>
                {userform.errors.fname&&userform.touched.fname?<span className="err-msg-color">{userform.errors.fname}</span>:null}<br/>
                <label>Lastname:</label><br/>
                <input name='lname' onChange={userform.handleChange} onBlur={userform.handleBlur} type="text"></input>
                {userform.errors.lname&&userform.touched.lname?<span className="err-msg-color">{userform.errors.lname}</span>:null}<br/>
                <label>Age:</label><br/>
                <input name='age' onChange={userform.handleChange} onBlur={userform.handleBlur} type="text"></input>
                {userform.errors.age&&userform.touched.age?<span className="err-msg-color">{userform.errors.age}</span>:null}<br/>
                <label>Email:</label><br/>
                <input name='email' onChange={userform.handleChange} onBlur={userform.handleBlur} type="text"></input>
                {userform.errors.email&&userform.touched.email?<span className="err-msg-color">{userform.errors.email}</span>:null}<br/>
                <label>Number:</label><br/>
                <input name='number' onChange={userform.handleChange} onBlur={userform.handleBlur} type="text"></input>
                {userform.errors.number&&userform.touched.number?<span className="err-msg-color">{userform.errors.number}</span>:null}<br/>
                <button type="submit">Register</button><br/>
            </form>
        </div>
        </div>
    )
}
export default Userform;