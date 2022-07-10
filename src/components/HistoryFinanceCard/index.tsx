import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryCardFinanceProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryCardFinance: React.FC<IHistoryCardFinanceProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => (
  <Container>
    <Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
);

export default HistoryCardFinance;
