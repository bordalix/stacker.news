import React, { useContext } from 'react'
import { gql, useQuery } from '@apollo/client'

export const MeContext = React.createContext({
  me: null
})

export function MeProvider ({ children }) {
  const query = gql`
  {
    me {
      id
      sats
      stacked
      freePosts
      freeComments
      hasNewNotes
    }
  }`
  const { data } = useQuery(query, { pollInterval: 1000 })

  const contextValue = {
    me: data ? data.me : null
  }

  return (
    <MeContext.Provider value={contextValue}>
      {children}
    </MeContext.Provider>
  )
}

export function useMe () {
  const { me } = useContext(MeContext)
  return me
}
