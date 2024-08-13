import { css } from "@emotion/css";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const modalClose = css`
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const innerContainer = css`
  position: absolute;
  width: calc(24px * 36);
  max-width: 100%;
  padding: calc(24px * 1.5);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 20px 32px -8px;
  margin: 2rem;
  font-size: 0.8rem;
`;

export const closeButton = css`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 0;
  background: transparent;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
    opacity: 0.5;
  }

  &:hover svg {
    opacity: 1;
  }
`;
