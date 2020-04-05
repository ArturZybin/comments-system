import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import validator from 'email-validator';

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import * as ROUTES from '../../../constants/routes'


export const SignInPage: React.FC = () => {
   const history = useHistory()
   const firebase = useContext(FirebaseContext)

   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()

      firebase
         .doSignInWithEmailAndPassword(email, password)
         .then(() => {
            setEmail('')
            setPassword('')
            setError(null)

            history.push(ROUTES.COMMENTS)
         })
         .catch(setError)
   }


   let emailClassName = 'auth-form__input'
   let passwordClassName = 'auth-form__input'
   emailClassName += (email && !validator.validate(email)) ? ' auth-form__input_invalid' : ''
   passwordClassName += (password && password.length < 6) ? ' auth-form__input_invalid' : ''

   const isFormInvalid = password.length < 6 || !validator.validate(email)


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Sign In</h2>

            <form onSubmit={handleSubmit}>
               <input
                  name="email"
                  className={emailClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value.trim())}
                  type="text"
                  placeholder="Email Address"
               />
               <input
                  name="password"
                  className={passwordClassName}
                  value={password}
                  onChange={(event) => setPassword(event.target.value.trim())}
                  type="password"
                  placeholder="Password"
               />
               <button disabled={isFormInvalid} type="submit" className="auth-form__input auth-form__button">
                  Sign In
               </button>

               {error && <p className="auth-form__error">{error.message}</p>}
            </form>

            <p className="auth-form__link">
               Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
            </p>
            <p className="auth-form__link">
               Forgot password? <Link to={ROUTES.PASSWORD_RESET}>Reset</Link>
            </p>
         </div>
      </div>
   )
}