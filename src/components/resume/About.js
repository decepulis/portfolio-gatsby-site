import React from "react"

import {
  StyledSection,
  StyledContainer,
  StyledHeader,
  StyledLead,
  StyledProfile,
  StyledWave,
} from "./About.styles"

export default function About() {
  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledHeader>
            <h2>About Me</h2>
          </StyledHeader>
          <StyledProfile
            id="headshot"
            src="/assets/headshot-bw-web.jpg"
            alt="Yep. That's my face, gazing into the camera. Black and white. I thought I had a pretty nice haircut here, too."
          />
          <div>
            <StyledLead>
              I am a Full-Stack Web Developer from Chicago, IL.
            </StyledLead>
            <p>
              I specialize in Front-End, ready to get deep into UI/UX,
              architecture, and tooling.
            </p>
            <p>
              Maybe I could add another paragraph here, too, but I should keep
              it short and sweet.
            </p>
          </div>

          {/* <section>
        <header>
          <h3>More About Me...</h3>
        </header>
        <dl>
          <dt>Secret Superpowers</dt>
          <dd>Teaching, Presenting, Writing, Accordion</dd>
          <dt>Micro-Obsessions</dt>
          <dd>
            home automation,{" "}
            <a href="https://www.instagram.com/_dardarbinks_/">photography</a>,
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
      </section> */}
        </StyledContainer>
        <StyledWave
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 126"
          aria-hidden="true"
          hidden=""
        >
          <path
            fill="#fff"
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          ></path>
        </StyledWave>
      </StyledSection>
    </>
  )
}
