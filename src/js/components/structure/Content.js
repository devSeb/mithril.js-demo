
const m = require("mithril");
import Items from './../data/Items'

const Content = {
    view() {
        return (
            <div id="content">
                <div class="body-pos">
                    <h3 class="no-margin">PROJETS</h3>
                    <Items/>
                </div>
                <div class="info-pos">
                    info
                </div>
            </div>
        )
    }
}
export default Content;
