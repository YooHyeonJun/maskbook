"use client";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Layout from "./_components/layout";
const popularPostList = [
  {id:1, date:"2025-05-16", title:"점심 뭐먹지", content:"ㅈㄱㄴ", like:7},
  {id:2, date:"2025-05-16", title:"수영장에서 오줌싸는게 뭐 어때서", content:"점심 메뉴 추천좀", like:23},
  {id:3, date:"2025-05-16", title:"날씨", content:"비온다", like:17},
  {id:4, date:"2025-05-16", title:"ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ", content:"맨유 또졌네", like:19},
  {id:5, date:"2025-05-16", title:"데이트코스 추천좀", content:"첫 데이튼데", like:31},
]
export default function Home() {
  return (
      <Layout>
        <LeftSection>
          <SearchBoxWrapper>
            <SearchInput placeholder="" />
            <SearchIcon>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill="currentColor" fillRule="nonzero"/>
              </svg>
            </SearchIcon>
          </SearchBoxWrapper>
          <PopularTitle>Popular</PopularTitle>
          <PopularList>
            {popularPostList.map((item, idx) => (
              <PopularRow key={idx}> 
                <StyledLink href={`/post/${item.id}`}>
                  <PopularText>{item.title}</PopularText>
                  <PopularDate>{item.date}</PopularDate>
                </StyledLink>
              </PopularRow>
            ))}
          </PopularList>
        </LeftSection>


        <RightSection>
          <AdBox>
            <AdImage src="/ad.PNG" alt="red paint" fill />
          </AdBox>
        </RightSection>
      </Layout>
  );
}
const LeftSection = styled.div`
  flex: 1;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid rgba(0, 106, 113, 0.6);
  border-radius: 30px;
  height: 56px;
  padding: 0 24px;
  background: rgba(254, 239, 231, 1);
  margin-bottom: 32px;
  width: 70%;
  max-width: 700px;
`;
const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 28px;
  padding: 8px 0;
`;
const SearchIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 106, 113, 0.6);
`;
const PopularTitle = styled.div`
  font-size: 20px;
  color: rgba(0, 106, 113, 0.6);
  margin-bottom: 8px;
  margin-left: 12px;
  width: 70%;
  max-width: 700px;
  background: rgba(254, 239, 231, 1);
  font-weight: bold;
`;
const PopularList = styled.div`
  color: rgba(0, 106, 113, 0.6);
  border-top: 3px solid rgba(0, 106, 113, 0.6);
  width: 70%;
  max-width: 700px;
  background: rgba(254, 239, 231, 1);
`;
const PopularRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 12px;
  border-bottom: 1px solid rgba(0, 106, 113, 0.6);
  font-size: 20px;
  color: rgba(0, 106, 113, 0.6);
`;

const PopularText = styled.div`
  margin-right: 24px;
  /* 줄바꿈 방지 */
  white-space: nowrap;
`;

const PopularDate = styled.div`
  font-size: 18px;
  /* 줄바꿈 방지 */
  white-space: nowrap;
`;
const RightSection = styled.div`
  aspect-ratio: 1 / 2;
  position: relative;
  cursor: pointer;
`;
const AdBox = styled.div`
  width: 220px;
  background: rgba(254, 239, 231, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 0 0;
`;
const AdImage = styled(Image)`
  margin-bottom: 16px;
  object-fit: contain;
  width: 100% !important;
  height: auto !important;
  max-width: 180px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;













