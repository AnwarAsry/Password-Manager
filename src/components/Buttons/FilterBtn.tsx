import ButtonStyles from "@/styles/Buttons.module.scss";

export const FilterBtn = () => {
    return <>
        <select
            className={ButtonStyles.Filter}
        >
            <option value="all">All Categories</option>
            <option value="social">Social</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
        </select>
    </>;
}