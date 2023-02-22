import { useBBsContext } from "../provider/BBsContext";

const BBsSearch = () => {
  const {
    orderList,
    filterList,
    orderValue,
    setOrderValue,
    filterValue,
    setFilterValue,
    searchInput,
    setSearchInput,
  } = useBBsContext();

  //   const orderSelectHandler = (e) => {};
  return (
    <div className="bbs search-box">
      <select
        className="w3-select w3-border w3-round-xlarge"
        value={orderValue.eng}
        onChange={(e) => {
          setOrderValue({
            eng: e.target.value,
            kor: e.target.options[e.currentTarget.selectedIndex].text,
          });
        }}
      >
        {orderList.map((order) => (
          <option value={order.o_eng} key={order.o_eng}>
            {order.o_kor}
          </option>
        ))}
      </select>
      <select
        className="w3-select w3-border  w3-round-xlarge"
        value={filterValue.eng}
        onChange={(e) => {
          setFilterValue({
            eng: e.target.value,
            kor: e.target.options[e.currentTarget.selectedIndex].text,
          });
        }}
      >
        {filterList.map((filter) => (
          <option value={filter.s_eng} key={filter.s_kor}>
            {filter.s_kor}
          </option>
        ))}
      </select>
      <input
        value={searchInput}
        placeholder="검색어"
        onChange={(e) => setSearchInput(e.target.value)}
        className="search  w3-input w3-border w3-round-xlarge"
      ></input>
    </div>
  );
};

export default BBsSearch;
