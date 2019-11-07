
const m = require("mithril");
import Child from "./child"

/** ES6 JSX code **/
const Parent = {
    oninit(vnode) {
        this.toto = false
        this.bundle = {
             one: false,
            two: true
        },
        console.log("initialized ", vnode)
        this._updateCount(vnode)
    },
    oncreate(vnode) {
        console.log("DOM created")
    },
    onbeforeupdate(newVnode, oldVnode) {
        console.log('onbeforeupdate')
        return true
    },
    onupdate(vnode) {
        console.log("DOM updated")
    },
    onbeforeremove(vnode) {
        console.log("exit animation can start")
        return new Promise(resolve => {
            // call after animation completes
            resolve()
        })
    },
    onremove(vnode) {
        console.log("removing DOM element")
    },
    _updateCount(vnode) {
         // only for setTimeout setInterval use redraw
        console.log('vnode ', vnode)
        // setInterval( () => {
        //     vnode.state.toto = !vnode.state.toto
        // }, 1000);
        setTimeout( () => {
            vnode.state.toto = !vnode.state.toto
            console.log('update vnode ', vnode)
           
            m.redraw()
        }, 2000)
        
    },
    view(vnode) {
        console.log('view ', vnode.state)
        return (
            <div>
               <h1 class="title">Hello parent</h1>
               <Child name="Floyd" bundle={vnode.state.bundle} toto={vnode.state.toto}/>
            </div>
        )
    }
}
export default Parent;
