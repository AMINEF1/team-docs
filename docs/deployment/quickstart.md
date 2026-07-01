---
sidebar_position: 1
---

# Déploiement rapide

## 60 secondes pour démarrer

```bash
# 1. Cloner le projet
git clone https://github.com/simpleran/simpleran-quick-start.git
cd simpleran-quick-start

# 2. Préparer l'infrastructure
./setup.sh

# 3. Démarrer le stack
docker-compose up

# 4. Accès à l'interface
open http://localhost:8080
```

---

## Prérequis matériel

### Minimum
- **CPU** : Intel/AMD multi-core (4+ cores)
- **RAM** : 16 GB
- **Stockage** : 50 GB SSD
- **Réseau** : Gigabit Ethernet

### Recommandé
- **CPU** : Intel Xeon / AMD EPYC (8+ cores)
- **RAM** : 32-64 GB
- **Stockage** : 500 GB SSD RAID
- **Réseau** : 10G Ethernet

### RRH
- **Certified vendor** : Airspan, Telia, Mavenir, Nokia, Ericsson
- **Interface** : eCPRI over Ethernet
- **Latency** : < 10ms

---

## Architecture déploiement standard

```
┌─────────────────────────────────────────────┐
│         Standard PC Commodity Server         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │    Hypervisor (KVM / VMware)        │   │
│  │                                     │   │
│  │  ┌──────────────┐  ┌────────────┐  │   │
│  │  │   O-DU VM    │  │  O-CU VM   │  │   │
│  │  │  (Baseband)  │  │(RRC/SDAP) │  │   │
│  │  └──────────────┘  └────────────┘  │   │
│  │                                     │   │
│  │  ┌──────────────────────────────┐   │   │
│  │  │    5GC (Free5GC / Open5GS)   │   │   │
│  │  │  AMF | SMF | UPF | NSSF      │   │   │
│  │  └──────────────────────────────┘   │   │
│  │                                     │   │
│  │  ┌──────────────────────────────┐   │   │
│  │  │    Management & Monitoring   │   │   │
│  │  │  Prometheus | Grafana | ELK  │   │   │
│  │  └──────────────────────────────┘   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │      Linux Kernel (Real-time)       │   │
│  │    - CPU isolation                  │   │
│  │    - PREEMPT_RT patches             │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
         │                         │
         │ eCPRI                   │ NGAP/N2
         ▼                         ▼
      ┌─────┐                 ┌─────────┐
      │ RRH │                 │  Core   │
      │     │                 │ Network │
      └─────┘                 └─────────┘
```

---

## Options de déploiement

### **Option 1 : All-in-One (Développement)**
- Tout sur une machine
- Parfait pour : PoC, lab, testing
- Déploiement : 15 minutes
- Coût : 1 serveur (~$500)

### **Option 2 : Distributed (Production)**
- DU / CU / 5GC sur machines séparées
- Parfait pour : Déploiement commercial
- Déploiement : Quelques heures
- Coût : 3-5 serveurs (~$2000)

### **Option 3 : Redundant (High Availability)**
- Multi-DU, multi-CU, multi-5GC
- Parfait pour : Critical infrastructure
- Déploiement : Jours (orchestration)
- Coût : 10+ serveurs (~$5000+)

---

## Stack logiciel disponibles

### **OAI (OpenAirInterface)**
- **Licence** : OAI Public License
- **Composants** : DU + CU
- **Performance** : 6 Gbps 5G (tested)
- **Déploiement** : Docker / VMs

### **srsRAN**
- **Licence** : GNU AGPL 3.0
- **Composants** : DU-lite
- **Performance** : 100 Mbps+ (USRP)
- **Déploiement** : Bare metal / Docker

### **5GC - Free5GC**
- **Licence** : Apache 2.0
- **Composants** : AMF, SMF, UPF, NSSF, PCF
- **Performance** : Production-ready
- **Déploiement** : Go services

### **5GC - Open5GS**
- **Licence** : AGPL 3.0
- **Composants** : MME, SMF, UPF, NSSF, HSS
- **Performance** : Lightweight
- **Déploiement** : C / Docker

---

## Outils & Management

### **Monitoring**
- **Prometheus** : Métriques RAN/Core
- **Grafana** : Dashboards
- **ELK Stack** : Logs centralisés

### **Orchestration**
- **Kubernetes** : Container orchestration
- **SlapOS** : SimpleRAN deployment platform
- **Ansible** : Infrastructure as Code

### **Testing**
- **UERANSIM** : 5G UE simulator
- **3GPP test suites** : Conformance testing
- **gnuradio** : RF signal analysis

---

## Temps de déploiement

| Setup | Temps | Complexité |
|-------|-------|-----------|
| **All-in-One** | 15 min | ⭐ Facile |
| **Distributed** | 2-4 h | ⭐⭐ Moyen |
| **Production** | 1-2 j | ⭐⭐⭐ Avancé |
| **HA/Redundant** | 3-5 j | ⭐⭐⭐⭐ Expert |

---

## Prochaines étapes

1. **Préparer le serveur** → [Infrastructure guide](./infrastructure.md)
2. **Déployer via SlapOS** → [SlapOS deployment](./slapos.md)
3. **Intégrer Wendelin** → [Wendelin guide](./wendelin.md)
