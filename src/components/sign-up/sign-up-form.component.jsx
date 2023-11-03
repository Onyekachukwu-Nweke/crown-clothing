const SignUpForm = () => {
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form action="">
        <label htmlFor="">Display Name</label>
        <input type="text" required/>
        <label htmlFor="">Email</label>
        <input type="text" required/>
        <label htmlFor="">Password</label>
        <input type="text" required/>
        <label htmlFor="">Confirm Password</label>
        <input type="text" required/>
      </form>
    </div>
  )
}

export default SignUpForm;