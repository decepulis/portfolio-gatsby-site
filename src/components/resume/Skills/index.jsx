import React from "react"

import { Link } from "gatsby"

import { StyledPosts } from "./styles"
import { JustAStyledHomeContainer } from "../../layout.styles"

// todo: pull _this_ information from the cms
const Skills = React.forwardRef(({ id }, ref) => (
  <section ref={ref} id={id}>
    <JustAStyledHomeContainer>
      <header>
        <h2>Technical Skills</h2>
      </header>

      <StyledPosts>
        <article>
          <header>
            <h3>Front-End Web</h3>
          </header>
          <dl>
            <div>
              <dt>Markup</dt>
              <dd>
                <Link to="/tags/html">HTML5</Link>
              </dd>
              <dd>
                <Link to="/tags/markdown">Markdown</Link>
              </dd>
              <dd>
                <Link to="/tags/nunjucks">Nunjucks</Link>
              </dd>
              <dd>
                <Link to="/tags/pug">Pug</Link>
              </dd>
            </div>
            <div>
              <dt>Style</dt>
              <dd>
                <Link to="/tags/scss">SCSS</Link>
              </dd>
              <dd>
                <Link to="/tags/css">CSS</Link>
              </dd>
              <dd>
                <Link to="/tags/styled-components">Styled Components</Link>
              </dd>
              <dd>
                <Link to="/tags/bootstrap">Bootstrap</Link>
              </dd>
            </div>
            <div>
              <dt>Scripting</dt>
              <dd>
                <Link to="/tags/javascript-es-6">JavaScript/ES6</Link>
              </dd>
              <dd>
                <Link to="/tags/react">JSX</Link>
              </dd>
            </div>
            <div>
              <dt>Frameworks & Favorite Libraries</dt>
              <dd>
                <Link to="/tags/react">React (Hooks, Context, Router)</Link>
              </dd>
              <dd>
                <Link to="/tags/jquery">jQuery</Link>
              </dd>
              <dd>
                <Link to="/tags/bootstrap">Bootstrap</Link>
              </dd>
              <dd>
                <Link to="/tags/xstate">XState</Link>
              </dd>
              <dd>
                <Link to="/tags/recharts">Recharts</Link>
              </dd>
            </div>
            <div>
              <dt>Build Tools</dt>
              <dd>
                <Link to="/tags/gatsby">Gatsby</Link>
              </dd>
              <dd>
                <Link to="/tags/webpack">Webpack</Link>
              </dd>
              <dd>
                <Link to="/tags/parcel">Parcel</Link>
              </dd>
              <dd>
                <Link to="/tags/gulp">Gulp</Link>
              </dd>
            </div>
            <div>
              <dt>Favorite Topics</dt>
              <dd>
                <Link to="/tags/gamification">Gamification</Link>
              </dd>
              <dd>
                <Link to="/tags/load-times">Load Times</Link>
              </dd>
              <dd>
                <Link to="/tags/accessibility">Accessibility</Link>
              </dd>
              <dd>
                <Link to="/tags/svg">SVGs</Link>
              </dd>
              <dd>
                <Link to="/tags/parallax">Parallax</Link>
              </dd>
            </div>
          </dl>
        </article>

        <article>
          <header>
            <h3>Back-End Web, Cloud Computing, &amp; Infrastructure</h3>
          </header>
          <dl>
            <div>
              <dt>Libraries</dt>
              <dd>
                <Link to="/tags/django">Django (DRF, Channels 2)</Link>
              </dd>
            </div>
            <div>
              <dt>Scripting</dt>
              <dd>
                <Link to="/tags/python">Python 3</Link>
              </dd>
              <dd>
                <Link to="/tags/javascript-es-6">node.js</Link>
              </dd>
            </div>
            <div>
              <dt>Databases</dt>
              <dd>
                <Link to="/tags/postgresql">PostgreSQL</Link>
              </dd>
              <dd>
                <Link to="/tags/influxdb">InfluxDB</Link>
              </dd>
            </div>
            <div>
              <dt>AWS</dt>
              <dd>
                <Link to="/tags/aws">Elastic Beanstalk</Link>
              </dd>
              <dd>
                <Link to="/tags/aws">EC2 (Auto Scaling)</Link>
              </dd>
              <dd>
                <Link to="/tags/aws">CLB</Link>
              </dd>
              <dd>
                <Link to="/tags/aws">Elasticache</Link>
              </dd>
              <dd>
                <Link to="/tags/aws">RDS</Link>
              </dd>
              <dd>
                <Link to="/tags/aws">Route53</Link>
              </dd>
            </div>
            <div>
              <dt>Servers &amp; Serverless</dt>
              <dd>
                <Link to="/tags/netlify">Netlify</Link>
              </dd>
              <dd>
                <Link to="/tags/apache">Apache</Link>
              </dd>
            </div>
          </dl>
        </article>

        <article>
          <header>
            <h3>I could also hold a conversation about...</h3>
          </header>
          <dl>
            <div>
              <dt>Code</dt>
              <dd>
                <Link to="/tags/matlab">MATLAB</Link>
              </dd>
              <dd>
                <Link to="/tags/latex">LaTeX</Link>
              </dd>
              <dd>
                <Link to="/tags/swift">Swift</Link>
              </dd>
              <dd>
                <Link to="/tags/c">C</Link>
              </dd>
              <dd>
                <Link to="/tags/assembly">Assembly</Link>
              </dd>
            </div>
            <div>
              <dt>Design &amp; Creative Tools</dt>
              <dd>
                <Link to="/tags/ui-ux">UI/UX</Link>
              </dd>
              <dd>
                <Link to="/tags/photoshop">Photoshop</Link>
              </dd>
              <dd>
                <Link to="/tags/illustrator">Illustrator</Link>
              </dd>
              <dd>
                <Link to="/tags/final-cut">Final Cut Pro</Link>
              </dd>
            </div>
            <div>
              <dt>Hardware</dt>
              <dd>
                <Link to="/tags/arduino">Arduino</Link>
              </dd>
              <dd>
                <Link to="/tags/raspberry-pi">Raspberry Pi</Link>
              </dd>
              <dd>
                <Link to="/tags/ble">BLE</Link>
              </dd>
              <dd>
                <Link to="/tags/electronics">Electronics</Link>
              </dd>
              <dd>
                <Link to="/tags/digital-design">Digital Design</Link>
              </dd>
            </div>
            <div>
              <dt>Real Life</dt>
              <dd>
                <Link to="/tags/teaching">Teaching</Link>
              </dd>
              <dd>
                <Link to="/tags/public-speaking">Public Speaking</Link>
              </dd>
              <dd>
                <Link to="/tags/research">Research</Link>
              </dd>
              <dd>
                <Link to="/tags/requirements">Requirements</Link>
              </dd>
            </div>
          </dl>
        </article>
        <article>
          <header>
            <h3>Language</h3>
          </header>
          <dl>
            <div>
              <dt>English</dt>
              <dd>
                <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                  (C2)
                </a>
              </dd>
            </div>
            <div>
              <dt>Lithuanian</dt>
              <dd>
                <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                  (C2)
                </a>
              </dd>
            </div>
            <div>
              <dt>German</dt>
              <dd>
                <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
                  (A2)
                </a>
              </dd>
            </div>
          </dl>
        </article>
      </StyledPosts>
    </JustAStyledHomeContainer>
  </section>
))

export default Skills
