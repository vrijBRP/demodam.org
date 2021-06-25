---
template: "default"
---

# [concept] Een Demodam-organisatie worden

Softwareleveranciers, fabrikanten en andere organisaties kunnen de technische werkgroep van Demodam vragen om hun gemeenschappelijke componenten en/of applicatie te hosten. Dit wordt gedaan door een [issue](https://github.com/demodam/demodam.org/issues/new?assignees=bvhme%2C+Ainali%2C+AlbaRoza%2C+EdoPlantinga&labels=application&template=apply-as-organization.md&title=%5BOrganization+name%5D+would+like+to+apply+to+demodam) , houd er rekening mee dat aanmeldingen altijd open zijn en publiekelijk worden gecommuniceerd. Lees de volgende gids voordat u zich aanmeldt:

## Naamgevingsconventies
Denk, voordat u zich aanmeldt als organisaite, even goed na hoe u uw organisatie op demodam wilt laten zien. Namen voldoen aan de volgende beperkingen:

-Ze moeten uniek zijn

Je mag je eigen naam kiezen, maar houd er rekening mee dat deze ook in een technische naam wordt gebruikt (door spaties en speciale tekens te verwijderen en alle tekens in kleine letters te veranderen). Je naam wordt op de volgende manieren gebruikt:
- Het wordt gepubliceerd in de bijdragers.md met een link naar uw website
- Het wordt gebruikt in het subdomein van uw organisatie op demodam b.v. https://[technische-naam].demodam.nl
- Het wordt gebruikt als de naam voor uw privénaamruimte op de demodam haven-omgeving

## Technische specificatie
Elke organisatie krijgt  een subdomein aan op demodam, dit moet worden gebruikt om de applicatie te hosten die de organisatie wil presenteren, of om een ​​overzichtspagina te hosten als de organisatie meerdere applicaties wil presenteren.

Als de organisaties meerdere applicaties willen hosten, kunnen ze paden gebruiken onder hun eigen subdomein, maar moeten ze zich houden aan de naamgevingsconventies van NL API Strategy, zoals open-zaak.demodam.nl/zrc/v1/.

Om componenten of applicaties te installeren, moeten ze voldoen aan de volgende richtlijnen of regels:

- **kan** een publiek toegankelijke codebase hebben
- **zou** moeten zijn opgenomen in de componentencatalogus.commonground.nl
- **zou** generieke havencomponenten zoals Prometheus, Loki en NLX moeten ondersteunen
- **zou** ondersteuning moeten bieden voor [NL design system](https://designsystem.gebruikercentraal.nl/)
- **moet** bestaan ​​uit publiek toegankelijke containers (docker hub heeft de voorkeur, andere opties zijn toegestaan)
- **moet** geautomatiseerde installatie routes hebben (bijv. Helm, Ansible, Etc ...)
- **moet** gemeenschappelijke commonground principes volgen
- **moet** zich houden aan de nl api-strategie
- **moet** voldoen aan forumstandaardisatie
- **moet** Kubernetes 1.19 ondersteunen
- **moet** Werken met de minimale instellingen die worden geboden door haven-compatibele clusters

Het subdomein wordt doorverwezen naar de demodam haven-omgeving, eventuele overzichtspagina's dienen daarom op de omgeving te worden gehost. Het is niet toegestaan ​​om het subdomein extern om te leiden.

De technische stuurgroep wijst erop dat alle ondersteuning wordt geleverd op een "best effort"-basis zonder enige garantie, maar behoudt zich ook het recht voor om naamruimten, installaties, subdomeinen of andere bronnen van een organisatie te verwijderen zonder voorafgaande kennisgeving als zij van mening is dat de genoemde bronnen ofwel een veiligheids- of operationele bedreiging voor de demodam-havenomgeving.

## Procedure van aanmelding
- Indiening van aanmeldings [issue](https://github.com/demodam/demodam.org/issues/new?assignees=bvhme%2C+Ainali%2C+AlbaRoza%2C+EdoPlantinga&labels=application&template=apply-as-organization.md&title=%5BOrganization+name%5D+would+like+to+apply+to+demodam)
- Controles en acceptatie door technische actiegroep
- Creëren van subdomein en naamspace
- Overdracht van subdomein en kubeconfig-bestand aan een aanmeldende organisatie

## Acceptatiecriteria door technische stuurgroep
- Naam moet uniek zijn
- Aanvraag moet een wettelijke of functionele vertegenwoordiger van de organisatie zijn

##  Kern onderdelen
Kerncomponenten zijn componenten op het cluster die worden onderhouden door de technische actiegroep omdat ze ofwel een havenvereiste zijn of een integraal onderdeel van het ecosysteem zijn

- NLX
- Open Zaak
- Haal Centraal (in drie uitvoeringen)
- - Vrij BRP
- - Personen openen
- - BRP-onderdeel
- Digispoof (Een digid mock)
- Decidim (https://decidim.org/)

Deze organisaties hoeven zich niet los te registreren
