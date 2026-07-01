---
sidebar_position: 3
---

# Déploiement SlapOS

SlapOS sert de plateforme d'orchestration pour automatiser le déploiement des composants SimpleRAN.

## Rôle dans SimpleRAN

- Provisionner les services réseau sur des machines standard
- Séparer les rôles DU, CU, core network et monitoring
- Gérer les paramètres de déploiement de manière reproductible
- Faciliter les déploiements distribués et les environnements de test

## Préparation

Avant de déployer avec SlapOS, vérifier que l'infrastructure est prête :

- Serveurs préparés selon le guide [Infrastructure & Hardware](./infrastructure.md)
- Réseau segmenté pour fronthaul, midhaul et backhaul
- Accès SSH aux machines cibles
- Synchronisation NTP active
- Monitoring disponible pour valider le déploiement

## Flux de déploiement

```bash
# Exemple de séquence cible
slapos node register
slapos supply simpleran
slapos request simpleran-instance
slapos node instance
```

## Validation

Après provisionnement, contrôler :

- L'état des services DU/CU
- La connectivité avec le RRH
- L'enregistrement auprès du core network
- Les métriques Prometheus et les logs applicatifs
