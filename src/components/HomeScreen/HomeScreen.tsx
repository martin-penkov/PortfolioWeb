import { Apps } from "@/app/consts/Apps"
import { AboutMe } from "../Apps/AboutMe"
import { AppIcon } from "./AppIcon"
import userIcon from "@/assets/icons/user.png"

export const HomeScreen = () => {

    // const dispatch = useAppDispatch()

    // dispatch(addNotification({
    //     type: 'success',
    //     title: 'RABOTIII!!',
    //     message: 'Neshto random :)'
    // }));

    return (
        <div className="container relative flex flex-wrap w-full h-full gap-5 place-items-center">
            <AppIcon iconPath={userIcon} title="Projects" appKey={Apps.AboutMe} />
            <AppIcon iconPath={userIcon} title="About Me" appKey={Apps.AboutMe} />
            <AppIcon iconPath={userIcon} title="Settings" appKey={Apps.AboutMe} />
        </div>
    )
}