# Golab 2020

* [https://golab.io/](https://golab.io/)

## It starts with a solution: a tale of contributions

* [https://golang.org/doc/contribute.html](https://golang.org/doc/contribute.html)

## All about interface values: common patterns and type analysis

1. concrete type (int etc)
1. concrete interfaces ("container")
1. empty interface (use only if there's no oter way)

* Sum Types / Tagges interfaces
    * example:

            type Go struct{}
            type Js sctruct{}

            func (Go) isLanguage() {}
            func (JS) isLanguage() {}

            type Lang interface {
                isLanguage()
            }

            func main() {
                var lang Lang
                lang = "string" // Error, yay!
            }

* Issues:
    * verbose
    * nil
    * Not exhaustive pattern matching / type switch (e.g. switch lang.(type) )

* Intertype (POC): [github.com/siadat/intertype](github.com/siadat/intertype)
    * uses [gopls analyzer](https://godoc.org/golang.org/x/tools/gopls)

## Building a Command Line Tool as the Core of Your Apps

* [https://github.com/spf13/cobra](https://github.com/spf13/cobra)
* [https://github.com/spf13/viper](https://github.com/spf13/viper)
* UI / REST => Alternative: UI / Command Line
* [https://grpc.io/](https://grpc.io/) => Protobuf
* [https://github.com/arduino/arduino-cli](https://github.com/arduino/arduino-cli)
* [https://github.com/arduino/arduino-cli/tree/master/rpc/commands](https://github.com/arduino/arduino-cli/tree/master/rpc/commands)

## Planlagt: distribute cron work the smart way

* [https://github.com/kernle32dll/synchronized-cron-task](https://github.com/kernle32dll/synchronized-cron-task)
* [https://github.com/kernle32dll/planlagt](https://github.com/kernle32dll/planlagt)

## DI with FX

* blog: [pmihaylov.com](pmihaylov.com)
* preslav@pmihaylov.com
* [github.com/preslavmihaylov](github.com/preslavmihaylov)
* DI with Fx Framwork instead of Manual Wiring
    * [go.uber.org/fx](go.uber.org/fx)
    * Modules make common code resuable :-)

## Tests in a box: Shipping your tests in a container for fun and profit

* gomega / gingko
* shipp all in one container
* treat test as product
* Sanity tests first
* adapt to environment
* clean config & leftovers
* [https://github.com/openshift-kni/cnf-features-deploy](https://github.com/openshift-kni/cnf-features-deploy) 
    * [/cnf-tests](https://github.com/openshift-kni/cnf-features-deploy/tree/master/cnf-tests)
        * [/docgen](https://github.com/openshift-kni/cnf-features-deploy/tree/master/cnf-tests/docgen)