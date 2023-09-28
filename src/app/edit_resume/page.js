'use client'
import Style from "./edit.module.css";
import Resume_1 from "@/app/all_resume_templates/resume_1/resume_1";
import Resume_2 from "@/app/all_resume_templates/resume_2/resume_2";
import { FaFileDownload, FaWindowClose } from "react-icons/fa";
import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Image } from "@nextui-org/react";
import Footer from "../Footer/footer";
import { Button } from '@nextui-org/button';
import Header from "../Header/header";


const Edit = () => {
    const componentRef = React.useRef();
    const params = useSearchParams()
    const [position, setPosition] = useState("-250px")
    const [slider, setSlider] = useState(false)
    const component = params.get('resume');
    let Edit_component




    if (component == "1") {
        Edit_component = Resume_1
    } else if (component == "2") {
        Edit_component = Resume_2
    } else {
        return (<>this page is not avalable yet</>)
    }



    const IsOpen = (event) => {
        if (slider == event) {
            setSlider(false)
            setPosition("-250px")
        } else {
            setSlider(true)
            setPosition("0")
        }

    }


    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <Header />

            </div>
            <div className={Style.body}>
                <div className={Style.edit_component}>

                    <div className={Style.buttons}>
                        <div className={Style.slider_button}>
                            <Button
                                color="primary"
                                // variant={"ghost"}
                                size="lg"
                                onClick={() => IsOpen(true)}
                            >
                                Change Template
                            </Button>
                        </div>

                        <div className={Style.download_button}>

                            <ReactToPrint
                                trigger={() => <FaFileDownload size={50} />}
                                content={() => componentRef.current}
                            />
                        </div>

                    </div>


                    <div className={Style.component} >
                        <Edit_component ref={componentRef} />
                    </div>
                </div>
                <div className="Drawer">
                    <div className={Style.drawer_container} style={{ right: position }}>
                        <div className={Style.drawer}>
                            <div className={Style.drawer_heading}>
                                <div id="text">SELECT A TEMPLATE</div>
                                <div id="icon" className={Style.icon} onClick={() => IsOpen(true)}><FaWindowClose size={20} /></div>

                            </div>
                            <div className={Style.drawer_items}>
                                <div className={Style.items_inside}>
                                    <div className={Style.resumes}>
                                        <Link href="/edit_resume?resume=1">
                                            <Image
                                                width={200}
                                                src="/resume.png"
                                                alt="Resume builder"
                                            />
                                        </Link>
                                    </div>

                                </div>
                                <div className={Style.items_inside}>
                                    <div className={Style.resumes} >
                                        <Link href="/edit_resume?resume=2" className={Style.link}>
                                            <Image
                                                width={200}
                                                src="/resume_2.png"
                                                alt="Resume builder"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className={Style.items_inside}>
                                    <div className={Style.resumes}>
                                        <Link href="#">
                                            <Image

                                                width={200}
                                                src="/resume_3.png"
                                                alt="Resume builder"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className={Style.items_inside}>
                                    <div className={Style.resumes} >
                                        <Link href="#" className={Style.link}>
                                            <Image
                                                width={200}
                                                src="/resume_4.png"
                                                alt="Resume builder"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Edit;