var m = require("mithril")
var User = require("./../components/projets/FormWithStore/models/User")

module.exports = {
    oninit(vnode) {
        this.firstName = null;
        this.lastName = null;
    },
    onChangeFirstName(e) {
        this.firstName = e.target.value;
    },
    onChangeLastName(e) {
        this.lastName = e.target.value;
    },
    addNewUser() {        
        User.add({ firstName: this.firstName, lastName: this.lastName})
    },
    view() {
        return (
            <div>
                <a href="#!/test">List</a>
                <h2> Form </h2>
                <input type="text" placeholder="first name" value={this.firstName} onchange={this.onChangeFirstName.bind()}></input>
                <input type="text" placeholder="last name" value={this.lastName} onchange={this.onChangeLastName.bind()}></input>
                <button onclick={this.addNewUser.bind()}>validation</button>
            </div>
        )
    }
}