import Style from "@/app/loading.module.css";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={Style.loader_wrap}>
            <div className={Style.loader}></div>
        </div>
    )
}