# summit Community Days Softwarearchitektur & Softwareentwicklung 2024

Table of Contents
=================

* [summit Community Days Softwarearchitektur &amp; Softwareentwicklung 2024](#summit-community-days-softwarearchitektur--softwareentwicklung-2024)
   * [Sichere Software vom Commit bis zum Deployment mit Software Composition Analysis](#sichere-software-vom-commit-bis-zum-deployment-mit-software-composition-analysis)
   * [ChatGPT und Co in der Softwareentwicklung: Revolution oder Hype?](#chatgpt-und-co-in-der-softwareentwicklung-revolution-oder-hype)
   * [Large Language Models, Daten &amp; APIs: Integration von Generative AI in eigene Anwendungen](#large-language-models-daten--apis-integration-von-generative-ai-in-eigene-anwendungen)
   * [Github Copilot](#github-copilot)
   * [The Bright Side of Life - Softwarearchitekt:innen und Kommunikation](#the-bright-side-of-life---softwarearchitektinnen-und-kommunikation)

<!-- Created by https://github.com/ekalinin/github-markdown-toc -->

## Sichere Software vom Commit bis zum Deployment mit Software Composition Analysis

Stephan Kaps

was ist betroffen?
* eigene Software
* What is affected?
    * in this talk: focus on own software
* SBOM
    * cisa.gov/sbom
    * Standards
        * SPDX
        * CycloneCX
            * => Technology Radar T 23
            * version + Licenseinformationen
            * Aggregation & Overview: 
                * zB OWASP Dependency Track
                    * checkt NIST CVEs
                    * => integrate into CI
                    * => cleanup has to be implemented
                    * nightly + Quality gates - checks current state (re-build not necessary)
    * VEX: NOT affect by vulnerability (or working on it)
    * EPSS - Exploit Prediction Scoring System
        * Probability to be exploited
* container checking
    * syft github.com/anchore/syft (integrated in docker desktop)
    * (grype)
* Bundesamt für Sozial Sicherung Handling: Main-Week (Maintenance & Innovation) between Sprints
* Maßnahmen:
    * Verified commits (2FA)
    * Secure Coding guidelines
    * find security bugs
    * Security Concept (IT Grundschutz)
        * -> create custom modules if necessary (Bundesamt für Sozial Sicherung did so)
    * Makro Architecture
        * e.g. secure languages
        * what libs & tools to use, what not
    * Threat Modelling (Tools)
    * Training e.g. ISAQB WebSec 
    * Secrets detection (e.g. gitleacks.io)
    * -> automatic updates of Components, e.g. renovatebot/renovate
    * Hardened Buildsystem
        * auth
        * scripted pipelines
        * trusted artifact repos (Integritätsprüfung über hashes)
    * SLSA ("Attestierung" von libs)
    * cosign für signed images
    * Secure container registry (e.g. harbor)
    * automatic Base-Image updates
    * Container Security
        * minimize attack surface
        * minimize priviledges
        * CSVS
    * Detection of anomalies
        * runs on host, integration in Kubernetes
    * Service Mesh
        * Mikro-Segmentation
        * Communication Rules (Policies / Intentions)
    * Zero Trust
* Example: CodeCov
* Start with:
    * generate SBOM
    * require SBOM from vendors, + IT Grundschutz: quick Patchtes
    * ...
* NIS2 Implementation
* Wildfly
* openrewrite: automatic version upgrades
* How to make sure no malicious libraries are used?
    * create awareness

## ChatGPT und Co in der Softwareentwicklung: Revolution oder Hype?

Prof. Dr. Norbert Siegmund

* Devin: KI Software Engineer => 14% success X-D
    * appears to be faked in parts
* Copilot Workspace
    * Copilot native IDE
* Github Copilot
    * supposedly 55% faster
    * The Impact of AI on Developer Productivity: Evidence from Github Copilot
        * Beginners profit more than experienced ones
    * Independent studies:
        * Expectation vs Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models
            * => copilot did not improve success or time reliably
            * understandability, extensibility, & debugging was worse for Copilot
        * In-IDE Code Generatin from Natural Language: Promise and Challenges
            * => not conclusive
    * A Large-Scale Survey on the Usability of AI Programming Assistants: ...
        * less Keystrokes, Glue-Code
* Measure productivity
    * => Difficult!
    * How to measure design quality?
    * Conde understandibility? => worse
    * Debugging / Maintenance? => worse
        * code with technical debt (ToDo statements) has similar properties as code by LLMs
        * Vanilla Chat GPT finds only few failure-inducing test cases
        * Code "Churn": higher since AI
    * Correctness / Validation?
        * less accuracy for more complex scenrios 
        * single use without refinemnt iterations: < 1/3
        * ...
    * Coding? => slightly positive
        * Survey: More Productive? 1:1 correlqation to "I accept the answer from Chat GPT"
        * more unriliable than results from Stack Overflow

## Large Language Models, Daten & APIs: Integration von Generative AI in eigene Anwendungen

Christian Weyer

* AI -> ML -> DL -> Generative AI -> LLM
    * generates text
    * understands text (general purpose!)
    * allows prompts instead of ui
        * hybrid interaction
    * LLMs 
        * are programs
        * neural networks
        * lots of data (unknown source / quality)
        * lots of resources required
        * have an API (mostly python client / API - and/or http API)
    * Apple M3 Max -> suitable for LLM
    * Services
        * mistral (open source)
        * Mixtral (open source, mistral spin-off)
            * can be hosted on Groq 
        * Meta
            * LLM Model: Lama (open source), current version: Lama 3
        * OpenAI (GPT, versions 3.5, 4)
            * can only be hosted in Azure, or OpenAI
            * Open AI SDK
    * SDK
        * LangChain -> for all LLM Services
            * memory
            * chaining
            * access to data stores
    * Community: Hugging Face
* NLP: Natural Language Processing
* GPT: Generative Pre-trained Transformer
    * Example: platform.openai.com/playground
    * System: Context
    * User: Prompt
    * Assistant: Reply
        * Streaming
            * SSE Event Streams (HTML 5)
    * Parameter:
        * Model
        * Temperature: => creativity / verbosity
* RAG (Retrieval-augmented generation)
    * Vector generation
        * cleanup & split (-> strings)
        * Text Embedding (with Embedding Model)
        * Save to Vector DB (available e.g. in postgres)
    * Answer generation
        * Questions
        * Text Embedding (with same Embedding Model)
        * Relevant Text from Vector DB
        * Question + input von Vector DB -> LLM
        * Reply from LLM
* Natural Language to structured data
    * via tool / functions-calling
    * output needs to be verified
* OpenAI Whisper:
    * Audio -> Text

## Github Copilot

Frank Meyfarth

* see slides
* productivity improvement questionable
* but: seems to make coding more enjoyable (also important)
* CoPilot
    * business license required to make sure no
* Samsung Incident:
    * Chatgpt um vertrauliche Daten zu analysieren -> ChatGPT
    * Ziel vielleicht nicht Produktivitätssteigerung, sondern eher Zufriedenheitssteigerung
    * besonders Stark genutzt von Anfängern -> Problem!
    * Guidelines für Nutzung machen Sinn
    * Architektur-Guidelines & Coding Guidelines idR für das Modell nicht bekannt
    * hilfreicher Einsatzzweck: Doku generieren
    * Gartner Hype Cycle

## The Bright Side of Life - Softwarearchitekt:innen und Kommunikation

* when communiticating, the psychological layer often is neglected
* communication is key - espescially for architects
* design patterns can ease communication
* possible problems
    * wrong communication medium
    * knowledge, interests, goals and intentions of recipient not known / considered
    * recipient is not sufficiently involved
    * lots of interruptions
    * challenges realted to homeoffice and remote
* Methods to improve communication
    * active listening (open questions)
    * Peer to Peer Sparring
    * valuing Feedback
    * Stakeholder-specific communication
    * be proactive (passivity not useful for architects)
    * Conflict management (first listen & understand)
    * ADRs
    * architectur reviews
* implicit goal: presentation of one's own person and competence
* technical comptency is not useful unless properly communicated / presented 
* Communication
    * with who?
    * which context?
    * ...
* Influence, but do not manipulate
* communicate software architecture
    * lead from simple to complex
    * Metaphors (e.g. patterns)
    * demonstrative examples
    * Repeat & deepen on appropriate level
    * use media appropraite for goals / target group
* Presentations:
    * Overview & context first, then details (pyramid principle)
* test architecture simplicity & expressiveness
    * tell solution to someone - and let that person explain it to you
* **Lead by motivation!!**