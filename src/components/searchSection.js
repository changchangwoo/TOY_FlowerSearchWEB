import SearchResult from "./searchResult.js";

export default class SearchSection {
    data = []

    constructor({ $target }) {
        this.$target = $target
        this.render();
        this.searchData();
    }

    render = () => {
        let $searchSection = document.createElement('div')
        $searchSection.className = "searchSection"
        $searchSection.innerHTML = `
        <div class="searchContainer">
        <div class="searchTitle textMedium">어떤 식물을 찾아볼까요?</div>
        <div class="searchEngineContainer">
        <input class="searchInput textSmall" placeholder="식물 명을 입력해주세요">
        </input>
        <div class="searchMemoryContainer">
        <ul class="searchMemoryList">
        <li>장미</li>
        <li>안개꽃</li>
        <li>들배지기</li>
        <li>금꽃사리</li>
        </ul>
        </div>
        </div>
        </div>
        `

        this.$target.appendChild($searchSection)
    }

    searchData = async () => {
        let $searchInput = document.querySelector('.searchInput')
        $searchInput.addEventListener("keyup", async e => {
            if (e.keyCode === 13) {
                this.setState({data : null, loading : false})
                const keyword = e.target.value
                let dataList = await fetchDataList(keyword)
                this.setState({data : dataList,
                loading : true})
                $searchInput.value = ''
            }
        });
    }

    setState = (nextData) => {
        this.data = nextData;
        console.log(this.data)
    }
}