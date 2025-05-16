import Image from "next/image";
import styled from "styled-components";
export default function Home() {
  return (
    <MainBody>
      <div>Helloworld</div>
    </MainBody>
  );
}


//////////////////style 선언//////////////////
const MainBody = styled.div`
background-color:red;
`