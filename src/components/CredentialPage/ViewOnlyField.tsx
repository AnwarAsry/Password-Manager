import FormStyles from "@/styles/Form.module.scss";

import { Icons } from "@/components/Icons";
import { Tag } from "@/components/Tag";
import { MyIconTypes } from "@/models/Enums";


interface ViewOnlyFieldProps {
    label: string
    content: string | string[]
    iconType?: MyIconTypes
    isCategory?: boolean
}

export const ViewOnlyField = ({ label, iconType, content, isCategory }: ViewOnlyFieldProps) => {
    return <>
        <div>
            <label className={FormStyles.Label}>{label}</label>
            <div className={FormStyles.ViewOnlyInput}>
                {iconType && <Icons type={iconType} />}
                {
                    isCategory && Array.isArray(content)
                        ? content.map((tag, i) => <Tag key={i} text={tag} />)
                        : <p>{content}</p>
                }
            </div>
        </div>
    </>
}