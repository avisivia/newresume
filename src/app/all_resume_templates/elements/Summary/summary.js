'use client'
import Style from "@/app/all_resume_templates/elements/Summary/summary.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { IoIosContact } from "react-icons/io";


export default function Summary(props) {

    let [content, setContent] = useState([

        {
            "content": "ABOUT YOU",
        },
        {
            "summary": "",
        },
    ])

    const placeholder = "You describe yourself in a resume by using action words, industry-specific skills, and powerful adjectives throughout it. By making the most of the words you use to describe your goals and accomplishments.";


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
            let user_old_data = JSON.parse(localStorage.getItem("SUMMARY"))
            if (user_old_data == null) {
                localStorage.setItem('SUMMARY', JSON.stringify(content))
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
            let user_old_data = JSON.parse(localStorage.getItem("SUMMARY"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("SUMMARY", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }

    const handleSummary = (event) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("SUMMARY"))   // Getting data from local storage
            let new_value = event
            user_old_data[1].summary = new_value
            localStorage.setItem("SUMMARY", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={Style.container} >
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <div className={Style.icon} ><IoIosContact size={35} /></div>

                    <Editor
                        title={content[0].content}
                        placeholder={"ABOUT YOU"}
                        className={Style.title}
                        value={content[0].content}
                        onChange={handleHeading}

                    />

                </div>
            </div>
            <div className={Style.summary}>
                <Editor
                    title={content[1].summary}
                    placeholder={placeholder}
                    value={content[1].summary}
                    onChange={handleSummary}

                />
            </div>
        </div>
    )
}


