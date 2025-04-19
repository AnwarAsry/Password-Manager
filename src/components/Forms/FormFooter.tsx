import FormStyles from "@/styles/Form.module.scss"
import ButtonStyles from "@/styles/Buttons.module.scss";

interface FormFooterProps {
    isLoading: boolean;
    onCancel?: () => void;
}

export const FormFooter = ({ isLoading, onCancel }: FormFooterProps) => (
    <div className={FormStyles.FormFooter}>
        <button className={ButtonStyles.SecondaryBtn} type="button" onClick={onCancel} disabled={isLoading}>
            Cancel
        </button>
        <button className={ButtonStyles.PrimaryBtn} type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Credential"}
        </button>
    </div>
);
