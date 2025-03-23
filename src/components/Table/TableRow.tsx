import TableStyles from "@/styles/CredentialsTable.module.scss"

import { IAccounts } from "@/models/IAccounts";
import { CopyBtn } from "../Buttons/CopyBtn";
import { EyeBtn } from "../Buttons/EyeBtn";

import imgBils from "@/public/placeholder.png";
import Image from "next/image";


interface TableRowProps {
    entity: IAccounts
}

export const TableRow = ({ entity }: TableRowProps) => {
    return <>
        <tr className={TableStyles.TableRow}>
            <td>
                <div className={TableStyles.TableRowFirstColumn}>
                    <Image src={imgBils} alt="Logo" />

                    <p>
                        <span>{entity.platform}</span>
                        <span><a href={entity.linkUrl} target="_blank">{entity.linkUrl}</a></span>
                    </p>
                </div>
            </td>
            <td>
                <div className={TableStyles.TableRowColumn}>
                    <span>{entity.username}</span>
                    <CopyBtn value={entity.username} />
                </div>
            </td>
            <td>
                <div className={TableStyles.TableRowColumn}>
                    <span>{entity.password}</span>
                    {entity.password && <>
                        <EyeBtn />
                        <CopyBtn value={entity.password} />
                    </>}
                </div>
            </td>
        </tr>
    </>
};