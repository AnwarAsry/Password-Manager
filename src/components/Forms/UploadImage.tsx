import FormStyles from "@/styles/Form.module.scss"
import { FiUpload } from "react-icons/fi";

export const UploadImage = () => {
    return <>
        <div>
            <label htmlFor="image" className={FormStyles.ImageUploadInput}>
                <FiUpload />
                Image
            </label>
            <input id="image" type="file" name="image" accept="image/*" className={FormStyles.HideInput} />
        </div>
    </>
};