'use state'
import Style from "@/app/all_resume_templates/elements/Resume_title/title_3/title_3.module.css";
import { useEffect, useState } from "react";
import { Editor } from 'react-editor';
import Image from "next/image";


export default function Title_3(props) {

    const [title, setTitle] = useState(
        [
            {
                name: "YOUR NAME",
                position: "Position exp: Teacher, Singer"
            }
        ]
    )
    const placeholder = "YOUR NAME";
    const position_placeholder = "Position exp: Teacher, Singer";

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
        <div className={Style.container} style={{ color: props.color_change }}>
            <div className={Style.title_wrap} style={{ backgroundColor: props.color_change }}>
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
            <div className={Style.photo}>
                <Image src="/photo.png" width={300} height={300} alt="your_photo" style={{ borderColor: props.color_change }} />

            </div>
        </div>
    )
}