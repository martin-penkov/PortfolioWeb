type InterfaceProps = {
    children: React.ReactNode;
};

export const Interface = ({children}: InterfaceProps) => {
    return (
        <div>
            <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
        </div>
    );
}