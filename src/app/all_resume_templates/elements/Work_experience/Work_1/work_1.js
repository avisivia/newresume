'use client'
import Style from "@/app/all_resume_templates/elements/Work_experience/Work_1/work_1.module.css";
import { Editor } from 'react-editor'
import { useEffect, useState } from "react";
import { IoIosContact } from "react-icons/io";
import { BiSolidRightArrowCircle } from "react-icons/bi";

export default function Work_1(props) {

    let [content, setContent] = useState([

        {
            "content": "WORK EXPERIENCE",
        },
        {
            "position": "",
            "start_date": "",
            "end_date": "",
            "company_name": "",
            "responsibilities": [{ "heading": "JOB RESPONSIBILITIES" }, { "Responsibility": "" }],
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
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))
            if (user_old_data == null) {
                localStorage.setItem("WORK", JSON.stringify(content))
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
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[0].content = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage
        } catch (error) {
            console.log(error)
        }
    }


    const handle_Work_position = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].position = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_Work_start_date = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].start_date = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_Work_end_date = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].end_date = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_Work_company_name = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].company_name = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }


    const handle_Responsibility_heading = (event, index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].responsibilities[0].heading = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }


    const handle_responsibilities = (event, index, responsibility_index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem("WORK"))   // Getting data from local storage
            let new_value = event
            user_old_data[index].responsibilities[responsibility_index].Responsibility = new_value
            localStorage.setItem("WORK", JSON.stringify(user_old_data))   // Storing new data to local storage

        } catch (error) {
            console.log(error)
        }
    }

    const handle_add_responsibility = (index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem('WORK'))
            let newField = { "Responsibility": "" }
            user_old_data[index].responsibilities.push(newField)                               // Pushing new fields in local storage variable
            setContent(user_old_data)                                               // Pushing new fieds in useState
            localStorage.setItem('WORK', JSON.stringify(user_old_data));      // Updateing local storage


        } catch (error) {
            console.log(error)

        }

    }

    const handle_delete_responsibility = (index, responsibility_index) => {
        try {
            let user_old_data = JSON.parse(localStorage.getItem('WORK'))
            user_old_data[index].responsibilities.splice(responsibility_index, 1)                                      // Deleting the element according to the index value
            setContent(user_old_data)                                           // Pushing new fieds in useState
            localStorage.setItem('WORK', JSON.stringify(user_old_data));        // Updateing local storage


        } catch (error) {
            console.log(error)

        }

    }

    const handle_add_element = () => {
        let user_old_data = JSON.parse(localStorage.getItem('WORK'))
        let newField =
        {
            "position": "",
            "start_date": "",
            "end_date": "",
            "company_name": "",
            "responsibilities": [{ "heading": "JOB RESPONSIBILITIES" }, { "Responsibility": "" }],
        }
        user_old_data.push(newField)                                            // Pushing new fields in local storage variable
        setContent(user_old_data)                                               // Pushing new fieds in useState
        localStorage.setItem('WORK', JSON.stringify(user_old_data));      // Updateing local storage
    }

    const handle_delete_element = (index) => {
        let user_old_data = JSON.parse(localStorage.getItem('WORK'))
        user_old_data.splice(index, 1)                                      // Deleting the element according to the index value
        setContent(user_old_data)                                           // Pushing new fieds in useState
        localStorage.setItem('WORK', JSON.stringify(user_old_data));   // Updateing local storage

    }


    return (

        <div className={Style.container} >

            {/* ===================   title code start ================== */}

            <div className={Style.title_wrap} style={{ color: props.color_change }}>
                <div className={Style.title} >
                    <div className={Style.icon} > <IoIosContact size={35} /> </div>
                    <Editor
                        title={content[0].content}
                        placeholder={"WORK EXPERIENCE"}
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


            {content ? (content.map((item, index) => (
                <div id="content_wrap" key={index}>
                    {index != 0 ? (
                        <div className={index > 1 ? (Style.work_content_wrap_with_border) : (Style.work_content_wrap)}>

                            <div className={Style.work_content}>
                                <div className={Style.position_date}>

                                    <div className={Style.position}>
                                        <Editor
                                            title={item.position}
                                            placeholder={"Your Position"}
                                            value={item.position}
                                            onChange={(e) => handle_Work_position(e, index)}
                                        />
                                    </div>
                                    <div className={Style.date}>
                                        <div className={Style.start_date}>
                                            <Editor
                                                title={item.start_date}
                                                placeholder={"Start-date"}
                                                value={item.start_date}
                                                onChange={(e) => handle_Work_start_date(e, index)}
                                            />
                                        </div>
                                        <>-</>
                                        <div className={Style.end_date}>
                                            <Editor
                                                title={item.end_date}
                                                placeholder={"End-date"}
                                                value={item.end_date}
                                                onChange={(e) => handle_Work_end_date(e, index)}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={Style.company}>
                                    <Editor
                                        title={item.company_name}
                                        placeholder={"Name of the company"}
                                        value={item.company_name}
                                        onChange={(e) => handle_Work_company_name(e, index)}
                                    />
                                </div>


                                {/* ===================   responsibilities code start ================== */}

                                {item.responsibilities ? (item.responsibilities.map((responsibility_item, responsibility_index) => (
                                    <div key={responsibility_index} className={Style.responsibilities_full_wrap}>

                                        {responsibility_index == 0 ? (
                                            <div className={Style.responsibilities}>
                                                <div style={Style.responsibility_title}>
                                                    <Editor
                                                        title={responsibility_item.heading}
                                                        placeholder={"JOB RESPONSIBILITIES"}
                                                        value={responsibility_item.heading}
                                                        onChange={(e) => handle_Responsibility_heading(e, index)}
                                                    />
                                                </div>
                                                <div className={Style.responsibility_add_button} onClick={() => handle_add_responsibility(index)}><button>+</button></div>
                                            </div>
                                        ) : (<></>)}


                                        {responsibility_index != 0 ? (
                                            <div className={Style.bullet_points_wrap}>
                                                <div className={Style.bullets} style={{ color: props.color_change }}>
                                                    <BiSolidRightArrowCircle />
                                                </div>

                                                <div className={Style.bullet_points}>
                                                    <Editor
                                                        title={responsibility_item.Responsibility}
                                                        placeholder={"Add your previous responsibilities here."}
                                                        value={responsibility_item.Responsibility}
                                                        onChange={(e) => handle_responsibilities(e, index, responsibility_index)}
                                                    />
                                                </div>
                                                <div className={Style.bullet_points_delete_button} onClick={() => handle_delete_responsibility(index, responsibility_index)}>
                                                    <button>-</button>
                                                </div>
                                            </div>
                                        ) : (<></>)}


                                    </div>
                                ))) : (<></>)}



                            </div>
                            <div className={Style.work_delete} onClick={() => handle_delete_element(index)}><button>-</button></div>
                        </div>


                    ) : (<></>)}

                    {/* ===================   responsibilities code end ================== */}



                </div>
            ))) : (<></>)}
            {/* ===================   content code end ================== */}
        </div>
    )
}