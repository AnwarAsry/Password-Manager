import ButtonStyles from "@/styles/Buttons.module.scss"
import { FiExternalLink } from "react-icons/fi";

interface ILinkBtnProps {
    value: string;
}

export const LinkBtn = ({ value }: ILinkBtnProps) => {

    const openExternalLink = () => {
        if (value) {
            window.open(value, "_blank", "noopener,noreferrer");
        }
    };

    return <>
        <button className={ButtonStyles.LinkBtn} onClick={openExternalLink}>
            <FiExternalLink className={ButtonStyles.LinkBtn} />
        </button>
    </>
};