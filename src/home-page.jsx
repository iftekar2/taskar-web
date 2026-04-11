import styled, { keyframes } from "styled-components";
import downArrow from "./icons/icons8-down.gif";

function HomePage() {
  return (
    <HomePageLayout>
      <ContentWrapper>
        <AppName>
          <h1>Taskar</h1>
        </AppName>

        <AppSlogan>
          <p>
            The definitive network for high-stakes projects. Find verified
            experts, visualize expertise, and manage goals on an intuitive,
            all-in-one platform.
          </p>
        </AppSlogan>
      </ContentWrapper>

      <ScrollDown>
        <p>Scroll and explore</p>
        <img src={downArrow} alt="Scroll down" />
      </ScrollDown>
    </HomePageLayout>
  );
}

// Animations for a smooth entrance
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Pushes the arrow to the bottom */
  padding: 60px 20px;
  min-height: 100vh;
  background-color: #000; /* Ensuring pure black background */
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  flex: 1; /* Takes up available space to center vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-out;
`;

const AppName = styled.div`
  h1 {
    font-size: clamp(4rem, 10vw, 8rem); /* Responsive font sizing */
    color: white;
    font-family: "Playfair Display", serif;
    margin: 0;
    line-height: 0.9;
    font-weight: 700;

    span {
      display: block;
      font-style: italic;
      font-weight: 400;
      color: #aaa; /* Slight grey for the "Illuminated" vibe */
    }
  }
`;

const AppSlogan = styled.div`
  max-width: 700px;
  margin-top: 30px;

  p {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-family: "Inter", sans-serif;
    color: rgba(255, 255, 255, 0.8); /* Slightly transparent for better look */
    font-weight: 300;
    line-height: 1.6;
    margin: 0;
  }
`;

const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: white;
  animation: ${fadeIn} 2s ease-in;

  p {
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase; /* Makes it look more like a UI element */
    opacity: 0.6;
  }

  img {
    width: 35px;
    height: auto;
    filter: invert(1);
    opacity: 0.7;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;

export default HomePage;
