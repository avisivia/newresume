import Style from "@/app/all_resume_templates/resume_2/resume_2.module.css";
import Title_3 from "../elements/Resume_title/title_3/title_3";
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { BsFillCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import Contact_2 from "../elements/Contact/contact_2/contact_2";
import Summary from "../elements/Summary/about_2/about_2";
import Education from "../elements/Education/education_2/education_2";


const Resume_2 = React.forwardRef((props, ref) => {

    const [color, setColor] = useState("");
    const colorRef = useRef();

    useEffect(() => {
        const previous_color = JSON.parse(localStorage.getItem('resume2_color'))
        if (previous_color != null) {
            colorRef.current = previous_color.current;
            setColor(previous_color.current)

        } else {
            console.log("please select a color")
        }

    }, [1])


    const handle_color = useCallback((color) => {
        setColor(color);
        colorRef.current = color;
        localStorage.setItem("resume2_color", JSON.stringify(colorRef))
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
                <li className={Style.blue} onClick={() => handle_color("rgb(0, 0, 102)")}>
                    {color == "rgb(0, 0, 102)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
                <li className={Style.green} onClick={() => handle_color("rgb(7, 66, 0)")}>
                    {color == "rgb(7, 66, 0)" ? (<BsFillCheckCircleFill size={30} />) : (<BsFillCircleFill size={30} />)}
                </li>
            </div>
            <div className={Style.page_container} ref={ref}>
                <div className={Style.container}>


                    <div className={Style.make_it_parallel}>
                        <div><Title_3 color_change={colorRef.current} /></div>
                        <div className={Style.contact} style={{ backgroundColor: colorRef.current }}>
                            <Contact_2 />
                        </div>


                    </div>
                    <div className={Style.make_it_parallel_2}>

                        <div className={Style.left} >
                            <div className={Style.left_inner_box}>
                                <Summary color_change={colorRef.current} />
                            </div>

                        </div>
                        <div className={Style.right} >
                            <Education color_change={colorRef.current} />

                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
});

Resume_2.displayName = 'Resume_2';
export default Resume_2;