export default class DetailSection {

    data = []
    desc = ''

    constructor({ $target, $detailData }) {
        this.$target = $target
        this.data = $detailData.visible
        this.visible = $detailData.visible
        const $detailSection = document.createElement('div');
        $detailSection.className = "detailSection"
        this.$detailSection = $detailSection
        $detailSection.addEventListener("click", e => this.exitDetail(e))
        this.$target.appendChild($detailSection)
        this.render()
    }

    render = () => {
        if (this.visible && this.data.imgUrl === "NONE") {
            this.$detailSection.style.display = "flex";
            this.$detailSection.innerHTML = `
            <div class="detailContainer">
            <div class="detailName textLarge">${this.data.plantGnrlNm}</div>
            <div class="detailEng textSmall">${this.data.engNm}</div>
            <div class="detailSub textSmall">${this.data.familyKorNm}</div>
            <div class="detaillNullBox"><span>이미지준비중</span></div>
            <div class="detailDesc textSmall">${this.desc}</div>
            </div>`
        } else if (this.visible && this.data.imgUrl !== "NONE") {
            this.$detailSection.style.display = "flex";
            this.$detailSection.innerHTML = `
            <div class="detailContainer">
            <div class="detailName textLarge">${this.data.plantGnrlNm}</div>
            <div class="detailEng textSmall">${this.data.engNm}</div>
            <div class="detailSub textSmall">${this.data.familyKorNm}</div>
            <img src="${this.data.imgUrl}"/>
            <div class="detailDesc textSmall">${this.desc}</div>
            </div>`
        }
        let $body = document.querySelector("body")
        let $detailContainer = document.querySelector('.detailContainer')
        console.log($body.classList.contains('darkMode'), $detailContainer)
        if ($body.classList.contains('darkMode')) {
            if ($detailContainer) $detailContainer.classList.add('darkMode')
        } else {
            if ($detailContainer && $detailContainer.classList.contains('darkMode')) {
                $detailContainer.classList.remove('darkMode')
            }
        }
    }

    setState(nextData) {
        console.log(nextData)
        this.data = nextData.data[0];
        this.visible = nextData.visible;
        this.desc = ''
        let descArr = [this.data.flwrDesc, this.data.fritDesc, this.data.shpe]
        for(let i = 0; i < descArr.length; i++) {
            this.desc = this.desc + descArr[i] + "\n"
        }
        console.log(this.desc)
        this.render();
    }

    exitDetail = (e) => {
        const clickedElement = e.target;
        if (clickedElement.className === "detailSection") {
            this.$detailSection.style.display = "none"
            this.$detailSection.innerHTML = ``
        }

    }


}