import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [postId, setpostId] = useState([])

  return <AuthContext.Provider value={{ setpostId, postId }}>{children}</AuthContext.Provider>
}
