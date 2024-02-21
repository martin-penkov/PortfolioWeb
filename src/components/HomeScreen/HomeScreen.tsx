import { AboutMe } from "../Apps/AboutMe"
import { AppIcon } from "./AppIcon"
import userIcon from "@/assets/icons/user.png"

type HomeScreenProps = {
    openApp: React.Dispatch<React.SetStateAction<null>>,
}

export const HomeScreen = ({ openApp }: HomeScreenProps) => {

    // const dispatch = useAppDispatch()

    // dispatch(addNotification({
    //     type: 'success',
    //     title: 'RABOTIII!!',
    //     message: 'Neshto random :)'
    // }));

    return (
        <div className="container relative flex flex-wrap w-full h-full gap-5 place-items-center">
            <AppIcon iconPath={userIcon} title="Projects" appRef={<AboutMe/>} openApp={openApp} />
            <AppIcon iconPath={userIcon} title="About Me" appRef={<AboutMe/>} openApp={openApp} />
            <AppIcon iconPath={userIcon} title="Settings" appRef={<AboutMe/>} openApp={openApp} />
        </div>
    )
}