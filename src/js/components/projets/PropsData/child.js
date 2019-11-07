
const m = require("mithril");

/** ES6 JSX code **/
const Child = {
    _count() {},
    _toJson(bundle) {
        return JSON.stringify(bundle)
    },
    onupdate(vnode) {
        // dom update if props is update
        // console.log("children dom update  ", vnode)
    },
    view(vnode) {
        const { name, bundle, toto } = vnode.attrs;
        return (
            <div>
               <h1 class="title">Hello Child</h1>
               <p> {"Props : " + name } </p>
               <p> {"Props state : " + this._toJson(bundle) } </p>
               <p> { "Props toto : " + toto }</p>
            </div>
        )
    }
}
export default Child;