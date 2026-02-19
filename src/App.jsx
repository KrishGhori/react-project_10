import { useForm } from "react-hook-form"

import './App.css'

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve , 5000));
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >First Name : </label>
        <input className={errors.firstName ? 'error-first' : ''}
         {...register('firstName', {
          required : true ,
          pattern: {value:/^[A-Za-z]+$/i , message: 'first name is not as per rules' } , 
          minLength :{value:3 , message : 'minimum length 3'} , 
          maxLength :{value:10 , message:'maximum length 10'}
          })} />
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label >Middle Name :</label>
        <input className={errors.middleName ? 'error-middle' : ''}
         {...register('middleName',{
          required : true , 
          pattern: {value:/^[A-Za-z]+$/i , message: 'middle name is not as per rules' } , 
          minLength :{value :3 , message : 'minimum length 3'} , 
          maxLength :{value :10 , message: "maximum length 10"}
          })}/>
          {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label >Last Name :</label>
        <input className={errors.lastName ? 'error-last' : ''}
         {...register('lastName',{
          required : true , 
          pattern: {value:/^[A-Za-z]+$/i , message: 'last name is not as per rules' } , 
          minLength :{value :3 , message : 'minimum length 3'} , 
          maxLength :{value :10 , message: "maximum length 10"}
          })}/>
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />

      <button disabled = {isSubmitting} value={isSubmitting ? 'submiting' : ''}>Submit</button>
    </form>
  )
}

export default App
