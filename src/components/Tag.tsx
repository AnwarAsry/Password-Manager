import TagStyles from "@/styles/Tag.module.scss"
import { CgClose } from "react-icons/cg"

interface ITagProps {
    text: string
    index?: number
    removeIcon?: boolean
    Remove?: (index: number) => void
}

export const Tag = ({ text, index, removeIcon, Remove }: ITagProps) => {

    if (removeIcon && Remove && index) {
        return <>
            <span className={TagStyles.tagRemove} onClick={() => Remove(index)} >
                {text}
                {removeIcon && <CgClose className={TagStyles.removeIcon} />}
            </span>
        </>
    }

    return <>
        <span className={TagStyles.tag} >
            {text}
        </span>
    </>
}