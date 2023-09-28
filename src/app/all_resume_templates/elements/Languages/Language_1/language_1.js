'use client'

import Style from "@/app/all_resume_templates/elements/Languages/Language_1/language_1.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { BsFillChatSquareTextFill } from "react-icons/bs";

export default function Language_1(props) {

    let [content, setContent] = useState([
        {
            "content": "LANGUAGES",
        },
        {
            "languages": "",
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


    }, [])

    const reload = () => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("LANGUAGES"))
            if (user_old_data == null) {
                localStorage.setItem('LANGUAGES', JSON.stringify(content))
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
            let user_old_data = JSON.parse(localStorage.getItem("LANGUAGES"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("LANGUAGES", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    const handle_Languages = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("LANGUAGES"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].languages = new_value
            localStorage.setItem("LANGUAGES", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_element = () => {
        let user_old_data = JSON.parse(localStorage.getItem('LANGUAGES'))
        let newField =
        {
            "languages": "",
        }
        user_old_data.push(newField)                                        // Pushing new fields in local storage variable
        setContent(user_old_data)                                           // Pushing new fieds in useState
        localStorage.setItem('LANGUAGES', JSON.stringify(user_old_data));   // Updateing local storage
    }

    const handle_delete_element = (e, index) => {
        let user_old_data = JSON.parse(localStorage.getItem('LANGUAGES'))
        user_old_data.splice(index, 1)                                      // Deleting the element according to the index value
        setContent(user_old_data)                                           // Pushing new fieds in useState
        localStorage.setItem('LANGUAGES', JSON.stringify(user_old_data));   // Updateing local storage

    }




    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title} >
                    <div className={Style.icon} > <BsFillChatSquareTextFill size={22} /> </div>

                    <Editor
                        title={content[0].content}
                        placeholder={"LANGUAGES"}
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

            <div className={Style.languages_wrap}>
                {content.map((item, index) => (
                    <div key={index} className={Style.languages}>
                        {index != 0 ? (
                            <div className={Style.languages_button}>
                                <div className={Style.icon} style={{ color: props.color_change }}>
                                    <BiSolidRightArrowCircle />
                                </div>
                                <Editor
                                    title={item.languages}
                                    placeholder={"Add languages"}
                                    value={item.languages}
                                    onChange={(e) => handle_Languages(e, index)}
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