export default function CenteredColumn({ children }) {
    return (
        <div className="flex flex-col max-w-screen-sm mx-auto justify-content">
            {children}
        </div>
    )
}

export function PostCenteredColumn({ children }) {
    return (
        <div className="flex flex-col max-w-screen-md mx-auto justify-content">
            {children}
        </div>
    )
}