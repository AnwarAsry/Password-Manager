import FormStyles from '@styles/Form/Form.module.scss'
import LayoutStyles from '@styles/Layout.module.scss'
import { providerMap } from '@auth'
import { ProviderButton } from '@components/Auth/ProviderButton'

// For future make input fields as credentials for login
const LoginPage = () => {
    return (
        <main className={LayoutStyles.LoginLayout}>
            <form className={FormStyles.LoginForm}>
                {
                    Object.values(providerMap).map(provider => <ProviderButton key={provider.id} provider={provider} />)
                }
            </form>
        </main>
    )
}

export default LoginPage;