import CredentialPageStyles from "@/styles/CredentialPage.module.scss"

interface IViewInputValue {
    label: string
    type: string
    defaultValue?: string
}

export const ViewInputValue = ({ label, type, defaultValue }: IViewInputValue) => {
    return <>
        <label className={CredentialPageStyles.ViewInput}>
            {label}
            <input type={type} disabled defaultValue={defaultValue} />
        </label>
    </>
}