import styled, { css } from "styled-components";

const Article = (props) => {
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

  const ArtBox = styled.article`
    display: flex;
    flex-direction: column;
    border: 1px solid #aaa;
    width: 50%;
    margin: 10px auto;

    ${() =>
      props?.black &&
      css`
        background-color: black;
        color: white;
        padding: 20px;
      `}

    ${() =>
      props?.yellow &&
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
