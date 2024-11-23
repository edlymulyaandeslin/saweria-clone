import { Button } from "../Button";
import CardLink from "../CardLink";

export default function CardFooter() {
    return (
        <>
            <CardLink href={"/faq"} className={"bg-pink-400/80"}>
                <div className="p-4 flex gap-4">
                    <div className="">
                        <img src="/img/icon-pricing.png" alt="icon pricing" />
                    </div>
                    <div className="w-full flex flex-col space-y-4 text-3xl">
                        <p className="text-center">Confused?</p>
                        <p className="text-center">Have question?</p>
                        <p className="text-center">Please check our faq</p>
                    </div>
                </div>
            </CardLink>

            <div className="w-full max-w-xl mx-auto my-16 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Button
                    href={"/tutorial"}
                    className={"bg-primary-400 hover:bg-primary-500"}
                >
                    Tutorial
                </Button>
                <Button
                    href={"/terms"}
                    className="bg-blue-400 hover:bg-blue-500"
                >
                    Term and conditions
                </Button>
            </div>
        </>
    );
}
