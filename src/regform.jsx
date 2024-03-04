import {Formik} from 'formik';
import * as Yup from 'yup';
const validateform=Yup.object({
    firstname:Yup.string().min(2,'*minimum 2 char').max(20,'*max 20 char').required('*required'),
    lastname:Yup.string().min(2,'*minimum 2 char').max(20,'*max 20 char').required('*required'),
    age:Yup.string().required('*required'),
    number:Yup.string().length(10,'*enter valid number').required('*required'),
    email:Yup.string().email('enter valid email').required('*required')
})
function Regform(){
    return <div className='form-mdiv'>
        <div className='form-subdiv'>
        <h1>Registration Form</h1>
         <Formik
    initialValues={{
        'firstname':'',
        'lastname':'',
        'age':'',
        'number':'',
        'email':''
    }}
    onSubmit={(fv)=>{console.log(fv)}}
    validationSchema={validateform}
    >
        {(rf)=>{
            return <form onSubmit={rf.handleSubmit}>
                <label>Firstname:</label><br/><input name='firstname' type='text' onChange={rf.handleChange} onBlur={rf.handleBlur} />
                {rf.errors.firstname&&rf.touched.firstname?<span className='err-msg-color'>{rf.errors.firstname}</span>:null}<br/>
                <label>Lastname:</label><br/><input name='lastname' type='text' onChange={rf.handleChange} onBlur={rf.handleBlur} />
                {rf.errors.lastname && rf.touched.lastname? <span className='err-msg-color'>{rf.errors.lastname}</span>:null}<br/>
                <label>Age:</label><br/><input name='age' type='text' onChange={rf.handleChange} onBlur={rf.handleBlur}/>
                {rf.errors.age && rf.touched.age? <span className='err-msg-color'>{rf.errors.age}</span>:null}<br/>
                <label>Number:</label><br/><input name='number' type='text' onChange={rf.handleChange} onBlur={rf.handleBlur}/>
                {rf.errors.number && rf.touched.number? <span className='err-msg-color'>{rf.errors.number}</span>:null}<br/>
                <label>Email:</label><br/><input name='email' type='text' onChange={rf.handleChange} onBlur={rf.handleBlur}/>
                {rf.errors.email && rf.touched.email? <span className='err-msg-color'>{rf.errors.email}</span>:null}<br/>
                <button type='submit'>Save</button><br/>
            </form>
        }}

    </Formik>
    </div>
    </div>
}
export default Regform;