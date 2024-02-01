const url = 'http://openapi.nature.go.kr/openapi/service/rest/PlantService/';
const serviceKey = 'kHnTn7oETYUtW1eKWdJn8Go%2B6AQppJLnxRtxb3rn4JmDxLYB9bvufX6M6rDhGeiNEyajV2ADU82A%2B%2Bu1WnpSNA%3D%3D';


const fetchDataList = async (keyword) => {
    const st = '1';
    const numOfRows = '30';
    const pageNo = '1';
    let sw = keyword
    let dataList = []

    let listQuery = new URLSearchParams({
        serviceKey,
        st,
        sw,
        numOfRows,
        pageNo,
    });

    let fullUrl = `${url}plntIlstrSearch?${listQuery.toString()}`;

    await fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            let xmlParser = new DOMParser();
            let xmlDoc = xmlParser.parseFromString(data, "text/xml")
            let value = xmlDoc.getElementsByTagName("item")
            for (let i = 0; i < value.length; i++) {
                dataList.push({
                    "korNm": value[i].getElementsByTagName("plantGnrlNm")[0]?.textContent || 'null',
                    "imgUrl": value[i].getElementsByTagName("imgUrl")[0]?.textContent || 'null',
                    "fmlyKor": value[i].getElementsByTagName("familyKorNm")[0]?.textContent || 'null',
                    "gnusKor": value[i].getElementsByTagName("genusKorNm")[0]?.textContent || 'null',
                    "plantSpecsId": value[i].getElementsByTagName("plantPilbkNo")[0]?.textContent || 'null'
                })
            }
        })
        .catch(error => {
            console.error('Fetch 에러:', error);
        });

    return dataList.length > 0 ? dataList : null
}

const fetchDetailData = async (keyword) => {
    const q1 = keyword
    let dataList = []
    let detailQuery = new URLSearchParams({
        serviceKey,
        q1,
    });

    let fullUrl = `${url}plntIlstrInfo?${detailQuery.toString()}`;
    await fetch(fullUrl).then(response => {
        if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`) };
        return response.text();
    }).then(data => {
        let xmlParser = new DOMParser();
        let xmlDoc = xmlParser.parseFromString(data, "text/xml")
        let value = xmlDoc.getElementsByTagName("item")
        for (let i = 0; i < value.length; i++) {
            dataList.push({
                "plantGnrlNm": value[i].getElementsByTagName("plantGnrlNm")[0]?.textContent || 'null',
                "engNm": value[i].getElementsByTagName("engNm")[0]?.textContent || 'null',
                "familyKorNm": value[i].getElementsByTagName("familyKorNm")[0]?.textContent || 'null',
                "imgUrl": value[i].getElementsByTagName("imgUrl")[0]?.textContent || 'null',
                "flwrDesc": value[i].getElementsByTagName("flwrDesc")[0]?.textContent || 'null',
                "fritDesc": value[i].getElementsByTagName("fritDesc")[0]?.textContent || 'null',
                "shpe": value[i].getElementsByTagName("shpe")[0]?.textContent || 'null',
            })
        }
    }).catch(error => {
        console.error('Fetch 에러:', error);
    });
    
    return dataList.length > 0 ? dataList : null 
}


