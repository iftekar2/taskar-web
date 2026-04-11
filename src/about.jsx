import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer>
      <Column>
        <PageTitle>The Blueprint for Better Repairs</PageTitle>
        <p>
          We’ve eliminated the endless calling and the quote-waiting game.
          Taskar is a precision tool that connects homeowners with the exact
          expertise they need, exactly when they need it.
        </p>
      </Column>

      <Row>
        <Feature>
          <h4>Visual Marketplace</h4>
          <p>
            Don't just describe the leak—show it. Upload photos or videos to let
            experts see the challenge instantly. No more guessing over the
            phone; get bids based on reality.
          </p>
        </Feature>

        <Feature>
          <h4>Emergency Windows</h4>
          <p>
            Time-sensitive urgency. For the leaks that can't wait, our 2–4 hour
            bidding window ensures that emergency jobs reach the top of the deck
            for the fastest responders.
          </p>
        </Feature>

        <Feature>
          <h4>Curated Selection</h4>
          <p>
            Quality over quantity. Instead of a flood of fifty bids, we curate
            the top 6 quotes based on rating, price, and availability. You spend
            less time sorting and more time deciding.
          </p>
        </Feature>
      </Row>
    </AboutContainer>
  );
}

const AboutContainer = styled.div``;

const Column = styled.div`
  padding: 0 20px;

  p {
    color: #8c8f94;
    /* Min: 1rem, Ideal: 1.2vw, Max: 1.25rem */
    font-size: clamp(1rem, 1.2vw, 1.25rem);
    font-family: "Open Sans", sans-serif;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const PageTitle = styled.h4`
  color: white;
  font-size: clamp(2.2rem, 6vw, 1.5rem);
  font-family: "Playfair Display", serif;
  text-align: center;
  margin: 40px 0 20px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  background-color: #111111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  flex: 1;
  max-width: 400px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  h4 {
    color: white;
    font-size: clamp(1.4rem, 2.5vw, 1.3rem);
    font-family: "Playfair Display", serif;
    margin: 0;
    text-align: center;
  }

  p {
    color: #afb0b0;
    /* Scalable Body Text */
    font-size: clamp(0.95rem, 1vw, 1.1rem);
    font-family: "Open Sans", sans-serif;
    text-align: center;
    line-height: 1.5;
  }
`;

export default About;
