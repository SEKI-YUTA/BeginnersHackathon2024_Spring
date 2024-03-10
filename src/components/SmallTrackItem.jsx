function SmallTrackItem({
    jacketURL = "https://dummyimage.com/400x400/000/fff",
    trackName,
    trackLength,
    description,
    link,
}) {
    return (
        <div className="aspect-square grow p-2">
            <a href={link}>
                <img src={jacketURL} className="block size-full rounded-lg" />
            </a>
        </div>
    );
}

export default SmallTrackItem;
