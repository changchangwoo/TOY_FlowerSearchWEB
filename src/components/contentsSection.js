export default class ContentsSection {
    constructor({ $target }) {
        this.$target = $target
        this.render()

    }
    render = () => {
        let $contentsSection = document.createElement('div')
        $contentsSection.className = "contentsSection"
        this.$target.appendChild($contentsSection)

    }
}