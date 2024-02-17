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
            <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
            <DesktopStatusBar />
            <MobileNavBar />
        </div>
    );
}