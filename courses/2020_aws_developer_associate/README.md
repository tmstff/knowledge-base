# AWS Certified Developer Associate

* https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/
* https://stephanemaarek.com/
* https://aws.amazon.com/de/certification/certification-prep/

## Goal:

*Ende November durch*

## Notes

### Regions

Regions - Availability Zone ~data center
https://aws.amazon.com/de/about-aws/global-infrastructure/

### IAM

* user - group - role (machine)
* SAML Standard (Active directory) https://de.wikipedia.org/wiki/Security_Assertion_Markup_Language
* Security Group: Region Scoped

### EC2

* SSH Connect to EC2 Instance

        ssh -i ~/config/aws/TimsEC2InstanceKeys.pem ec2-user@3.122.55.45

    => Connect  => SSH Client

* Security Group <=> Firewall
* Elastic IP: Fixed IP for EC2 instances
* On Demand: Elastic workload
* > Dedicated Host vs Dedicated Instance?
* ENI: Elastic Network Interface
    
    https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/
* EC2 Pricing https://aws.amazon.com/ec2/pricing/on-demand/
* EC2 Instances: https://ec2instances.info/ 
* AMI: Amazon Machine Image
* User Data (provisioning script) example:

        #!/bin/bash

        yum update -y
        yum install -y httpd.x86_64
        systemctl start httpd.service
        systemctl enable httpd.service
        echo "Hello World from $(hostname -f)" > /var/www/html/index.html

* EBS Elastic Block Store
    * Easy backup
    * Linux Befehle:

            lsblk

    * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html

    * GP2 Volume
        * General Purpose
        * 1Gb - 16 TB
        * Burst to 3000 (for small)
        * IOPS depend on Volume (3 IOPS per GB, max 16000)
    * IO1
        * high IOPS requirement, e.g. DB
        * 4 GB - 16 TB
        * PIOPS: 100 - 32k (64k for nitro)
        * Max PIOPS : GB => 50:1
    * ST1
        * Streaming Workloads, fast throughput, low price
        * DWH, Kafka etc
        * 40MB/s per TB, Max 500MB/s
    * SC1
        * throught oriented, less frequently accessed
        * cheaper than ST1
        * 12MB/s per TB, Max 250MB/s 

* Local EC2 Instance Store
    * physical disk attached to machine
    * high IOPS

### EFS
* Elastic File System
* Manages NFS, multi-AZ
* HA, Scalable, Expensive, Pay Per Use
* Linux only
* Performance Mode
    * GP (low latency)
    * Max I/O
* Tiers
    * Standard
    * EFS-IA: infrequent access, lower price but restore fee
* https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html


### RDS

* Relational Database Service
    * Postgres
    * MaySQL
    * MariaDB
    * Oracle
    * Microsoft SQL Developer
    * Aurora
* Backups:
    * Daily
    * Transaction logs @ 5 min
    * up to 35 days
* Manual Snapshots

#### Read Replicas & Multi AZ
* Read Replicas
    * up to 5
    * within AZ, Cross AZ, Cross Region
    * ASYNC, eventually consistent
    * desired instances in connection String
    * can be promoted to own DB
    * Network cost: data exchange between AZs
    * Can be setup to multi AZ for desaster recovery

* Multi AZ
    * SYNC replication
    * One DNS + failover

* Encryption
    * at rest encryption
        * master must be encrypted for read replica encryption
    * in-flight encryption (SSL)
        * Postgres: parameter group: rds.force_ssl=1
        * MySQL: Within the DB: GRANT USAGE ON *.* TO 'mysqluser'@'%' REQUIRE SSL;
    * encrypt unencrypted DB
        * create Snapshot
        * copy & encrypt snapshot
        * restore to new encrypted DB from encrypted snapshot
    * Postgres does not provide TDE

* Access Management: Login:
    * usname / password
    * IAM for MySQL, Postgres Aurora

#### Aurora

* performance boost: 5x MySql, 3x Postgres
* 6 Instances
    * 3 AZ
    * 1 Master
    * 5 Read Replicas
    * failover in less than 30 sec
* requirements:
    * writes: 4 / 6
    * reads: 3 / 6
* enpoints
    * writer
    * reader
        * connection LB
* Aurora
    * Serverless
    * Cross Region (?)
    * Global
* select global reader / writer endpoint for access

#### AWS ElastiCache

* Redis
* memcached
* write / read scaling
* multi-AZ
* caching Pattern
    * Lazy Loading / Cache-Aside / Lazy Population

### Route 53

* A: hostname => IPv4
* AAAA: hostname => IPv6
* CNAME: hostname to hostname
* Alias: hostname to AWS resource
* nslookup / dig
* TTL: konfigurierbar in Route53

* Routing Policies:
    * simple
    * weighted
    * latency
    * Failover
    * Geo Location
* health checks
    * unhealthy after X checks failed (default 3)
    * heathy after X checks apssed (default 3)
    * Default Interval 30s (up to 10s for more $)
    * ~15 health checkers running in parrallel

