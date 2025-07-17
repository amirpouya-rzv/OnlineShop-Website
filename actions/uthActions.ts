'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (formData: FormData) => {
  const phone = formData.get("phone") as string | null
  const password = formData.get("password") as string | null
  const remember = formData.get("remember") ?? '0'

  const res = await axios.post("http://ecomadminapi.azhadev.ir/api/auth/login", {
    phone,
    password,
    remember,
  })

  if (res.status === 200) {
    const token = res.data.token
    ;(await cookies()).set("loginToken", token)
    redirect('/userpanel')
  }
}
