function SmallTrackItem({ track }) {
    return (
        <div className="aspect-square grow p-2 w-1/4">
            <a href={""}>
                <img
                    src={
                        track &&
                        track.album &&
                        track.album.images[0].url
                            ? track.album.images[0].url
                            : ""
                    }
                    className="block size-full rounded-lg"
                />
            </a>
        </div>
    );
}

export default SmallTrackItem;
