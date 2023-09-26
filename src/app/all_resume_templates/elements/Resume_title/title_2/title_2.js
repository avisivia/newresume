'use state'
import Style from "@/app/all_resume_templates/elements/Resume_title/title_2/title_2.module.css";
import { useEffect, useState } from "react";
import { Editor } from 'react-editor'


export default function Title_2() {
    const [title, setTitle] = useState(
        [
            {
                name: "YOUR NAME",
                position: "Position exp: Teacher, Singer"
            }
        ]
    )
    const placeholder = "YOUR NAME";
    const position_placeholder = "Position exp: Teacher, Singer"

    useEffect(() => {
        let old_user_data = JSON.parse(localStorage.getItem("TITLE"))
        if (old_user_data == null) {
            localStorage.setItem("TITLE", JSON.stringify(title))
        } else {
            setTitle(old_user_data)
        }

    }, [1])

    const handle_title = (event) => {
        let old_user_data = JSON.parse(localStorage.getItem("TITLE"))
        old_user_data[0].name = event
        localStorage.setItem("TITLE", JSON.stringify(old_user_data))
    }
    const handle_position = (event) => {
        let old_user_data = JSON.parse(localStorage.getItem("TITLE"))
        old_user_data[0].position = event
        localStorage.setItem("TITLE", JSON.stringify(old_user_data))
    }

    return (
        <div className={Style.container}>
            <div className={Style.name}>
                <Editor
                    title={title[0].name}
                    placeholder={placeholder}
                    value={title[0].name}
                    onChange={handle_title}
                />
                <div className={Style.position}>
                    <Editor
                        title={title[0].position}
                        placeholder={position_placeholder}
                        value={title[0].position}
                        onChange={handle_position}
                    />
                </div>
            </div>

        </div>
    )
}