
const m = require("mithril");
import Header from './../components/structure/Header'
import Content from './../components/structure/Content'

/** ES6 JSX code **/
var Home = {
    _count() {
        count++
        return count + " clicks"
    },
    view() {
        return (
            <div>
                <div class="grid-header" class="-header-pos">
                    <Header />
                </div>
                <div class="grid-content">
                <div id="content">
                    <div class="body-pos">
                        <h3 class="no-margin" style="text-align:center;">
                            List of projets with Mithril
                        </h3>
                    </div>
                    <div class="info-pos">
                        <h2>Menu</h2>
                        <ul>
                            <li><a href="#!/click-count">Click & Count</a></li>
                            <li><a href="#!/props-data">props & data</a></li>
                            <li><a href="#!/call-api">Call Api with mitrils.js</a></li>
                            <li><a href="#!/user-list">user-list</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="grid-footer">
                    <div id="footer" class="footer-pos">footer</div>
                </div>
            </div>
        )
    }
}
export default Home;
//https://auth0.com/blog/build-robust-apps-with-mithril-and-auth0/#Creating-an-App-Component-with-Mithril-and-JSX