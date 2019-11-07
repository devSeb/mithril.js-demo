var m = require("mithril");

var count = 0
/** Standart code **/
// var Hello = {
//     view: function() {
//         return m("main", [
//             m("h1", {
//                 class: "title"
//             }, "My first app"),
//             m("button", {
//                 onclick: function() {count++}
//             }, count + " clicks"),
//         ])
//     }
// }

/** ES6 JSX code **/
var Component = {
    _count() {
        count++
        return count + " clicks"
    },
    view() {
        return (
            <div>
                <a href="#!/">Home</a>
               <h1 class="title">Click & Count</h1>
               <button onclick={this._count.bind()}>{count}</button>
            </div>
        )
    }
}
export default Component;