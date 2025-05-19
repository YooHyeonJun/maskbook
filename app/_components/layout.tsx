"use client"
import styled from "styled-components"
interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <Wrapper>
        <TopBar>
            <Logo>MaskBook</Logo>
            <SignInBtn>Sign In</SignInBtn>
        </TopBar>
        <Content>
            {children}
        </Content>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  min-height: 100vh;
  background: rgba(254, 239, 231, 1);
`;
const TopBar = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 106, 113, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 32px;
`;
const Logo = styled.div`
  color: rgba(254, 239, 231, 1);
  font-size: 40px;
  font-weight: 400;
`;
const SignInBtn = styled.button`
  background: #fff;
  background: rgba(254, 239, 231, 1);
  border: none;
  border-radius: 2px;
  font-size: 18px;
  padding: 10px 24px;
  cursor: pointer;
  color: rgba(0, 106, 113, 0.6);
`;
const Content = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
`;