'use client'
import Style from "@/app/all_resume_templates/elements/Contact/Phone/phone.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";


export default function Phone(props) {

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
            let user_old_data = JSON.parse(localStorage.getItem("PHONE"))
            if (user_old_data == null) {
                localStorage.setItem('PHONE', JSON.stringify(content))
            }
            else {
                setContent(user_old_data)
            }
        } catch (error) {
            console.log(error)

        }

    }

    const handle_Phone = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("PHONE"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].content = new_value
            localStorage.setItem("PHONE", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_phone = () => {
        let user_old_data = JSON.parse(localStorage.getItem('PHONE'))
        let newField =
        {
            "content": "",

        }
        user_old_data.push(newField)                        // Pushing new fields in local storage variable
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('PHONE', JSON.stringify(user_old_data));   // Updateing local storage
    }



    const handle_delete_Phone = (index) => {
        let user_old_data = JSON.parse(localStorage.getItem('PHONE'))
        user_old_data.splice(index, 1)                        // Deleting the element according to the index value
        setContent(user_old_data)                           // Pushing new fieds in useState
        localStorage.setItem('PHONE', JSON.stringify(user_old_data));   // Updateing local storage

    }



    return (
        <div className={Style.container}>
            <div className={Style.wraper}>
                <div className={Style.icon_text_wraper}>

                    {content.map((item, index) => (
                        <div key={index} className={Style.icon_text}>
                            <div className={Style.icon} style={{ color: props.new_color }}>
                                <FaSquarePhone size={20} />
                            </div>
                            <Editor
                                title={item.content}
                                placeholder={"Phone"}
                                className={Style.text}
                                value={item.content}
                                onChange={(e) => handle_Phone(e, index)}
                            />
                            <div className={Style.delete_button}>
                                <button onClick={() => handle_delete_Phone(index)}>-</button>

                            </div>


                        </div>
                    ))}
                </div>
                <div className={Style.button_wraper}>
                    <button onClick={handle_add_phone}>+</button>


                </div>


            </div>

        </div>
    )
}