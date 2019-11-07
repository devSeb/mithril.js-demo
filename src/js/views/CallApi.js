// src/models/User.js
var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then(function(result) {
            User.list = result.data
        })
    },
}

/** ES6 JSX code **/
const Component = {
    _getUsers() {
        return m(".user-list", User.list.map(function(user) {
            return m(".user-list-item", user.firstName + " " + user.lastName)
        }))
    },
    oninit(vnode) {
        User.loadList();
    },
    view() {
        return (
            <div>
                <a href="#!/">Home</a>
                <h2>Call APi and display a simple list </h2>
                {this._getUsers()}
            </div>
        )
    }
}
export default Component;
