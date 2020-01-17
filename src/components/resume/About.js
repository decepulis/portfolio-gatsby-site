import React from "react"

export default function About() {
  return (
    <section id="about">
      <header>
        <h2>About Me</h2>
      </header>
      <img
        id="headshot"
        src="/assets/headshot-bw-web.jpg"
        alt="Yep. That's my face, gazing into the camera. Black and white. I thought I had a pretty nice haircut here, too."
        align="right"
        width="300"
        height="300"
      />
      <p>I am a Full-Stack Web Developer at Microsensor Labs</p>
      <p>
        In my professional and academic experience, I've discovered my
        enthusiasm for applying my computer software and hardware skills to
        unique problems that push the envelope. I'm at home when I'm faced with
        fresh and interesting problems that I get to work out every day.
      </p>
      <p>
        I've also discovered the value of developing strong communication and
        design skills. These skills represent to me the spark that an
        engineering solution needs to make it into the real world. After all,
        what is a new technology if no one can explain it, or if people don't
        know how to use it?
      </p>
      <p>
        I want to keep learning new things and developing my skills and applying
        them to exciting problems to build something new.
      </p>

      <section>
        <header>
          <h3>More About Me...</h3>
        </header>
        <dl>
          <dt>Secret Superpowers</dt>
          <dd>Teaching, Presenting, Writing, Accordion</dd>
          <dt>Micro-Obsessions</dt>
          <dd>
            home automation,{" "}
            <a href="https://www.instagram.com/__dardarbinks/">photography</a>,
            watching every{" "}
            <a href="https://www.youtube.com/user/patrickhwillems">last</a>{" "}
            <a href="https://www.youtube.com/user/everyframeapainting">video</a>{" "}
            <a href="https://www.youtube.com/user/Nerdwriter1">essay</a> about
            film on YouTube, watching tech press conferences like they're
            sporting events,{" "}
            <a href="https://www.instagram.com/p/BW5-WMBF78o/?taken-by=dardarb1nks">
              hiking
            </a>{" "}
            &amp;{" "}
            <a href="https://www.instagram.com/p/BXHBFhClR8H/?taken-by=dardarb1nks">
              backpacking
            </a>
            , technology &amp; policy, <strike>technology &amp; humans</strike>{" "}
            design,{" "}
            <a href="https://www.vw.com/models/golf-gti/">driving stick</a>,
            ultimate frisbee
          </dd>
          <dt>Essential Podcasts</dt>
          <dd>
            <a href="https://99percentinvisible.org">99pi</a>,{" "}
            <a href="http://atp.fm">ATP</a>,{" "}
            <a href="https://www.relay.fm/connected">Connected</a>,{" "}
            <a href="http://www.slate.com/articles/podcasts/lexicon_valley.html">
              Lexicon Valley
            </a>
            , <a href="http://radiolab.org">Radiolab</a>,{" "}
            <a href="https://gimletmedia.com/shows/reply-all">Reply All</a>,{" "}
            <a href="https://www.wnycstudios.org/shows/radiolabmoreperfect">
              More Perfect
            </a>
            ,{" "}
            <a href="https://www.slashfilm.com/category/features/slashfilmcast/">
              The /Filmcast
            </a>
            , <a href="https://www.theverge.com/the-vergecast">The Vergecast</a>
            , <a href="https://www.thisamericanlife.org">This American Life</a>
          </dd>
        </dl>
      </section>
    </section>
  )
}
