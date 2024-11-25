import YouTube from "react-youtube";

export default function MovieClip({ videoId, width = "640", height = "390" }) {
    const options = {
        height: height,
        width: width,
    };

    return (
        <YouTube
            vidioId={videoId}
            onReady={(e) => e.target.pauseVideo()}
            opts={options}
        />
    );
}
