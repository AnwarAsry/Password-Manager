import TagStyles from "@/styles/Tag.module.scss"
import { CgClose } from "react-icons/cg"

interface ITagProps {
    text: string
    Remove?: () => void
}

export const Tag = ({ text, Remove }: ITagProps) => {

    if (Remove) {
        return <>
            <span className={TagStyles.tagRemove} onClick={() => Remove()} >
                {text}
                <CgClose className={TagStyles.removeIcon} />
            </span>
        </>
    }

    return <>
        <span className={TagStyles.tag} >
            {text}
        </span>
    </>
}