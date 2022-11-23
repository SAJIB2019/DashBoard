import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      padding: 1.5rem;
      background-color: black;
      border-radius: 3rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: repeat(1, 1fr);
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$ 682.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BsFillBarChartFill />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h1>$350.40</h1>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New Clients</h5>
          <h1>331</h1>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Activity</h5>
          <h2>$40.50</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
};

export default Analytics;
