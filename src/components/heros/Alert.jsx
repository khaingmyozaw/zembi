const message = "Currently job opened."
const Alert = () => {
    return (
        <div
            className="w-full py-2 absolute top-0 z-10 text-center text-black dark:text-white/70 bg-sky-300/50 dark:bg-sky-300/10"
        >
            {message}
        </div>
    )
}

export default Alert
