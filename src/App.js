import SearchSection from "./components/searchSection.js"
import ContentsSection from "./components/contentsSection.js"

export default class App {
    // 컨스트럭터에 변수 선언 다 하고 render을 통해서 화면에 구현
    data = []
    $target = null

    constructor({ $target }) {
        this.$target = $target
        this.render()
    }

    render = () => {
        this.searchSection = new SearchSection({
            $target: this.$target,
            onSearch: (keyword) => {
                this.setState({
                    data: null,
                    loading: false
                })
                fetchDataList(keyword).then((response) => this.setState({
                    data: response,
                    loading: true
                }))
                console.log(this.data)
            }
        })
        this.contentsSection = new ContentsSection({
            $target: this.$target,
            $$initialData : this.data
        })
    }

    setState = (nextData) => {
        this.data = nextData;
        this.contentsSection.setState(nextData)
    }

} 