"use strict"

require('../sass/styles.scss');

import Home from './views/Home.js'
import ClickCount from './views/ClickCount'
import PropsData from './views/PropsData'
import CallApi from './views/CallApi'
import Test from './views/Test'
import FormUser from './views/FormUser'

var m = require("mithril");
var root = document.body;

    // "/splash": Splash,
// var Splash = {
//     view: function() {
//         return m("a", {
//             href: "#!/hello"
//         }, "Enter!")
//     }
// }

m.route(root, "/", {
    "/": Home,
    "/click-count": ClickCount,
    "/props-data": PropsData,
    "/call-api": CallApi,
    "/user-list": Test,
    "/user-list/form": FormUser,
})
m.route.mode = "pathname";
m.route.mode = "hash";

// m.render(root, "hello world");


// console.log('hello seb')

