export default class DetailSection {
    
    data = []

    constructor({$target, $detailData}) {
        this.$target = $target
        this.data = $detailData
        this.visible = false
        const $detailSection = document.createElement('div');
        $detailSection.className = "detailSection"
        this.$detailSection = $detailSection

        $detailSection.addEventListener("click", e => this.exitDetail(e))
        this.$target.appendChild($detailSection)
        this.render()
    }

    render = () => {
        let $body = document.querySelector("body")
        if($body.classList.contains('darkMode')) {
            this.$detailSection.classList.add('darkMode')
        } else {
            if(this.$detailSection.classList.contains('darkMode')) {
            this.$detailSection.classList.remove('darkMode')
            }
            return
        }
        if(this.visible && this.data.imgUrl === "NONE") {
            
            this.$detailSection.style.display = "flex";
            this.$detailSection.innerHTML = `
            <div class="detailContainer">
            <div class="detailName textLarge">${this.data.plantGnrlNm}</div>
            <div class="detailEng textSmall">${this.data.engNm}</div>
            <div class="detailSub textSmall">${this.data.familyKorNm}</div>
            <div class="detaillNullBox"><span>이미지준비중</span></div>
            <div class="detailDesc textSmall">반갑습니다.</div>
            </div>`
        } else if(this.visible && this.data.imgUrl !== "NONE") {
            this.$detailSection.style.display = "flex";
            this.$detailSection.innerHTML = `
            <div class="detailContainer">
            <div class="detailName textLarge">${this.data.plantGnrlNm}</div>
            <div class="detailEng textSmall">${this.data.engNm}</div>
            <div class="detailSub textSmall">${this.data.familyKorNm}</div>
            <img src="${this.data.imgUrl}"/>
            <div class="detailDesc textSmall">반갑습니다.</div>
            </div>`

        }
    }

    setState(nextData) {
        console.log(nextData)
        this.data = nextData.data[0];
        this.visible = nextData.visible;
        this.render();
    }

    exitDetail = (e) => {
        const clickedElement = e.target;
        if(clickedElement.className === "detailSection") {
            this.$detailSection.style.display = "none"
            this.$detailSection.innerHTML = ``
        }

    }


}