// src/views/UserList.js
var m = require("mithril")
var User = require("./../components/projets/FormWithStore/models/User")


module.exports = {
    oninit: User.loadList,
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
                <h2> Api with store | Manage user </h2>
                <a href="#!/user-list/form"> Add user</a>
                {this._getUsers()}
            </div>
        )
    }
}