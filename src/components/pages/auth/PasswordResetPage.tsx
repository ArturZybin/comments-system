import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import * as ROUTES from '../../../constants/routes'
import { checkFormInvalid, getInputClassname } from '../validate';


export const PasswordResetPage: React.FC = () => {
   const history = useHistory()
   const firebase = useContext(FirebaseContext)
   

   const [email, setEmail] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleReset(): void {
      if (isFormInvalid) return

      firebase
         .doPasswordReset(email)
         .then(() => {
            setEmail('')
            setError(null)

            history.push(ROUTES.SIGN_IN)
         })
         .catch(setError)
   }


   let emailClassName = getInputClassname('email', email)

   const isFormInvalid = checkFormInvalid({ email })


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Reset Password</h2>

            <form onSubmit={handleReset}>
               <input
                  name="email"
                  className={emailClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value.replace(/ /g, ''))}
                  type="text"
                  placeholder="Email Address"
               />
               <button disabled={isFormInvalid} type="submit" className="auth-form__input auth-form__button">
                  Send reset email
               </button>

               {error && <p className="auth-form__error">{error.message}</p>}
            </form>

            <p className="auth-form__link">
               Recall password? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
         </div>
      </div>
   )
}