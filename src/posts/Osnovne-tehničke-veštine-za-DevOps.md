---
title: Osnovne tehničke veštine potrebne za DevOps
description: Ovaj tekst govori o osnovnim veštinama potrebnim za DevOps pozicije
date: 2020-07-04
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

Teško je ne biti zbunjen kada počnemo da istražujemo odakle da počnemo sa učenjem ove oblasti. Mnogo novih tehnologija se razvija konstantno i nije lako odabrati pravi put ako uzmemo u obzir da lista konstantno raste. 

## Dakle, pitanje je šta prvo naučiti?

Ovih šest tehničkih veština zajedničke su svakoj ulozi DevOps-a. Nakon što savladate ove veštine, spremni ste za početak apliciranja za uloge početnog nivoa ili stažiranje dok se krećete lestvicom učenja ka DevOps tehničkim veštinama:

- [Linux](#_Linux) - fundamentalno
- [Programski jezik](#_Programski_jezik) - osnovno iskustvo
- [Bash](#_Bash)
- [Git](#_Git)
- [Mreža](#_Osnove_mreže) - fundamentalno
- [Public Cloud Platforme](#_Cloud_Platform) - AWS, Azure, GCP - fundamentalno

## Linux

Linux je  operativni sistem (OS) otvorenog koda koji je baziran na Unix-u. Većinu radnog vremena radeći na bilo kojoj DevOps poziciji provodićete u Linux svetu. Naravno i Microsoft ima svoj put baziran na Windows operativnom sistemu koji možete da sledite, ali većina servisa je na otvorenom kodu sa velikom podrškom zajednice i vodećih kompanija poput IBM, Oracle, Google.

Postoji mnogo resursa koji će vam pomoći u učenju Linux-a on line. Jedan od načina za početak mogao bi biti pregled nastavnog programa [LPIC ispita](https://www.lpi.org/our-certifications/lpic-1-overview) i polaganje ispita za dobijanje sertifikata.

Resursi za učenje:

- [Beginner’s Guide  to Linux](https://www.tecmint.com/free-online-linux-learning-guide-for-beginners/)​ 
- [The Unix Programming Environment](http://files.catwell.info/misc/mirror/the-unix-programming-environment-kernighan-pike.pdf): Ne morate da znate sve što je u knjizi, ali dobro je da znate kako Linux zapravo radi.
- [Unix Power Tools](https://doc.lagout.org/operating%20system%20/linux/Unix%20Power%20Tools.pdf) — Velika lista alata koja često dolazi upakovana u različite linux distribucije. Nemojte da vas plaši veličina, koristićete verovatno oko 20% samo.
- [Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) - Dobra knjiga koja objašnjava kako OS radi.
- [List of commonly used commands in Linux](https://www.howtogeek.com/412055/37-important-linux-commands-you-should-know/)​  - Lista korisnih komadi u Linux-u
- [Linux Guide](https://www.tecmint.com/free-online-linux-learning-guide-for-beginners/)​ 

Sertifikacija

- [Comptia Linux](https://www.comptia.org/certifications/linux)​ 
- [LPIC I](https://www.lpi.org/our-certifications/lpic-1-overview)​ 
- [LPIC II](https://www.lpi.org/our-certifications/lpic-2-overview)​ 
- [RedHat RHCSA](https://www.redhat.com/en/services/certification/rhcsa)​ 

## Programski jezik

Ne brinite, ne morate biti [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie) da biste postali DevOps inženjer. U stvari, čak ni ne morate sebe nazivati programerom da biste započeli mnoge pozicije u DevOps-u.

Međutim, morate barem da poznajete osnovne programerske koncepte, kao što su petlje, promenljive, nizovi, liste i itd. To će neće biti samo korisno kada morate da pročitate ili izmenite neki kod, već biti od suštinskog značaja i prilikom pisanja skripti, yaml fajlova i automatizacije procesa.

Savetujemo da počnete sa Python-om naučite osnove, a zatim napravite nalog na platformi poput [Edabita](https://edabit.com/) i pređite na srednji nivo. Ako dođete do tog nivoa, ne biste trebali imati velikih problema u pisanju skripti i obavljanju većine poslova automatizacije koji vam se nađu. Takođe, u nekom trenutku vašeg učenja, vredi se upoznati sa uobičajenim obrascima dizajna i algoritmima. Ovo nije neophodno za početak rada u DevOps -u, ali će vam dobro doći.

Resursi za učenje

- [Codecademy basics of programming](https://www.codecademy.com/learn/learn-how-to-code/modules/bop-i)​ 
- [Python Free Interactive Tutorial](https://www.learnpython.org/)​ 
- [Edabit](https://edabit.com/challenges/python3) - Sajt na kome dobijate programerske izazove.
- [Hackerrank](https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=py-introduction) 
- [Common Algorithms](https://u.osu.edu/cstutorials/2016/11/21/7-algorithms-and-data-structures-every-programmer-must-know/)​ 
- [Design Patterns](https://refactoring.guru/design-patterns/catalog)​ 

Sertifikacija

- [Python Sertifikacija](https://pythoninstitute.org/certification/)​  

## Bash

Bash je najvažniji skriptini jezik za automatizaciju zadataka u Unix okruženju (Powershell bi bio ekvivalent za Windows). Čak i ako više volite skriptovanje na Python-u ili bilo kojem drugom jeziku, bash je najrasprostranjeniji i bit će vam jako teško raditi ovaj posao bez znanja kako ga koristiti.

Ne morate biti čudo od programera da biste postigli većinu zadataka sa kojima ćete se svakodnevno susretati, ali određeno osnovno znanje programiranja definitivno pomaže.

Resursi za učenje

- [Beginner Bash Guide](https://www.tldp.org/LDP/Bash-Beginners-Guide/html/)​ 
- [Advance Scripting Guide](https://tldp.org/LDP/abs/html/)​ 
- [Bash interactive tutorial](https://www.learnshell.org/)​ 
- [Bash Interactive Challenges](https://cmdchallenge.com/)​ 
- [The Bash Guide](https://guide.bash.academy/)​ 
- [Bash Katacoda](https://www.katacoda.com/courses/linux)​ 
- [Bash Cookbook](http://index-of.es/Programming/Bash/O%27Reilly%20bash%20CookBook.pdf)​ 

## Osnove mreže

Danas je većina infrastrukture bazirana na javnim cloud provajderima ili Kubernetes klasterima koji se nalaze na lokacijama korisnika. Da bi uspešno kreirali infrastrukturu potrebno je da imate osnovno znanje o mrežnim pojmovima. Ne očekuje se da ste nekada bili mrežni inženjer ali da znate odgovore na ova dole pitanja je poželjno.

- Šta je ip adresa?
- Šta je subnet i subnet mask?
- Šta je ruta?
- Šta je ruter a šta je switch?
- Šta je VPC?

Učenje gore navedenog je od suštinskog  značaja za rešavanje problema i kasnije dizajniranjem VPC strategije u infrastrukturi.

Resursi za učenje

- [The Bits and Bytes of Computer Networking](https://www.coursera.org/learn/computer-networking)​ 
- [Udemy Networking Course](https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/)​ 

Sertifikacija

- [Comptia Network](https://www.comptia.org/certifications/network)​ 

## Git

Git je distribuirani sistem kontrole verzija koda. Omogućava nam praćenje promena u kodu od strane tima koji zajednički sarađuje na projektu. Koriste ga svi softverski inženjering i operativni timovi. Toplo vam preporučujemo da provedete neko vreme upoznajući se sa njim i pojmovima branches, rebase, merging, itd.

Resursi za učenje

- [git — the simple guide](https://rogerdudler.github.io/git-guide/)​ 
- [Learn git Branching](https://learngitbranching.js.org/) — interactive course with challenges.
- [Katacoda Interactive git](https://www.katacoda.com/courses/git)​ 
- [Version Control](https://cloud.google.com/architecture/devops/devops-tech-version-control)​ 

## Cloud Platform

Postoji nekoliko javni cloud platformi koje možete izabrati za početak. Tri najveća su AWS, GCP i Azure. Većina počinje sa AWS-om jer se on često traži u oglasima za posao. Google - GCP  je intuitivan i jednostavan za upotrebu. Takođe dobijate 300 dolara besplatnog kredita za početak. Azure je takođe dobar izbor ako više volite da radite na Microsoft okruženju i tu želite da vaša karijera ide.

Resursi za učenje

- [Google Cloud Free Offering](https://cloud.google.com/free)​ 
- [Quicklabs](https://google.qwiklabs.com/)​ 
- Azure
- [AWS Free Tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)​ 
- [Google Cloud Free Courses](https://www.coursera.org/googlecloud)​ 
- [AWS and other Cloud Computing Agnostic Free Courses](https://www.coursera.org/courses?query=aws)​ 

Sertifikacija

- [Cloud Digital Leader GCP certification](https://cloud.google.com/certification/cloud-digital-leader)​ 
- [GCP Associate Cloud Engineer](https://cloud.google.com/certification/cloud-engineer)​ 
- [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=cta&cta=header&p=2)​ 
- [Azure Fundamentals](https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/)​ 
- [GCP Cloud Network Engineer](https://cloud.google.com/certification/cloud-network-engineer)​

</section><footer>
Takođe, ako ne posedujte fakultetsku diplomu ili ste tek završili fakultet polaganje tehničkih ispita je dobar način za građenje kvalitenog CV-ja. U nastavku teksta posle opisa veštine biće predloženi sertifikati za polaganje ispita iz te oblasti. 

</footer>

{% include "links.njk" %}
