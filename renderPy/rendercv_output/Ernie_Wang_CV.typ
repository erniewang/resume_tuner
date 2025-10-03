
#import "@preview/fontawesome:0.5.0": fa-icon

#let name = "Ernie Wang"
#let locale-catalog-page-numbering-style = context { "Ernie Wang - Page " + str(here().page()) + " of " + str(counter(page).final().first()) + "" }
#let locale-catalog-last-updated-date-style = "Last updated in Oct 2025"
#let locale-catalog-language = "en"
#let design-page-size = "us-letter"
#let design-section-titles-font-size = 1.4em
#let design-colors-text = rgb(0, 0, 0)
#let design-colors-section-titles = rgb(0, 79, 144)
#let design-colors-last-updated-date-and-page-numbering = rgb(128, 128, 128)
#let design-colors-name = rgb(0, 79, 144)
#let design-colors-connections = rgb(0, 79, 144)
#let design-colors-links = rgb(0, 79, 144)
#let design-section-titles-font-family = "Source Sans 3"
#let design-section-titles-bold = true
#let design-section-titles-line-thickness = 0.5pt
#let design-section-titles-font-size = 1.4em
#let design-section-titles-type = "with-parial-line"
#let design-section-titles-vertical-space-above = 0.5cm
#let design-section-titles-vertical-space-below = 0.3cm
#let design-section-titles-small-caps = false
#let design-links-use-external-link-icon = true
#let design-text-font-size = 10pt
#let design-text-leading = 0.6em
#let design-text-font-family = "Source Sans 3"
#let design-text-alignment = "justified"
#let design-text-date-and-location-column-alignment = right
#let design-header-photo-width = 3.5cm
#let design-header-use-icons-for-connections = true
#let design-header-name-font-family = "Source Sans 3"
#let design-header-name-font-size = 30pt
#let design-header-name-bold = true
#let design-header-connections-font-family = "Source Sans 3"
#let design-header-vertical-space-between-name-and-connections = 0.7cm
#let design-header-vertical-space-between-connections-and-first-section = 0.7cm
#let design-header-use-icons-for-connections = true
#let design-header-horizontal-space-between-connections = 0.5cm
#let design-header-separator-between-connections = ""
#let design-header-alignment = center
#let design-highlights-summary-left-margin = 0cm
#let design-highlights-bullet = "•"
#let design-highlights-top-margin = 0.25cm
#let design-highlights-left-margin = 0.4cm
#let design-highlights-vertical-space-between-highlights = 0.25cm
#let design-highlights-horizontal-space-between-bullet-and-highlights = 0.5em
#let design-entries-vertical-space-between-entries = 1.2em
#let design-entries-date-and-location-width = 4.15cm
#let design-entries-allow-page-break-in-entries = true
#let design-entries-horizontal-space-between-columns = 0.1cm
#let design-entries-left-and-right-margin = 0.2cm
#let design-page-top-margin = 2cm
#let design-page-bottom-margin = 2cm
#let design-page-left-margin = 2cm
#let design-page-right-margin = 2cm
#let design-page-show-last-updated-date = true
#let design-page-show-page-numbering = true
#let design-links-underline = false
#let design-entry-types-education-entry-degree-column-width = 1cm
#let date = datetime.today()

// Metadata:
#set document(author: name, title: name + "'s CV", date: date)

// Page settings:
#set page(
  margin: (
    top: design-page-top-margin * 0.285,
    bottom: design-page-bottom-margin * 0.285,
    left: design-page-left-margin * 0.285,
    right: design-page-right-margin * 0.285,
  ),
  paper: design-page-size,
  footer: if design-page-show-page-numbering {
    text(
      fill: design-colors-last-updated-date-and-page-numbering,
      align(center, [_#locale-catalog-page-numbering-style _]),
      size: 0.9em,
    )
  } else {
    none
  },
  footer-descent: 0% - 0.3em + design-page-bottom-margin / 2,
)
// Text settings:
#let justify
#let hyphenate
#if design-text-alignment == "justified" {
  justify = true
  hyphenate = true
} else if design-text-alignment == "left" {
  justify = false
  hyphenate = false
} else if design-text-alignment == "justified-with-no-hyphenation" {
  justify = true
  hyphenate = false
}
#set text(
  font: design-text-font-family,
  size: design-text-font-size,
  lang: locale-catalog-language,
  hyphenate: hyphenate,
  fill: design-colors-text,
  // Disable ligatures for better ATS compatibility:
  ligatures: true,
)
#set par(
  spacing: 0pt,
  leading: design-text-leading * 0.665,
  justify: justify,
)
#set enum(
  spacing: design-entries-vertical-space-between-entries * 0.5,
)

// Highlights settings:
#let highlights(..content) = {
  list(
    ..content,
    marker: design-highlights-bullet,
    spacing: design-highlights-vertical-space-between-highlights * 0.57,
    indent: design-highlights-left-margin,
    body-indent: design-highlights-horizontal-space-between-bullet-and-highlights,
  )
}
#show list: set list(
  marker: design-highlights-bullet,
  spacing: 0pt,
  indent: 0pt,
  body-indent: design-highlights-horizontal-space-between-bullet-and-highlights * 0.8,
)

// Entry utilities:
#let three-col(
  left-column-width: 1fr,
  middle-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  middle-content: "",
  right-content: "",
  alignments: (auto, auto, auto),
) = [
  #block(
    grid(
      columns: (left-column-width, middle-column-width, right-column-width),
      column-gutter: design-entries-horizontal-space-between-columns,
      align: alignments,
      ([#set par(spacing: design-text-leading); #left-content]),
      ([#set par(spacing: design-text-leading); #middle-content]),
      ([#set par(spacing: design-text-leading); #right-content]),
    ),
    breakable: true,
    width: 100%,
  )
]

#let two-col(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  right-content: "",
  alignments: (auto, auto),
  column-gutter: design-entries-horizontal-space-between-columns,
) = [
  #block(
    grid(
      columns: (left-column-width, right-column-width),
      column-gutter: column-gutter,
      align: alignments,
      ([#set par(spacing: design-text-leading); #left-content]),
      ([#set par(spacing: design-text-leading); #right-content]),
    ),
    breakable: true,
    width: 100%,
  )
]

// Main heading settings:
#let header-font-weight
#if design-header-name-bold {
  header-font-weight = 700
} else {
  header-font-weight = 400
}
#show heading.where(level: 1): it => [
  #set par(spacing: 0pt)
  #set align(design-header-alignment)
  #set text(
    font: design-header-name-font-family,
    weight: header-font-weight,
    size: design-header-name-font-size * 0.6,
    fill: design-colors-name,
  )
  #it.body
  // Vertical space after the name
  #v(design-header-vertical-space-between-name-and-connections * 0.5)
]

#let section-title-font-weight
#if design-section-titles-bold {
  section-title-font-weight = 700
} else {
  section-title-font-weight = 400
}

#show heading.where(level: 2): it => [
  #set align(left)
  #set text(size: (1em / 1.2)) // reset
  #set text(
    font: design-section-titles-font-family,
    size: (design-section-titles-font-size * 0.9),
    weight: section-title-font-weight,
    fill: design-colors-section-titles,
  )
  #let section-title = (
    if design-section-titles-small-caps [
      #smallcaps(it.body)
    ] else [
      #it.body
    ]
  )
  // Vertical space above the section title
  #v(design-section-titles-vertical-space-above * 0.57, weak: true)
  #block(
    breakable: false,
    width: 100%,
    [
      #if design-section-titles-type == "moderncv" [
        #two-col(
          alignments: (right, left),
          left-column-width: design-entries-date-and-location-width,
          right-column-width: 1fr,
          left-content: [
            #align(horizon, box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles))
          ],
          right-content: [
            #section-title
          ]
        )

      ] else [
        #box(
          [
            #section-title
            #if design-section-titles-type == "with-parial-line" [
              #box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles)
            ] else if design-section-titles-type == "with-full-line" [

              #v(design-text-font-size * 0.4)
              #box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles)
            ]
          ]
        )
      ]
     ] + v(1em),
  )
  #v(-1em)
  // Vertical space after the section title
  #v(design-section-titles-vertical-space-below * 0.38 - 0.285em)
]

// Links:
#let original-link = link
#let link(url, body) = {
  body = [#if design-links-underline [#underline(body)] else [#body]]
  body = [#if design-links-use-external-link-icon [#body#h(design-text-font-size/4)#box(
        fa-icon("external-link", size: 0.7em),
        baseline: -10%,
      )] else [#body]]
  body = [#set text(fill: design-colors-links);#body]
  original-link(url, body)
}

// Last updated date text:
#if design-page-show-last-updated-date {
  let dx
  if design-section-titles-type == "moderncv" {
    dx = 0cm
  } else {
    dx = -design-entries-left-and-right-margin
  }
  place(
    top + right,
    dy: -design-page-top-margin / 2,
    dx: dx,
    text(
      [_#locale-catalog-last-updated-date-style _],
      fill: design-colors-last-updated-date-and-page-numbering,
      size: 0.9em,
    ),
  )
}

#let connections(connections-list) = context {
  set text(fill: design-colors-connections, font: design-header-connections-font-family)
  set par(leading: design-text-leading*1.7, justify: false)
  let list-of-connections = ()
  let separator = (
    h(design-header-horizontal-space-between-connections / 2, weak: true)
      + design-header-separator-between-connections
      + h(design-header-horizontal-space-between-connections / 2, weak: true)
  )
  let starting-index = 0
  while (starting-index < connections-list.len()) {
    let left-sum-right-margin
    if type(page.margin) == "dictionary" {
      left-sum-right-margin = page.margin.left + page.margin.right
    } else {
      left-sum-right-margin = page.margin * 4
    }

    let ending-index = starting-index + 1
    while (
      measure(connections-list.slice(starting-index, ending-index).join(separator)).width
        < page.width - left-sum-right-margin
    ) {
      ending-index = ending-index + 1
      if ending-index > connections-list.len() {
        break
      }
    }
    if ending-index > connections-list.len() {
      ending-index = connections-list.len()
    }
    list-of-connections.push(connections-list.slice(starting-index, ending-index).join(separator))
    starting-index = ending-index
  }
  align(list-of-connections.join(linebreak()), design-header-alignment)
  v((design-header-vertical-space-between-connections-and-first-section - design-section-titles-vertical-space-above) * 0.4)
}

#let three-col-entry(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  middle-content: "",
  right-content: "",
  alignments: (left, auto, right),
) = (
  if design-section-titles-type == "moderncv" [
    #three-col(
      left-column-width: right-column-width,
      middle-column-width: left-column-width,
      right-column-width: 1fr,
      left-content: right-content,
      middle-content: [
        #block(
          [
            #left-content
          ],
          inset: (
            left: design-entries-left-and-right-margin,
            right: design-entries-left-and-right-margin,
          ),
          breakable: design-entries-allow-page-break-in-entries,
          width: 100%,
        )
      ],
      right-content: middle-content,
      alignments: (design-text-date-and-location-column-alignment, left, auto),
    )
  ] else [
    #block(
      [
        #three-col(
          left-column-width: left-column-width,
          right-column-width: right-column-width,
          left-content: left-content,
          middle-content: middle-content,
          right-content: right-content,
          alignments: alignments,
        )
      ],
      inset: (
        left: design-entries-left-and-right-margin,
        right: design-entries-left-and-right-margin,
      ),
      breakable: design-entries-allow-page-break-in-entries,
      width: 100%,
    )
  ]
)

#let two-col-entry(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  right-content: "",
  alignments: (auto, design-text-date-and-location-column-alignment),
  column-gutter: design-entries-horizontal-space-between-columns,
) = (
  if design-section-titles-type == "moderncv" [
    #two-col(
      left-column-width: right-column-width,
      right-column-width: left-column-width,
      left-content: right-content,
      right-content: [
        #block(
          [
            #left-content
          ],
          inset: (
            left: design-entries-left-and-right-margin,
            right: design-entries-left-and-right-margin,
          ),
          breakable: design-entries-allow-page-break-in-entries,
          width: 100%,
        )
      ],
      alignments: (design-text-date-and-location-column-alignment, auto),
    )
  ] else [
    #block(
      [
        #two-col(
          left-column-width: left-column-width,
          right-column-width: right-column-width,
          left-content: left-content,
          right-content: right-content,
          alignments: alignments,
        )
      ],
      inset: (
        left: design-entries-left-and-right-margin,
        right: design-entries-left-and-right-margin,
      ),
      breakable: design-entries-allow-page-break-in-entries,
      width: 100%,
    )
  ]
)

#let one-col-entry(content: "") = [
  #let left-space = design-entries-left-and-right-margin
  #if design-section-titles-type == "moderncv" [
    #(left-space = left-space + design-entries-date-and-location-width + design-entries-horizontal-space-between-columns)
  ]
  #block(
    [#set par(spacing: design-text-leading); #content],
    breakable: design-entries-allow-page-break-in-entries,
    inset: (
      left: left-space,
      right: design-entries-left-and-right-margin,
    ),
    width: 100%,
  )
]

= Ernie Wang

// Print connections:
#let connections-list = (
  [#fa-icon("location-dot", size: 0.9em) #h(0.05cm)Evanston, IL],
  [#box(original-link("mailto:erniewang2025@u.northwestern.edu")[#fa-icon("envelope", size: 0.9em) #h(0.05cm)erniewang2025\@u.northwestern.edu])],
  [#box(original-link("tel:+1-469-961-3315")[#fa-icon("phone", size: 0.9em) #h(0.05cm)\(469\) 961-3315])],
  [#box(original-link("https://erniewang.com/erniewebpublic/")[#fa-icon("link", size: 0.9em) #h(0.05cm)erniewang.com\/erniewebpublic])],
  [#box(original-link("https://github.com/erniewang")[#fa-icon("github", size: 0.9em) #h(0.05cm)erniewang])],
)
#connections(connections-list)



== Education


#two-col-entry(
  left-content: [
    #strong[Northwestern University], Computer Science and Jazz Studies
    #v(-design-text-leading * 1.3)

    #v(design-highlights-top-margin);#highlights([GPA: 3.61\/4.0],[Relevant Coursework: Data Structures & Algorithms, Computer Architecture, Databases, Security, Information Systems, Machine Learning\/AI, Operating Systems, Scalable Software Architecture, Distributed Systems],)
  ],
  right-content: [
    Evanston, IL

Sept 2021 – June 2025
  ],
)



== Technical Skills


#one-col-entry(
  content: [Languages: Python, JavaScript, TypeScript, C++, Racket, Java, Go

Frameworks\/Tools: Git, Linux, XML, Flask, FastAPI, BeautifulSoup, NumPy, Pydantic, Pandas, Supabase, React, AWS, Node, MySQL, SQLite, NextJS, Tailwind, Electron, Puppeteer

Other: Finale, Logic Pro X, Adobe Photoshop, Final Cut Pro X, Musescore]
)


== Work and Projects


#two-col-entry(
  left-content: [
    #strong[Northwestern University - Computer Vision Developer], #emph[Python], #emph[p5.js], #emph[PoseNet], #emph[Flask], #emph[Node.js]
  ],
  right-content: [
    Mar 2025 – June 2025
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Designed and implemented a web application that captures poses using PoseNet \(p5.js\) and a machine generation model \(VampNet\) to continuously generate music in response to video capture.],[Engineered real-time tempo detection using FFT on joint velocity time-series, leveraging JavaScript math libraries for precision.],[Developed adaptive frontend controls to modulate model inputs in near real time utilizing most recent pose data and music theory heuristics.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Harmonizer], #emph[Python], #emph[JavaScript], #emph[HTML], #emph[CSS], #emph[XML], #emph[FastAPI], #emph[JSON]
  ],
  right-content: [
    Nov 2024 – present
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Developed a web application utilizing FastAPI, enabling musicians to upload melodies in MusicXML\/MXL format and download modified XML files with melodies harmonized programmatically to the existing and custom harmonic rules.],[Provided a heuristics modifier supporting thousands of note-chord combinations and common harmonization options],[Stored user-defined presets in browser local storage, with future plans to server side storage],[Conducted extensive test cases to handle edge cases, enabling a cyclical development process as new chords were added and encountered.],[Implemented RESTful APIs to manage XML file exchange and streamline client-server communication.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Resume Tuner], #emph[Python], #emph[JSON], #emph[HTTP], #emph[docx], #emph[Next.js], #emph[Tailwind CSS]
  ],
  right-content: [
    Mar 2025 – present
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Building a web application and browser extension that leverages the Gemini API to intelligently optimize resume sections and keywords based on job descriptions],[Developed a Next.js backend using the App Router, with event handlers for resume updates, deployments, and LLM API integrations],[Implemented a single-page application for resume editing using the docx library, along with a browser extension for seamless job description input],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[MuseCatalog], #emph[Node.js], #emph[SQL], #emph[AWS-RDS], #emph[AWS-EC2], #emph[Spotify-API], #emph[ChatGPT-API]
  ],
  right-content: [
    Mar 2023 – May 2023
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Developed a music recommendation platform integrating OpenAI’s GPT API with the Spotify’s Web API, enabling dynamic playlist generation from natural language queries.],[Implemented relational data persistence using Amazon RDS \(MySQL\), storing user accounts, playlists, and historical queries to enhance personalization],[Deployed backend services on Amazon EC2, handling user authentication and API communication],[Designed and documented a RESTful API with endpoints for song discovery, listing favorites, history, catalog reset, and recommendation refinement.],)
  ],
)



== Other Experience


#two-col-entry(
  left-content: [
    #strong[G2i], Engineer for AI Training Data
  ],
  right-content: [
    June 2024 – July 2024
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Evaluated and ranked outputs from Scale AI’s LLM, offering detailed feedback on ethical considerations, language clarity, and visual coherence.],[Ensured responses met factual accuracy standards to improve AI model performance and reliability.],[Skills: #emph[AI Training], #emph[Evaluation], #emph[Data Annotation]],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Self-Employed], Musician
  ],
  right-content: [
    Sept 2020 – present
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Performed with Northwestern University Jazz Orchestra \(2020–2024\) and in a variety of university bands, featuring both live and virtual gigs.],[Utilized AI music generation tools \(Musicfy, Udio\) alongside custom scripts to explore digital composition and arrangement.],[Conducted private lessons, teaching saxophone\/clarinet fundamentals and improvisational listening skills to a broad range of students.],[Skills: #emph[Performance], #emph[Jazz Improvisation], #emph[AI Music Tools], #emph[Teaching]],)
  ],
)



