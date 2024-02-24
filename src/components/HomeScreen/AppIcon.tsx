import { Apps } from "@/app/consts/Apps"
import { openWindow } from "@/app/features/windows/windowSlice"
import { useAppDispatch } from "@/app/hooks"

type AppIconProps = {
    iconPath: string,
    title: string,
    appKey: Apps
}

export const AppIcon = ({ iconPath, title, appKey }: AppIconProps) => {
    const dispatch = useAppDispatch()
    
    return (
        <div className="mx-auto w-40 h-50 hover:scale-110 transition duration-100" onClick={() => { dispatch(openWindow(appKey)) } }>
            <img className="mx-auto" src={iconPath} alt="" />
            <p className="text-xl font-bold text-wrap text-center">{title}</p>
        </div>
    )
}