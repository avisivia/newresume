'use client'
import Style from "@/app/all_resume_templates/elements/Contact/Email/email.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";


export default function Email(props) {

    let [content, setContent] = useState([

        {
            "content": "",

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
            let user_old_data = JSON.parse(localStorage.getItem("EMAIL"))
            if (user_old_data == null) {
                localStorage.setItem('EMAIL', JSON.stringify(content))
            }
            else {
                setContent(user_old_data)
            }
        } catch (error) {
            console.log(error)

        }

    }

    const handle_Email = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("EMAIL"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].content = new_value
            localStorage.setItem("EMAIL", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_email = () => {
        let user_old_data = JSON.parse(localStorage.getItem('EMAIL'))
        let newField =
        {
            "content": "",

        }
        user_old_data.push(newField)                        // Pushing new fields in local storage variable
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('EMAIL', JSON.stringify(user_old_data));   // Updateing local storage
    }



    const handle_delete_email = (index) => {
        let user_old_data = JSON.parse(localStorage.getItem('EMAIL'))
        user_old_data.splice(index, 1)                        // Deleting the element according to the index value
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('EMAIL', JSON.stringify(user_old_data));   // Updateing local storage

    }


    return (
        <div className={Style.container}>
            <div className={Style.wraper}>
                <div className={Style.icon_text_wraper}>

                    {content.map((item, index) => (
                        <div key={index} className={Style.icon_text}>
                            <div className={Style.icon} style={{ color: props.new_color }}>
                                <MdOutlineAlternateEmail size={20} />
                            </div>
                            <Editor
                                title={item.content}
                                placeholder={"Email"}
                                className={Style.text}
                                value={item.content}
                                onChange={(e) => handle_Email(e, index)}
                            />
                            <div className={Style.delete_button}>
                                <button onClick={() => handle_delete_email(index)}>-</button>

                            </div>


                        </div>
                    ))}



                </div>

                <div className={Style.button_wraper}>
                    <button onClick={handle_add_email}>+</button>


                </div>

            </div>
        </div>
    )
}