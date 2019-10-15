# Stash x Jenkins Integration for Feature branches

## Post-Receive hooks

There is a couple of discussions regarding remote triggering of Multibranch Pipelines in Jenkins. It doesn't seem to work without using some ugly workarounds:

* http://stackoverflow.com/questions/39490150
* https://issues.jenkins-ci.org/browse/JENKINS-35310?page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel&showAll=true
* The Git Plugin supports being notified as well. We can test this once we have Jenkins running on a machine that our Stash server can access:
https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin#GitPlugin-Pushnotificationfromrepository
--> So as a workaround we will be using SCM Polling as triggering method.

## Stash Notifier Plugin

This plugin should allow Jenkins to report the build status ("in progress", "success" or "failed") back to Stash.

Currently it is not possible to install this plugin using the Jenkins Plugin Manager GUI: https://github.com/jenkinsci/stashnotifier-plugin/issues/137

The workaround is to login into the Jenkins Master and install manually:

    ssh jenkins@<jenkins-vm-address>
    cd /var/lib/jenkins/plugins
    wget https://github.com/jenkinsci/stashnotifier-plugin/releases/download/1.11.4/stashNotifier.hpi
    --> restart Jenkins

## Further information

* https://blog.mikesir87.io/2013/04/continuous-integration-with-stash-and-jenkins
* https://developer.atlassian.com/stash/docs/latest/how-tos/updating-build-status-for-commits.html