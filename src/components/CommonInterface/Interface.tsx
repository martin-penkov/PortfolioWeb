import { DesktopStatusBar } from "./DesktopStatusBar";
import { MobileNavBar } from "./MobileNavBar";
import { MobileStatusBar } from "./MobileStatusBar";

type InterfaceProps = {
    children: React.ReactNode;
};

export const Interface = ({children}: InterfaceProps) => {
    return (
        <div>
            <img className="absolute inset-0 h-full w-full object-cover" src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg" />
            <MobileStatusBar></MobileStatusBar>
            <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
            <DesktopStatusBar></DesktopStatusBar>
            <MobileNavBar></MobileNavBar>
        </div>
    );
}