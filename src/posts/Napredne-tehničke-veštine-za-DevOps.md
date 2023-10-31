---
title: Napredne tehničke veštine potrebne za DevOps
description: Ovaj tekst govori o naprednim veštinama koje je potrebno usvojiti za DevOps poziciju
date: 2020-04-22
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

Kada steknete osnovne tehničke veštine, možete nastaviti sa upoznavanjem sa alatima i praksama koje se posebno koriste u ulogama DevOps-a. Ovo ni u kom slučaju nije iscrpna lista, ali to su najčešće veštine i teme sa kojima ćete se najverovatnije susresti u većini uloga DevOps -a:

·      [Kontejneri](#_Kontejneri)
·      [CI/CD Continuous Deployment](#_Continuous_Integration_(CI))
·      [Infrastructure as Code (IaC)](#_Infrastructure_as_Code)
·      [Mikroservisna Arhitektura](#_Mikroservisna_Arhitektura)
·      [Kontejnerski orkestratori](#_Kontejnerski_orkestratori)
·      [Monitoring](#_Monitoring)
·      [Software Reliability Engineering (SRE)](#_Software_Reliability_Engineering)
·      [Bezbednost](#monitoring)

# Kontejneri

Tehnologija koja je zvanično postala standard od 2013. god., ali je prisutna mnogo duže kroz Unix Freebsd jail koncept, kada je privi put predstavljena mogućnost hostovanja više particija na jednom sistemu. Kasnije je ovaj koncept usavršavan kroz OpenVZ i Solaris projekte da bih sa pojavom Docker-a postao standard u DevOps poslu. Kontejnerizacija je metoda pakovanja aplikacija sa svim potrebnim fajlovima na lagan i jednostavan način koji ima za cilj da aplikacija koja je spakovana radi u bilo kom okruženju. Kada se kaže okruženje misli se na developer laptop ili public cloud k8s.

Kontejneri se često koriste u arhitekturi mikroservisa, pa je razumevanje kontejnera neophodno za rad sa developerima. Kontejnerski orkestratori se takođe često koriste ovih dana, što ćemo kasnije opisati.

Alati

- [Docker](https://docs.docker.com/get-started/) - Standardno okruženje za kontejnere koje morate da naučite
- [Docker-compose](https://docs.docker.com/compose/) - This tool allows you to configure and orchestrate multiple containers in your computer, especially useful if your application has multiple containers or if you need to bring up the same container over and over.
- [Docker Deep Dive](https://www.pluralsight.com/courses/docker-deep-dive-update) - A fantastic and thorough course from the 5-star training instructor

Sertifikacija

- [Docker Certified Associate](https://acloudguru.com/course/docker-certified-associate-dca)​ 

Resursi za učenje

- [Play with Docker](https://training.play-with-docker.com/)​ 
- [Docker-compose mini tutorial](https://www.tutorialspoint.com/docker/docker_compose.htm)​ 
- [Docker cheatsheet](https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf)​ 
- [Docker-compose cheatsheet](https://devhints.io/docker-compose)​ 

Continuous Integration (CI) - Continuous Delivery (CD) - Continuous Deployment

CI/CD pipeline možemo posmatrati kao proizvodnu liniju u kompaniji koja se bavi softverskim inženjeringom. CI pipeline spaja i testira kod kako bi se osiguralo da je kod spreman za integraciju u glavnu granu - branch, a CD pipeline je njegovo proširenje kako bi se osigurali uslovi za pokretanje na infrastrukturi.

Dobro razumevanje CI/CD-a zahteva razumevanje git-a, git-branching grananja, različite tipove automatizacije i različite metoda testiranja. Jenkins je najkorišćeniji CI alat i bilo bi dobro da ga naučite. Međutim, nije user friendly za korisnike, a jezik koji se koristi za pisanje pipeline (Groovi) nije baš intuitivan. Gitlab CI je mnogo jednostavniji za upotrebu i mogao bi biti pristupačniji alat za prvo učenje pipelina. Postoji mnogo drugih alata koje možete koristiti za brigu o svojim CI/CD pipeline-ima, ali najvažnije je da ste upoznati sa konceptom.

Pre učenja CI/CD -a, preporučuje se da naučite Trunk Based Development (TBD) i kako se on upoređuje sa drugim modelima grananja.

Alati

- [Jenkins](https://www.jenkins.io/)​ 
- [Gitlab CI](https://docs.gitlab.com/ee/ci/)​ 

Resursi za učenje

- [Branching Models](https://medium.com/contino-engineering/branching-models-in-a-nutshell-bf24ea1d888a)​ 
- [Git tutorial for TBD](https://medium.com/contino-engineering/git-to-know-this-before-you-do-trunk-based-development-tbd-476bc8a7c22f)​ 
- [Continuous Delivery Playlist by Dave Farley](https://youtube.com/playlist?list=PLwLLcwQlnXBxy8H8JEizOcfDh_Vyy6qyv)​ 
- [Continuous Delivery Book](https://www.amazon.co.uk/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912)​ 
- [What is continuous delivery?](https://www.redhat.com/en/topics/devops/what-is-continuous-delivery)​ 
- [Learning TBD](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development)​ 
- [Continuous Integration](https://cloud.google.com/architecture/devops/devops-tech-continuous-integration)​ 
- [Deployment Automation](https://cloud.google.com/architecture/devops/devops-tech-deployment-automation)​ 
- [Continuous Testing](https://cloud.google.com/architecture/devops/devops-tech-test-automation)​ 
- [Continuous Delivery](https://cloud.google.com/architecture/devops/devops-tech-continuous-delivery)​ 
- [Trunk Based Development (TBD)](https://trunkbaseddevelopment.com/)​ 
- [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) 
- [Continuous Delivery, it’s great but it won’t work here](https://youtu.be/IvWr29afDF8)
- [Adopting Continuous Delivery](https://youtu.be/6DeWOrmvhRM)

## Infrastructure as Code (IaC)

Infrastructure as code - je tehnologija koja vam omogućava da kreirate, konfigurišete i održavate infrastrukturne resurse pisanjem i primenom kod-a. Neko će reći da je ceo DevOps pisanje YAML fajlova .

Ovo je potpuno drugačiji pristup od toga da ručno unosite komande u konzoli, zato što imate mogućnost da zadržite vaše fajlove, da ih modifikujte, unapredite i replicirate svaki put kada vam je to potrebno.

Configuration Management (CM) je automatizacija instalirane infrastrukture. Na primer, pokreni skriptu koja će izvršiti update na nekoliko servera odjednom i vratiti vam rezultat. Alati kao što su Ansible, Puppet, Saltstack and Chef omogućavaju da ovo uradite na jednostavan i brz način.

Alati

- [Terraform](https://www.terraform.io/) (Orchestration)
- [CloudFormation](https://aws.amazon.com/cloudformation/) (Orchestration for AWS only)
- [Ansible](https://www.ansible.com/resources/get-started) (CM)
- [Packer](https://www.packer.io/) - za kreiranje Image
- [Cloud Deployment Manager](https://cloud.google.com/deployment-manager/docs) (Orchestration for GCP only)

Resursi za učenje

- [Learn IaC with Terraform](https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code)​ 
- [IaC tutorial](https://www.invensislearning.com/blog/infrastructure-as-a-code-tutorial/)​ 
- [IaC Explained](https://www.digitalocean.com/community/conceptual_articles/infrastructure-as-code-explained)​ 
- [How Ansible works](https://www.ansible.com/overview/how-ansible-works)​ 

Sertifikacija

- [Terraform Certification](https://www.hashicorp.com/certification/terraform-associate)​ 

## Mikroservisna Arhitektura

Tradicionalno, aplikacije se prave kao monolitna formacija, što zapravo znači da su sve komponente aplikacije integrisane zajedno i rade na istom serveru. Monolitni pristup je opšteprihvaćen i jednostavan za početak rada na novoj aplikaciji, problemi dolaze kasnije kada veličina koda postane velika i kada je potrebno da se rade izmene i unapređenja. Komplikovan i kompleksan sistem baziran na monolitu je jako zahtevan za održavanje i unapređenje.

Kako bih prevazišli ovaj problem sa danas dostupnom tehnologijom sve više se okrećemo mikroservisnoj arhitekturu aplikacija, gde su se trudimo da pravimo samo neophodne veze između komponenti nekog sistema.

 Mikroservisna arhitektura ima nekoliko prednosti u odnosu na monolitnu arhitekturu

- Lakše je distribuirati odgovornosti i dužnosti
- Svaki tim radi na svom mikroservisu koji je jedna komponenta sistema
- Lakše je nezavisno skalirati opterećenje
- Bolja izolacije u slučaju greške, ako jedan servis stane ne staje ceo sistem
- Bolja izolacije podataka u slučaju GDPR-a i sličnih slučajeva
- Lakše je unapređenje servisa bez rizika da ceo sistem prestane da radi

Mikroservisi nisu integralni deo svake DevOps role, ali pošto se jako blisko naslanja na ostale koncepte DevOps-a: kontejnere i orkestraciju dobro je da se razume ovaj pristup arhitekturi.

Kada je reč o tome, mikroservisi nisu nešto što nas rešava svih muka u budućnosti; omogućavaju veću fleksibilnost i skalabilnost ali su takođe daleko složeniji u aspektu infrastrukture i hardverskog okruženja koje može da osigura sve potrebne servise. U suštini trgujete kompleksnošću koda za infrastrukturnu kompleksnost sa ciljem da poboljšate brzinu razvoja i skalabilnost.

Budući da su mikroservisi mala pakovanja u kontejnere, orkestratori su često poželjna metoda za pokretanje. Sloj inteligencije koju poseduje orkestrator će se pobrinuti za to da vaš kontejner bude adekvatno smešten na klaster i ponovo pokrenut ako postoji problem.

Važno je da razumete kakva aplikacija treba da bude da bi se kvalifikovala za mikroservis. Jednostavno prevlačenje monolitne aplikacije sa servera i bacanje u kontejnere neće je učiniti mikroservisom. Umesto toga, svaku komponentu je potrebno podeliti i redizajnirati tako da je minimalno povezana i zavisna od ostalih komponenti sistema.

Takođe, za mikroservise je potreban zaokret u načinu na koji se infrastruktura tradicionalno posmatra. Umesto da servere tretiramo kao kućne ljubimce, oni se tretiraju kao stoka.[[ŽP1]](#_msocom_1) 

Resursi

- [The Problem with Microservices](https://youtu.be/zzMLg3Ys5vI)​ 
- [12 Factor Application](https://12factor.net/) 
- [When to use Microservices and when not to](https://youtu.be/GBTdnfD6s5Q).
- [Software Architecture Monday](https://youtube.com/playlist?list=PLdsOZAx8I5umhnn5LLTNJbFgwA3xbycar)
- [Essential Microservice Testing](https://nandovillalba.medium.com/essential-microservice-testing-a838c34a86e3)​ 
- [Advance Distributed System Design](https://learn.particular.net/courses/distributed-systems-design-fundamentals-online)​ 
- [Mastering Chaos, a Netflix Guide to Microservices.](https://youtu.be/CZ3wIuvmHeM)​ 
- [Microservice Pattern](https://microservices.io/patterns/microservices.html)​ 

## Kontejnerski orkestratori

Kontejnerski orkestratori vam omogućavaju da pokrenete kontejnere na jednom ili više servera i horizontalno skalirate opterećenje. To ih čini idealnim platformama za pokretanje mikroservisa.

Na primer, umesto da jedan ili više kontejnera rade na jednom serveru, orkestrator će se pobrinuti za kreiranje više replika servera i kontejnera kako bi omogućio najbolje performanse prilikom većeg opterećenja.

Zvuči dovoljno jednostavno ali orkestratori prave određene pretpostavke o tome kako je vaša aplikacija dizajnirana. Na primer, pretpostavljaju da se konfiguracija prosleđuje kao promenljiva okruženja i da se podaci ne čuvaju u stvarnom kontejneru. Tako da ponekad migriranje aplikacije orkestratoru da bi bila skalabilna zahteva ponovno reinženjering da bi bila mikroservis. Metodologija [12 Factor](https://12factor.net/) je metod dizajnirana aplikacija koji ih čini idealnim za rad sa orkestratorima.

Iako ima mnogo orkestara kao što su Swarm, ECS i Nomad, ubedljivo najpopularniji kontejnerski orkestar je Kubernetes i zato vam preporučujemo da usredsredite svoje napore na Kubernetes.

Kada učite Kubernetes, preporučujemo pristup od vrha nadole. Počnite sa površnim razumevanjem arhitekture i komponenti, a zatim se igrajte sa već postojećim klasterom, umesto da kreirate sopstveni od početka. To će učiniti vaš proces učenja mnogo manje komplikovanim i takođe će vam olakšati da vidite zašto su sve komponente potrebne.

Alati

- [Docker Kubernetes](https://www.docker.com/products/kubernetes)​ 
- [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/)​ 
- [GKE](https://cloud.google.com/kubernetes-engine)​ 
- [EKS](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc)​ 
- [AKS](https://azure.microsoft.com/en-gb/services/kubernetes-service/)​ 
- [K9s](https://github.com/derailed/k9s)​ 
- [k0s](https://k0sproject.io/)​ 

Resursi

- [Kubernetes Tutorial for beginners](https://youtu.be/X48VuDVv0do)​ 
- [Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/)​ 
- [CKAD Practice Questions](https://medium.com/bb-tutorials-and-thoughts/practice-enough-with-these-questions-for-the-ckad-exam-2f42d1228552)​ 
- [CKA learning Resursi za učenje](https://github.com/walidshaari/Kubernetes-Certified-Administrator)​ 
- [Learning Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)​ 

Sertifikacija

- [Certified Kubernetes Administrator](https://www.cncf.io/certification/cka/)​ 

## Monitoring

Pratimo sisteme koji nam govore kada je nešto problem ili će biti problem i posmatramo da osiguramo sigurne performanse i saobraćaj koji nam pomažu da u budućnosti učinimo naše sisteme boljim.  Praćenje se radi o razumevanju poznatih i poznatih nepoznanica, uz praćenje testirate hipoteze o ponašanju sistema. Sa druge strane, primetnost je o nepoznatim osobama; o otkrivanju novih problema sa bogatijim podacima i stvaranju hipoteza koje se mogu pratiti.

Praćenje i posmatranje se može svesti na:

Evidentiranje: Proces izlaznih sistemskih događaja koji mogu, ali i ne moraju biti greške.

Metrika: To su vremenske serije koje ukazuju na broj događaja u vremenskom periodu. Mogu se zasnivati na evidencijama ili statusu sistema kao što je RAM itd.

Distribuirano praćenje: Sa distribuiranom praćenjem dodeljujete pojedinačni ID svakom zahtevu koji dođe u sistem kako biste mogli da pratite njegov put kroz njega i kako je to uticalo na različite mikroservise.

Indikatori nivoa usluga (SLI)****:** Oni odražavaju trenutno stanje vašeg sistema. SI se obično zasniva na metrikama koje definišete.

Ciljevi nivoa usluge (SLO)****:** Definišete SLO i osiguravate da se vaš sistem pokreće ispod te metrike. Na primer, ako imate SLO da 95% zahteva treba da bude ispod 200ms i odjednom počnete da vidite previše zahteva u sekundi, onda kršite svoje SLO-ove. Kada se to desi moraćete da dizajnirati za razmeru ili da rešite problem koji uzrokuje ove pikove u performansama da ne biste izgubili korisnike.

Ugovori o nivou usluga (SLA)** : Ugovori o nivou usluge su ugovori koje imate sa klijentima koji navode kakva će naknada biti data ako se prekrše. Na primer, kupcima biste mogli da kažete da ako vam usluga ne radi više od 95% godišnje platićete im x iznosa novca u kreditima. SLA treba postaviti daleko više od SLO-a, na ovaj način možete da se uhvatite u koštac sa tim pitanjem pre nego što vaši nivoi budu kritični.

Resursi za učenje

- [SLIs vs SLOs vs SLAs](https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli)​ 
- [Monitoring and observability](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability)​ 
- [Monitoring](https://sre.google/workbook/monitoring/)​ 
- [Practical Alerting](https://sre.google/sre-book/practical-alerting/)​ 
- [Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)​ 
- [Implementing SLOs](https://sre.google/workbook/implementing-slos/)​ 
- [Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/)​ 
- [Logging Best Practices](https://www.scalyr.com/blog/the-10-commandments-of-logging/)​ 
- [Microservice Observability](https://dzone.com/articles/microservice-observability-part-1-disambiguating-o)​ 
- [Distributed Tracing](https://microservices.io/patterns/observability/distributed-tracing.html)​ 

</section><footer>
Takođe, ako ne posedujte fakultetsku diplomu ili ste tek završili fakultet polaganje tehničkih ispita je dobar način za građenje kvalitenog CV-ja. U nastavku teksta posle opisa veštine biće predloženi sertifikati za polaganje ispita iz te oblasti. 

</footer>

{% include "links.njk" %}
