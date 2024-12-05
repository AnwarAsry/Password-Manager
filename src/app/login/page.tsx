import { providerMap } from "@/auth";
import { ProviderButton } from "@/components/ProviderButton";
import loginStyles from "@/styles/login.module.scss"

// For future make input fields as credentials for login

const LoginPage = () => {
    return <>
        <form className={loginStyles.form}>
            {
                Object.values(providerMap).map(provider => <ProviderButton provider={provider} key={provider.id} />)
            }
        </form>
    </>
}

export default LoginPage;