---
sidebar_position: 3
---

# Composants SimpleRAN

## Architecture générale

```
┌──────────────────┐
│  User Equipment  │
│       (UE)       │
└────────┬─────────┘
         │ Air Interface (5G/4G)
         │
┌────────▼─────────┐
│      RRH         │ Remote Radio Head
│   (Dumb Radio)   │ - Supports any protocol
│                  │ - IETF eCPRI/split7
└────────┬─────────┘
         │
┌────────▼──────────────────────────┐
│   Standard PC (Intel/AMD)         │
│                                   │
│  ┌──────────────────────────────┐ │
│  │   O-RAN Stack (O-DU/O-CU)    │ │
│  │  - OSS / DU / CU             │ │
│  │  - OAI / gnuradio / srsRAN   │ │
│  │  - Linux / glibc             │ │
│  └──────────────────────────────┘ │
│                                   │
│  ┌──────────────────────────────┐ │
│  │   3GPP Standards             │ │
│  │  - gNB / eNB protocol         │ │
│  │  - NR-DC (Dynamic Spectrum)   │ │
│  └──────────────────────────────┘ │
└────────┬──────────────────────────┘
         │
┌────────▼──────────────────────────┐
│   Core Network (5GC/EPC)          │
│   - Open5GS / Free5GC             │
│   - AMF / SMF / UPF               │
└───────────────────────────────────┘
```

---

## Détail des composants

### RRH (Remote Radio Head)
- **Rôle** : Antenne "bête" - aucune logique de réseau
- **Protocoles** : eCPRI / split7 (IETF)
- **Standards** : Dumb radio, tout protocole supporté
- **Certification** : 5 vendeurs déjà certifiés SimpleRAN
- **Avantage** : Réutilisable pour 4G, 5G, 6G

### SDR (Software Defined Radio)
- **Fonction** : Traitement radio (baseband)
- **Implémentations** :
  - OAI (Open Air Interface)
  - srsRAN
  - gnuradio
- **Standards** : 3GPP NR, LTE
- **Flexibilité** : Logiciel, mises à jour OTA

### OSS (Open Source Software)
- **Composants** :
  - **DU (Distributed Unit)** : Split 7 / CU/DU split
  - **CU (Centralized Unit)** : Logique de haut niveau
- **Implementations** : OAI, srsRAN, gnuradio
- **Linux Foundation** : Totalement open source
- **Performance** : 100% logiciel

### Core Network
- **Implémentations** :
  - Free5GC
  - Open5GS
- **Fonctions** : AMF, SMF, UPF, NSSF
- **Standards** : 3GPP 5G Core
- **Distributed** : Support réseau distribué

### Standard PC (Intel/AMD)
- **CPU** : Processeurs Intel/AMD standard
- **RAM** : 32-64 GB selon déploiement
- **Stockage** : SSD pour OS + données
- **Avantage** : Pas d'accélérateurs propriétaires
- **Coût** : Commodity hardware

---

## Interfaces standards

### Interface air (RU to DU)
- **Standard** : IETF eCPRI / split7
- **Type** : Fronthaul encapsulation
- **Performance** : Latence basse (<10ms)
- **Vendor-neutral** : Tout RRH compatible

### Interface DU to CU
- **Standard** : 3GPP F1-AP
- **Encapsulation** : Protocols agnostiques
- **Type** : Midhaul (optionnel, peut être colocalisé)

### Interface Core to 5G Core Network
- **Standard** : 3GPP N2 (NGAP)
- **Protocol** : SCTP/IP
- **Type** : Signalisation vers Core

---

## Avantages d'architecture

| Aspect | Bénéfice |
|--------|----------|
| **Modularité** | Changer un composant sans redesign |
| **Scalabilité** | Ajouter RRHs facilement |
| **Transparence** | Standards ouverts, pas de propriété |
| **Performance** | 6 Gbps 5G réel |
| **Coût** | 50% moins cher que solutions propriétaires |
| **Flexibilité** | Même hardware pour 4G ou 5G |

---

## Déploiement typique

```
Tier 1 (Access):        Tier 2 (Processing):     Tier 3 (Core):
┌─────────┐             ┌──────────────────┐     ┌──────────────┐
│  RRH    │──eCPRI──►   │  Standard PC     │     │  5GC / Core  │
│ (Radio) │             │  ├─ OAI DU       │────►│  (Free5GC)   │
└─────────┘             │  ├─ OAI CU       │     └──────────────┘
                        │  └─ Linux        │
                        └──────────────────┘
```

Tout vendor-neutral, standards IETF/3GPP, zéro dépendance propriétaire !
