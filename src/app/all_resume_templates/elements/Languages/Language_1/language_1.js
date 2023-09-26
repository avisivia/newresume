'use state'

import Style from "@/app/all_resume_templates/elements/Languages/Language_1/language_1.module.css";
import { BsFillChatSquareTextFill } from "react-icons/bs";

export default function Language_1(props) {




    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <BsFillChatSquareTextFill size={22} className={Style.icon} />LANGUAGES
                </div>
            </div>
            <div className={Style.language_wrap}>
                <div className={Style.language}>
                    <li>English</li>
                    <li>Spanish</li>
                    <li>Hindi</li>
                    <li>Punjabi</li>
                </div>

            </div>
        </div>
    )
}