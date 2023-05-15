export default function NewJokeRoute() {
    return (
        <div>
            <p>Add a flower to the bouquet</p>
            <form method="post">
                <div>
                    <label>
                        Name: <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        <select name="flowers" id="flowers">
                            <option value="rose">🌹</option>
                            <option value="tulip">🌷</option>
                            <option value="sunflower">🌻</option>
                            <option value="daisy">🌼</option>
                            <option value="water-lily">🪷</option>
                            <option value="cherry-blossom">🌸</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
