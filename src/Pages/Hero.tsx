import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          <Textcontent></Textcontent>
          <Imagecontent></Imagecontent>
        </HeroWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;

const Imagecontent = styled.div`
  height: 100%;
  background-color: paleturquoise;
`;
const Textcontent = styled.div`
  height: 100%;
  background-color: yellow;
`;

const HeroWrapper = styled.div`
  height: 100%;
  width: 80%;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 90%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 90%;
  }
`;
const HeroSection = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f2f7f8;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
