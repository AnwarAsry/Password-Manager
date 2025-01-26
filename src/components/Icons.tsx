import { MyIconTypes } from "@/models/Enums";

import { HiOutlineKey } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md"


interface IconsProps {
    type: MyIconTypes
}

export const Icons = ({ type }: IconsProps) => {
    switch (type) {
        case MyIconTypes.Email:
            return <MdOutlineEmail className="InputIcons" />
        case MyIconTypes.User:
            return <LuUser className="InputIcons" />
        case MyIconTypes.Password:
            return <HiOutlineKey className="InputIcons" />
    }
}