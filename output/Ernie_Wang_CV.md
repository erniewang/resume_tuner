# Ernie Wang's CV

- Phone: +1 469 961 3315
- Email: [erniewang2025@u.northwestern.edu](mailto:erniewang2025@u.northwestern.edu)
- Location: Evanston, IL
- Website: [erniewang.comerniewebpublic](https://erniewang.com/erniewebpublic/)
- GitHub: [erniewang](https://github.com/erniewang)


# Education

## Northwestern University, B.S. in Computer Science and Jazz Studies

- Sept 2021 – June 2025
- Evanston, IL
- GPA: 3.61/4.0
- Relevant Coursework: Data Structures & Algorithms, Computer Architecture, Databases, Security, Information Systems, Machine Learning/AI, Operating Systems, Scalable Software Architecture, Distributed Systems

# Technical Skills

Languages: Python, JavaScript, TypeScript, C++, Racket, Java, Go

Frameworks/Tools: Git, Linux, XML, Flask, FastAPI, BeautifulSoup, NumPy, Pydantic, Pandas, Supabase, React, AWS, Node, MySQL, SQLite, NextJS, Tailwind, Electron, Puppeteer, Selenium

Other: Finale, Logic Pro X, Adobe Photoshop, Final Cut Pro X, Musescore

# Work and Projects

## Northwestern University - Computer Vision Developer, *Python*, *p5.js*, *PoseNet*, *Flask*, *Node.js*

- Mar 2025 – June 2025
- Designed and implemented a browser application utilizing PoseNet(p5.js/m15) to caputure and analyze dance pases via a webcamera
- Engineered real-time tempo approximator that measures the period of movement by running a FFT over the captured velocity data over a specified time interval
- Established endpoints on an audio file's playbackrate, volume, and pitch that listen to tempo changes via websockets (Socket.io)
- Integrated with a generative music model (Vampnet) to continously generate new music based off of select characteristics and patterns in captured posenet data
- Developed a adjustable parameters such as normilization, and frames per second that allow users on the frontend to change the sensitivieties of input and capture rate to match the dancer

## Harmonizer, *Python*, *JavaScript*, *HTML*, *CSS*, *XML*, *FastAPI*, *JSON*

- Nov 2024 – present
- Stored user-defined presets in browser local storage alongside providing a few well known haromization algorithms from well known music arrangers(Count Basie, Stan Kenton, Thad Jones)
- Built a customizable fallback algorithm that harmonizes on a more consistent basis on note/harmony parings that were not successfull in the intial run
- Implemented real-time server streaming to highlight exceptional notes and provide interactive harmonization options, allowing users to customize non-trivial chord voicings on the fly
- Improved runtime speed of music XML parsing/modifying programs 9 times by caching runtime results in a json file that is eventually stored on the users localStorage.

## Resume Tuner, *Python*, *JSON*, *HTTP*, *docx*, *Next.js*, *Tailwind CSS*

- Mar 2025 – present
- Designed a layed, multipaged UI to create, modify, and save a megaresume utilizing Electron's IPC utilizing React and TailwindCSS
- Optimized LLM performance by implementing section-based task queuing and indexed outputs, reducing token usage by 50% and enabling granular resume optimization
- Developing a optional keyword extration preprocessing stage that selects keywords and verbs and `upgrades` them to match keywords of the job description
- Designed and implemented interactive suggestion review system in the UI with Accept/Reject/Edit options for each AI-generated resume improvement.
- Broaded the project to utilize plugin-based architecture supporting multiple AI providers with encrypted local storage utilizing node-keytar and model controll in the UI

## MuseCatalog, *Node.js*, *SQL*, *AWS-RDS*, *AWS-EC2*, *Spotify-API*, *ChatGPT-API*

- Mar 2023 – May 2023
- Developed a music recommendation platform integrating OpenAI’s GPT API with the Spotify’s Web API, enabling dynamic playlist generation from natural language queries.
- Implemented relational data persistence using Amazon RDS (MySQL), storing user accounts, playlists, and historical queries to enhance personalization
- Deployed backend services on Amazon EC2, handling user authentication and API communication
- Designed and documented a RESTful API with endpoints for song discovery, listing favorites, history, catalog reset, and recommendation refinement.

# Other Experience

## G2i, Engineer for AI Training Data

- June 2024 – July 2024
- Evaluated and ranked outputs from Scale AI’s LLM, offering detailed feedback on ethical considerations, language clarity, and visual coherence.
- Ensured responses met factual accuracy standards to improve AI model performance and reliability.
- Skills: *AI Training*, *Evaluation*, *Data Annotation*

## Self-Employed, Musician

- Sept 2020 – present
- Performed with Northwestern University Jazz Orchestra (2020–2024) and in a variety of university bands, featuring both live and virtual gigs.
- Utilized AI music generation tools (Musicfy, Udio) alongside custom scripts to explore digital composition and arrangement.
- Conducted private lessons, teaching saxophone/clarinet fundamentals and improvisational listening skills to a broad range of students.
- Skills: *Performance*, *Jazz Improvisation*, *AI Music Tools*, *Teaching*

