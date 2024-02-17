import { WifiIcon, ChartBarIcon } from "@heroicons/react/24/solid"
import { Clock } from "../Misc/Clock"

export const MobileStatusBar = () => {
    
    return (
        <div>
            {/* camera punchhole */}
            <div className="xl:hidden absolute top-2 inset-x-0">
                <div className="mx-auto bg-black h-10 w-10 rounded-3xl"></div>
            </div>
            {/* clock, wifi, connectivity */}
            <div className="relative flex">
                <div className="ml-5 mt-2">
                    <Clock className="text-2xl text-white"/>
                </div>
                <div className="flex mr-5 mt-2 space-x-1 ml-auto">
                    <ChartBarIcon className="h-8 w-8 text-white"/>
                    <WifiIcon className="h-8 w-8 text-white"/>
                </div>
            </div>
        </div>
    )
}