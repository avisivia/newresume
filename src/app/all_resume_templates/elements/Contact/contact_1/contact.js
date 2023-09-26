'use client'
import Style from "@/app/all_resume_templates/elements/Contact/contact_2/contact_2.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { TiContacts } from "react-icons/ti";
import Email from "../Email/email";
import Phone from "../Phone/phone";


export default function Contact_1(props) {


    let [content, setContent] = useState([

        {
            "content": "CONTACT",
        },
        {
            "field_phone": "",
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
            let user_old_data = JSON.parse(localStorage.getItem("CONTACT_2"))
            if (user_old_data == null) {
                localStorage.setItem('CONTACT_2', JSON.stringify(content))
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
            let user_old_data = JSON.parse(localStorage.getItem("CONTACT_2"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("CONTACT_2", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={Style.container}>
            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title}>
                    <div className={Style.icon}>
                        <TiContacts size={35} className={Style.icon} />
                    </div>
                    <Editor
                        title={content[0].content}
                        placeholder={"CONTACT"}
                        className={Style.title}
                        value={content[0].content}
                        onChange={handleHeading}

                    />

                </div>
            </div>
            <Email new_color={props.color_change} />
            <Phone new_color={props.color_change} />
        </div>
    )
}