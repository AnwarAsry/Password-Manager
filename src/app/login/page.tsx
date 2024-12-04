// "use client"

// import { providerMap } from "@/auth";
// import { AuthError } from "next-auth";

// {async () => {
//     try {
//         await signIn(provider.id, {
//             redirectTo: props.searchParams?.callbackUrl ?? "",
//         })
//     } catch (error) {
//         // Signin can fail for a number of reasons, such as the user
//         // not existing, or the user not having the correct role.
//         // In some cases, you may want to redirect to a custom error
//         if (error instanceof AuthError) {
//             return
//         }

//         // Otherwise if a redirects happens Next.js can handle it
//         // so you can just re-thrown the error and let Next.js handle it.
//         // Docs:
//         // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
//         throw error
//     }
// }}

import loginStyles from "@/styles/login.module.scss"

const LoginPage = () => {
    return <>
        <form action="#" className={loginStyles.form}>
            <button className={loginStyles.provider}>
                Sign in with Google
            </button>
        </form>
    </>
}

export default LoginPage;