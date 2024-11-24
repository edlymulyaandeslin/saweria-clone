import { Button } from "@/Components/Button";
import Icon from "../Icon";

export default function Hero({ user }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Icon />

            <p className="w-full max-w-md mb-4 text-4xl font-semibold text-center">
                Connecting Communities, Empowering Streamers
            </p>
            <div className="flex justify-center gap-4 my-2">
                {!user ? (
                    <>
                        <Button
                            href={route("login")}
                            className="bg-blue-400 hover:bg-blue-500"
                        >
                            Login
                        </Button>
                        <Button
                            href={route("register")}
                            className={"bg-primary-400 hover:bg-primary-500"}
                        >
                            Register
                        </Button>
                    </>
                ) : (
                    <Button
                        href={route("dashboard")}
                        className={"bg-primary-400 hover:bg-primary-500"}
                    >
                        Dashboard
                    </Button>
                )}
            </div>
        </div>
    );
}
