const m = require("mithril");
import Parent from "./../components/projets/PropsData/parent"

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
const Component = {
    view() {
        return (
            <div>
                <a href="#!/">Home</a>
                <Parent /> 
            </div>
        )
    }
}
export default Component;