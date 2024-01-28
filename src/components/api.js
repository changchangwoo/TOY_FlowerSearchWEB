
// https://cors-anywhere.herokuapp.com/corsdemo Cors 권한 없이 라이브 서버 실행 경우

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://openapi.nature.go.kr/openapi/service/rest/PlantService/naturalizedSearch2';
const serviceKey = 'kHnTn7oETYUtW1eKWdJn8Go%2B6AQppJLnxRtxb3rn4JmDxLYB9bvufX6M6rDhGeiNEyajV2ADU82A%2B%2Bu1WnpSNA%3D%3D';
const st = '1';
const numOfRows = '10';
const pageNo = '1';


const fetchDataList = async (keyowrd) => {
    let sw = keyowrd

    const queryParams = new URLSearchParams({
        serviceKey,
        st,
        sw,
        numOfRows,
        pageNo,
    });

    const fullUrl = `${corsAnywhereUrl}${url}?${queryParams.toString()}`;

    await fetch(fullUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        let dataList = []
        let xmlParser = new DOMParser();
        let xmlDoc = xmlParser.parseFromString(data, "text/xml")
        console.log(xmlDoc)
        let value = xmlDoc.getElementsByTagName("item")
        console.log(value)
        for (let i = 0; i < value.length; i++) {
            dataList.push({
                "korNm": value[i].getElementsByTagName("korNm")[0]?.textContent || 'null',
                "imgUrl": value[i].getElementsByTagName("imgUrl")[0]?.textContent || 'null',
                "fmlyKor": value[i].getElementsByTagName("fmlyKor")[0]?.textContent || 'null',
                "gnusKor": value[i].getElementsByTagName("gnusKor")[0]?.textContent || 'null'
            })
        }
        console.log(dataList)
        return dataList
    })
    .catch(error => {
        console.error('Fetch 에러:', error);
    });

}


