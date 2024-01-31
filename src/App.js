import SearchSection from "./components/searchSection.js"
import ContentsSection from "./components/contentsSection.js"
import DetailSection from "./components/detailSection.js"

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
                this.setSession(keyword)
            },
        })
        this.contentsSection = new ContentsSection({
            $target: this.$target,
            $initialData: this.data,
            onClick: (keyword) => {
                console.log(keyword)
                fetchDetailData(keyword).then((response) => 
                this.detailSection.setState({
                    data : response,
                    visible: true
                }))
            }
        })
        this.detailSection = new DetailSection({
            $target: this.$target,
            $detailData: {
                data : null,
                visible: false
            }
        })
    }

    setState = (nextData) => {
        this.data = nextData;
        this.contentsSection.setState(nextData)
        this.searchSection.setSearchMemoryList()
    }

    setSession = (keyword) => {
        let currentMemoryList = this.getSession();
        currentMemoryList.push(keyword)
        sessionStorage.setItem("sessionMemoryList", JSON.stringify(currentMemoryList))
    }

    getSession = () => {
        let sessionMemoryList = JSON.parse(sessionStorage.getItem("sessionMemoryList"))
        if (sessionMemoryList === null) return []
        if (sessionMemoryList.length >= 5) {
            sessionMemoryList.shift()
        }
        return sessionMemoryList
    }

} 