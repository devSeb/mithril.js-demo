const m = require("mithril");

const Items = {
    view() {
        return (
            <div class="container-item">
                <h2>title</h2>
                <div class="tag-group">
                    <ul>
                        <li style="display: inline-block;">tag</li>
                        <li style="display: inline-block;">tag</li>
                    </ul>
                </div>
                <p> description </p>
                <div class="btn-group">
                    <ul>
                        <li style="display: inline-block;">tag</li>
                        <li style="display: inline-block;">tag</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Items;