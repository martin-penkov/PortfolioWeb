import { HomeIcon, WifiIcon, SpeakerWaveIcon, SunIcon } from "@heroicons/react/24/outline"
import { Clock } from "../Misc/Clock"

export const DesktopStatusBar = () => {
    const returnHome = () => {
        console.log("Desktop Home clicked");
    }

    const lightStyleChanged = () => {
        console.log("Light style changed");
    }

    const soundStateChanged = () => {
        console.log("sound muted/unmuted");
    }

    return (
        <div className="invisible xl:visible">
            <div className="absolute bottom-0 inset-x-0">
                <div className="h-11 w-full bg-white bg-opacity-80">
                    {/* clock, wifi, connectivity */}
                    <div className="relative flex justify-center">
                        <button className="absolute w-10 h-full text-black opacity-60" onClick={() => returnHome()}>
                            <HomeIcon />
                        </button>
                        <div className="flex mr-5 mt-2 space-x-2 ml-auto">
                            <button className="h-8 w-8" onClick={() => lightStyleChanged()}>
                                <SunIcon />
                            </button>
                            <button className="h-8 w-8" onClick={() => soundStateChanged()}>
                                <SpeakerWaveIcon />
                            </button>
                            <WifiIcon className="h-8 w-8 text-black"/>
                        </div>
                        <div className="mr-5 mt-2">
                            <Clock className="text-2xl text-black"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}