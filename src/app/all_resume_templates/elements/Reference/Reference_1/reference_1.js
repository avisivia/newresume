'use client'
import Style from "@/app/all_resume_templates/elements/Reference/Reference_1/reference_1.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { GoCrossReference } from "react-icons/go";
import { FaSquarePhone } from "react-icons/fa6";



export default function Reference_1(props) {

    let [content, setContent] = useState([

        {
            "content": "REFERENCES",
        },
        {
            "name": "",
            "position": "",
            "phone": [{ "Number": "" },],

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
            let user_old_data = JSON.parse(localStorage.getItem("REFERENCES"))
            if (user_old_data == null) {
                localStorage.setItem('REFERENCES', JSON.stringify(content))
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
            let user_old_data = JSON.parse(localStorage.getItem("REFERENCES"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("REFERENCES", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    const handle_Reference_name = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("REFERENCES"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].name = new_value
            localStorage.setItem("REFERENCES", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_Reference_position = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("REFERENCES"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].position = new_value
            localStorage.setItem("REFERENCES", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_Reference_phone = (event, index, phone_index) => {
        console.log(event, index, phone_index)
        try {
            let user_old_data = JSON.parse(localStorage.getItem("REFERENCES"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].phone[phone_index].Number = new_value
            localStorage.setItem("REFERENCES", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_phone = (index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem('REFERENCES'))
            let newField = { "Number": "" }
            user_old_data[index].phone.push(newField)                               // Pushing new fields in local storage variable
            setContent(user_old_data)                                               // Pushing new fieds in useState
            localStorage.setItem('REFERENCES', JSON.stringify(user_old_data));      // Updateing local storage


        } catch (error) {
            console.log(error)

        }

    }

    const handle_delete_phone = (index, phone_index) => {
        console.log(index, phone_index)

        try {
            let user_old_data = JSON.parse(localStorage.getItem('REFERENCES'))
            user_old_data[index].phone.splice(phone_index, 1)                                      // Deleting the element according to the index value
            setContent(user_old_data)                                           // Pushing new fieds in useState
            localStorage.setItem('REFERENCES', JSON.stringify(user_old_data));   // Updateing local storage


        } catch (error) {
            console.log(error)

        }

    }

    const handle_add_element = () => {
        let user_old_data = JSON.parse(localStorage.getItem('REFERENCES'))
        let newField =
        {
            "name": "",
            "position": "",
            "phone": [{ "Number": "" },],

        }
        user_old_data.push(newField)                                            // Pushing new fields in local storage variable
        setContent(user_old_data)                                               // Pushing new fieds in useState
        localStorage.setItem('REFERENCES', JSON.stringify(user_old_data));      // Updateing local storage
    }


    const handle_delete_element = (index) => {
        let user_old_data = JSON.parse(localStorage.getItem('REFERENCES'))
        user_old_data.splice(index, 1)                                      // Deleting the element according to the index value
        setContent(user_old_data)                                           // Pushing new fieds in useState
        localStorage.setItem('REFERENCES', JSON.stringify(user_old_data));   // Updateing local storage

    }


    return (
        <div className={Style.container} >


            {/* ===================   title code start ================== */}

            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title} >
                    <div className={Style.icon} > <GoCrossReference size={25} /> </div>
                    <Editor
                        title={content[0].content}
                        placeholder={"REFERENCES"}
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


            {/* ===================   title code End ================== */}




            {/* ===================   content code start ================== */}

            <div className={Style.work_content_wrap}>
                {content.map((item, index) => (
                    <div className={Style.person_wrap} key={index}>

                        {/* ===================   person code start ================== */}

                        {index != 0 ? (
                            <div className={index > 1 ? (Style.person_with_border) : (Style.person)}>
                                <div className={Style.person_info}>
                                    <div className={Style.person_and_position}>
                                        <div className={Style.info}>
                                            <div className={Style.reference_inner_text}>Name:</div>

                                            <Editor
                                                title={item.name}
                                                placeholder={"Person's name"}
                                                value={item.name}
                                                onChange={(e) => handle_Reference_name(e, index)}
                                            />

                                        </div>

                                        <div className={Style.info}>
                                            <div className={Style.info_seprator}>|</div>
                                            <div className={Style.reference_inner_text}>Position:</div>
                                            <Editor
                                                title={item.position}
                                                placeholder={"Position of the person"}
                                                value={item.position}
                                                onChange={(e) => handle_Reference_position(e, index)}

                                            />
                                        </div>
                                    </div>

                                    {/* ===================   phone code start ================== */}

                                    <div className={Style.phone_wrap}>

                                        <div className={Style.phone_wrap_content} >

                                            {item.phone.map((phone, phone_index) => (

                                                <div className={Style.phone} key={phone_index}>
                                                    <div className={Style.icon} style={{ color: props.color_change }}>
                                                        <FaSquarePhone size={20} />
                                                    </div>
                                                    <div className={Style.phone_text_wrap}>
                                                        <div className={Style.phone_text}>
                                                            <Editor
                                                                title={phone.Number}
                                                                placeholder={"Phone"}
                                                                value={phone.Number}
                                                                onChange={(e) => handle_Reference_phone(e, index, phone_index)}
                                                            />
                                                        </div>
                                                        <div className={Style.phone_delete_button} onClick={() => handle_delete_phone(index, phone_index)}><button>-</button></div>
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>

                                        <div className={Style.phone_add_button} onClick={() => handle_add_phone(index)}><button>+</button></div>

                                    </div>
                                    {/* ===================   phone code end ================== */}

                                </div>
                                <div className={Style.delete_person} onClick={() => handle_delete_element(index)}><button>-</button></div>


                            </div>

                        ) : (<></>)}

                        {/* ===================   person code end ================== */}


                    </div>
                ))}

            </div>

            {/* ===================   content code End ================== */}

        </div>
    )
}