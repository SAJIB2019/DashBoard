import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpg";
import { cardStyle } from "./ReusableStyles";

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      text-align: center;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_title {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        &_image {
          img {
            height: 2.5rem;
            border-radius: 50%;
          }
        }
      }
      &_amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
`;

const Transfers = () => {
  const transactions = [
    {
      image: avatarImage,
      name: "From Kishan Sheth",
      time: "Today, 16:36",
      amount: "+550",
    },
    {
      image: avatarImage,
      name: "La Lauras Santos",
      time: "Today, 08:49",
      amount: "+50",
    },
    {
      image: avatarImage,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+150",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Transfer</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction, index) => {
          return (
            <div className="transaction" key={index}>
              <div className="transaction_title">
                <div className="transaction_title_image">
                  <img src={transaction.image} alt="transaction imgae" />
                </div>
                <div className="transaction_title_details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction_amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#" className="view">
        view all <HiArrowNarrowRight />
      </a>
    </Section>
  );
};

export default Transfers;
