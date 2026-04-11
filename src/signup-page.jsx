import { useState } from "react";
import styled from "styled-components";
import { supabase } from "./supabase-client";

function SignupPage() {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    location: "",
    user_type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("users").insert(newUser).single();

    if (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
      return;
    }

    alert(`Thank you ${newUser.first_name}! You have joined the waitlist.`);
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      location: "",
      user_type: "",
    });
  };

  const US_STATES = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming",
  ];

  return (
    <SignupSection>
      <SignupCard as="form" onSubmit={handleSubmit}>
        <Title>Join Taskar</Title>
        <Row>
          <InputGroup>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="e.g. John"
              required
              value={newUser.first_name}
              onChange={(e) =>
                setNewUser({ ...newUser, first_name: e.target.value })
              }
            />
          </InputGroup>

          <InputGroup>
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="e.g. Doe"
              required
              value={newUser.last_name}
              onChange={(e) =>
                setNewUser({ ...newUser, last_name: e.target.value })
              }
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value.trim() })
            }
          />
        </InputGroup>

        <Row>
          {/* <InputGroup>
            <label>City</label>
            <input
              name="city"
              type="text"
              placeholder="e.g. New York"
              required
            />
          </InputGroup> */}

          <UserType>
            <label>State</label>
            <select
              name="state"
              required
              value={newUser.location}
              onChange={(e) =>
                setNewUser({ ...newUser, location: e.target.value })
              }
            >
              <option value="" disabled selected>
                Select State
              </option>
              {US_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </UserType>
        </Row>

        <UserType>
          <label>User Type</label>
          <select
            name="userType"
            required
            value={newUser.user_type}
            onChange={(e) =>
              setNewUser({ ...newUser, user_type: e.target.value })
            }
          >
            <option value="" disabled selected>
              Select User Type
            </option>
            <option value="customer">Customer</option>
            <option value="contractor">Contractor</option>
          </select>
        </UserType>

        <SubmitButton type="submit">Join Wait List</SubmitButton>
      </SignupCard>
    </SignupSection>
  );
}

const SignupSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SignupCard = styled.div`
  background-color: #111111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  flex: 1;
  width: 100%;
  max-width: 650px; /* Limits size on Desktop */
  padding: 40px 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 30px 20px;
    gap: 16px;
  }
`;

const Title = styled.h2`
  color: white;
  margin: 0 0 10px 0;
  font-family: "Inter", sans-serif;
  font-size: 1.8rem;
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 1px;

    &::after {
      content: " *";
      color: #ff4d4d;
    }
  }

  input {
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 14px;
    font-size: 1rem;
    color: white;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: #444;
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.5);
      background-color: #050505;
    }
  }
`;

const UserType = styled(InputGroup)`
  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  select {
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 14px;
    padding-right: 40px;
    font-size: 1rem;
    color: white;
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;

    background-position: right 10px center;
    background-size: 20px;

    &:focus {
      border-color: rgba(255, 255, 255, 0.5);
      background-color: #050505;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  color: black;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default SignupPage;
