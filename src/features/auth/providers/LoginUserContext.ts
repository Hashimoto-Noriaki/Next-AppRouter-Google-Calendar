'use client'

import { createContext } from 'react'
import type { LoginUserType } from '../types/login'

export type LoginUserContextType = {
    loginuser: LoginUserType
    setLoginUser:(user: LoginUserType) => void;
}

export const LoginUserContext = createContext<LoginUserContextType | undefined>(
    undefined
)
