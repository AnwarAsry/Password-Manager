"use client"

import TableStyles from "@/styles/CredentialsTable.module.scss"

import { IAccounts } from "@/models/IAccounts";
import { CopyBtn } from "../Buttons/CopyBtn";
import { EyeBtn } from "../Buttons/EyeBtn";

import imgBils from "@/public/placeholder.png";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";


interface TableRowProps {
    entity: IAccounts
}

export const TableRow = ({ entity }: TableRowProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return <>
        <tr className={TableStyles.TableRow}>
            <td>
                <div className={TableStyles.TableRowFirstColumn}>
                    <Image src={imgBils} alt="Logo" />

                    <p>
                        <span onClick={() => redirect(`/view/${entity.id}`)}>{entity.platform}</span>
                        <span><a href={entity.linkUrl} target="_blank">{entity.linkUrl}</a></span>
                    </p>
                </div>
            </td>
            <td>
                <div className={TableStyles.TableRowColumn}>
                    <span>{entity.email}</span>
                    <CopyBtn value={entity.email} />
                </div>
            </td>
            <td>
                <div className={TableStyles.TableRowColumn}>
                    <span>{showPassword ? entity.password : "••••••••"}</span>
                    {entity.password && <>
                        <EyeBtn
                            showValue={showPassword}
                            showValueAction={() => setShowPassword(prev => !prev)}
                        />
                        <CopyBtn value={entity.password} />
                    </>}
                </div>
            </td>
        </tr>
    </>
};