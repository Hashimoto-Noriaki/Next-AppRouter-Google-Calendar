'use client'    

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, PrimaryBtn } from '@/shared/components/atoms'
import { loginSchema,login,type LoginFormData,useLoginUser } from '@/features/auth'

export default function LoginPage() {
    const router = useRouter()
    const { setLoginUser } = useLoginUser()
    const [errorMessage,setErrorMessage] = useState("")

    const  {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginFormData) => {
        setErrorMessage("")
        try {
            const resUser = login(data)
            setLoginUser({ id: resUser.id, name: resUser.name })
            router.push("/calendar")
        } catch {
            setErrorMessage("ログインに失敗しました。")
        }
    }

    return (
        <div className="w-125 bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col items-center justify-center gap-10" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl text-lime-800 font-bold text-center">
                    ログイン
                </h1>
                {errorMessage !== "" && (
                    <div className="p-5 bg-red-500 text-white w-[80%] rounded-lg">
                        {errorMessage}
                    </div>
                )}
                <div className="w-[80%]">
                    <Input
                        type="text"
                        placeholder="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div className="w-[80%]">
                    <Input
                        type="password"
                        placeholder="password"
                        {...register("password")}
                    />
                    {errors.password &&(
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>
                <PrimaryBtn size="lg" type="submit">ログイン</PrimaryBtn>
            </form>
        </div>
    )
}
