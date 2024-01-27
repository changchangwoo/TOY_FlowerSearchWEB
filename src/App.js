import SearchSection from "./components/searchSection.js"
import ContentsSection from "./components/contentsSection.js"

export default class App{
    // 컨스트럭터에 변수 선언 다 하고 render을 통해서 화면에 구현
    constructor({$target}) {
        this.$target = $target
        this.render()
    }


    render = () => {
        this.searchSection = new SearchSection({$target : this.$target})
        this.contentsSection = new ContentsSection({$target : this.$target})
    }

} 