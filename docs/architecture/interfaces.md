---
sidebar_position: 4
---

# Standards & Interfaces SimpleRAN

## Standards fondamentaux

SimpleRAN repose sur des standards ouverts et transparents :

### **3GPP (3rd Generation Partnership Project)**
- **NR (New Radio)** : 5G air interface
- **LTE (Long Term Evolution)** : 4G air interface
- **NR-DC (Dual Connectivity)** : Partage dynamique 4G/5G
- **Objectif** : Interopérabilité mondiale

### **ETSI (European Telecommunications Standards Institute)**
- **MEC (Multi-access Edge Computing)** : Calcul en périphérie
- **O-RAN (Open RAN)** : Architecture ouverte
- **vRAN Architecture** : Virtualisation réseau radio
- **NFV (Network Function Virtualization)** : Virtualisation fonctions réseau

### **IETF (Internet Engineering Task Force)**
- **eCPRI (evolved Common Public Radio Interface)** : Fronthaul
- **Split 7** : Séparation DU/RRH
- **TCP/IP** : Transport de base
- **SCTP** : Signalisation fiable

### **IEEE**
- **802.11 / Wi-Fi** : Coexistence spectre
- **802.1Q VLAN** : Segmentation réseau

---

## Interfaces clés

### Radio Unit to Distributed Unit (eCPRI)
```
RRH (Remote Radio Head) ──eCPRI──► DU (Distributed Unit)
  Dumb radio                    Baseband processing
  
- Standard: IETF eCPRI / split7
- Latency: below 10ms
- Encapsulation: Ethernet / IP
- Vendor-neutral: Toute implémentation compatible
```

### Distributed Unit to Centralized Unit (F1-AP)
```
DU (Distributed Unit) ──F1-AP──► CU (Centralized Unit)
  RLC/MAC/PHY                  RRC/SDAP
  
- Standard: 3GPP F1-AP
- Protocol: SCTP/IP
- Latency: below 100ms
- Type: Midhaul
```

### Centralized Unit to 5G Core Network (N2/NGAP)
```
CU (gNB) ──NGAP──► 5GC (AMF/SMF)
  RAN           Core Network
  
- Standard: 3GPP N2 NGAP
- Protocol: SCTP/IP
- Type: Backhaul
- Reliability: Full 3GPP compliance
```

### Data Path (N3 GTP-U)
```
UPF (5GC) ◄──GTP-U──► UE
  User Plane        Mobile
  
- Standard: 3GPP GTP-U
- Protocol: UDP/IP
- Encapsulation: VLAN / QoS
- Performance: Symmetric throughput
```

---

## Design Principles

### **"Should rather than Must"**
SimpleRAN recommande mais n'impose pas. Les implémentations doivent :
- **MUST** : Être transparentes (interfaces publiques)
- **SHOULD** : Suivre 3GPP/ETSI standards
- **OPTIONAL** : Implémenter des accélérateurs propriétaires

### **Vendor Neutrality**
- **Core principle** : "Make whatever you want as long as you tell us how to connect"
- **Implication** : Toute solution peut être SimpleRAN-compliant si interfaces publiques
- **No NDA required** : Transparence totale

---

## Conformité & Certification

### **RRH Certification**
Processus pour certifier un RRH comme SimpleRAN-compliant :

1. **Documentation** : Interfaces publiques (eCPRI, split7)
2. **Testing** : Interopérabilité avec DU open source
3. **Verification** : Performance, latency, standards compliance
4. **Certification** : Ajout à la liste des vendeurs certifiés

### **Vendeurs RRH certifiés**
- Airspan
- Telia
- Mavenir
- Nokia
- Ericsson

### **Software Stack Compliance**
- OAI (OpenAirInterface) : Certification DU/CU
- srsRAN : Full 3GPP compliance
- Free5GC / Open5GS : 5GC certification

---

## Évolution des standards

### **4G → 5G → 6G**
SimpleRAN est conçu pour supporter l'évolution :

```
4G (LTE)        5G (NR)           6G (Future)
├─ LTE air      ├─ NR air         ├─ Next Gen air
├─ EPC core     ├─ 5GC core       ├─ Next Gen core
├─ E-UTRAN      ├─ NG-RAN         ├─ Future RAN
└─ EPC-NF       └─ 3GPP NFs       └─ Future NFs
```

**Avantage SimpleRAN** : Même RRH, même hardware, juste mise à jour logiciel !

---

## Performance guaranties

### **Data Rate**
- **5G NR** : Jusqu'à 6 Gbps (tested)
- **4G LTE** : Jusqu'à 1.2 Gbps
- **Dual connectivity** : Agrégation 4G+5G

### **Latency**
- **Air interface** : ~1ms (5G)
- **Fronthaul (eCPRI)** : ~10ms
- **Midhaul** : ~100ms max

### **Reliability**
- **99.9999% uptime** (5-nines)
- **Zero-packet-loss** configurations
- **Automatic failover** pour distributed setup
