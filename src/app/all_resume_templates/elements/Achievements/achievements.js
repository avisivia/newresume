'use state'

import Style from "@/app/all_resume_templates/elements/Achievements/achievements.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

export default function Achievements(props) {

    let [content, setContent] = useState([
        {
            "content": "ACHIEVEMENTS",
        },
        {
            "achievements": "",
        },
    ])


    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                reload()
            }

        } catch (error) {
            console.log(error)

        }


    }, [1])



    const reload = () => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("ACHIEVEMENTS"))
            if (user_old_data == null) {
                localStorage.setItem('ACHIEVEMENTS', JSON.stringify(content))
            }
            else {
                setContent(user_old_data)
            }
        } catch (error) {
            console.log(error)

        }
    }

    const handleHeading = (event) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("ACHIEVEMENTS"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("ACHIEVEMENTS", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    const handle_Achievements = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("ACHIEVEMENTS"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].achievements = new_value
            localStorage.setItem("ACHIEVEMENTS", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }


    const handle_add_element = () => {
        let user_old_data = JSON.parse(localStorage.getItem('ACHIEVEMENTS'))
        let newField =
        {
            "achievements": "",
        }
        user_old_data.push(newField)                                            // Pushing new fields in local storage variable
        setContent(user_old_data)                                               // Pushing new fieds in useState
        localStorage.setItem('ACHIEVEMENTS', JSON.stringify(user_old_data));    // Updateing local storage
    }


    const handle_delete_element = (e, index) => {
        let user_old_data = JSON.parse(localStorage.getItem('ACHIEVEMENTS'))
        user_old_data.splice(index, 1)                        // Deleting the element according to the index value
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('ACHIEVEMENTS', JSON.stringify(user_old_data));   // Updateing local storage

    }

    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <div className={Style.icon} > <TbCertificate size={30} /> </div>

                    <Editor
                        title={content[0].content}
                        placeholder={"ACHIEVEMENTS"}
                        className={Style.title}
                        value={content[0].content}
                        onChange={handleHeading}

                    />
                </div>
                <button className={Style.button}
                    onClick={handle_add_element}
                >+
                </button>
            </div>

            <div className={Style.achievement_wrap}>
                {content.map((item, index) => (
                    <div key={index} className={Style.achievements}>
                        {index != 0 ? (
                            <div className={Style.achievements_button}>
                                <div className={Style.icon} style={{ color: props.color_change }}>
                                    <BiSolidRightArrowCircle />
                                </div>
                                <Editor
                                    title={item.achievements}
                                    placeholder={"Add your achievements"}
                                    value={item.achievements}
                                    onChange={(e) => handle_Achievements(e, index)}
                                />
                                <button className={Style.delete_button}
                                    onClick={(e) => handle_delete_element(e, index)}
                                >-
                                </button>
                            </div>
                        ) : (<></>)}

                    </div>
                ))}




            </div>
        </div>
    )
}