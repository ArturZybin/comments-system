import React from 'react'
import { useSelector } from 'react-redux'

import { SignOutButton } from './SignOutButton'

import { withAuthorisation } from '../../../firebase/withAuthorisation'
import { TAuthUser, IStore } from '../../../constants/typescript-types'
import { PasswordUpdateForm } from './PasswordUpdateForm'


const AccountPageBase: React.FC = () => {
   let { authUser, username } = useSelector((store: IStore) => store.authUserStore)
   if (!username) username = 'Loading ...'
   const email = authUser?.email

   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title auth-form__username">{username}</h2>
            <h2 className="auth-form__title auth-form__email">{email}</h2>
            
            <PasswordUpdateForm />
            <hr/>
            <SignOutButton />
         </div>
      </div>
   )
}

const condition = (authUser: TAuthUser) => !!authUser

export const AccountPage = withAuthorisation(condition)(AccountPageBase)