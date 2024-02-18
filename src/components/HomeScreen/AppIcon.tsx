type AppIconProps = {
    iconPath: string,
    title: string,
    openApp: React.Dispatch<React.SetStateAction<null>>,
    appRef: JSX.Element
}

export const AppIcon = ({ iconPath, title, openApp, appRef }: AppIconProps) => {
    return (
        <div className="mx-auto w-40 h-50 hover:scale-110 transition duration-100" onClick={() => { openApp(appRef) }}>
            <img className="mx-auto" src={iconPath} alt="" />
            <p className="text-xl font-bold text-wrap text-center">{title}</p>
        </div>
    )
}