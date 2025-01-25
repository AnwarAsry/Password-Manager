import FormStyles from "@/styles/Form.module.scss"

import { providerMap } from "@/auth";
import { ProviderButton } from "@/components/ProviderButton";

// For future make input fields as credentials for login

const LoginPage = () => {
    return <>
        <form className={FormStyles.FormLogin}>
            <div className={FormStyles.FormContent}>
                {
                    Object.values(providerMap).map(provider => <ProviderButton provider={provider} key={provider.id} />)
                }
            </div>
        </form>
    </>
}

export default LoginPage;