'use client'

import { useContext } from 'react'
import { LoginUserContext } from '../providers/LoginUserContext'

export const useLoginUser = () => {
    const context = useContext(LoginUserContext)
    if(context === undefined){
        throw new Error("useLoginUser must be used in within a LoginUserProvider")
    }
    return context
}
