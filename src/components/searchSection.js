export default class SearchSection {
    data = []

    constructor({ $target, onSearch }) {
        this.$target = $target
        this.render();
        this.setSearchMemoryList()

        let $searchInput = document.querySelector('.searchInput')
        $searchInput.addEventListener("keyup", async e => {
            if (e.keyCode === 13) {
                const keyword = e.target.value
                onSearch(keyword);
                $searchInput.value = ''
            }
        });

        let $searchMemoryList = document.querySelector('.searchMemoryList')
        $searchMemoryList.addEventListener("click", e => {
            const clickedElement = e.target;
            if(clickedElement.tagName === "LI") {
                let clickedText = clickedElement.textContent
                onSearch(clickedText)
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
        </ul>
        </div>
        </div>
        </div>
        `

        this.$target.appendChild($searchSection)
    }

    setSearchMemoryList = () => {
        let sessionMemoryList = JSON.parse(sessionStorage.getItem("sessionMemoryList"))
        if(sessionMemoryList === null) return
        else {
            let $searchMemoryList = document.querySelector('.searchMemoryList')
            $searchMemoryList.innerHTML = ``
            $searchMemoryList.innerHTML = sessionMemoryList.map(
                keyword => {
                    return `<li>${keyword}</li>`
                }
            ).join('')
        }
    }
}