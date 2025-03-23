import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { svgAnubis } from '../../content/svgs';
import styles from './styles';
import { stylesKemetBase } from '../../styles/shared';


@customElement('docs-intro')
export class DocsIntro extends LitElement {
  static styles = [stylesKemetBase, styles];

  render() {
    return html`
      <section>
        <span class="logo">${svgAnubis}</span>
        <h1>Kemet UI</h1>
        <h2>Design<span>{</span>less<span>}</span> Blueprint System</h2>
        <pre><code>npm i kemet-ui</code></pre>
        <br />
        <ul>
          <li>
            <kemet-button link="#get-started" variant="rounded">
              Get Started
              <kemet-icon slot="right" icon="flag" size="20"></kemet-icon>
            </kemet-button>
          </li>
          <li>
            <kemet-button link="/integrations" variant="rounded">
              Integrations
              <kemet-icon slot="right" icon="code-slash" size="20"></kemet-icon>
            </kemet-button>
          </li>
          <li>
            <kemet-button link="/docs" variant="rounded">
              Documentation
              <kemet-icon slot="right" icon="book" size="20"></kemet-icon>
            </kemet-button>
          </li>
        </ul>
      </section>
      <div class="overlay"></div>
    `;
  }
}
