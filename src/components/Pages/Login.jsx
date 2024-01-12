import React from 'react'
import LoginForm from '../core/Auth/LoginForm'

const Login = () => {
  return (
    <div className=" w-full h-screen bg-hero-pattern mx-auto flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-y-0 md:gap-x-12" >
      <LoginForm />
    </div>
  )
}

export default Login
