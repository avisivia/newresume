'use client'
import Style from "./select.module.css"
import { Image } from "@nextui-org/react";
import { BsPersonVcardFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "../Footer/footer";


const Select = () => {

    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <Link href="/">
                    <div className={Style.logo}>

                        <div className={Style.logo_image}>
                            < BsPersonVcardFill size={30} color={"white"} />
                        </div>
                        <div className={Style.logo_text}>Resume Builder</div>

                    </div>
                </Link>
                <div className={Style.head_text}></div>
            </div>
            <div className={Style.body}>
                <div className={Style.body_title}>
                    <div className={Style.body_title_text}>
                        These resume templates are great for your role.
                        Which one would you like to start with?
                    </div>
                </div>
                <div className={Style.templates}>
                    <div className={Style.resumes}>
                        <Link href="/edit_resume?resume=1">

                            <Image
                                src="/resume.png"
                                alt="Resume builder"
                                width={300}

                            />
                        </Link>
                    </div>
                    <div className={Style.resumes}>
                        <Link href="/edit_resume?resume=2">
                            <Image
                                src="/resume_2.png"
                                alt="Resume builder"
                                width={300}

                            />
                        </Link>
                    </div>
                    <div className={Style.resumes}>
                        <Link href="#">
                            <Image
                                src="/resume_3.png"
                                alt="Resume builder"
                                width={300}

                            />
                        </Link>
                    </div>
                    <div className={Style.resumes}>
                        <Link href="#">
                            <Image
                                src="/resume_4.png"
                                alt="Resume builder"
                                width={300}

                            />
                        </Link>
                    </div>


                </div>




            </div>
            <Footer />
        </div>)
}

export default Select;