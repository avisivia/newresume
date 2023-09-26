'use state'

import Style from "@/app/all_resume_templates/elements/Achievements/achievements.module.css";
import { GiAchievement } from "react-icons/gi";

export default function Achievements(props) {





    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title} >
                    <GiAchievement size={35} className={Style.icon} />ACHIEVEMENTS
                </div>
            </div>
            <div className={Style.achievement_wrap}>
                <div className={Style.achievements}>
                    <li>Project Successes</li>
                    <li>Certifications and Training</li>
                    <li>Process Improvements</li>
                    <li>Team Contributions</li>
                    <li>Awards and Recognitions</li>
                </div>

            </div>
        </div>
    )
}