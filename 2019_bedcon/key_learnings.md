# Key Learnings BedCon Berlin 2019

## Service oriented alerting

* Durchsatz: in Verhältnis zu Queue-Länge, expected wait
* Niemand da? / 0-Linien Checks
    * Erste Ableitung! (Decline: -f(x) > d)
    * Vereinfachung: jetzt vs vor 5 Minuten
* Feierabend: und jetzt?
    * Formel mit erwartetem traffic (0 oder 1)
    * wie kommt das ins System? => z.B. eigener Service
* ErrorRate && errorCount einbeziehen => stabiler!
* Prometheus: Yamls in repo (bei Anwendung!!!) werden beim Deployment ausgerollt (Datei an richtige Stelle legen)
* promtool: validierung regeln, endpoints + [Unit Tests](https://prometheus.io/docs/prometheus/latest/configuration/unit_testing_rules/)
    * z.B.: `promtool config check`
* amtool: für alert manager

## Bessere Monolithen – modulithische Applikationen mit Spring Boot

* Es gibt einige Tools zur Analyse der Struktur eines Porgramms
    * https://jqassistant.org/ & https://vimeo.com/170797227 query Java programm structure in Neo4j
    * https://www.hello2morrow.com/products/sonargraph/ analyse Java, C#, C++, Python programm structure ($$$)
    * https://github.com/clarkware/jdepend measure Java programm design
    * > https://www.archunit.org - test Java architecture asserstions
    * https://github.com/odrotbohm/moduliths - module und Abhängigkeiten definieren

## Ktor - asynchrones Kotlin Web Framework

* https://ktor.io/ / https://github.com/ktorio/ktor / https://github.com/ktorio/ktor-samples
* Ktor:
    * Für server und clients
    * Keine annotations
    * Keine Reflection / class path scanning
* Features:
    * Routing
    * StatusPages
    * ContentNegotiation / gson()
    * ... etc, siehe Feature Liste
    * Typsichere Html templates
* Example:
    * https://github.com/mdoh/ktor-highscore-example

## Carving Microservices out of the Monolith with Domain Storytelling

* [Slides](https://speakerdeck.com/hschwentner/domain-storytelling)
* Domain expert tells story
* Have the right people together
    -devs
    -domain experts
* Problem: communication over mental models is tricky
    * -> active listening by drawing what the dom exp said
        * [Example](https://speakerdeck.com/hschwentner/domain-storytelling?slide=45)
        * Use different icons for actors and work objects
        * No 'if's - each case gets a different picture / domain story
        * Stories developed around actors, actor-centric
        * [Workobject -> entity, Activities -> methods](https://speakerdeck.com/hschwentner/domain-storytelling?slide=76)
* "The one big model"
    * [Too big to be understood as a whole](https://speakerdeck.com/hschwentner/domain-storytelling?slide=102)
    * [Different models for different purposes](https://speakerdeck.com/hschwentner/domain-storytelling?slide=108)
* Tools: whiteboard, https://github.com/WPS/domain-story-modeler
* https://domainstorytelling.org/

## Testcontainers - Integrationstesten mit Docker leicht gemacht
* Für Logs von Containern muss LOGGER explizit übergeben werden
* Spock-Unterstützung: @Testcontainers
* junit5:
    * @Testcontainers
    * @Container
* Start pro test vs pro Klasse (bei Spock über @Shared)
* Ryuk sidecar container räumt auf!
* withFileFromPath withDockerfileFromBuilder
* withExposedService proxy container sidecar
* warten bis container up ist (waitingStrategy)
* Docker-compose geht auch
* Selenium (WebDriverContainer) - mit Recording!