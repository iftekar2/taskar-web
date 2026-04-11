import styled from "styled-components";
import HomePage from "./home-page";
import SignupPage from "./signup-page";
import About from "./about";
import Footer from "./footer";

function App() {
  return (
    <MainLayout>
      <HomePage />
      <SignupPage />
      <About />
      <Footer />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;
`;

export default App;
