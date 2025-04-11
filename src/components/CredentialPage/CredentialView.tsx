import ButtonStyles from "@/styles/Buttons.module.scss";
import WrapperStyles from "@/styles/Wrappers.module.scss";

import { IAccounts } from "@/models/IAccounts"

import { FiEdit } from "react-icons/fi"
import { MyIconTypes } from "@/models/Enums";
import { ViewOnlyField } from "./ViewOnlyField";


interface CredentialViewProps {
    entity: IAccounts
    edit: () => void
    deleteFn: (id: string) => void
}

export const CredentialView = ({ entity, edit, deleteFn }: CredentialViewProps) => {
    return <>
        <section className={WrapperStyles.PageInfoContainer}>
            <div className={WrapperStyles.PageInfoHeader}>
                <img
                    className={WrapperStyles.PageInfoImage}
                    src={entity.image}
                    alt={entity.platform}
                />
                <h2>{entity.platform}</h2>
                <a href={entity.linkUrl}>{entity.linkUrl}</a>
            </div>

            <ViewOnlyField
                label="Username:"
                content={entity.username || ""}
            />

            <ViewOnlyField
                label="Email address:"
                content={entity.email}
            />

            <ViewOnlyField
                label="Password:"
                content={entity.password || ""}
            />

            <ViewOnlyField
                label="Notes:"
                content={entity.notes || ""}
            />

            <ViewOnlyField
                label="Categories:"
                content={entity.category || []}
                isCategory
            />

            <div className={ButtonStyles.BtnsContainer}>
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
        </section>
    </>
}