import { Interface } from "../CommonInterface/Interface";

type DeviceLayoutProps = {
    children: React.ReactNode;
};

export const DeviceFrame = ({ children }: DeviceLayoutProps) => {
    return (
        <div className="z-0 flex max-h-screen max-w-screen overflow-hidden p-24 h-[85vh]">
            <Interface>
                {children}
            </Interface>
        </div>
    );
}