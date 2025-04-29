"use client"

import TableStyles from '@styles/Table.module.scss'
// import imgBils from '@public/placeholder.png'
// import Image from 'next/image'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { StoredCredential } from '@prismaModels'
import { CopyBtn } from '@components/Buttons/CopyBtn'
import { EyeBtn } from '@components/Buttons/EyeBtn'


interface TableRowProps {
    entity: StoredCredential
}
export const TableRow = ({ entity }: TableRowProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <tr className={TableStyles.TableRow}>
            <td>
                <div className={TableStyles.TableRowFirstColumn}>
                    {/* <Image src={imgBils} alt="Logo" /> */}

                    <p>
                        <span onClick={() => redirect(`/dashboard/view/${entity.id}`)}>{entity.platform}</span>
                        {/* <span><a href={entity.linkUrl} target="_blank">{entity.linkUrl}</a></span> */}
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
    )
}