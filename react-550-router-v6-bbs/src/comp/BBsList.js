import { Link, useLoaderData, useMatches } from "react-router-dom";
import BBsSearch from "./BBsSearch";
import PageNav from "./PagiNav";

export const loader = async ({ params, values }) => {
  const { orderValue, filterValue } = values;
  console.log("BBsLoader", orderValue, filterValue);
  const pageNum = params?.pageNum || 1;
  console.log(pageNum);
  const res = await fetch(`/api?pageNum=${pageNum}&listLimit=5&pageNavCount=5`);
  const { bbsList, pagiNation } = await res.json();
  return { bbsList, pagiNation };
};

const listView = (bbsList) => {
  return bbsList.map((content) => {
    return (
      <tr key={content.b_seq}>
        <td>{content.b_seq}</td>
        <td>{content.b_date}</td>
        <td>{content.b_time}</td>
        <td>
          {content.b_nickname}({content.b_userid})
        </td>
        <td>
          <Link to={`/bbs/detail/${content.b_seq}`} key={content.b_seq}>
            {content.b_subject}
          </Link>
        </td>
      </tr>
    );
  });
};

const BBsList = () => {
  const { bbsList } = useLoaderData();
  const list = listView(bbsList);

  return (
    <>
      <table className="bbs list">
        <thead>
          <tr>
            <th>seq</th>
            <th>작성일</th>
            <th>작성시각</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      <BBsSearch />
      <PageNav />
    </>
  );
};

export default BBsList;
