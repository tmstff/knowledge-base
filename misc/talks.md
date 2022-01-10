# Talks

## Self Service Ops: Jody Mulkey - DevOps in the Enterprise: A Transformation Journey

* Jody Mulkey: CTO ticketmaster.com
* [https://www.youtube.com/watch?v=USYrDaPEFtM](https://www.youtube.com/watch?v=USYrDaPEFtM)
* use good analogies
* build up empathy
    * talk to all people involved
    * distribute skills & knowledge (&access right)
    * be (with) the customer
* important metric: business forecast vs. business outcome!
* democratize data
    * default: open
* minimize MTTR
* devops: mind state - not technology
* "Ego is force field for learning"
    * NOT assuming you already know everything is key!

## Mehr Sicherheit für Anwendungen mit KUBERNETES Bordmitteln – Good practices for K8s AppOps Security

* Johannes Schnatterer
* [https://www.youtube.com/watch?v=YlvdFE1RsmI](https://www.youtube.com/watch?v=YlvdFE1RsmI)
* [Slides](https://cloudogu.github.io/k8s-appops-security-talks/2020-03-18-javaLand/#/)


## Event Storming

Henning Schwentner / WPS

* Model verstehen
* Collaborative Modelling
* "richtige Leute": 
    * Leute mit Fragen mit Leuten mit Antworten zusammenbringen
    * Facilitator
* soll Spaß machen
* keine Stühle & Tische
* Offenheit
* Marker + Stift (1/Person) + Wand
    * + Moderator(en)
    * + Legende
* Domain Events
    * fachlich relevant für Domainexperten
        * zB Betrag eingezahlt, Betrag abghoben, Kontostand abgefragt
        * Orange Stickies
        * Vergangenheitsform
        * (Großbuchstaben für Leserlichkeit)
* Vorgehen:
    * Events aufschreiben (Brainstorming Modus)
    * Events abgleichen (doppelte rauslöschen, begriffliches klären)
    * in zeitliche Reihenfolge bringen (von links nach rechts)
    * Rote Stickies für Diskussionen / Streitpunkte (Troublespots) => wird später diskustiert
    * Konzepte / Begriffe auf Gelbe Zettel
    * Mit Grenzen in Sub-Domänen unterteilen (und benennen)
        * => schmale Schnittstellen
* => Big Picture Event Storming (Strategic Events Storming)
* Später: Ins Detail gehen "Detail Level"
* weitere Zettel:
    * blau: commands
    * gelb: user
* Literatur
    * Alberto Brandolini - Event Storming
    * Domain Driven Design Kompakt
    * Domain Storytelling
* Empfehlung: DDD Meetup zB Rhein-Main


## Software Supply Chain Attacks
Marc Ohm

* Survey: 92% developers "trsust the code they use"
* example: event-stream
    * crypto stealing malware, again bitpay/copay
    * 1.5 mio dwlds, 1,6k packages used it as dependency
    * undiscovered for 2 months
    * package was no longer maintained
    * hacker got maintainership
        * and introduced dependency to malicious package
            * with modified npm module (source code repo did not contain change)
    * Target were specific bitcoin apps
* Injection
    * publish new package
        * user-after-free (no longer used)
        * Typosquatting (similar to popular names)
        * zombie package (maybe used somewhere else)
    * takeover existing package
        * Code Repo
            * pull request (Contributor)
            * commint (Maintainer)
        * Build System
            * manipulated download
            * compromised cache
            * compromised toolchain (eg mal. compiler)
        * Package Repo
            * Compromised credentials
            * Vulnerability
            * Alternative repository (maven)
* Typical Attack
    * Typosquatting (61%)
    * Malicious is exection executed during installation (56%)
    * Steal sensitive info (55%)
    * Obfuscation (49%)
    * 2 month or mode from official repo (
* What can a dev do?
    * know your dependency
    * reduce your dependencies
    * Watch out for imposters
￼
* Anomaly based detection
    * what artifacts are written 
    * => used in package hunter in github
* Fingerprint
    * Signatures-based hunting npm
        * on npm repo: 70k hits, just 7 findings
        * imitators
* Trusted repositories
* golang: source code based


## Makro-Architektur

Eberhardt Wolff

[Folge 94 - Makro-Architektur - Prioritäten und Überblick](https://software-architektur.tv/2021/12/03/folge94.html)

* Modul-Entscheidungen / Microservice / SCS
    * Information Hiding
        * => leichtere Änderbarkeit
    * Autonomie
    * mehr Flexibilität pro Team
* Systementscheidungen
    * langfristig stabil
    * sollte Modulentscheidungen ermöglichen
* Gute Makroarchitektur
    * minimales Regelset
        * => strikt durchsetzen
    * stark priorisieren! => auf das wesentliche reduzieren
    * Abgrenzung: was wird im Team entschieden, was nicht?
    * Autonomie von Teams => weniger Last für Architekten
    * parametrisierter Test, der Architekturregeln prüft?
    * Regeln aufschreiben & Kommunizieren
    * Empfehlungen - evtl eher durch Beratung?
    * was steht drin
        * validierbare Regeln
        * Governance, Security, Unternehmensrichtlinien
        * ISA-Prinzipien => eigene Folge!
            * wie geht Integration? Sync, async, UI
            * Kommunikation? REST, MQTT etc
            * Metadaten, Kommunikation, Tracing
            * Observability (Monitoring, Logging)
            * Resilienz
        * möglichst technologie-unabhängig, basierend auf allgemeinen Standards
* Eher nicht Teil von Makroarchitektur?
    * statische Codeanalyse vorschreiben? => eher nicht
    * Qualitätsziele im Team festlegen
* Goodharts Law
    * Incentive zerstört Metrik
* Beispiel / Idee: Benennung "Anforderungen" statt "Makroarchitektur"
    * Architekt ist Berater / Ansprechpartner für Umsetzung der Anforderungen
    * wichtig sind die Begründungen der Entschiedungen
* Überlegung
    * Teamarchitekten müssen nicht zwangsläufig bei Markoarchitektur mitarbeiten
    * Es könnte ein Architekten-Team geben, das sie vorgibt (gute Idee?)
        * Wenn ja: Teams frühzeitig mit einbeziehen


