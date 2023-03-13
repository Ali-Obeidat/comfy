import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0()

  const [myUser, setMyUser] = useState(null)
  const [authIsReady, setAuthIsReady] = useState(false)

  useEffect(() => {
    if (!isLoading) {

      setMyUser(user)
      setAuthIsReady(true)
    }

  }, [user, isLoading])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser, authIsReady }}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
