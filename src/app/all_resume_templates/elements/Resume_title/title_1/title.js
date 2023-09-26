'use state'
import Style from "@/app/all_resume_templates/elements/Resume_title/title_1/title.module.css";
import { useEffect, useState } from "react";
import { Editor } from 'react-editor'


export default function Title(props) {
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
        <div className={Style.great} style={{ color: props.color_change }}>
            <div className={Style.container}>
                <div className={Style.name_wrap}>
                    <div className={Style.name}>
                        <Editor
                            title={title[0].name}
                            placeholder={placeholder}
                            value={title[0].name}
                            onChange={handle_title}
                        />
                    </div>
                </div>
                <div className={Style.position_wrap} style={{ borderColor: props.color_change }}>
                    <div className={Style.position}>
                        <div className={Style.position_text}>
                            <Editor
                                title={title[0].position}
                                placeholder={position_placeholder}
                                value={title[0].position}
                                onChange={handle_position}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}