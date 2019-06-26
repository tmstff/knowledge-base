# Devopscon 2019

## Jeff Sussna: Silos are dead. Long live Silos

* https://twitter.com/jeffsussna / @jeffsussna
* https://devopsconference.de/business-company-culture/silos-are-dead-long-live-silos/

![](images/IMG_20190612_091713.jpg)

* Design Thinking
* Agility: effectiveness to change direction!
* speed is not everything
* flow: idea to product + feedback: get information from production: quality & revelancy
* how to put microservices into coherent whole?
    * mutual service providers
    * Facilitate desirable outcome
    * every level is service provider
        * help each other maximize value
        * understand what the others need (empathy, see things from anothers perspective)
            * people are different
    * Book: Mark Burgess - Thinking in Promises
        * Promise: itention, expression, commitment, benefit - a strong intention to facilitate benefit
        * Promises s are broken
        * itentended outcome that may or may not come true
        * Promise-Driven Design
        * are we making the right promises? Which? Do we keep them?
* Book Jeff Sussna - Designing Delivery 

## Basil Faruqui: In Kubernetes, has everyone forgotten application workflows?

* https://devopsconference.de/docker-kubernetes/in-kubernetes-has-everyone-forgotten-application-workflows/

![](images/IMG_20190612_100405.jpg)

* Werbeveranstaltung mit wenig Informationsgehalt, Sprecher meiden :-D

## Roland Huss: Shell Ninja: Mastering the Art of Shell Scripting #slideless

* https://twitter.com/ro14nd
* https://ro14nd.de/
* https://devopsconference.de/docker-kubernetes/shell-ninja-mastering-the-art-of-shell-scripting/
* https://github.com/ro14nd-talks/shell-ninja

![](images/IMG_20190612_114952.jpg)

* shell is everywhere
* maybe least common denominator
* fast turnaround
* history
    * 1971 first shell Ken Thomson
    * 1979 Bourne shell by stephen bourne
    * 1979 c-shell
    * 1989 bash brian fox
* Blue green deployment with kubernetes and shell
* `set -eu` # fail on error, fail on undeclared variable - use set +e to disable for commands intendet to possibly fail
* `set -o pipefail` # break pipeline if any and fails
* `ARGS=("$@")` # store command line call
* bash getopts
* Functions können bloß ints zurück liefern, daher werte (zb true/false) ausgeben und eveluaten (letzteres ist mittlerweile scheinbar optional)
* Testing: bats - bash automated testing system