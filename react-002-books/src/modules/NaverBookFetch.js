import { CLIENT_ID, CLIENT_SECRET } from "../config/NaverSecret";

/**
 * React 에서 API 를 참조할때 CORS 발생하는 경우
 * package.json 에 "proxy": "https://openapi.naver.com/v1", 를 설정한다
 * 그리고 fetch 에서는 proxy 로 설정된 주소 뒷부분만 사용한다
 *
 * 실제 네이버 API 에 요청하는 주소는 proxy + URL 형식으로 만들어진다
 *
 */
const NAVER_BOOK_JSON_URL = "/search/book.json";

const getQueryData = async (query) => {
  const queryString = `${NAVER_BOOK_JSON_URL}?query=${encodeURIComponent(
    query
  )}`;
  const naverFetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  };
  const res = await fetch(queryString, naverFetchOption);
  const result = await res.json();
  /**
   * async await 로 수신한(만들어낸) 데이터들을 return 하고자 할때
   * 아무리 이전 코드에서 await 를 하여도 return 은 await 가 안된다
   * 그래서 모든 데이터가 다 완성된후(Promise.all()) return 하도록
   * 만들어준다
   * 어떤 함수로부터 return 받은 데이터에 Pending 이라는 단어가 보이면
   * return 문에서 Promise.all() 을 먼저 실행하라
   */
  return Promise.all(result.items);
};

export { getQueryData };
