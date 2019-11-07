// var store = []
// var idCounter = 1

// Entry.all = function () {
//   return store
// }

// Entry.create = function (attrs) {
//   attrs.id = (idCounter += 1)
//   attrs.enteredAt = Date.now()
//   store.push(attrs)
// }

// module.exports = User


var m = require("mithril")

const User = {
    list: [],
    loadList() {
        if ( !User.list.length ) {
            return m.request({
                method: "GET",
                url: "https://rem-rest-api.herokuapp.com/api/users",
                withCredentials: true,
            })
            .then((result) => {
                User.list = result.data
            })
        }
    },
    add(user) {
        console.log('validation')
        const id = User.list.length
        User.list.push({id, firstName: user.firstName, lastName: user.lastName })
        m.route.set('/user-list');
    }
}

module.exports = User
