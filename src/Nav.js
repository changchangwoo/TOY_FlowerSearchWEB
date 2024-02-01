export default class Nav {
    constructor({ $target }) {
        this.$target = $target
        this.render()
        let $darkButton = document.querySelector('.darkButton')
        this.$darkButton = $darkButton

        $darkButton.addEventListener('click', e => this.changeMode(e))
    }

    render = () => {
        this.$target.innerHTML = `<div class="navContainer">
        <div class="navTitle textMedium">초록 <span>소리</span> </div>
        <div class="darkButton"></div>
        </div>`
    }

    changeMode = (e) => {
        let list = []
        let $App = document.querySelector(".App")
        let $body = document.querySelector("body")
        let $searchSection = document.querySelector(".searchSection");
        let $contentsSection = document.querySelector(".contentsSection");
        list.push($body, $App, $searchSection, $contentsSection, this.$darkButton)
        
        for(let i = 0; i < list.length; i++) {
            if(list[i].classList.contains('darkMode')) {
                list[i].classList.remove('darkMode')
            } else {
                list[i].classList.add('darkMode')
            }
        }
    }
}