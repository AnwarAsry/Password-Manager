import FormStyles from "@/styles/Form.module.scss"
import { providerMap } from "@/auth";
import { ProviderButton } from "@/components/ProviderButton";

// For future make input fields as credentials for login

const LoginPage = () => {
    return <>
        <form className={FormStyles.FormLogin}>
            {
                Object.values(providerMap).map(provider => <ProviderButton provider={provider} key={provider.id} />)
            }
        </form>
    </>
}

export default LoginPage;