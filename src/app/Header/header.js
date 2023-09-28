import Style from "@/app/Header/header.module.css";
import { BsPersonVcardFill } from "react-icons/bs";

export default function Header() {

    return (
        <div className={Style.container}>
            <a href="/">
                <div className={Style.logo_wrap}>

                    <div className={Style.logo}>
                        < BsPersonVcardFill size={30} color={"white"} />
                    </div>
                    <div className={Style.logo_text}>Resume Builder</div>
                </div>
            </a>
        </div>
    )

}