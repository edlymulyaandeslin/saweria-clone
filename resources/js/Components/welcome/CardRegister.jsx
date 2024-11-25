import { Button } from "../Button";
import Card from "./Card";

export default function CardRegister({ user }) {
    return (
        <>
            <Card cardTitle="starting out" className={"bg-pink-400/80"}>
                <div className="p-4 text-xl">
                    <div className="flex items-center gap-2">
                        <label htmlFor="">1.</label>
                        <span>Register your account</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">2.</label>
                        <span>Verify your account</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">3.</label>
                        <span>Choose and set your overlay</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">4.</label>
                        <span>
                            Don't forget to put the QR and your Saweria link
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="">5.</label>
                        <span>Say thank you to your tipper!</span>
                    </div>
                </div>
            </Card>

            <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto my-16 space-y-2">
                <div className="flex justify-center">
                    <img
                        src="/img/icon.png"
                        alt="icon"
                        className="w-full max-w-sm"
                    />
                </div>
                <p className="text-2xl font-bold">ready to join saweria?</p>
                {!user && (
                    <Button
                        href={route("register")}
                        className="bg-primary-400 hover:bg-primary-500"
                    >
                        Register
                    </Button>
                )}
            </div>
        </>
    );
}
