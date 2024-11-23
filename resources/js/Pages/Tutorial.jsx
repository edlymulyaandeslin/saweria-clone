import Icon from "@/Components/Icon";
import MovieClip from "@/Components/MovieClip";
import Card from "@/Components/welcome/Card";
import { Head } from "@inertiajs/react";

export default function Faq() {
    const videoId = "RRKPkwBkz_0&t=2s";
    return (
        <>
            <Head title="Tutorial" />

            <div className="w-full max-w-xl mx-auto my-8 flex flex-col space-y-8">
                <div className="md:ms-12">
                    <Icon />
                </div>
                <Card>
                    <h1 className="text-3xl text-center mb-4">
                        Cara menggunakan Sawerla Overlay
                    </h1>
                    <div className="overflow-hidden flex justify-center">
                        <MovieClip videoId={videoId} />
                    </div>
                </Card>
            </div>
        </>
    );
}
