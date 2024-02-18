import { DesktopStatusBar } from "./DesktopStatusBar";
import { MobileNavBar } from "./MobileNavBar";
import { MobileStatusBar } from "./MobileStatusBar";
import DEVICE_WALLPAPER from "@/assets/deviceWallpaper.jpg";

type InterfaceProps = {
    children: React.ReactNode;
};

export const Interface = ({children}: InterfaceProps) => {
    return (
        <div>
            <img className="absolute inset-0 h-full w-full object-cover" src={DEVICE_WALLPAPER} />
            <MobileStatusBar />
            <main className="w-full h-full absolute overflow-y-auto">{children}</main>
            <DesktopStatusBar />
            <MobileNavBar />
        </div>
    );
}