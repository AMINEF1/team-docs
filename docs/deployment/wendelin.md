---
sidebar_position: 4
---

# Intégration Wendelin

Wendelin est utilisé comme brique de stockage et d'analyse pour les données issues des expérimentations SimpleRAN.

## Objectifs

- Centraliser les flux de données IoT et réseau
- Stocker les métriques long terme
- Préparer les jeux de données pour l'analyse
- Connecter les notebooks et dashboards aux données expérimentales

## Sources de données

- Métriques RAN collectées depuis Prometheus
- Logs DU/CU et core network
- Données IoT envoyées via le réseau 5G
- Résultats de tests UERANSIM et scénarios de charge

## Pipeline type

```text
Capteurs / UE
    -> SimpleRAN
    -> 5GC / UPF
    -> Wendelin
    -> Notebooks Jupyter
    -> Dashboards Grafana
```

## Points de contrôle

- Vérifier que les données arrivent avec un horodatage cohérent
- Séparer les métriques réseau, applicatives et IoT
- Documenter les paramètres de chaque expérience
- Conserver les versions de configuration utilisées pendant les tests
