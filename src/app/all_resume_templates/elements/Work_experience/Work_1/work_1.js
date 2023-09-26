'use client'
import Style from "@/app/all_resume_templates/elements/Work_experience/Work_1/work_1.module.css";
import { IoIosContact } from "react-icons/io";
export default function Work_1(props) {


    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <IoIosContact size={35} className={Style.icon} />
                    WORK EXPERIENCE</div>
            </div>
            <div className={Style.work_content_wrap}>
                <div className={Style.position}>Your Position | MAR 2021 - DEC 2022</div>
                <div className={Style.company}>Name of the company</div>
                <div className={Style.responsibilities}>JOB RESPONSIBILITIES</div>
                <div className={Style.bullet_points}>
                    <li>System Administration Managed and maintained network infrastructure servers and system configurations</li>
                    <li>Software Development Designed and developed software solutions ensuring code quality and functionality</li>
                </div>
            </div>
        </div>
    )
}