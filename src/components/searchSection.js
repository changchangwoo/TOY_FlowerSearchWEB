export default class SearchSection {
    constructor({ $target }) {
        this.$target = $target
        this.render();
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
}