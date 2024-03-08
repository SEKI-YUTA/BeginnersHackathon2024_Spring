function GridDemo() {
    return (
        <div class="grid grid-cols-3">
            <div class="grid-item col-span-2 bg-orange-400">アイテム1</div>
            <div class="grid-item bg-orange-500" style={{ height: "500px" }}>
                アイテム2
            </div>
            <div class="grid-item bg-orange-600" style={{ height: "500px" }}>
                アイテム3
            </div>
            <div
                class="grid-item bg-orange-800 col-span-2"
                style={{ height: "500px" }}
            >
                アイテム3
            </div>
            <div
                class="grid-item bg-orange-600 col-span-3"
                style={{ height: "500px" }}
            >
                アイテム3
            </div>
        </div>
    );
}

export default GridDemo;
