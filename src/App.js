export default class App{
    // 컨스트럭터에 변수 선언 다 하고 render을 통해서 화면에 구현
    constructor({$target}) {
        this.$page = $target
        this.render()
    }


    render = () => {
        this.$temp = document.createElement('div')
        this.$temp.className = "temp"
        this.$page.appendChild(this.$temp)

    }

} 