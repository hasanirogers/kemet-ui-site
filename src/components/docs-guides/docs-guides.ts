import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { svgBlueprint } from '../../content/svgs';
import styles from './styles';


@customElement('docs-guides')
export class DocsGuides extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div>
        <h2>Guides</h2>
        <p>Kemet UI has several guides that will help you get started with the system. Check them out below.</p>
        <ul polarity="dark">
          <li><kemet-button link="/guides/scss" variant="pill" outlined>Styling with SCSS</kemet-button></li>
          <li><kemet-button link="/guides/forms" variant="pill" outlined>Working with Forms</kemet-button></li>
          <li><kemet-button link="/guides/using-jsx" variant="pill" outlined>Web Components and JSX</kemet-button></li>
          <li><kemet-button link="/guides/themes-polarity" variant="pill" outlined>Themes &amp; Polarity</kemet-button></li>
        </ul>
      </div>
    `;
  }
}
