import { Button } from "@/Components/Button";
import Icon from "../Icon";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Icon />

            <p className="text-4xl font-semibold w-full max-w-md text-center mb-4">
                Connecting Communities, Empowering Streamers
            </p>
            <div className="flex justify-center gap-4 my-2">
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
            </div>
        </div>
    );
}
