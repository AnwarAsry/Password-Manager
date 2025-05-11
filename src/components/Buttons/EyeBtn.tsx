import ButtonStyles from '@styles/Button.module.scss'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

interface IEyeBtnProps {
    showValueAction: () => void
    showValue: boolean
}
export const EyeBtn = ({ showValueAction, showValue }: IEyeBtnProps) => {
    return (
        <button
            type="button"
            className={ButtonStyles.EyeBtn}
            onClick={showValueAction}
            aria-label={showValue ? "Hide password" : "Show password"}
        >
            {showValue ? <FaRegEyeSlash className={ButtonStyles.BtnIcon} /> : <FaRegEye className={ButtonStyles.BtnIcon} />}
        </button>
    )
}