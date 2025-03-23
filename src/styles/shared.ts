import { css, unsafeCSS } from 'lit';
import kemetBase from '../../node_modules/kemet-ui/dist/styles/kemet.base.css?inline';

export const stylesKemetBase = unsafeCSS(kemetBase);

export const stylesShared = css`
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
