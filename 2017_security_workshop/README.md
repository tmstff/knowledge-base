# 2017 security workshop

## tools

- *burp* - Burp Suite is a graphical tool for testing Web application security
- *sqlmap* - sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws
- *nikto* - Nikto is an Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items
- *arachni* - Free/Public-Source Web Application Security Scanner aimed towards helping users evaluate the security of web applications.
- *Xanitizer* - Xanitizer is a high-end security analysis tool, which detects vulnerabilities in web applications by means of taint analysis.
- *lynis* - auditing tool for Linux, Unix and macOS systems. It helps you run security scans in just a few minutes and guide with system hardening.

## websites

- <https://www.owasp.org> - Open Web Application Security Project
- <https://www.ssllabs.com/> - browser and server checks
- <https://securityheaders.io/> - site scan
- <https://www.openbugbounty.org/> - vulnerability reports
- <https://www.shodan.io/> - search engine for Internet-connected devices

## Asynchron: extern loggen
- Informationen nach außen schleifen:
- Tunnel über DNS
- http
- SMTP
- Burb Collaborator

## XML vulnerability

read server file via XML entities at XML file uploads


## burp headless

    java -Xmx3000m -Djava.awt.headless=true -jar "/Applications/Burp Suite Professional.app/Contents/java/app/burpsuite_pro.jar" --config-file=burp-project-options.json

## arachni

    ./arachni --browser-cluster-pool-size 2 --audit-links --audit-forms --audit-xmls --audit-jsons --scope-exclude-pattern="logout|\.js|\.css|updatePassword" --plugin=login_script:script=login-marathon.js --session-check-pattern='Logout' --checks=*,-backup_files,-backup_directories,-common-files-common_directories http://kali:8080/marathon/secured/profile.page --session-check-url='http://kali:8080/marathon/showMarathons.page'

    document.getElementsByName('j_username')[0].value = "john";
    document.getElementsByName('j_password')[0].value = "john";
    document.forms[0].submit();

    ./arachni_reporter 'kali 2017-07-07 08_03_43 -0400.afr'

    ./arachni_web


# find-security-bugs

find-security-bugs find-bugs plugins

## owasp ASVS

<https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project>

# break out characters

    &&
    |
    '
    "
    %00
    ?

etc

## traning material

- <https://www.Christian-Schneider.net/downloads/HandoutSecurityTraining2015.zip>
- <https://www.Christian-Schneider.net/downloads/WebSecureCoding-Setup.zip>

## Slides & Speeches Christian:

- <https://youtu.be/m1sH240pEfw>
- <https://christian-schneider.net/JavaDeserializationSecurityFAQ.html>
- <http://www.slideshare.net/cschneider4711/surviving-the-java-deserialization-apocalypse-owasp-appseceu-2016>
- <https://github.com/cschneider4711/DeserializationExercises>
- <https://github.com/cschneider4711/SWAT>

## setup instructions

- Installation der freien Kali Linux VM, welche unter https://www.kali.org erhältlich ist. Hier gibt es u.a. auch bereits fertige VMs: https://www.offensive-security.com/kali-linux-vmware-virtualbox-image-download/ — bitte nicht die "Light"-Version nehmen (da fehlen einige wichtige Tools), sondern komplette Version (der größere Download).
- In die Kali-Linux VM müsste noch meine Trainings-Anwendung gepackt werden: Hierzu einfach folgendes ZIP-Archiv in die VM laden und dort entpacken: https://www.Christian-Schneider.net/downloads/TrainingDemosMarathon.zip
- Download des OpenSource Arachni Scanners von http://www.arachni-scanner.com in die Kali-VM
- Ebenso ist der Burp Pro sinnvoll: Da die Lizenzen nicht beliebig oft aktiviert werden können, kann dieser gerne auch auf dem Host-PC betrieben werden, wenn in der VM man die Lizenz nicht aktivieren möchte. Hierzu ist es dann notwendig, dass der Burp aus dem Host auf die VM zugreifen kann.
- Wer mag, kann auch die Software "Xanitizer" installieren — dies ist ein gutes freies Werkzeug, um Projekte einer statischen Analyse auf Schwachstellen zu unterziehen: http://xanitizer.com — das werden wir auch kurz beleuchten, was am Ende dieses Werkzeug so alles in der Trainings-Anwendung findet. Diese Installation kann sowohl in der VM als auch ausserhalb auf dem Host-PC stattfinden, ganz jenachdem, was man persönlich lieber mag.
- Wer mag (vollkommen optional) kann auch gerne eine IDE seiner Wahl nutzen, um im Demo-Projekt in die vorhandenen Quellen zu schauen, um bei manchen Suchübungen eventuell mehr finden zu können 😉
- Ebenfalls optional (sofern man bei den Punkt "Threat Modeling" mitmachen möchte) wäre das Standardwerkzeug hierzu zu installieren: Hierbei handelt es sich um das kostenfrei verfügbare "Microsoft Threat Modeling Tool 2016". Ein Betrieb in einer Windows-VM reicht vollkommen aus, wenn z.B. Macs oder Linux eingesetzt wird. Falls dies nicht auf Seiten der Teilnehmer geht, kann ich die Nutzung des Werkzeugs inkl. Customization auch in meiner VM am Beamer erläutern. Optional kommt somit die Installation dieses Tools unter Windows hinzu, wenn die Teilnehmer beim Threat Modeling Anteil auch aktiv mitmachen wollen: Dieses freie Tool kommt von Microsoft und ist in diesem Bereich führend für das Thema individuelles Threat Modeling und es ist der einzige Grund, warum ich auf meinem Mac noch eine Windows VM habe. Falls die Teilnehmer im Training keine Windows VM haben, kann ich die Nutzung beim Thema Threat Modeling auch einfach nur am Monitor meines Rechners zeigen.
