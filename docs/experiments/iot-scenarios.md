---
sidebar_position: 1
---

# IoT Scenarios

## Use Case : Smart Factory 5G vRAN

SimpleRAN est idéal pour les déploiements IoT et industrie 4.0. Voici un cas d'usage pratique.

### Architecture IoT

```
┌─────────────────────────────────────────┐
│         SimpleRAN vRAN (5G)             │
│  ├─ Standard PC (Intel)                 │
│  ├─ OSS Stack (OAI DU/CU)              │
│  └─ Core Network (Free5GC)             │
└──────────────┬──────────────────────────┘
               │ 5G Coverage
        ┌──────┴──────┐
        │             │
    ┌───▼───┐   ┌────▼────┐
    │ IoT   │   │ Gateway  │
    │ Sensor│   │ / Edge   │
    └───────┘   └──────────┘
        │             │
        └─────────────┘
            Data Stream
               │
         ┌─────▼──────┐
         │ Wendelin   │
         │ Analysis   │
         └────────────┘
```

### Cas d'usage

1. **Capteurs industriels** : Température, pression, vibration
2. **Vidéo surveillance** : Décodage edge
3. **Robotique collaborative** : Contrôle bas latency
4. **Maintenance prédictive** : ML sur les données

---

## Déploiement typique

### Phase 1 : Infrastructure
- Déployer SimpleRAN sur PC standard
- Configurer RRH certifié
- Setup Wendelin pour data storage

### Phase 2 : Integration
- Connecter capteurs IoT en 5G
- Configurer edge computing
- Setup data pipeline

### Phase 3 : Analytics
- Ingérer données dans Wendelin
- Jupyter notebooks pour analysis
- Dashboards Grafana

---

## Data Flow

```
Sensors (5G) 
    │ Upload Data
    ▼
SimpleRAN (RAN Processing)
    │ Forward
    ▼
5GC UPF (Routing)
    │ Forward
    ▼
Wendelin (Big Data Lake)
    │ Process
    ▼
Jupyter Analysis
    │ Insights
    ▼
Grafana Dashboard
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| **Latency** | <50ms (E2E) |
| **Throughput** | 100+ Mbps |
| **Reliability** | 99.9% |
| **Scalability** | 1000+ sensors |

C'est plus loin avec Wendelin et SlapOS !
