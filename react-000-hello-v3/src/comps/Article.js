import styled, { css } from "styled-components";

const InputBox = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  &:focus {
    background-color: #ddd;
  }
  &:hover {
    background-color: #eee;
  }
`;

const Article = (props) => {
  const { theme } = props;
  const ArtBox = styled.article`
    display: flex;
    flex-direction: column;
    border: 1px solid #aaa;
    width: 50%;
    margin: 10px auto;
    ${() =>
      theme === "black" &&
      css`
        background-color: black;
        color: white;
        padding: 20px;
      `};
    ${() =>
      theme === "yellow" &&
      css`
        background-color: yellow;
        color: black;
        padding: 50px;
      `}
  `;

  return (
    <ArtBox>
      <InputBox />
    </ArtBox>
  );
};

export default Article;
