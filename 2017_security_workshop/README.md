# 2017 security workshop

## tools

- burp - Burp Suite is a graphical tool for testing Web application security
- sqlmap - sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws
- nikto - Nikto is an Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items
- arachni - Free/Public-Source Web Application Security Scanner aimed towards helping users evaluate the security of web applications.
- Xanitizer - Xanitizer is a high-end security analysis tool, which detects vulnerabilities in web applications by means of taint analysis.
- lynis - auditing tool for Linux, Unix and macOS systems. It helps you run security scans in just a few minutes and guide with system hardening.

## websites

- <https://www.owasp.org> - Open Web Application Security Project
- <https://www.ssllabs.com/> - browser and server checks
- <https://securityheaders.io/> - site scan
- <https://www.openbugbounty.org/> - vulnerability reports
- <https://www.shodan.io/> - search engine for Internet-connected devices

## Asynchron: extern loggen
Informationen nach außen schleifen:
Tunnel über DNS
http
SMTP
Burb Collaborator

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
