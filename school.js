const axios = require("axios");

const apiURL = "https://hcs.eduro.go.kr/school";
const params = {
    lctnScCode: '',
    schulCrseScCode: '',
    orgName: '',
    currentPageNo: ''
};

/*
lctnScCode: 교육청 코드
  01 서울특별시
  02 부산광역시
  03 대구광역시
  04 인천광역시
  05 광주광역시
  06 대전광역시
  07 울산광역시
  08 세종특별자치시
  10 경기도
  11 강원도
  12 충청북도
  13 충청남도
  14 전라북도
  15 전라남도
  16 경상북도
  17 경상남도
  18 제주특별자치도

schulCrseScCode: 학교 종류 코드
  01 유치원
  02 초등학교
  03 중학교
  04 고등학교
  05 특수학교

orgName: 검색할 학교 이름
currentPageNo: 현재 페이지 수
*/

(async () => {
	let ret = await axios.get(apiURL, { params });
	console.log(ret.data);
})().catch(e => {
	console.error(e)
});