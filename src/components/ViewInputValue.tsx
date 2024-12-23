import CredentialPageStyles from "@/styles/CredentialPage.module.scss"

interface IViewInputValue {
    label: string
    type: string
    defaultValue?: string
}

export const ViewInputValue = ({ label, defaultValue }: IViewInputValue) => {
    return <>
        <label className={CredentialPageStyles.ViewInput}>
            {label}
            <input type="text" disabled defaultValue={defaultValue} />
        </label>
    </>
}