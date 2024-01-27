export default class Nav {
    constructor({ $target }) {
        this.$target = $target
        this.render()
    }

    render = () => {
        this.$target.innerHTML = `<div class="navContainer">
        <div class="navTitle textMedium">초록 <span>소리</span> </div>
        <div class="darkButton"></div>
        </div>`
    }
}