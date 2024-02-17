import { Interface } from "../CommonInterface/Interface";

type DeviceLayoutProps = {
    children: React.ReactNode;
};

export const DeviceFrame = ({ children }: DeviceLayoutProps) => {
    return (
        <div className="mx-auto h-[90%] lg:h-[80%] sm:h-[85%] w-[85%] bg-white rounded-[60px] xl:rounded-[5px] border-[14px] border-black relative overflow-hidden ring ring-grey-400 shadow-xl">
            <Interface>
                {children}
            </Interface>
        </div>
    );
}