import React from "react"
// todo: pull _this_ information from the cms
const Skills = React.forwardRef(({ id }, ref) => (
  <section ref={ref} id={id}>
    <header>
      <h2>Skills</h2>
    </header>

    <section>
      <header>
        <h3>Front-End Web</h3>
      </header>
      <dl>
        <dt>Markup</dt>
        <dd>HTML5, Markdown, Nunjucks</dd>
        <dt>Style</dt>
        <dd>Sass, CSS3, Bootstrap</dd>
        <dt>Scripting</dt>
        <dd>JavaScript/ES6</dd>
        <dt>Frameworks & Libraries</dt>
        <dd>jQuery, Bootstrap, Vue.js, Chart.js</dd>
        <dt>Build Tools</dt>
        <dd>Webpack, Gulp, Babel, PostCSS, Eleventy</dd>
        <dt>Favorite Topics</dt>
        <dd>Gamification, SVGs, Load Times, Accessibility</dd>
      </dl>
    </section>

    <section>
      <header>
        <h3>Back-End Web</h3>
      </header>
      <dl>
        <dt>Libraries</dt>
        <dd>Django, DRF</dd>
        <dt>Scripting</dt>
        <dd>Python 3, node.js</dd>
        <dt>Databases</dt>
        <dd>I've got the basics down pretty well.</dd>
      </dl>
    </section>

    <section>
      <header>
        <h3>Cloud Computing, Networking &amp; Infrastructure</h3>
      </header>
      <dl>
        <dt>AWS</dt>
        <dd>...</dd>
        <dt>Servers</dt>
        <dd>Well, I've configured Apache before.</dd>
      </dl>
    </section>

    <section>
      <header>
        <h3>I could also hold a conversation about...</h3>
      </header>
      <dl>
        <dt>Code</dt>
        <dd>
          Python for Data Science, MATLAB, LaTeX, Swift, C, Assembly (in that
          order)
        </dd>
        <dt>Design &amp; Creative Tools</dt>
        <dd>UI/UX, Accessibility, Photoshop, Illustrator, Final Cut Pro</dd>
        <dt>Hardware</dt>
        <dd>
          Arduino, Raspberry Pi, BLE, and I used to take Low-Level Computing and
          Electronics courses
        </dd>
      </dl>
    </section>
    <section>
      <header>
        <h3>Language</h3>
      </header>
      <ul>
        <li>
          English&nbsp;
          <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
            (C2)
          </a>
        </li>
        <li>
          Lithuanian&nbsp;
          <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
            (C2)
          </a>
        </li>
        <li>
          German&nbsp;
          <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages#Common_reference_levels">
            (A2)
          </a>
        </li>
      </ul>
    </section>
  </section>
))

export default Skills
