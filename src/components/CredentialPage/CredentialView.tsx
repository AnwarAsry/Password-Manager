import CredentialPageStyles from "@/styles/CredentialPage.module.scss";
import ButtonStyles from "@/styles/Buttons.module.scss";
import WrapperStyles from "@/styles/Wrappers.module.scss";

import { IAccounts } from "@/models/IAccounts"
import { Tag } from "../Tag"
import { FormInput } from "../FormInput"

import { FiEdit } from "react-icons/fi"


interface CredentialViewProps {
    entity: IAccounts
    edit: () => void
    deleteFn: (id: string) => void
}

export const CredentialView = ({ entity, edit, deleteFn }: CredentialViewProps) => {
    return <>
        <h3 className={CredentialPageStyles.TitlePlatform}>{entity.platform}</h3>

        <FormInput viewOnly label="Username/Email" type="text" defaultValue={entity.username} />
        <FormInput viewOnly label="Password" type="password" defaultValue={entity.password} />

        <label htmlFor="notes" className={CredentialPageStyles.ViewTextarea}>
            Notes:
            <textarea id="notes" disabled defaultValue={entity.notes}></textarea>
        </label>

        <div className={CredentialPageStyles.CategoriesSection}>
            <label>Categories:</label>
            <div className={CredentialPageStyles.Categories}>
                {entity.category?.map((obj, i) => <Tag key={i} text={obj} />)}
            </div>
        </div>

        <div className={WrapperStyles.BtnsContainer}>
            <button
                className={ButtonStyles.DeleteBtn}
                onClick={() => deleteFn(entity.id)}
            >
                Delete
            </button>
            <button
                className={ButtonStyles.PrimaryBtn}
                onClick={edit}
            >
                <FiEdit /> Edit
            </button>
        </div>
    </>
}