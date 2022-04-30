import styled from "styled-components";

export const Styledpost = styled.div`
  width: 614px;
  // 반응형으로 설정하면 됨
`;
export const PostStyled = styled.div`
  display: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderStyledpost = styled(Styledpost)`
  height: 70px; //반응형으로 설정하면
  border: solid 1px lightgray;
`;
export const HeaderleftStyledpost = styled.div`
  width: 546px; //반응형으로 설정하면 됨
  height: 42px; //반응형으로 설정하면 됨
  display: flex;
  align-items: center;
  padding: 14px 4px 14px 16px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  span {
    font-weight: bold;
    font-size: 25px;
    margin-left: 16px;
    vertical-align: middle;
  }
`;
export const HeaderRightStyledpost = styled.div`
  width: 48px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BodyStyledpost = styled(Styledpost)`
  height: 614px;
  border: solid 1px lightgray;
  img {
    width: 614px;
    height: 614px;
  }
`;

export const CommentStyledpost = styled.div`
  border-left: solid 1px lightgray;
  border-right: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  width: 582px;
  height: ${(props) => 54 + props.length * 18};
  padding: 6px 16px 6px 16px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`;
export const HeartStyled = styled.div`
  padding: 8px 16px 8px 0px;
`;

export const TitleStyledpost = styled.div`
  width: 582px;
  height: ${(props) => 22 * props.length};
  padding: 0px 16px 0 16px;
  border-left: solid 1px lightgray;
  border-right: solid 1px lightgray;
  display: flex;
`;
export const TitleTeam = styled.div`
  font-weight: bold;
  padding-right: 10px;
  height: 22px;
  display: flex;
`;
export const TitleSpanStyledpost = styled.div`
  display: flex;
  white-space: pre-wrap;
  vertical-align: bottom;
  height: ${(props) => 22 * props.length};
`;
