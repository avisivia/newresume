'use client'
import Style from "@/app/all_resume_templates/elements/Reference/Reference_1/reference_1.module.css";
import { GoCrossReference } from "react-icons/go";
import { FaSquarePhone } from "react-icons/fa6";
export default function Reference_1(props) {


    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <GoCrossReference size={25} className={Style.icon} />
                    REFERENCES</div>
            </div>
            <div className={Style.work_content_wrap}>
                <div className={Style.position}>Name of the Person | Your Position</div>
                <div className={Style.company}>
                    <div className={Style.icon} style={{ color: props.color_change }}>
                        <FaSquarePhone size={20} />
                    </div>
                    Phone
                </div>
            </div>
        </div>
    )
}