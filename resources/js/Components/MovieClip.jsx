"use client";

import YouTube from "react-youtube";

export default function MovieClip({ videoId }) {
    const options = {
        height: "390",
        width: "640",
    };

    return (
        <YouTube
            vidioId={videoId}
            onReady={(e) => e.target.pauseVideo()}
            opts={options}
        />
    );
}
