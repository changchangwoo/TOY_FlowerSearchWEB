export default class ContentsSection {
    data = null;
    $contentsSection = null;
    loading = false;

    constructor({ $target, $initialData }) {
        this.$target = $target
        this.data = $initialData
        this.$contentsSection = document.createElement('div')
        this.$contentsSection.className = "contentsSection"
        this.$target.appendChild(this.$contentsSection)
        this.render()
    }
    render = () => {
        this.$contentsSection.innerHTML = ``

        if (this.data === null && this.loading === false) {
            let $loadingMessage = document.createElement('div')
            $loadingMessage.className = "resultMessage textMedium"
            $loadingMessage.innerHTML = `식물을 찾는중이에요`
            this.$contentsSection.appendChild($loadingMessage)
        } else if (this.data) {
            let $searchLen = document.createElement('div')
            $searchLen.className = "searchLen textMedium"
            $searchLen.innerHTML = `총 ${this.data.length}건의 식물들이 검색되었어요`
            this.$contentsSection.appendChild($searchLen)
            let $plantItems = document.createElement('ul')
            $plantItems.className = "plantItems"
            $plantItems.innerHTML = this.data.map(
                plant => {
                    if (plant.imgUrl === 'null') {
                        console.log('cehck')
                        return `
                      <li class="plantItem title="${plant.korNm}">
                        <div class="imgnullBox"><span>이미지 준비중</span></div>
                        <div class="nameKR textSmall">${plant.korNm}</div>
                        <div class="FmlyKR textMini">${plant.fmlyKor}</div>
                      </li>
                    `;
                    } else {
                        return `
                      <li class="plantItem title="${plant.korNm}">
                        <img src="http://www.nature.go.kr${plant.imgUrl}" alt="${plant.korNm}"/>
                        <div class="nameKR textSmall">${plant.korNm}</div>
                        <div class="FmlyKR textMini">${plant.fmlyKor}</div>
                      </li>
                    `;
                    }
                }
            ).join("");
            this.$contentsSection.appendChild($plantItems)

        } else if (this.data === null && this.loading === true) {
            let $loadingMessage = document.createElement('div')
            $loadingMessage.className = "resultMessage textMedium"
            $loadingMessage.innerHTML = `검색 결과를 찾지못했어요ㅜ`
            this.$contentsSection.appendChild($loadingMessage)
        }
        console.log(this.data, this.loading)



    }

    setState(nextData) {
        this.data = nextData.data;
        this.loading = nextData.loading;
        this.render();
    }
}