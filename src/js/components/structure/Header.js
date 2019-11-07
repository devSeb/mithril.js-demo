
const m = require("mithril");
const Header = {
    view() {
        return (
            <div id="header">
                <div class="pos-header-brand">
                    <span class="header-brand">devseb</span>
                </div>
                <div class="pos-header-menu">
                    <ul>
                        <li style="display: inline;"><span class="jam jam-folder" data-width="32" data-height="32"></span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;
