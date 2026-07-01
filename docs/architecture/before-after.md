---
sidebar_position: 2
---

# SimpleRAN : Before & After

## Architecture Before (Traditional vRAN)

Avant SimpleRAN, les architectures vRAN étaient complexes et dépendaient fortement de matériel propriétaire :

### Problèmes
- **Nombreux composants** : 8+ éléments différents
- **Dépendances matérielles** : Accélérateurs propriétaires obligatoires
- **Coûts élevés** : Infrastructure onéreuse
- **Complexité de déploiement** : Difficile à mettre en place
- **Vendor lock-in** : Lié aux solutions des fournisseurs

### Composants avant
```
┌─────────────────────────────────────────┐
│  Multiple Proprietary Stack Layers      │
│  - Custom Acceleration Hardware         │
│  - Vendor-specific Software             │
│  - Complex Integration Points           │
│  - High Cost Components                 │
└─────────────────────────────────────────┘
```

---

## Architecture After (SimpleRAN)

SimpleRAN a radicalement simplifié le déploiement en réduisant les composants et en éliminant les dépendances matérielles.

### Principes SimpleRAN
- **Principe clé** : "4 fois moins de composants, moitié du coût"
- **Standard PC** : Intel/AMD standard, pas d'accélérateurs nécessaires
- **Open Source** : 100% logiciel
- **Standards ouverts** : 3GPP, ETSI
- **Flexibilité** : Supports 4G, 5G, 6G sur le même hardware

### Composants après
```
┌──────────────────────────────────────────┐
│  Simplified SimpleRAN Stack              │
│                                          │
│  OSS (Open Source Software)              │
│  ├─ CSS / Edge Nodes                     │
│  ├─ OAI / gnuradio                       │
│  └─ Linux                                │
│                                          │
│  SDR (Software Defined Radio)            │
│  ├─ 3GPP Standards                       │
│  └─ gNB / eNB                            │
│                                          │
│  RRH (Remote Radio Head)                 │
│  └─ Dumb radio, any protocol             │
└──────────────────────────────────────────┘
```

---

## Comparaison côte à côte

| Aspect | Avant | SimpleRAN |
|--------|-------|-----------|
| **Composants** | 8+ | 1-2 |
| **Hardware** | Propriétaire + accélérateurs | Standard PC |
| **Coût** | $$$$$ | $$ |
| **Déploiement** | 6-12 mois | Semaines |
| **Standards** | Propriétaires | 3GPP, ETSI, IETF |
| **Performance** | Propriétaire | 6 Gbps 5G |
| **Support 4G/5G** | Séparé | Dynamique |
| **Dépendance** | Vendor lock-in | Vendor neutral |

---

## Résultats clés

✅ **Réduction de 75%** des composants  
✅ **Réduction de 50%** des coûts  
✅ **Déploiement rapide** sur PC standard  
✅ **Performance complète 5G** (6 Gbps)  
✅ **Compatibilité 4G/5G dynamique**  
✅ **Zéro dépendance matérielle propriétaire**
