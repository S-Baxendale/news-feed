import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontPrimary};
  margin-bottom: ${({ theme }) => theme.spacingMd};
`;
