export default class SearchSection {
    data = []

    constructor({ $target, onSearch }) {
        this.$target = $target
        this.render();

        let $searchInput = document.querySelector('.searchInput')
        $searchInput.addEventListener("keyup", async e => {
            if (e.keyCode === 13) {
                const keyword = e.target.value
                onSearch(keyword);
                $searchInput.value = ''
            }
        });

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
        <ul class="searchMemoryList textMini">
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