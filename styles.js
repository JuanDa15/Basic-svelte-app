import { css } from "@emotion/css";

export const form = css`
  background-color: var(--second-bg);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 4px #fff;
  }
`;

export const button = css`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--bg);
  color: var(--bg);
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--bg);
    color: var(--white);
  }

  &[disabled] {
    opacity: 0.5;
  }
`;
