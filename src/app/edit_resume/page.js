'use client'
import Style from "./edit.module.css";
import Resume_1 from "@/app/all_resume_templates/resume_1/resume_1";
import Resume_2 from "@/app/all_resume_templates/resume_2/resume_2";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image'

const Edit = () => {

    const componentRef = React.useRef();
    const params = useSearchParams()
    const [slider, setSlider] = useState("border:solid")

    const component = params.get('resume');

    let Edit_component

    if (component == "1") {
        Edit_component = Resume_1
    } else if (component == "2") {
        Edit_component = Resume_2
    } else {
        return (<>this page is not avalable yet</>)
    }

    return (
        <div className={Style.container}>

            <div className={Style.header}>
                <a href="/">
                    <div className={Style.logo}>

                        <div className={Style.logo_image}>
                            < BsPersonVcardFill size={30} color={"white"} />
                        </div>
                        <div className={Style.logo_text}>Resume Builder</div>

                    </div>
                </a>
                <div className={Style.head_line}></div>
            </div>
            {/* <div className={Style.edit_heading}>

            </div> */}
            <div className={Style.body}>
                <div className={Style.menu}>
                    {/* menu */}
                </div>
                <div className={Style.edit_component}>
                    <div className={Style.download_button}>
                        <ReactToPrint
                            trigger={() => <FaFileDownload size={40} />}
                            content={() => componentRef.current}


                        />

                    </div>
                    <div className={Style.component} >
                        <Edit_component ref={componentRef} />
                    </div>

                </div>
                <div className={Style.options} >
                    <div className={slider}>

                        <div className={Style.resumes}>
                            <Link href="/edit_resume?resume=1">
                                <Image
                                    height={160}
                                    width={150}
                                    src="/resume.png"
                                    alt="Resume builder"

                                />
                            </Link>
                        </div>
                        <div className={Style.resumes} >
                            <Link href="/edit_resume?resume=2" className={Style.link}>
                                <Image
                                    height={160}
                                    width={150}
                                    src="/resume_2.png"
                                    alt="Resume builder"

                                />
                            </Link>
                        </div>


                    </div>

                </div>



            </div>
        </div>

    )
}





export default Edit;