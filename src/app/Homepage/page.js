import Style from "./homepage.module.css"
import { BsPersonVcardFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {

    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <div className={Style.logo}>
                    <div className={Style.logo_image}>< BsPersonVcardFill size={30} color={"white"} /></div>
                    <div className={Style.logo_text}>Resume Builder</div>
                </div>
                <div className={Style.webbutton}><Link href="/choose_resume"><button>Create Resume</button></Link></div>
            </div>
            <div className={Style.body}>
                <div className={Style.landingtext}>
                    <div className={Style.landingtext_big}>Build a professional resume for free</div>

                    <div className={Style.landingtext_small}> Create your resume essily with our free builder and professional templates</div>
                    <div className={Style.home_page_button2}>
                        <Link href="/choose_resume">
                            <button>Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className={Style.home_image}>
                    <Image
                        src="/resume_2.png"
                        alt="Resume builder"
                        width={300}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Homepage;