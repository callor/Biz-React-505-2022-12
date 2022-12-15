import { CLIENT_ID, CLIENT_SECRET } from "../config/NaverSecret";

const NAVER_BOOK_JSON_URL = "/search/book.json";
// const NAVER_CLIENT_ID_KEY = "X-Naver-Client-Id";
// const NAVER_CLIENT_SECRET_KEY = "X-Naver-Client-Secret";

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
