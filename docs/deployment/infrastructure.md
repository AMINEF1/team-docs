---
sidebar_position: 2
---

# Infrastructure & Hardware

## Serveurs recommandés

### Pour développement/lab
```
CPU:      Intel i7 / AMD Ryzen 7 (6+ cores)
RAM:      32 GB DDR4
Storage:  500 GB SSD (NVMe preferred)
Network:  1 Gbps Ethernet
```

### Pour production (all-in-one)
```
CPU:      Intel Xeon E5 / AMD EPYC 7001 (12+ cores)
RAM:      64 GB DDR4 ECC
Storage:  1 TB SSD RAID 1
Network:  10 Gbps Ethernet
```

### Pour production distribuée (multi-serveur)
```
DU Server:
  CPU:     Intel Xeon / AMD EPYC (16+ cores)
  RAM:     32-64 GB DDR4 ECC
  Storage: 500 GB SSD RAID
  
CU Server:
  CPU:     Intel Xeon / AMD EPYC (8+ cores)
  RAM:     16 GB DDR4 ECC
  Storage: 250 GB SSD
  
5GC Server:
  CPU:     Intel Xeon / AMD EPYC (8+ cores)
  RAM:     32 GB DDR4 ECC
  Storage: 500 GB SSD RAID
```

---

## RRH Certifiés

### Certified SimpleRAN RRHs

| Vendor | Model | Bands | Channels | Interface | Status |
|--------|-------|-------|----------|-----------|--------|
| **Airspan** | OpenRAN | B1,3,7,20 | 100 MHz | eCPRI | ✅ |
| **Telia** | RadioNode | B1,3,7,8 | 20 MHz | eCPRI | ✅ |
| **Mavenir** | Cloud RAN | All | Dynamic | eCPRI | ✅ |
| **Nokia** | AirScale | All | Dynamic | eCPRI | ✅ |
| **Ericsson** | Streetmacro | All | Dynamic | eCPRI | ✅ |

---

## Système d'exploitation

### Recommandé : Linux with PREEMPT_RT

```bash
# Ubuntu 22.04 LTS avec PREEMPT_RT
uname -r
# 5.15.0-rt50-generic (exemple)

# Vérifier support real-time
grep CONFIG_PREEMPT_RT /boot/config-$(uname -r)
# CONFIG_PREEMPT_RT=y
```

### Kernel parameters

```bash
# /etc/sysctl.d/99-realtime.conf

# CPU isolation
isolcpus=1-7
nohz_full=1-7
rcu_nocbs=1-7

# Memory limits
vm.swappiness=0
vm.max_map_count=262144

# Network tuning
net.core.rmem_max=268435456
net.core.wmem_max=268435456
net.ipv4.tcp_rmem=4096 87380 134217728
net.ipv4.tcp_wmem=4096 65536 134217728
```

---

## Réseau

### Segmentation réseau

```
┌─────────────────────────────────────────┐
│ Management VLAN (192.168.1.0/24)       │
├─────────────────────────────────────────┤
│ Fronthaul VLAN (eCPRI, 192.168.2.0/24) │
├─────────────────────────────────────────┤
│ Midhaul VLAN (F1-AP, 192.168.3.0/24)   │
├─────────────────────────────────────────┤
│ Backhaul VLAN (NGAP, 192.168.4.0/24)   │
├─────────────────────────────────────────┤
│ Data VLAN (N6, 192.168.5.0/24)         │
└─────────────────────────────────────────┘
```

### Recommandations

- **VLANs séparés** : Isoler trafic DU/CU/5GC
- **QoS** : Garantir latency pour fronthaul
- **Redundancy** : Dual uplinks vers core
- **Firewall** : Rules strictes inter-VLANs

---

## Performance tuning

### CPU affinity

```bash
# Isoler CPUs pour DU (critical)
taskset -c 1-7 /path/to/du/binary

# CPUs pour CU (moins critique)
taskset -c 8-11 /path/to/cu/binary
```

### Benchmark

```bash
# Testing latency
ping -D -i 0.01 <rrh-ip>

# Testing throughput
iperf3 -c <target> -t 60

# Testing jitter
ping -D <target> | tail -1
```

---

## Stockage

### Configuration recommandée

- **OS** : 50 GB SSD
- **Logs** : 100 GB SSD (rotated)
- **Database** : 500 GB SSD (UDR, HSS)
- **Archive** : 1 TB HDD (historical data)

### RAID

```bash
# RAID 1 (Mirror) - Reliable
/dev/md0: RAID-1 (/dev/sda1, /dev/sdb1)

# RAID 6 (High capacity) - For large deployments
/dev/md0: RAID-6 (/dev/sda1, /dev/sdb1, /dev/sdc1, /dev/sdd1)
```

---

## Power & Cooling

### Requirements

- **Power** : 500-2000 W depending on setup
- **Cooling** : 40-50°C optimal operating temp
- **Redundancy** : Dual PSUs (N+1)
- **UPS** : 30min minimum for graceful shutdown

---

## Checklist pré-déploiement

- [ ] Serveur conforme spécifications
- [ ] OS installé et patché
- [ ] Kernel real-time configuré
- [ ] Réseau segmenté (VLANs)
- [ ] NTP synchronisé
- [ ] Monitoring actif (Prometheus)
- [ ] Backups configurés
- [ ] RRH(s) accessible par eCPRI
- [ ] Core network reachable
- [ ] DNS/DHCP fonctionnel
