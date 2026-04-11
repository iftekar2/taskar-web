import styled from "styled-components";
import HomePage from "./home-page";
import Footer from "./footer";
import About from "./about";
import SignupPage from "./signup-page";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
        <SignupPage />
        <About />
        <Footer />
      </MainLayout>
    </div>
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
