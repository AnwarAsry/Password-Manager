"use client"

import FormStyles from "@/styles/Form.module.scss"
import { useState } from "react";
import { FormInput } from "./FormInput";
import { Tag } from "./Tag";

export const CategoryInput = () => {

    // State to handle what tags user has labeld
    const [categories, setCategories] = useState<string[]>([]);
    // Handle the value of the input
    const [tagInput, setTagInput] = useState<string>("");

    // Handle adding a new tag
    const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            setCategories([...categories, tagInput.trim()]); // Add tag
            setTagInput(""); // Clear input
        }
    };

    // Handle removing a tag
    const removeTag = (index: number) => {
        setCategories(categories.filter((tag, i) => i !== index));
    };

    return <>
        {/* The category field */}
        <FormInput name="category" label="Category" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={e => addTag(e)} />
        {/* Display the categories */}
        <div className={FormStyles.tagsContainer}>
            {
                categories.map((tag, i) => <Tag text={tag} key={i} Remove={() => removeTag(i)} />)
            }
        </div>
    </>
}