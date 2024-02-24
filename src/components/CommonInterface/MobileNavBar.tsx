import { closeWindow } from "@/app/features/windows/windowSlice";
import { useAppDispatch } from "@/app/hooks";
import { StopIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

export const MobileNavBar = () => {
    const dispatch = useAppDispatch()

    const returnHome = () => {
        dispatch(closeWindow());
        console.log("Home button clicked");
    }

    const goBack = () => {
        console.log("Back button clicked");
    }

    return (
        <div className="xl:hidden absolute bottom-0 inset-x-0">
            <div className="flex mx-auto h-11 w-full bg-black bg-opacity-80">
                <button className="h-full mx-auto w-10 text-white opacity-60 place-items-center" onClick={() => returnHome()}>
                    <StopIcon />
                </button>
                <button className="h-full mx-auto w-10 text-white opacity-60 place-items-center" onClick={() => goBack()}>
                    <ArrowUturnLeftIcon />
                </button>
            </div>
        </div>
    )
}