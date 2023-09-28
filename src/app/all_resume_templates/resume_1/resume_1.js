'use client'
import React, { useRef, useState, useEffect, useCallback } from "react";
import Style from "@/app/all_resume_templates/resume_1/content_page.module.css";
import Education from "@/app/all_resume_templates/elements/Education/education";
import Achievements from "@/app/all_resume_templates/elements/Achievements/achievements";
import Title from "@/app/all_resume_templates/elements/Resume_title/title_1/title";
import Summary from "../elements/Summary/summary";
import Skill_1 from "../elements/Skills/Skill_1/skill_1";
import Language_1 from "../elements/Languages/Language_1/language_1";
import Work_1 from "../elements/Work_experience/Work_1/work_1";
import Reference_1 from "../elements/Reference/Reference_1/reference_1";
import { BsFillCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import Contact_1 from "../elements/Contact/contact_1/contact";


const Content_page = React.forwardRef((props, ref) => {

    const [color, setColor] = useState("");
    const colorRef = useRef();


    useEffect(() => {
        const previous_color = JSON.parse(localStorage.getItem('resume1_color'))
        if (previous_color != null) {
            colorRef.current = previous_color.current;
            setColor(previous_color.current)

        } else {
            localStorage.setItem("resume1_color", JSON.stringify('black'))
        }

    }, [1])


    const handle_color = useCallback((color) => {
        setColor(color);
        colorRef.current = color;
        localStorage.setItem("resume1_color", JSON.stringify(colorRef))
    })

    return (
        <div className={Style.page_wrap}>
            <div className={Style.color}>
                <li className={Style.black} onClick={() => handle_color("black")}>
                    {color == "black" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
                <li className={Style.gray} onClick={() => handle_color("rgb(50, 50, 50)")}>
                    {color == "rgb(50, 50, 50)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
                <li className={Style.blue} onClick={() => handle_color("rgb(9 9 165)")}>
                    {color == "rgb(9 9 165)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
                <li className={Style.orange} onClick={() => handle_color("rgb(207, 59, 0)")}>
                    {color == "rgb(207, 59, 0)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
                <li className={Style.green} onClick={() => handle_color("rgb(24 119 13)")}>
                    {color == "rgb(24 119 13)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
            </div>

            <div className={Style.page_container} ref={ref}>

                <div><Title color_change={colorRef.current} /></div>
                <div className={Style.container}>

                    <div className={Style.left_row}>
                        <div><Contact_1 color_change={colorRef.current} /></div>
                        <div><Skill_1 color_change={colorRef.current} /></div>
                        <div><Achievements color_change={colorRef.current} /></div>
                        <div><Language_1 color_change={colorRef.current} /></div>
                    </div>
                    <div className={Style.right_row}>
                        <div><Summary color_change={colorRef.current} /></div>
                        <div><Education color_change={colorRef.current} /></div>
                        <div><Work_1 color_change={colorRef.current} /></div>
                    </div>
                </div>
                <Reference_1 color_change={colorRef.current} />
            </div>
        </div>

    );
});

Content_page.displayName = 'Content_page';

export default Content_page;
