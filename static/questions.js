const QUESTIONS = [
  {
    "id": "z1-n1-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "Which protocol is specifically responsible for error reporting at Layer 3?",
    "options": [
      "TCP (Transmission Control Protocol)",
      "IP (Internet Protocol)",
      "ICMP (Internet Control Message Protocol)",
      "UDP (User Datagram Protocol)"
    ],
    "correct_index": 2,
    "explanation": "While IP is responsible for the actual routing of packets, ICMP is the specific protocol used by network devices to send error messages and operational information back to the source."
  },
  {
    "id": "z1-n1-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "What does PDU stand for, and what is the PDU called at Layer 2?",
    "options": [
      "Protocol Data Unit - Frame",
      "Packet Distribution Unit - Packet",
      "Process Delivery Unit - Segment",
      "Physical Data Unit - Bit"
    ],
    "correct_index": 0,
    "explanation": "PDU stands for Protocol Data Unit. At Layer 2 (Data Link), the PDU is called a Frame. At Layer 3 it's a Packet, at Layer 4 it's a Segment."
  },
  {
    "id": "z1-n1-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "Which OSI layer uses IP addresses to route packets between different networks?",
    "options": [
      "Layer 2",
      "Layer 3",
      "Layer 4",
      "Layer 7"
    ],
    "correct_index": 1,
    "explanation": "Layer 3 (Network Layer) handles IP addressing and routing between different networks. Layer 2 uses MAC addresses for local delivery only."
  },
  {
    "id": "z1-n1-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "A network administrator is troubleshooting a connection issue and discovers that a transceiver is failing to convert electrical pulses into light pulses for a fiber-optic link. Which layer of the OSI model is primarily responsible for this process?",
    "options": [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Physical Layer"
    ],
    "correct_index": 3,
    "explanation": "The Physical Layer handles the actual transmission of raw bitstreams over a medium \u2014 the electrical, mechanical, and functional aspects of the connection, like how voltage levels or light pulses represent bits. A transceiver converting electrical pulses to light pulses is doing signaling over a physical medium (fiber) \u2014 that's Layer 1. Wrong: Data Link (frames/MAC), Network (packets/IP routing), and Transport (segments/ports) all operate ABOVE the physical signal conversion itself."
  },
  {
    "id": "z1-n1-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "Which sublayer of the Data Link Layer is primarily responsible for providing an interface to the Network Layer and managing flow control?",
    "options": [
      "LLC (Logical Link Control)",
      "MAC (Media Access Control)",
      "Physical Layer",
      "Network Layer"
    ],
    "correct_index": 0,
    "explanation": "The Data Link Layer splits into LLC and MAC. LLC interfaces with higher layers (like the Network Layer), handling synchronization and flow control; MAC handles physical addressing (MAC addresses) and access to the transmission medium. Wrong: MAC handles addressing/media access, not the higher-layer interface; the Physical Layer is below Data Link entirely; the Network Layer is the higher layer LLC interfaces WITH, not part of Data Link."
  },
  {
    "id": "z1-n1-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "Which of the following best describes the primary function of a router at the Network Layer (Layer 3)?",
    "options": [
      "Using logical addresses to determine the best path for packets across different networks.",
      "Managing the physical connection between two computers using MAC addresses.",
      "Encapsulating data into frames for local network transmission.",
      "Providing electrical signals over a physical medium like copper wire."
    ],
    "correct_index": 0,
    "explanation": "A router's job at Layer 3 is to use logical (IP) addresses to determine the best path for packets between networks \u2014 exactly the regional sorting-facility role in the postal analogy. Wrong: MAC-address connections and frame encapsulation are Layer 2 (Data Link); raw electrical signaling over copper is Layer 1 (Physical) \u2014 neither is Layer 3's job."
  },
  {
    "id": "z1-n1-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "A network engineer is configuring a new VoIP (Voice over IP) system. The engineer decides to use a protocol that prioritizes low latency and speed over guaranteed delivery to ensure the conversation remains fluid. Which transport layer protocol is being utilized?",
    "options": [
      "UDP (User Datagram Protocol)",
      "TCP (Transmission Control Protocol)",
      "IP (Internet Protocol)",
      "ICMP (Internet Control Message Protocol)"
    ],
    "correct_index": 0,
    "explanation": "Prioritizing low latency and speed over guaranteed delivery is the hallmark of UDP \u2014 connectionless, no handshakes or retransmissions, ideal for real-time VoIP. Wrong: TCP's error correction and flow control would add 'lag' that breaks a live conversation; IP and ICMP both operate at Layer 3 (Network), not Layer 4 (Transport)."
  },
  {
    "id": "z1-n1-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.1,
    "question": "A network administrator observes that while a connection is being established and maintained successfully, the data arriving at the destination is garbled and cannot be interpreted because the character encoding/formatting is incorrect. Which OSI layer is primarily responsible for handling this data translation?",
    "options": [
      "Presentation Layer",
      "Session Layer",
      "Application Layer",
      "Transport Layer"
    ],
    "correct_index": 0,
    "explanation": "The Presentation Layer (6) handles the 'syntax and semantics' of data: translation (matching character encoding/format between systems), encryption, and compression. Garbled data caused by mismatched encoding/formatting \u2014 while the connection itself is fine \u2014 points squarely here. Wrong: the Session Layer manages the connection itself, not data format; the Application Layer provides the user interface; the Transport Layer handles end-to-end error recovery and flow control \u2014 none of these touch data formatting."
  },
  {
    "id": "z1-n2-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "What does VLAN stand for?",
    "options": [
      "Virtual Local Area Network",
      "Virtual Layer Access Node",
      "Virtual Link Aggregation Network",
      "Virtual Local Access Network"
    ],
    "correct_index": 0,
    "explanation": "VLAN stands for Virtual Local Area Network, which logically segments a switch at Layer 2."
  },
  {
    "id": "z1-n2-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "A technician is inspecting a legacy network segment and finds a hub connecting several computers. Which of the following best describes how this device handles incoming data frames?",
    "options": [
      "It broadcasts the frame to all other ports on the device.",
      "It uses MAC addresses to send the frame to a specific port.",
      "It isolates each port into its own separate collision domain.",
      "It provides dedicated, non-shared bandwidth to each connected device."
    ],
    "correct_index": 0,
    "explanation": "A hub is a 'dumb' Layer 1 device \u2014 lacking the intelligence to read MAC addresses, it simply broadcasts any signal received on one port out to every other port. Wrong: (B) describes a SWITCH, which uses a MAC address table for selective forwarding. (C) backwards \u2014 a hub creates ONE collision domain for ALL ports; only a switch separates them per port. (D) hubs use shared, not dedicated, bandwidth \u2014 that's a switch/full-duplex feature."
  },
  {
    "id": "z1-n2-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "A switch receives a frame with a specific destination MAC address that is already present in its CAM table. What action will the switch take?",
    "options": [
      "It will perform unicast forwarding by sending the frame out of the specific port associated with that MAC address.",
      "It will flood the frame out of all ports within the VLAN to ensure delivery.",
      "It will drop the frame because the destination is already known.",
      "It will encapsulate the frame in an IP header and send it to the default gateway."
    ],
    "correct_index": 0,
    "explanation": "Because the destination MAC address is already in the CAM table, the switch knows exactly which port leads there and performs unicast forwarding \u2014 sending the frame only to that port, not flooding it. This reduces congestion and improves security. Wrong: flooding, dropping, or re-encapsulating into an IP packet are not what a switch does once a destination MAC is already known."
  },
  {
    "id": "z1-n2-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "Which component acts as a 'map' or directory that a router uses to determine the best path for a packet to reach its destination?",
    "options": [
      "Routing Table",
      "Default Gateway",
      "MAC Address Table",
      "Network Interface Card (NIC)"
    ],
    "correct_index": 0,
    "explanation": "A routing table is the router's database of paths to destination networks \u2014 the primary tool a Layer 3 device uses to decide where to send a packet next. Wrong: the default gateway is just ONE entry/exit point, not the whole map; a MAC address table is a Layer 2 switch tool; a NIC is the hardware connecting a device to a network, not a directory."
  },
  {
    "id": "z1-n2-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "A network administrator wants to implement a firewall feature that can distinguish between a random unsolicited packet and a packet that is a legitimate response to a request previously sent by an internal user. Which technology should be used?",
    "options": [
      "Stateful Inspection",
      "Packet Filtering",
      "Access Control List (ACL)",
      "DMZ (Demilitarized Zone)"
    ],
    "correct_index": 0,
    "explanation": "Stateful Inspection tracks the state of active connections, so the firewall can recognize an incoming packet as part of an existing, valid session it initiated \u2014 unlike Packet Filtering, which only checks headers in isolation with no memory of prior traffic. Wrong: an ACL is the rule set itself, and a DMZ is a network zone, not an inspection method."
  },
  {
    "id": "z1-n2-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "A large corporation is setting up a new headquarters and wants to ensure that employees can walk from the lobby to the third floor without their Wi-Fi connection dropping, while also wanting to manage all security settings from a single interface. Which architecture should they implement?",
    "options": [
      "Controller-based APs forming an ESS",
      "Standalone APs forming a single BSS",
      "A single WAP with a high-gain antenna",
      "Multiple Standalone APs with different SSIDs"
    ],
    "correct_index": 0,
    "explanation": "Seamless roaming requires linking multiple BSSs into an ESS, so clients move between APs without re-authenticating. Managing it all from one interface requires a controller-based architecture, where a WLC pushes configs to every AP simultaneously. Wrong: standalone APs need manual per-device configuration; a single high-gain WAP can't cover multiple floors; different SSIDs per AP would break seamless roaming entirely."
  },
  {
    "id": "z1-n2-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "What does IDS stand for, and does it alert or block?",
    "options": [
      "Intrusion Detection System - Alerts only",
      "Intrusion Defense System - Blocks only",
      "Internal Data Scanner - Both alerts and blocks",
      "Internet Defense Shield - Neither"
    ],
    "correct_index": 0,
    "explanation": "IDS stands for Intrusion Detection System. It only ALERTS on suspicious activity. IPS (Intrusion Prevention System) is what actively blocks threats."
  },
  {
    "id": "z1-n2-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "What type of firewall remembers the state of connections and allows return traffic automatically?",
    "options": [
      "Stateless",
      "Stateful",
      "UTM",
      "IDS"
    ],
    "correct_index": 1,
    "explanation": "A Stateful firewall remembers connection states and allows return traffic automatically. Stateless firewalls check each packet in isolation without memory."
  },
  {
    "id": "z1-n2-study-008",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.2,
    "question": "When an SNMP agent sends a Trap or an Inform to a management station, which UDP port is used?",
    "options": [
      "161",
      "162",
      "53",
      "443"
    ],
    "correct_index": 1,
    "explanation": "The correct answer is 162. SNMP agents send Traps and Informs to the manager on UDP port 162. Port 161 is used by the manager to poll the agent. Options 53 (DNS) and 443 (HTTPS) are unrelated to SNMP transport."
  },
  {
    "id": "z1-n3-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced API Protocol",
      "Automated API System",
      "Active API Technology"
    ],
    "correct_index": 0,
    "explanation": "API stands for Application Programming Interface."
  },
  {
    "id": "z1-n3-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "Which cloud service model provides the highest level of management by the customer, including the operating system and applications?",
    "options": [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "FaaS (Function as a Service)"
    ],
    "correct_index": 0,
    "explanation": "IaaS provides raw compute, storage, and networking, leaving the customer responsible for the OS, middleware, and applications. PaaS manages more of the stack; SaaS manages nearly everything."
  },
  {
    "id": "z1-n3-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What does VPC stand for?",
    "options": [
      "Virtual Private Cloud",
      "Virtual Public Connection",
      "Virtual Protocol Center",
      "Virtual Protection Cloud"
    ],
    "correct_index": 0,
    "explanation": "VPC = Virtual Private Cloud. It's your private, isolated slice of a public cloud provider's infrastructure."
  },
  {
    "id": "z1-n3-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "A software development team wants to build a custom application. They want to manage the application code and the data, but they do not want the hassle of managing operating system updates, server hardware, or network configurations. Which cloud service model should they utilize?",
    "options": [
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "SaaS (Software as a Service)",
      "On-premises local hosting"
    ],
    "correct_index": 0,
    "explanation": "PaaS provides a 'platform' \u2014 OS, middleware, and runtime \u2014 letting developers focus purely on their code and data while the provider handles the underlying infrastructure and OS. Wrong: (B) IaaS would still leave them managing the OS themselves. (C) SaaS is for end-users consuming finished software, not building custom apps. (D) on-prem hosting means managing everything \u2014 exactly what they want to avoid."
  },
  {
    "id": "z1-n3-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "A large financial institution needs to keep its most sensitive transaction data on highly controlled, dedicated hardware for regulatory compliance, but wants to use the scalable, cost-effective resources of AWS for its public-facing marketing website. Which cloud deployment model are they utilizing?",
    "options": [
      "Hybrid Cloud",
      "Public Cloud",
      "Private Cloud",
      "Community Cloud"
    ],
    "correct_index": 0,
    "explanation": "The institution is combining two deployment models: a Private Cloud for sensitive, dedicated transaction data, and a Public Cloud (AWS) for the marketing site \u2014 that combination and integration of both IS the definition of Hybrid Cloud. Wrong: Public alone wouldn't meet the regulatory/dedicated-hardware requirement; Private alone wouldn't give the scalable marketing-site benefits; Community Cloud requires shared infrastructure with OTHER organizations, not present here."
  },
  {
    "id": "z1-n3-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "A company is experiencing a massive surge in web traffic due to a flash sale. To handle the load, their cloud environment automatically triggers the deployment of ten additional virtual servers, which are then decommissioned once the sale ends to save costs. Which NIST cloud characteristic does this describe?",
    "options": [
      "Rapid elasticity",
      "Resource pooling",
      "On-demand self-service",
      "Measured service"
    ],
    "correct_index": 0,
    "explanation": "Rapid elasticity is the ability to scale resources up or down quickly to match demand \u2014 exactly the 'spin up ten servers for the sale, then decommission them' pattern described. Wrong: (B) resource pooling describes the provider's shared multi-tenant infrastructure, not the scaling action itself. (C) on-demand self-service is about provisioning without human interaction, not automatic scaling. (D) measured service is about billing for usage, not the scaling mechanism."
  },
  {
    "id": "z1-n3-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "A large corporation needs to connect its regional headquarters to its cloud VPC. The IT department requires a connection that offers the highest possible consistency in latency and must bypass the public internet to ensure maximum security and performance. Which method should they implement?",
    "options": [
      "Client VPN",
      "Site-to-Site VPN",
      "Direct Connect",
      "API Access"
    ],
    "correct_index": 2,
    "explanation": "Direct Connect provides a physical, private link to the cloud provider, completely bypassing the public internet \u2014 giving the most predictable latency and highest security/performance. Wrong: Site-to-Site VPN still relies on the public internet for its 'tunnel,' so latency varies; Client VPN is for individual users, not a whole HQ; API access is for programmatic management, not a physical network transport path."
  },
  {
    "id": "z1-n3-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "An organization is planning to migrate its web applications to a cloud provider. The IT manager expresses concern that if they use the provider's specialized, proprietary database-as-a-service (DBaaS) tools, it will be nearly impossible to move their workloads to a different provider later without a complete rewrite of their code. Which concept is the manager describing?",
    "options": [
      "Shared Responsibility Model",
      "Scalability",
      "Vendor Lock-in",
      "Capital Expenditure"
    ],
    "correct_index": 2,
    "explanation": "Relying on a provider's proprietary DBaaS tools so heavily that switching providers would require a complete code rewrite is the textbook definition of Vendor Lock-in. Wrong: (A) Shared Responsibility Model describes the security division between provider and customer, unrelated to migration difficulty. (B) Scalability is about adjusting resource capacity, not portability. (D) Capital Expenditure refers to upfront hardware costs, not software dependency."
  },
  {
    "id": "z1-n3-study-008",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What is the software called that creates and manages virtual machines?",
    "options": [
      "Hypervisor",
      "Container",
      "Kernel",
      "Switch"
    ],
    "correct_index": 0,
    "explanation": "A hypervisor is the software/firmware that creates and runs virtual machines. Examples include VMware ESXi, Hyper-V, and VirtualBox."
  },
  {
    "id": "z1-n3-study-009",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "In SDN, what does the Control Plane handle?",
    "options": [
      "Physical cable connections",
      "Packet forwarding decisions",
      "Routing decisions and network logic",
      "Power management"
    ],
    "correct_index": 2,
    "explanation": "In SDN, the Control Plane (managed by the SDN Controller) handles routing decisions and network logic. The Data Plane handles actual packet forwarding."
  },
  {
    "id": "z1-n3-study-010",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What does IaC (Infrastructure as Code) mean in network automation?",
    "options": [
      "Installing cables in a structured way",
      "Defining network configuration in files that can be versioned and deployed",
      "Using voice commands to configure switches",
      "Physical cable color coding standards"
    ],
    "correct_index": 1,
    "explanation": "Infrastructure as Code means defining network configurations in machine-readable files that can be versioned, tested, and automatically deployed to devices."
  },
  {
    "id": "z1-n3-study-011",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What is the core principle of Zero Trust security?",
    "options": [
      "Trust but verify",
      "Never trust, always verify",
      "Security through obscurity",
      "Perimeter defense is sufficient"
    ],
    "correct_index": 1,
    "explanation": "Zero Trust operates on 'Never trust, always verify' - every access request is authenticated and authorized, regardless of where it comes from."
  },
  {
    "id": "z1-n3-study-012",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.3,
    "question": "What does a VPN (Virtual Private Network) primarily provide?",
    "options": [
      "Faster internet speeds",
      "Encrypted connection over public networks",
      "Free WiFi access",
      "Automatic IP address assignment"
    ],
    "correct_index": 1,
    "explanation": "A VPN creates an encrypted tunnel over public networks, allowing secure remote access to private network resources."
  },
  {
    "id": "z1-n4-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "Which protocol uses port 443 for encrypted web traffic?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "SSH"
    ],
    "correct_index": 1,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses port 443 for encrypted web traffic."
  },
  {
    "id": "z1-n4-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "Which statement correctly distinguishes TCP from UDP?",
    "options": [
      "TCP is reliable and connection-oriented; UDP is fast and connectionless.",
      "TCP is fast and connectionless; UDP is reliable and connection-oriented.",
      "Both TCP and UDP guarantee delivery of all packets.",
      "Neither TCP nor UDP uses port numbers."
    ],
    "correct_index": 0,
    "explanation": "TCP provides reliable, ordered delivery through connections, sequencing, and acknowledgments. UDP sends packets quickly without guaranteeing delivery. Both use port numbers to identify services."
  },
  {
    "id": "z1-n4-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "Which protocol and port is used for secure remote command-line access to a server?",
    "options": [
      "Telnet Port 23",
      "SSH Port 22",
      "RDP Port 3389",
      "FTP Port 21"
    ],
    "correct_index": 1,
    "explanation": "SSH (Secure Shell) uses Port 22 for secure remote command-line access. Telnet is the unsecured alternative. RDP is for graphical remote desktop."
  },
  {
    "id": "z1-n4-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "A network administrator needs to remotely manage a Linux server and requires that all commands and data sent during the session be encrypted to prevent eavesdropping. Which port should be used?",
    "options": [
      "Port 22 (SSH)",
      "Port 23 (Telnet)",
      "Port 80 (HTTP)",
      "Port 21 (FTP)"
    ],
    "correct_index": 0,
    "explanation": "SSH (Port 22) provides an encrypted channel for remote command-line management \u2014 exactly the 'no eavesdropping' requirement. Wrong: (B) Telnet (Port 23) is the insecure equivalent of SSH, sending everything in plain text \u2014 the opposite of what's needed. (C) HTTP (Port 80) is for unencrypted web traffic, not remote shell access. (D) FTP (Port 21) transfers files, and like Telnet, sends credentials and data unencrypted."
  },
  {
    "id": "z1-n4-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "A network administrator is troubleshooting a device that is failing to synchronize its system clock with the master time server. Which UDP port should be checked to ensure the time synchronization protocol is allowed through the firewall?",
    "options": [
      "123",
      "53",
      "69",
      "161"
    ],
    "correct_index": 0,
    "explanation": "NTP (Network Time Protocol) synchronizes clocks across devices and runs on UDP port 123 \u2014 the port to check when a clock won't sync with the master time server. Wrong: (B) DNS uses port 53 for name resolution. (C) TFTP uses port 69 for simple file transfers. (D) SNMP uses port 161 for device monitoring \u2014 none handle time sync."
  },
  {
    "id": "z1-n4-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "A network engineer is designing a network for a company that requires both high-speed video conferencing and highly accurate database synchronization. Which combination of protocols would be most appropriate for these tasks?",
    "options": [
      "Video conferencing using UDP; Database synchronization using TCP",
      "Video conferencing using TCP; Database synchronization using UDP",
      "Video conferencing using UDP; Database synchronization using UDP",
      "Video conferencing using TCP; Database synchronization using TCP"
    ],
    "correct_index": 0,
    "explanation": "Video conferencing prioritizes speed \u2014 a few dropped packets cause a brief flicker but the live stream continues, so UDP's low overhead wins. Database synchronization needs absolute integrity \u2014 every bit must arrive correctly and in order, or data corrupts \u2014 so TCP's guaranteed delivery, sequencing, and acknowledgments are required. Wrong: any combination using TCP for video adds retransmission delay/lag, and using UDP for the database risks silent data corruption."
  },
  {
    "id": "z1-n4-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "A user wants to configure an email client on their smartphone, laptop, and tablet. They need to ensure that when they read an email on their phone, it is also marked as 'read' on their laptop and tablet. Which protocol should they use to receive their email?",
    "options": [
      "IMAP",
      "POP3",
      "SMTP",
      "SFTP"
    ],
    "correct_index": 0,
    "explanation": "IMAP is built for multi-device sync \u2014 it keeps mail on the server and pushes state changes (read/unread, folder moves) back, so all devices stay consistent. Wrong: (B) POP3 downloads mail to a single device and typically removes it from the server, breaking sync. (C) SMTP only sends mail, it doesn't retrieve it. (D) SFTP is for secure file transfers, unrelated to email retrieval."
  },
  {
    "id": "z1-n4-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.4,
    "question": "A new employee connects their laptop to the office network, but they are unable to access any websites. You notice the laptop has an IP address in the 169.254.x.x range, indicating it failed to obtain a network configuration. Which protocol is responsible for providing the automatic IP assignment needed to fix this?",
    "options": [
      "DHCP",
      "DNS",
      "SNMP",
      "ICMP"
    ],
    "correct_index": 0,
    "explanation": "An IP in the 169.254.x.x range is an APIPA (Automatic Private IP Addressing) address \u2014 assigned when a device is set to use DHCP but can't reach a DHCP server. DHCP is the protocol that assigns real IP addresses, subnet masks, gateways, and DNS settings, fixing this. Wrong: (B) DNS handles name resolution, not address assignment. (C) SNMP is for device monitoring. (D) ICMP handles error reporting/connectivity testing (ping) \u2014 none assign IP addresses."
  },
  {
    "id": "z1-n5-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What does RJ45 stand for?",
    "options": [
      "RJ45",
      "Advanced RJ45 Protocol",
      "Automated RJ45 System",
      "Active RJ45 Technology"
    ],
    "correct_index": 0,
    "explanation": "RJ45 stands for RJ45."
  },
  {
    "id": "z1-n5-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A technician is installing a network in an industrial factory with heavy machinery that generates significant electromagnetic interference (EMI). Which cable type and category would be most appropriate to ensure 10 Gbps speeds over a 90-meter run while minimizing interference?",
    "options": [
      "STP Cat6a",
      "UTP Cat5e",
      "STP Cat5e",
      "UTP Cat6"
    ],
    "correct_index": 0,
    "explanation": "This factory needs both EMI protection and 10 Gbps over 90m \u2014 STP provides the shielding to block machinery-generated EMI, and Cat6a is specifically built to sustain 10 Gbps over the full 100m, unlike Cat6, which only hits 10 Gbps over short distances (~55m). Wrong: (B)/(C) Cat5e tops out around 1 Gbps regardless of shielding. (D) UTP Cat6 lacks shielding for the EMI and can't sustain 10 Gbps at 90m."
  },
  {
    "id": "z1-n5-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A technician needs to connect two identical Layer 2 switches together without using a router or another intermediary device. Which type of cable and wiring configuration should be used to ensure the transmit pins of one switch reach the receive pins of the other?",
    "options": [
      "A crossover cable (one end T568A and the other end T568B)",
      "A straight-through cable (both ends T568B)",
      "An RJ11 cable with T568A on both ends",
      "A crossover cable (both ends T568A)"
    ],
    "correct_index": 0,
    "explanation": "Connecting two similar devices (switch-to-switch, PC-to-PC) requires a crossover cable \u2014 T568A on one end, T568B on the other \u2014 so each side's TX pins map to the other's RX pins. Wrong: (B) a straight-through (same standard both ends) wouldn't cross TX/RX, leaving both switches 'talking' on the same pins. (C) RJ11 is a phone connector, not Ethernet. (D) using T568A on BOTH ends doesn't cross anything \u2014 it's effectively straight-through."
  },
  {
    "id": "z1-n5-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A network administrator is designing a link between two buildings located 5 kilometers apart. The cable path must run through a factory floor filled with heavy industrial motors that generate significant electrical noise. Which medium is the most appropriate for this installation?",
    "options": [
      "Fiber Optic cabling",
      "UTP (Unshielded Twisted Pair)",
      "STP (Shielded Twisted Pair)",
      "Coaxial cable"
    ],
    "correct_index": 0,
    "explanation": "Fiber is the only option here for two reasons: distance and interference. Copper (UTP/STP) is capped at 100m, far short of the 5km link. The factory's industrial motors generate EMI, which disrupts copper signals but doesn't affect fiber, since fiber transmits light, not electricity. Wrong: UTP and STP both fail on distance alone; coaxial cable shares copper's distance and EMI limitations and isn't built for kilometers-long runs."
  },
  {
    "id": "z1-n5-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A technician is troubleshooting a network link that is experiencing intermittent connectivity. The cable is known to be within the maximum length limit, but the signal strength is significantly lower than expected, and the error rate increases as the distance from the switch increases. Which of the following best describes the most likely phenomenon occurring?",
    "options": [
      "Attenuation",
      "Crosstalk",
      "TDR",
      "Wire Map"
    ],
    "correct_index": 0,
    "explanation": "Signal strength dropping in proportion to distance from the switch \u2014 with the cable still within spec length \u2014 is the textbook definition of ATTENUATION: gradual signal weakening as it travels through the medium. Wrong: (B) crosstalk is signal bleed BETWEEN wire pairs, not a distance-correlated weakening. (C) a TDR is a TESTING TOOL used to find faults, not a phenomenon itself. (D) a wire map verifies termination/pinout, also a tool, not a cause."
  },
  {
    "id": "z1-n5-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which copper cable category is the most appropriate and cost-effective choice for this scenario?",
    "options": [
      "Cat5e",
      "Cat6",
      "Cat6a",
      "Cat7"
    ],
    "correct_index": 0,
    "explanation": "Cat5e is designed to support speeds up to 1 Gbps at a distance of up to 100 meters. It is typically Unshielded Twisted Pair (UTP), making it the most cost-effective option for low-interference environments like a standard small office."
  },
  {
    "id": "z1-n5-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which cable category can support 10 Gbps speeds, provided the distance is kept under approximately approximately 55 meters?",
    "options": [
      "Cat5e",
      "Cat6",
      "Cat6a",
      "Cat7"
    ],
    "correct_index": 1,
    "explanation": "While Cat6 is primarily used for 1 Gbps up to 100 meters, it can support 10 Gbps speeds over much shorter distances (typically up to 37 to 55 meters depending on the crosstalk environment). This makes it a viable high-speed option for short-range, budget-conscious installs."
  },
  {
    "id": "z1-n5-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which cable category is specifically designed to provide 10 Gbps speeds up to the full 100-meter distance?",
    "options": [
      "Cat5e",
      "Cat6",
      "Cat6a",
      "Cat7"
    ],
    "correct_index": 2,
    "explanation": "Cat6a (Augmented Cat6) is designed to support 10 Gbps speeds up to 100 meters. It features improved specifications to reduce crosstalk (including Alien Crosstalk) and is often shielded (STP) to maintain signal integrity over longer distances at high speeds."
  },
  {
    "id": "z1-n5-study-008",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which cable category is best suited for this environment due to its heavy shielding (typically S/FTP)?",
    "options": [
      "Cat5e",
      "Cat6",
      "Cat6a",
      "Cat7"
    ],
    "correct_index": 3,
    "explanation": "Cat7 is characterized by very heavy shielding, often using S/FTP (Screened Fully Shielded Twisted Pair), where each individual pair is shielded and an overall braid shields the entire cable. This makes it highly resistant to EMI, making it ideal for harsh industrial environments."
  },
  {
    "id": "z1-n5-study-009",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "According to the T568B standard, what is the correct color for Pin 1?",
    "options": [
      "White/Green",
      "White/Orange",
      "White/Blue",
      "Orange"
    ],
    "correct_index": 1,
    "explanation": "In the T568B standard, the pinout sequence starts with White/Orange (Pin 1), Orange (Pin 2), White/Green (Pin 3), Blue (Pin 4), White/Blue (Pin 5), Green (Pin 6), White/Brown (Pin 7), and Brown (Pin 8). T568A starts with White/Green on Pin 1."
  },
  {
    "id": "z1-n5-study-010",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which type of cable should you use to connect these two similar devices?",
    "options": [
      "Straight-through cable",
      "Crossover cable",
      "Rollover cable",
      "Console cable"
    ],
    "correct_index": 1,
    "explanation": "Crossover cables are used to connect similar devices (e.g., PC to PC, Switch to Switch). Straight-through cables are used to connect dissimilar devices (e.g., PC to Switch). Note: While modern Auto-MDIX hardware can often use straight-through cables for this, the traditional Network+ standard dictates a crossover cable for similar devices."
  },
  {
    "id": "z1-n5-study-011",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What type of cable has been created by this configuration?",
    "options": [
      "A straight-through cable",
      "A rollover cable",
      "A crossover cable",
      "A shielded twisted pair cable"
    ],
    "correct_index": 2,
    "explanation": "When one end of a cable is wired using T568A and the other end is wired using T568B, the transmit and receive pairs are swapped, effectively creating a crossover cable. This is a common way to manually create a crossover cable."
  },
  {
    "id": "z1-n5-study-012",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which of the following is a sign of a poorly terminated, unreliable RJ45 connection?",
    "options": [
      "The outer cable jacket is visible outside the connector housing",
      "The copper wires are not visible through the clear plastic of the connector",
      "The outer cable jacket is crimped inside the connector housing",
      "The wires are arranged in the T568B pattern"
    ],
    "correct_index": 0,
    "explanation": "A proper termination requires the cable jacket to be crimped inside the RJ45 plug. This provides strain relief and prevents the individual wires from being pulled out of the contacts. If the jacket is outside the connector, the connection is prone to failure due to physical tension."
  },
  {
    "id": "z1-n5-study-013",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which type of crosstalk is being measured when the interference is detected at the same end of the cable where the signal is being transmitted?",
    "options": [
      "NEXT (Near-End Crosstalk)",
      "FEXT (Far-End Crosstalk)",
      "Attenuation",
      "RFI (Radio Frequency Interference)"
    ],
    "correct_index": 0,
    "explanation": "Near-End Crosstalk (NEXT) occurs when the signal from a transmitting pair interferes with the receiving pair at the same end of the link (the near end). This is often the most problematic type of crosstalk in high-speed networking."
  },
  {
    "id": "z1-n5-study-014",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which troubleshooting concept is being demonstrated here?",
    "options": [
      "Wire map error",
      "Crosstalk",
      "Lack of continuity",
      "Signal attenuation"
    ],
    "correct_index": 2,
    "explanation": "Continuity testing ensures that an electrical path exists from one end of the conductor to the other. If a wire is broken or a connection is loose, the tester will show a lack of continuity (an 'open' circuit) for that specific pin."
  },
  {
    "id": "z1-n5-study-015",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which type of crosstalk is being described?",
    "options": [
      "NEXT (Near-End Crosstalk)",
      "FEXT (Far-End Crosstalk)",
      "Attenuation",
      "Split Pair"
    ],
    "correct_index": 1,
    "explanation": "Far-End Crosstalk (FEXT) occurs when the interference from a transmitting pair is detected at the far end of the cable (the receiving end) from the source of the signal."
  },
  {
    "id": "z1-n5-study-016",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What is the correct procedure for using these tools to identify the cable?",
    "options": [
      "Connect the tone generator to one end of the cable and use the probe to physically touch the copper conductors at the other end until you hear a beep.",
      "Connect the probe to the cable and walk around the wiring closet until the tone generator beeps.",
      "Attach the tone generator to one end of the cable and move the probe near the cable jacket to detect the electromagnetic signal.",
      "Connect the probe to the tone generator's output port and touch it to the patch panel."
    ],
    "correct_index": 2,
    "explanation": "A tone probe is an inductive device. It does not require physical contact with the copper conductors; instead, it detects the electromagnetic field generated by the signal traveling through the wire. By attaching the tone generator to the remote end, the probe can 'hear' the signal through the cable's insulation/jacket as you move it along the bundle."
  },
  {
    "id": "z1-n5-study-017",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What is the primary technical advantage of Cat6a over Cat6 in a networking deployment?",
    "options": [
      "Cat6a supports 1 Gbps, while Cat6 only supports 100 Mbps.",
      "Cat6a supports 10 Gbps up to 100 meters, whereas Cat6 is limited to shorter distances for 10 Gbps.",
      "Cat6a is always unshielded (UTP), while Cat6 is always shielded (STP).",
      "Cat6a is only used for wireless access points, while Cat6 is for workstations."
    ],
    "correct_index": 1,
    "explanation": "The 'a' in Cat6a stands for 'Augmented.' The main difference is that Cat6a is rated to handle 10 Gbps over the full 100-meter standard distance, while Cat6 can only achieve 10 Gbps over much shorter distances (usually under 55m) due to crosstalk limitations."
  },
  {
    "id": "z1-n5-study-018",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "If the technician is using a straight-through cable, which pin on End A should correspond to which pin on End B?",
    "options": [
      "Pin 1 to Pin 3",
      "Pin 1 to Pin 1",
      "Pin 1 to Pin 6",
      "Pin 2 to Pin 1"
    ],
    "correct_index": 1,
    "explanation": "A straight-through cable is characterized by having the exact same pinout on both ends (e.g., Pin 1 connects to Pin 1, Pin 2 to Pin 2, etc.). A crossover cable, by contrast, would swap pins (such as Pin 1 to Pin 3)."
  },
  {
    "id": "z1-n5-study-019",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Given that the wire map shows all wires are connected to the correct pins at both ends, what is the most likely physical wiring error?",
    "options": [
      "A short circuit between Pin 3 and Pin 6.",
      "An open circuit on the blue pair.",
      "A split pair, where wires from different twisted pairs were used to complete the circuit.",
      "A crossed pair where Pin 1 and Pin 2 were swapped at the patch panel."
    ],
    "correct_index": 2,
    "explanation": "A split pair occurs when a wire from one twisted pair is used as a conductor for a different pair. Because the wires are connected to the correct pins at both ends, a basic wire map test will show a 'Pass.' However, because the wires are no longer twisted with their intended partner, the electromagnetic interference (crosstalk) increases significantly, causing the cable to fail performance certification."
  },
  {
    "id": "z1-n5-study-020",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A technician discovers a 'split pair' issue on an Ethernet run. What is the primary technical consequence of this specific wiring fault?",
    "options": [
      "The cable will show no physical continuity and fail to pass any signal.",
      "The physical connection remains, but crosstalk increases significantly due to lost twist integrity.",
      "The cable will automatically negotiate a lower speed by switching from 1000Mbps to 100Mbps.",
      "The port will physically shut down because it detects a short circuit between pins."
    ],
    "correct_index": 1,
    "explanation": "Correct: A split pair occurs when wires are incorrectly paired at one end (e.g., pin 1 with pin 3 instead of pin 2). This breaks the twisted pair's ability to cancel out electromagnetic interference, leading to high crosstalk and performance degradation. Distractors: Option A is incorrect because a split pair still has physical continuity; it just doesn't have correct pairing. Option C is incorrect because while performance drops, there is no automatic negotiation rule for this specific fault. Option D is incorrect because a split pair is a wiring logic error, not a short circuit."
  },
  {
    "id": "z1-n5-study-021",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What does SMF stand for, and what is its primary advantage?",
    "options": [
      "Single-Mode Fiber - Long distance transmission",
      "Standard Multi Fiber - Cheaper cost",
      "Secure Mode Fiber - Better security",
      "Simple Media Fiber - Easier installation"
    ],
    "correct_index": 0,
    "explanation": "SMF = Single-Mode Fiber. Its primary advantage is the ability to transmit over very long distances using laser light and a small core."
  },
  {
    "id": "z1-n5-study-022",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What does SFP stand for?",
    "options": [
      "Small Form-factor Pluggable",
      "Standard Fiber Port",
      "Secure Fast Protocol",
      "Signal Frequency Processor"
    ],
    "correct_index": 0,
    "explanation": "SFP = Small Form-factor Pluggable. It's the hot-swappable module that connects fiber cables to switch ports."
  },
  {
    "id": "z1-n5-study-023",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which type of fiber optic cable is characterized by a larger core, the use of LED light sources, and susceptibility to modal dispersion?",
    "options": [
      "Multi-mode fiber",
      "Single-mode fiber",
      "Coaxial cable",
      "Twisted-pair copper"
    ],
    "correct_index": 0,
    "explanation": "Multi-mode fiber (MMF) has a larger core and typically uses LED light sources, allowing light to travel multiple paths (modes) simultaneously \u2014 but those paths have different lengths, so pulses arrive at slightly different times, causing modal dispersion that limits MMF to shorter distances. Wrong: single-mode fiber uses a smaller core and lasers to avoid this; coaxial and twisted-pair copper aren't fiber at all."
  },
  {
    "id": "z1-n5-study-024",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Compare Single-Mode Fiber (SMF) and Multi-Mode Fiber (MMF). Which statement correctly identifies their core differences?",
    "options": [
      "SMF has a smaller core and uses lasers for long distances; MMF has a larger core and uses LEDs/VCSELs for shorter distances.",
      "SMF uses multiple paths of light for high speed; MMF uses a single path for extreme distance.",
      "MMF is more expensive and used for long-haul telecommunications; SMF is cheaper and used in local data centers.",
      "SMF uses copper shielding to prevent interference; MMF uses pure glass cores."
    ],
    "correct_index": 0,
    "explanation": "SMF has a tiny core (approx. 8-10 microns) that allows only one mode of light to propagate, making it ideal for long distances using lasers. MMF has a much larger core (50 or 62.5 microns), allowing multiple paths (modes) of light, typically using cheaper LED or VCSEL light sources for shorter distances."
  },
  {
    "id": "z1-n5-study-025",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "In the analogy above, what is the technical term for the phenomenon where different light paths arrive at the receiver at different times, causing signal blurring?",
    "options": [
      "Attenuation",
      "Refraction",
      "Modal Dispersion",
      "Chromatic Aberration"
    ],
    "correct_index": 2,
    "explanation": "Modal Dispersion occurs in Multi-Mode Fiber because the different paths (modes) taken by the light rays have different lengths, causing the light pulses to spread out (smear) over distance, which limits the effective range."
  },
  {
    "id": "z1-n5-study-026",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Based on the distance and cost-efficiency requirements, which fiber types should you recommend?",
    "options": [
      "Project A: MMF | Project B: SMF",
      "Project A: SMF | Project B: MMF",
      "Project A: SMF | Project B: SMF",
      "Project A: MMF | Project B: MMF"
    ],
    "correct_index": 1,
    "explanation": "For long-distance campus backbones (5km), SMF is required because it can handle the distance without signal degradation from modal dispersion. For short-distance intra-rack connections (10m), MMF is the most cost-effective choice because the transceivers (LED/VCSEL) are much cheaper than SMF lasers."
  },
  {
    "id": "z1-n5-study-027",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Match the following requirements to the correct fiber type: 1. High bandwidth over 2km distance. 2. Low-cost implementation for a local LAN switch connection.",
    "options": [
      "1: MMF, 2: SMF",
      "1: SMF, 2: MMF",
      "1: SMF, 2: SMF",
      "1: MMF, 2: MMF"
    ],
    "correct_index": 1,
    "explanation": "2km is generally beyond the reliable limit for most MMF standards (which usually cap out around 300m-550m for high speeds), making SMF the correct choice for 1. For a local LAN switch (short distance), MMF is the standard choice due to lower transceiver costs."
  },
  {
    "id": "z1-n5-study-028",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which connector types use a push-pull mechanism versus a twist-lock mechanism?",
    "options": [
      "Push-Pull: LC, SC, MTRJ | Twist-Lock: ST",
      "Push-Pull: ST, SC | Twist-Lock: LC, MTRJ",
      "Push-Pull: LC only | Twist-Lock: SC, ST, MTRJ",
      "All fiber connectors use the same locking mechanism"
    ],
    "correct_index": 0,
    "explanation": "LC, SC, and MTRJ use push-pull mechanisms. ST uses a twist-lock bayonet-style mechanism similar to BNC. LC is Small Form Factor (SFF) for high density. SC is a larger square connector. MTRJ looks like a miniature RJ-45."
  },
  {
    "id": "z1-n5-study-029",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "You see a small, rectangular connector with a tiny plastic tab on top. Which connector is this?",
    "options": [
      "LC - Small with a clip/tab",
      "SC - Square, no clip, just push",
      "ST - Round, requires quarter-turn",
      "MTRJ - Looks like miniature RJ-45"
    ],
    "correct_index": 0,
    "explanation": "LC connectors are small, rectangular, and feature a plastic tab/clip similar to Ethernet cables. SC is larger and square. ST is round with a twist-lock. MTRJ resembles a small RJ-45."
  },
  {
    "id": "z1-n5-study-030",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which connector is best for a high-density data center where space is at a premium?",
    "options": [
      "ST - Secure twist-lock for reliability",
      "SC - Durable and easy to use",
      "LC - Small Form Factor for maximum density",
      "MTRJ - Standardized for subscriber lines"
    ],
    "correct_index": 2,
    "explanation": "LC (Lucent Connector) is a Small Form Factor (SFF) connector ideal for high-density environments. ST is common in older installations. SC is widely used in telecommunications. MTRJ is used for duplex connections in specific applications."
  },
  {
    "id": "z1-n5-study-031",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A technician needs to connect to a port that looks exactly like a miniature Ethernet jack. Which connector?",
    "options": [
      "LC",
      "SC",
      "ST",
      "MTRJ"
    ],
    "correct_index": 3,
    "explanation": "MTRJ (Mechanical Transfer Registered Jack) looks almost identical to a standard copper RJ-45 jack but is used for fiber duplex connections."
  },
  {
    "id": "z1-n5-study-032",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "What is the most likely cause of the signal loss observed at the 2.5 km mark?",
    "options": [
      "A damaged connector with a large air gap",
      "A macro-bend in the fiber",
      "A faulty optical transceiver",
      "A high-reflectance mechanical splice"
    ],
    "correct_index": 1,
    "explanation": "In OTDR trace analysis, different types of events produce different visual signatures. A reflective event, such as a connector or a break with an air gap, produces a 'spike' (Fresnel reflection) due to the change in refractive index. A non-reflective event, such as a macro-bend (where the fiber is bent too tightly), causes a sudden increase in attenuation (a step down in the trace) without producing a reflective peak. Since the trace showed a drop in power but no reflective spike, a macro-bend is the most probable cause."
  },
  {
    "id": "z1-n5-study-033",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "A network technician is testing a long-haul fiber link and observes significant signal degradation. Upon inspection, they realize that a technician during installation had routed the fiber through a very tight, sharp bend in a corner of the equipment rack. Which specific type of attenuation is most likely responsible for this loss?",
    "options": [
      "Rayleigh Scattering",
      "Absorption",
      "Macrobending",
      "Microbending"
    ],
    "correct_index": 2,
    "explanation": "Macrobending refers to large-scale, visible bends in the fiber optic cable (such as a tight radius in a patch panel or rack) that cause the light to strike the cladding-core interface at an angle that allows it to escape the core. Microbending, while similar in effect, refers to microscopic-scale distortions in the fiber structure caused by external pressure or manufacturing defects, rather than the physical routing of the cable."
  },
  {
    "id": "z1-n5-study-034",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Based on the scenario described, what is the technical cause of the signal loss, and what phenomenon is occurring?",
    "options": [
      "Microbending, where the fiber core is compressed by lateral pressure, causing light to scatter.",
      "Macrobending, where the bend angle exceeds the critical angle, allowing light to leak from the core into the cladding.",
      "Total Internal Reflection (TIR) failure due to the fiber core becoming too thick from the pressure.",
      "Signal attenuation caused by the light traveling too fast through the bend, leading to thermal dissipation."
    ],
    "correct_index": 1,
    "explanation": "When an optical fiber is bent too tightly\u2014a phenomenon known as macrobending\u2014the light rays inside the core strike the core-cladding interface at an angle that is shallower than the 'critical angle' required for Total Internal Reflection (TIR). Because the angle of incidence is no longer sufficient to reflect the light back into the core, the light escapes into the cladding and is lost, resulting in increased attenuation (signal loss). This is distinct from microbending, which refers to microscopic deviations in the fiber axis caused by small-scale mechanical stresses."
  },
  {
    "id": "z1-n5-study-035",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Match scenarios to causes:\nA) Physical fiber fracture or core breakage\nB) Macro-bend or poorly seated connector\nC) Signal attenuation due to aging or dirty end-faces",
    "options": [
      "1-A, 2-B, 3-C",
      "1-B, 2-C, 3-A",
      "1-C, 2-A, 3-B",
      "1-B, 2-A, 3-C"
    ],
    "correct_index": 1,
    "explanation": "Scenario 1 (1-B): An OTDR spike indicates a reflection (like a bad connector or sharp macro-bend), and the subsequent drop indicates loss at that point. Scenario 2 (2-C): Gradual loss over time is typical of attenuation from aging or dirty connectors. Scenario 3 (3-A): Sudden total loss after mechanical movement indicates a physical break or fracture."
  },
  {
    "id": "z1-n5-study-036",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which of the following is a primary advantage of Single-Mode Fiber (SMF) over Multi-Mode Fiber (MMF)?",
    "options": [
      "Lower cost of optical transceivers",
      "Easier to terminate and splice due to larger core",
      "Significantly greater distance capabilities",
      "Ability to use inexpensive LED light sources"
    ],
    "correct_index": 2,
    "explanation": "The primary advantage of SMF is its ability to transmit data over much longer distances (kilometers vs. meters) because it eliminates modal dispersion by using a single light path."
  },
  {
    "id": "z1-n5-study-037",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which connector type is best suited for high-density environments due to its small form factor?",
    "options": [
      "ST",
      "SC",
      "LC",
      "MTRJ"
    ],
    "correct_index": 2,
    "explanation": "LC (Lucent Connector) is a Small Form Factor (SFF) connector. Its small size allows for much higher port density on switches and patch panels compared to the larger SC or the bulky ST."
  },
  {
    "id": "z1-n5-study-038",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.5,
    "question": "Which of the following tools is most appropriate for pinpointing the precise location of the fault along the fiber run?",
    "options": [
      "Visual Fault Locator (VFL)",
      "Optical Time Domain Reflectometer (OTDR)",
      "Optical Power Meter (OPM)",
      "Fiber Inspection Microscope"
    ],
    "correct_index": 1,
    "explanation": "An Optical Time Domain Reflectometer (OTDR) is the correct tool because it sends light pulses down the fiber and measures the backscatter and reflections to characterize the link. This allows the technician to see a graph of the fiber's characteristics and identify the exact distance to events such as breaks, bends, or bad splices. A Visual Fault Locator (VFL) is only effective for short distances where light can leak visibly. An Optical Power Meter can tell you that the signal is weak, but not WHERE the loss is occurring. A Fiber Inspection Microscope is used to check connector cleanliness, not to find breaks along a cable run."
  },
  {
    "id": "z1-n6-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "Based on your observation of the network architecture, what is the most significant disadvantage of using this bus topology?",
    "options": [
      "A central hub or switch is required to manage data traffic effectively.",
      "The failure of a single workstation will cause the entire network to crash.",
      "A break in the main backbone cable will disrupt the entire network.",
      "It is the most expensive and complex topology to implement due to redundant cabling."
    ],
    "correct_index": 2,
    "explanation": "In a bus topology, all devices share one backbone cable \u2014 a break anywhere disrupts communication for the whole network, making it the defining weakness. Wrong: (A) a bus topology specifically does NOT need a central hub/switch \u2014 that's a star. (B) one workstation failing doesn't affect the shared cable. (D) a bus is actually the CHEAPEST topology \u2014 minimal cabling, the opposite of redundant."
  },
  {
    "id": "z1-n6-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "While the Star Topology provides high reliability for individual node connections, what is its most significant architectural vulnerability?",
    "options": [
      "A single device failure will cause the entire network to crash.",
      "It requires significantly more cabling than a bus topology, making it expensive.",
      "The central hub or switch acts as a single point of failure for the entire network.",
      "Data collisions are much more frequent because all devices share a single backbone."
    ],
    "correct_index": 2,
    "explanation": "In a star topology, every device connects to a central hub/switch. An individual cable or device failing only affects that one node, but if the central hub itself fails, the WHOLE network loses connectivity \u2014 its single point of failure. Wrong: (A) describes the central hub failing, not 'a single device.' (B) stars do use more cabling than bus, but that's not the asked vulnerability. (D) collisions relate to shared media (bus/hub), not the star's core risk."
  },
  {
    "id": "z1-n6-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "Which of the following best describes a primary characteristic and a potential drawback of a standard single-ring topology?",
    "options": [
      "It utilizes a central hub to manage all traffic, making it highly resistant to node failures.",
      "Data travels in one direction, and a single node or cable failure can disrupt the entire network.",
      "It is highly redundant because every device is connected to every other device simultaneously.",
      "Each device acts as a passive listener, meaning the signal strength decreases as it passes through each node."
    ],
    "correct_index": 1,
    "explanation": "In a single-ring topology, data travels in ONE direction, and each device repeats the signal to the next \u2014 so the network depends on the unbroken continuity of that loop. A single failed node or cable breaks the loop and stops communication entirely. Wrong: (A) describes a star, not a ring \u2014 rings have no central hub. (C) describes a full mesh, the opposite of a ring's limited redundancy. (D) signal regeneration by repeaters PREVENTS strength loss, it doesn't cause it."
  },
  {
    "id": "z1-n6-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "A kingdom's communication network requires absolute reliability, ensuring that no single broken link can stop a message. The architects decide to implement a Full Mesh topology. What is the most significant drawback they must prepare for?",
    "options": [
      "It is highly susceptible to a single point of failure at a central hub.",
      "It is extremely expensive and difficult to scale as more nodes are added.",
      "It provides very little redundancy compared to a Star topology.",
      "It is the most cost-effective way to connect a large number of devices."
    ],
    "correct_index": 1,
    "explanation": "In a Full Mesh, every node connects to every other node \u2014 but the number of connections grows exponentially with n(n-1)/2, making it extremely expensive to cable and hard to scale or manage as nodes are added. Wrong: (A) full mesh has NO central hub, so no SPOF there. (C) full mesh provides MAXIMUM redundancy, far more than a star. (D) it's the MOST expensive topology, not the cheapest."
  },
  {
    "id": "z1-n6-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "A network engineer is designing a data center. They implement a hierarchical structure consisting of Core, Distribution, and Access layers. To connect various remote office branches, they combine this hierarchy with several different Star-based local networks. Finally, within the main data center cluster, they ensure that every access switch is connected to every single backbone switch to optimize East-West traffic. Which of the following best describes this architectural approach?",
    "options": [
      "A pure Tree topology using only hierarchical connections.",
      "A Hybrid topology that incorporates both Tree and Spine-Leaf architectures.",
      "A Ring topology supplemented by a central Bus backbone.",
      "A Mesh topology where every single device is connected to every other device."
    ],
    "correct_index": 1,
    "explanation": "This design is 'Hybrid' because it combines multiple topologies: Tree for the Core/Distribution/Access hierarchy, Star for the remote branch LANs, and Spine-Leaf within the data center (every access/leaf switch connects to every backbone/spine switch) for low-latency East-West traffic. Wrong: (A) a pure Tree wouldn't include Star branches or Spine-Leaf. (C) no Ring or Bus is described. (D) full mesh means EVERY device connects to every other \u2014 not what's described."
  },
  {
    "id": "z1-n6-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.6,
    "question": "What is a primary advantage of using a spine-and-leaf topology in a data center environment?",
    "options": [
      "It uses a three-tier hierarchical model.",
      "It provides a predictable two-hop path between any two leaf switches.",
      "It eliminates the need for any spine switches.",
      "It is only used for local area networks (LANs)."
    ],
    "correct_index": 1,
    "explanation": "Spine-and-leaf topology provides a predictable two-hop path because every leaf switch connects to every spine switch, making it ideal for east-west traffic in data centers."
  },
  {
    "id": "z1-n7-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "What does VLAN stand for?",
    "options": [
      "Virtual Local Area Network",
      "Advanced VLAN Protocol",
      "Automated VLAN System",
      "Active VLAN Technology"
    ],
    "correct_index": 0,
    "explanation": "VLAN stands for Virtual Local Area Network."
  },
  {
    "id": "z1-n7-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "How many bits are in an IPv4 address?",
    "options": [
      "16 bits",
      "32 bits",
      "48 bits",
      "128 bits"
    ],
    "correct_index": 1,
    "explanation": "IPv4 addresses are 32-bit numbers, divided into four 8-bit octets. IPv6 uses 128 bits."
  },
  {
    "id": "z1-n7-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "Which of the following is a valid private IP address range?",
    "options": [
      "8.8.8.0/24",
      "10.0.0.0/8",
      "1.1.1.0/24",
      "100.64.0.0/10"
    ],
    "correct_index": 1,
    "explanation": "10.0.0.0/8 is one of the RFC1918 private IP ranges. 8.8.8.0 and 1.1.1.0 are public DNS server ranges. 100.64.0.0/10 is CGNAT (Carrier-Grade NAT), not for private enterprise use."
  },
  {
    "id": "z1-n7-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "A user's computer shows IP address 169.254.47.100. What does this indicate?",
    "options": [
      "The computer has a static IP configured",
      "The computer could not reach a DHCP server",
      "The computer is connected to the internet",
      "The computer has a public IP address"
    ],
    "correct_index": 1,
    "explanation": "169.254.x.x is an APIPA address, indicating the device could not reach a DHCP server and auto-assigned a link-local address."
  },
  {
    "id": "z1-n7-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "What is the purpose of a default gateway?",
    "options": [
      "To assign IP addresses to devices",
      "To connect the local network to other networks",
      "To block unwanted traffic",
      "To translate domain names to IP addresses"
    ],
    "correct_index": 1,
    "explanation": "The default gateway (a router) connects the local network to other networks, including the internet. It handles traffic destined for outside the local subnet."
  },
  {
    "id": "z1-n7-study-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "What does DNS translate domain names into?",
    "options": [
      "MAC addresses",
      "IP addresses",
      "Port numbers",
      "Subnet masks"
    ],
    "correct_index": 1,
    "explanation": "DNS translates domain names (like google.com) into IP addresses (like 142.250.80.46)."
  },
  {
    "id": "z1-n7-study-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "In a subnet with a /26 CIDR notation, how many usable host IP addresses are available?",
    "options": [
      "64",
      "32",
      "62",
      "128"
    ],
    "correct_index": 2,
    "explanation": "A /26 subnet provides 2^6 or 64 total addresses. Subtracting 2 (one for the network address and one for the broadcast address) leaves 62 usable host addresses."
  },
  {
    "id": "z1-n7-study-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.7,
    "question": "In an IPv6 network, which protocol replaces the functionality of ARP and utilizes ICMPv6?",
    "options": [
      "IGMP",
      "ICMPv6",
      "NDP",
      "DHCPv6"
    ],
    "correct_index": 2,
    "explanation": "Neighbor Discovery Protocol (NDP) replaces ARP in IPv6 networks and uses ICMPv6 to perform functions like address resolution."
  },
  {
    "id": "z1-n8-primer",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.8,
    "question": "What does CLI stand for?",
    "options": [
      "Command Line Interface",
      "Advanced CLI Protocol",
      "Automated CLI System",
      "Active CLI Technology"
    ],
    "correct_index": 0,
    "explanation": "CLI stands for Command Line Interface."
  },
  {
    "id": "z1-n8-study-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.8,
    "question": "In Software-Defined Networking (SDN), what is the primary function of separating the control plane from the data plane?",
    "options": [
      "To increase the physical speed of the hardware switches.",
      "To allow a central controller to manage the network's logic and behavior.",
      "To eliminate the need for IP addresses in the local area network.",
      "To replace the need for routers with high-speed switches."
    ],
    "correct_index": 1,
    "explanation": "In SDN, separating the control plane (logic) from the data plane (forwarding) allows a centralized controller to manage the entire network. Option 0 is incorrect because physical speed is hardware-dependent; Option 3 is incorrect as routers are still used for path determination."
  },
  {
    "id": "z1-n8-study-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.8,
    "question": "Which statement best describes the SASE (Secure Access Service Edge) architecture?",
    "options": [
      "A hardware firewall installed at the physical entrance of a corporate office.",
      "A private VPN tunnel that only allows local employees to access internal resources.",
      "A cloud-delivered service that combines SD-WAN with security features like SWG and ZTNA.",
      "A method of increasing bandwidth by using multiple physical internet connections."
    ],
    "correct_index": 2,
    "explanation": "SASE is defined by the convergence of networking (SD-WAN) and security (SWG, CASB, etc.) into a single cloud-delivered service. Option 0 describes a traditional firewall; Option 3 describes multi-homing/load balancing."
  },
  {
    "id": "z1-n8-study-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.8,
    "question": "What is a core principle of Zero Trust Architecture?",
    "options": [
      "Trusting all users who are physically located inside the office building.",
      "Granting administrative privileges to all users by default to ensure ease of use.",
      "Never trust, always verify every access request regardless of its origin.",
      "Using a single, very complex password for all internal network segments."
    ],
    "correct_index": 2,
    "explanation": "Zero Trust operates on the 'never trust, always verify' principle. Option 0 is incorrect because Zero Trust assumes no location is inherently safe; Option 3 is incorrect as it fails to address identity-based verification for every request."
  },
  {
    "id": "z1-n8-study-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.8,
    "question": "Which characteristic describes IPv6 compared to IPv4?",
    "options": [
      "IPv6 uses 32-bit addresses and decimal notation; IPv4 uses 128-bit hex.",
      "IPv6 uses 128-bit addresses in hexadecimal groups; IPv4 uses 32-bit addresses.",
      "IPv6 is only used for internal local networks, while IPv4 is used for the internet.",
      "IPv6 does not support shorthand notation or loopback addresses."
    ],
    "correct_index": 1,
    "explanation": "IPv6 uses a 128-bit address space and hexadecimal notation. Option 0 reverses the two; Option 3 is false as IPv6 supports both shorthand (like ::) and loopback addresses."
  },
  {
    "id": "z1-g-001",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "Which OSI layer adds IP source and destination addresses to a segment?",
    "options": [
      "Layer 2",
      "Layer 3",
      "Layer 4",
      "Layer 5"
    ],
    "correct_index": 1,
    "explanation": "Layer 3 (Network) adds the IP header. Layer 4 adds port numbers, Layer 2 adds MAC addresses."
  },
  {
    "id": "z1-g-002",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "What port does HTTPS use?",
    "options": [
      "80",
      "443",
      "8080",
      "8443"
    ],
    "correct_index": 1,
    "explanation": "HTTPS uses port 443. HTTP uses port 80."
  },
  {
    "id": "z1-g-003",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "A switch forwards traffic based on what?",
    "options": [
      "IP addresses",
      "MAC addresses",
      "Port numbers",
      "VLAN tags only"
    ],
    "correct_index": 1,
    "explanation": "Switches use MAC address tables (CAM tables) to make Layer 2 forwarding decisions."
  },
  {
    "id": "z1-g-004",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "How many usable host addresses are in a /26 subnet?",
    "options": [
      "30",
      "62",
      "64",
      "126"
    ],
    "correct_index": 1,
    "explanation": "/26 = 64 total (2^6) minus 2 = 62 usable hosts."
  },
  {
    "id": "z1-g-005",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "IaaS is best described as:",
    "options": [
      "Applications delivered via browser (Office 365)",
      "A managed runtime for developers (App Engine)",
      "Raw compute, storage, and networking infrastructure (EC2, Azure VMs)",
      "Network functions delivered as software"
    ],
    "correct_index": 2,
    "explanation": "IaaS = raw infrastructure. PaaS = developer platform. SaaS = software applications. NFV = virtualized network functions."
  },
  {
    "id": "z1-g-006",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "Single-mode fiber vs multi-mode fiber \u2014 which supports the longer distance?",
    "options": [
      "Multi-mode",
      "Single-mode",
      "Both are equal",
      "Depends on the connector type"
    ],
    "correct_index": 1,
    "explanation": "Single-mode uses a laser and a narrow core, supporting distances of 10km to 100km+. Multi-mode uses LED/VCSEL and supports up to ~550m."
  },
  {
    "id": "z1-g-007",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "Zero Trust security is based on which principle?",
    "options": [
      "Trust but verify all internal traffic",
      "Trust users after single-factor authentication",
      "Never trust, always verify regardless of network location",
      "Trust all encrypted traffic"
    ],
    "correct_index": 2,
    "explanation": "Zero Trust: never implicitly trust any user or device. Every access request is verified, regardless of whether it comes from inside or outside the network perimeter."
  },
  {
    "id": "z1-g-008",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "SSH uses which port?",
    "options": [
      "21",
      "22",
      "23",
      "443"
    ],
    "correct_index": 1,
    "explanation": "SSH = port 22. FTP = 21. Telnet = 23. HTTPS = 443."
  },
  {
    "id": "z1-g-009",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "In spine-and-leaf architecture, any two leaf switches communicate in how many hops?",
    "options": [
      "1 hop",
      "2 hops",
      "3 hops",
      "Depends on traffic load"
    ],
    "correct_index": 1,
    "explanation": "Spine-and-leaf guarantees leaf\u2192spine\u2192leaf = exactly 2 hops for any server-to-server communication, providing consistent and predictable latency."
  },
  {
    "id": "z1-g-010",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "What is the IPv6 loopback address?",
    "options": [
      "127.0.0.1",
      "::0",
      "::1",
      "FE80::1"
    ],
    "correct_index": 2,
    "explanation": "::1 is the IPv6 loopback. 127.0.0.1 is IPv4 loopback. FE80::1 is a link-local address."
  },
  {
    "id": "z1-g-011",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "DHCP uses which ports?",
    "options": [
      "53/54",
      "67/68",
      "69/70",
      "161/162"
    ],
    "correct_index": 1,
    "explanation": "DHCP server = UDP 67, client = UDP 68. DNS = 53. TFTP = 69. SNMP = 161/162."
  },
  {
    "id": "z1-g-012",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "An IPS differs from an IDS in that an IPS:",
    "options": [
      "Only monitors traffic passively",
      "Sits inline and actively blocks detected threats",
      "Operates at Layer 2 only",
      "Requires manual intervention to respond to threats"
    ],
    "correct_index": 1,
    "explanation": "IPS (Intrusion Prevention System) is inline and blocks threats in real time. IDS (Intrusion Detection System) is passive \u2014 it detects and alerts but doesn't block."
  },
  {
    "id": "z1-g-013",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "What RFC 1918 private address range corresponds to /12 (172.16.0.0/12)?",
    "options": [
      "172.0.0.0 \u2013 172.255.255.255",
      "172.16.0.0 \u2013 172.31.255.255",
      "172.16.0.0 \u2013 172.32.255.255",
      "172.16.0.0 \u2013 172.16.255.255"
    ],
    "correct_index": 1,
    "explanation": "172.16.0.0/12 covers 172.16.0.0 through 172.31.255.255. Addresses starting with 172.32 and above are PUBLIC. This is a common exam trap."
  },
  {
    "id": "z1-g-014",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "SDN separates which two planes?",
    "options": [
      "Management plane and data plane",
      "Control plane and data plane",
      "User plane and management plane",
      "Physical plane and virtual plane"
    ],
    "correct_index": 1,
    "explanation": "SDN separates the control plane (routing/logic decisions) from the data plane (actual packet forwarding). The control plane moves to a centralized controller."
  },
  {
    "id": "z1-g-015",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "Host A (192.168.1.50/26) sends a packet to 192.168.1.100. What happens?",
    "options": [
      "Delivered directly \u2014 same subnet",
      "Sent to the default gateway \u2014 different subnets",
      "Destination unreachable \u2014 /26 too small",
      "Sent to the DNS server for resolution first"
    ],
    "correct_index": 1,
    "explanation": "/26 = 64 addresses per subnet. 192.168.1.0/26 covers .0-.63; 192.168.1.64/26 covers .64-.127. Host .50 is in subnet .0/26; host .100 is in subnet .64/26. Different subnets \u2192 traffic goes to the default gateway."
  },
  {
    "id": "z1-g-016",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "What is APIPA and when does a host use it?",
    "options": [
      "169.254.0.0/16 \u2014 assigned automatically when a DHCP server is unreachable",
      "10.0.0.0/8 \u2014 default fallback for enterprise networks",
      "127.0.0.0/8 \u2014 used for loopback testing only",
      "192.168.0.0/16 \u2014 default range assigned by home routers"
    ],
    "correct_index": 0,
    "explanation": "APIPA (Automatic Private IP Addressing) assigns 169.254.x.x when DHCP fails. The host can only communicate with others on the same APIPA range \u2014 it has no gateway and no DNS."
  },
  {
    "id": "z1-g-017",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "Cat6a supports 10 Gbps up to what distance?",
    "options": [
      "55 meters",
      "100 meters",
      "150 meters",
      "550 meters"
    ],
    "correct_index": 1,
    "explanation": "Cat6a (Augmented Cat6) supports 10GBase-T at the full 100-meter distance. Standard Cat6 is limited to 55m at 10 Gbps."
  },
  {
    "id": "z1-g-018",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "SNMP traps are sent to the manager on which port?",
    "options": [
      "161",
      "162",
      "514",
      "389"
    ],
    "correct_index": 1,
    "explanation": "SNMP manager polls agents on port 161. Agents send unsolicited TRAP messages to the manager on port 162. Syslog uses 514."
  },
  {
    "id": "z1-g-019",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "IPv6 replaces ARP with which protocol?",
    "options": [
      "RARP",
      "DHCP v6",
      "NDP (Neighbor Discovery Protocol)",
      "BOOTP"
    ],
    "correct_index": 2,
    "explanation": "IPv6 uses NDP (Neighbor Discovery Protocol) over ICMPv6 for address resolution, router discovery, and duplicate address detection \u2014 replacing ARP entirely."
  },
  {
    "id": "z1-g-020",
    "zone": 1,
    "domain": "Networking Concepts",
    "node": 1.0,
    "question": "A UTM appliance consolidates which set of functions?",
    "options": [
      "DHCP, DNS, NTP, and RADIUS in one box",
      "Firewall, IDS/IPS, antivirus, web filtering, and VPN in one device",
      "Switch, router, and wireless controller",
      "Load balancer, proxy, and CDN"
    ],
    "correct_index": 1,
    "explanation": "UTM (Unified Threat Management) integrates multiple security functions \u2014 stateful firewall, IDS/IPS, antivirus, web content filter, and VPN \u2014 into a single appliance."
  },
  {
    "id": "z2-n1-primer",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which routing protocol has the lowest default AD (most trusted)?",
    "options": [
      "EIGRP (AD 90)",
      "OSPF (AD 110)",
      "RIP (AD 120)",
      "BGP external (AD 20)"
    ],
    "correct_index": 3,
    "explanation": "External BGP (eBGP) has AD 20, making it the most trusted among these options."
  },
  {
    "id": "z2-n1-study-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "A local delivery driver has a package for a city they have never heard of. To ensure the package leaves their local area and enters the wider network, where must they go first?",
    "options": [
      "The local sorting hub (Default Gateway)",
      "A random neighbor's house",
      "The destination city directly",
      "A dead-end street"
    ],
    "correct_index": 0,
    "explanation": "The Default Gateway is the local network's 'exit point' \u2014 when a device doesn't recognize a destination as local, it forwards the packet here to be routed onward toward the wider network. Without it, traffic to unknown destinations has nowhere to go."
  },
  {
    "id": "z2-n1-study-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "A delivery driver has a package for 'Room 202,' but they don't know which building in the city it belongs to. Which networking concept acts like the building's front desk?",
    "options": [
      "DNS (Domain Name System)",
      "NAT (Network Address Translation)",
      "DHCP (Dynamic Host Configuration Protocol)",
      "ARP (Address Resolution Protocol)"
    ],
    "correct_index": 1,
    "explanation": "Just as a front desk uses the building's main address to route mail to specific rooms, NAT uses a single public IP to route traffic to multiple private IP addresses inside the network."
  },
  {
    "id": "z2-n1-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which routing protocol has an administrative distance of 110?",
    "options": [
      "RIP",
      "EIGRP",
      "OSPF",
      "BGP"
    ],
    "correct_index": 2,
    "explanation": "OSPF has AD 110. EIGRP = 90, RIP = 120, eBGP = 20. Lower AD = more trustworthy route."
  },
  {
    "id": "z2-n1-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "A directly connected route has an administrative distance of:",
    "options": [
      "0",
      "1",
      "20",
      "90"
    ],
    "correct_index": 0,
    "explanation": "Directly connected routes have AD 0 \u2014 the most trusted source. Static routes are AD 1, eBGP is 20, EIGRP is 90."
  },
  {
    "id": "z2-n1-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which type of NAT maps many private IP addresses to a single public IP using port numbers?",
    "options": [
      "Static NAT",
      "Dynamic NAT",
      "PAT (NAT Overload)",
      "NAT64"
    ],
    "correct_index": 2,
    "explanation": "PAT (Port Address Translation) / NAT Overload maps many internal IPs to one public IP by tracking unique port numbers. This is what home routers do."
  },
  {
    "id": "z2-n1-007",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which FHRP protocol is an open standard (non-Cisco proprietary)?",
    "options": [
      "HSRP",
      "GLBP",
      "VRRP",
      "PVST+"
    ],
    "correct_index": 2,
    "explanation": "VRRP (Virtual Router Redundancy Protocol) is an open RFC standard (RFC 5798). HSRP and GLBP are Cisco proprietary. PVST+ is Cisco's per-VLAN spanning tree."
  },
  {
    "id": "z2-n1-013",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "A network admin wants a static route to only be used if the OSPF route fails. What technique achieves this?",
    "options": [
      "Set the static route metric to 255",
      "Configure a floating static route with AD higher than 110",
      "Use OSPF redistribution",
      "Disable the static route by default"
    ],
    "correct_index": 1,
    "explanation": "A 'floating static route' has its AD set higher than the dynamic protocol (e.g., AD 150 > OSPF AD 110). The static route only appears in the routing table when the OSPF route is gone \u2014 making it a backup path."
  },
  {
    "id": "z2-n1-study-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "A router receives two different paths to the same destination network: one advertised via OSPF and another via RIP. Which path will the router choose as its primary route?",
    "options": [
      "The OSPF route",
      "The RIP route",
      "Both routes equally",
      "Neither route"
    ],
    "correct_index": 0,
    "explanation": "The router chooses the path with the lower Administrative Distance (AD). Since OSPF has an AD of 110 and RIP has an AD of 120, OSPF is considered more trustworthy."
  },
  {
    "id": "z2-n1-study-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which of the following protocols is an open standard that provides first hop redundancy?",
    "options": [
      "HSRP",
      "VRRP",
      "GLBP",
      "OSPF"
    ],
    "correct_index": 1,
    "explanation": "VRRP (Virtual Router Redundancy Protocol) is the industry-standard open protocol. HSRP is Cisco-proprietary, and GLBP is also a Cisco-proprietary protocol that adds load balancing."
  },
  {
    "id": "z2-n1-study-005",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "You configure a floating static route with an AD of 150 to serve as a backup for a primary static route with an AD of 1. When will the router use the backup route?",
    "options": [
      "Only when network traffic exceeds a certain threshold",
      "Always, because it is a valid static route",
      "Only if the primary route becomes unavailable",
      "Never, because its AD is too high"
    ],
    "correct_index": 2,
    "explanation": "A floating static route stays 'hidden' (inactive) because its higher AD makes it less preferred than the primary route. It only enters the routing table if the primary route fails."
  },
  {
    "id": "z2-n1-study-006",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.1,
    "question": "Which of the following is an example of an Exterior Gateway Protocol (EGP) used to route traffic between different Autonomous Systems?",
    "options": [
      "OSPF",
      "EIGRP",
      "IS-IS",
      "BGP"
    ],
    "correct_index": 3,
    "explanation": "BGP (Border Gateway Protocol) is the standard EGP used to route data between different Autonomous Systems on the internet. OSPF, EIGRP, and IS-IS are all IGPs used for internal routing."
  },
  {
    "id": "z2-n2-primer",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "Which protocol prevents Layer 2 loops in switched networks?",
    "options": [
      "VLAN",
      "STP",
      "ARP",
      "MAC"
    ],
    "correct_index": 1,
    "explanation": "Spanning Tree Protocol (STP) prevents Layer 2 loops by blocking redundant paths."
  },
  {
    "id": "z2-n2-study-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "In a coffee shop, one customer asks 'Who has the Wi-Fi password?' loudly. If everyone in the shop hears this question and must process it, what networking concept is this demonstrating?",
    "options": [
      "A secure transmission",
      "A broadcast within a broadcast domain",
      "A point-to-point connection",
      "Encrypted messaging"
    ],
    "correct_index": 1,
    "explanation": "A broadcast domain is the area of a network where a broadcast frame is heard by all devices. VLANs break large broadcast domains into smaller, more manageable segments."
  },
  {
    "id": "z2-n2-study-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "If an IP address is like your current mailing address (which changes if you move), what is a MAC address most similar to?",
    "options": [
      "Your current phone number",
      "Your Social Security Number",
      "Your GPS coordinates",
      "The name of your pet"
    ],
    "correct_index": 1,
    "explanation": "A MAC address is a permanent, unique identifier assigned to the hardware, much like a Social Security Number, whereas an IP address is a logical address that can change."
  },
  {
    "id": "z2-n2-study-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "A city has three highway interchanges forming a perfect triangle. To prevent drivers from getting stuck in an infinite loop, traffic engineers must block one of the three connecting roads. What is this concept called in networking?",
    "options": [
      "Creating a collision domain",
      "Spanning Tree Protocol (STP) loop prevention",
      "Dynamic routing recalculation",
      "VLAN segmentation"
    ],
    "correct_index": 1,
    "explanation": "STP prevents loops by logically blocking redundant paths while keeping them available for failover, ensuring a single loop-free path exists between any two points."
  },
  {
    "id": "z2-n2-study-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "You are setting up a connection for a single desktop computer that only belongs to the HR department. Should you configure this connection as an Access Port or a Trunk Port?",
    "options": [
      "Access Port",
      "Trunk Port",
      "Hybrid Port",
      "Dynamic Port"
    ],
    "correct_index": 0,
    "explanation": "An Access Port connects an end-device (like a PC) to a single, specific VLAN, much like a driveway leading to one house."
  },
  {
    "id": "z2-n2-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "What is the purpose of a VLAN?",
    "options": [
      "Physically separate network devices",
      "Create logical broadcast domains on a single switch",
      "Route traffic between different IP subnets",
      "Encrypt traffic on a LAN"
    ],
    "correct_index": 1,
    "explanation": "A VLAN (Virtual LAN) creates separate logical broadcast domains on a single physical switch. Devices in different VLANs cannot communicate without a Layer 3 device (router or L3 switch)."
  },
  {
    "id": "z2-n2-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "What type of switch port carries traffic for multiple VLANs using 802.1Q tags?",
    "options": [
      "Access port",
      "Trunk port",
      "Native port",
      "Monitor port"
    ],
    "correct_index": 1,
    "explanation": "A trunk port carries traffic for multiple VLANs simultaneously, using 802.1Q tags to identify which VLAN each frame belongs to. Access ports carry traffic for only one VLAN (untagged)."
  },
  {
    "id": "z2-n2-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "What is the total convergence time for original 802.1D Spanning Tree Protocol?",
    "options": [
      "< 1 second",
      "5\u201310 seconds",
      "30\u201350 seconds",
      "2 minutes"
    ],
    "correct_index": 2,
    "explanation": "STP (802.1D) takes 30\u201350 seconds to converge: up to 20 seconds in Blocking (Max Age) + 15 seconds Listening + 15 seconds Learning = 50 sec max. This is why RSTP (802.1w) was developed."
  },
  {
    "id": "z2-n2-014",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "An attacker sends frames with a double 802.1Q tag to jump to a different VLAN. What attack is this?",
    "options": [
      "ARP poisoning",
      "MAC flooding",
      "VLAN hopping (double tagging)",
      "STP manipulation"
    ],
    "correct_index": 2,
    "explanation": "VLAN hopping via double tagging: attacker sends a frame with two 802.1Q tags. The first tag matches the native VLAN (stripped by first switch), and the inner tag reaches VLAN of attacker's choice on the second switch."
  },
  {
    "id": "z2-n2-study-005",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "In a double-tagging attack, how does the first switch process a frame containing two 802.1Q tags?",
    "options": [
      "It ignores both tags and drops the packet immediately.",
      "It strips the outer tag (matching the native VLAN) and forwards it to the next switch.",
      "It replaces the inner tag with the outer tag before forwarding.",
      "It encapsulates both tags into a new header for security."
    ],
    "correct_index": 1,
    "explanation": "The correct answer is B. In double tagging, the first switch strips the outer tag because it matches its native VLAN; the second switch then sees the inner tag and forwards it to the target VLAN. Option A is incorrect because the switch doesn't recognize it as a threat initially. Option C is not how 802.1Q works. Option D describes encapsulation, which is not part of this attack vector."
  },
  {
    "id": "z2-n2-study-006",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.2,
    "question": "You need to configure a port on a Cisco switch so that it only carries traffic for VLAN 10. Which sequence of commands is correct?",
    "options": [
      "switchport mode trunk, switchport access vlan 10",
      "vlan 10, switchport mode access, switchport access vlan 10",
      "vlan 10, switchport mode trunk",
      "switchport mode access, switchport vlan 10"
    ],
    "correct_index": 1,
    "explanation": "To correctly configure an access port for a specific VLAN on a Cisco switch, you must first create the VLAN in global configuration (vlan 10), set the port to access mode (switchport mode access), and then assign that port to the specific VLAN (switchport access vlan 10). 'Switchport mode trunk' is used for ports carrying multiple VLANs."
  },
  {
    "id": "z2-n3-primer",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "What does WAP stand for?",
    "options": [
      "WAP",
      "Advanced WAP Protocol",
      "Automated WAP System",
      "Active WAP Technology"
    ],
    "correct_index": 0,
    "explanation": "WAP stands for WAP."
  },
  {
    "id": "z2-n3-study-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "You are trying to connect to the Wi-Fi in a crowded cafe. Which frequency is like a wide, multi-lane highway that offers much higher speeds but has a shorter range and struggles with walls?",
    "options": [
      "2.4GHz",
      "5GHz",
      "Bluetooth",
      "Infrared"
    ],
    "correct_index": 1,
    "explanation": "5GHz provides higher data rates and less congestion (more 'lanes'), but its shorter wavelength means it doesn't penetrate walls and obstacles as well as 2.4GHz."
  },
  {
    "id": "z2-n3-study-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "An attacker sits in a cafe's parking lot and passively records the WPA2-PSK 4-way handshake of the cafe's Wi-Fi as customers connect. They take the capture home to brute-force it overnight. If the cafe instead used WPA3-Personal (SAE), what would change about this attack?",
    "options": [
      "Nothing - SAE uses the same handshake as WPA2 and is equally vulnerable to offline cracking",
      "The captured exchange would be useless for offline guessing - each password attempt requires live interaction with the AP, which can detect and throttle repeated failures",
      "SAE eliminates the need for a password entirely, so there is nothing to capture",
      "SAE only protects enterprise networks with a RADIUS server, so a personal/PSK cafe network gains no benefit"
    ],
    "correct_index": 1,
    "explanation": "SAE (Simultaneous Authentication of Equals) is a Diffie-Hellman-based exchange \u2014 a passively captured SAE exchange gives an attacker nothing to brute-force offline, since every guess needs a live round-trip the AP can rate-limit or lock out. Wrong: (A) this offline-cracking weakness is exactly what SAE fixes versus WPA2's 4-way handshake. (C) WPA3-Personal still uses a passphrase; SAE just changes how it's verified. (D) SAE replaces PSK in WPA3-Personal (no RADIUS needed) \u2014 WPA3-Enterprise is a separate mode."
  },
  {
    "id": "z2-n3-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "Which 802.11 standard operates exclusively on the 5 GHz band with a maximum theoretical speed of 3.5 Gbps?",
    "options": [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.11g"
    ],
    "correct_index": 1,
    "explanation": "802.11ac (Wi-Fi 5) operates exclusively on 5 GHz and achieves up to 3.5 Gbps using MU-MIMO and 80/160 MHz channel bonding. 802.11ax (Wi-Fi 6) supports 2.4/5/6 GHz."
  },
  {
    "id": "z2-n3-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "On the 2.4 GHz band, which three channels are non-overlapping?",
    "options": [
      "1, 2, 3",
      "1, 5, 10",
      "1, 6, 11",
      "2, 7, 12"
    ],
    "correct_index": 2,
    "explanation": "Channels 1, 6, and 11 are the only non-overlapping channels in the 2.4 GHz band (in North America). Using any other combination results in co-channel or adjacent-channel interference."
  },
  {
    "id": "z2-n3-007",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "WPA3 replaces WPA2's PSK with which authentication method that prevents offline dictionary attacks?",
    "options": [
      "EAP-TLS",
      "SAE (Simultaneous Authentication of Equals)",
      "TKIP",
      "MS-CHAPv2"
    ],
    "correct_index": 1,
    "explanation": "WPA3 Personal uses SAE (Simultaneous Authentication of Equals) \u2014 a key exchange method that prevents offline dictionary attacks. Even if an attacker captures the 4-way handshake, they cannot crack the password offline."
  },
  {
    "id": "z2-n3-study-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "Which of the following Wi-Fi standards operates on both the 2.4 GHz and 5 GHz bands?",
    "options": [
      "802.11ac",
      "802.11ax",
      "802.11b",
      "802.11a"
    ],
    "correct_index": 1,
    "explanation": "The correct answer is B (802.11ax). 802.11ac is only 5 GHz; 802.11b is only 2.4 GHz; 802.11a is only 5 GHz. 802.11ax (Wi-Fi 6) and 802.11be are the modern standards that support both common bands."
  },
  {
    "id": "z2-n3-study-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "Which set of channels provides non-overlapping coverage in the 2.4 GHz Wi-Fi band?",
    "options": [
      "1, 2, 3",
      "1, 5, 9",
      "1, 6, 11",
      "2, 4, 8"
    ],
    "correct_index": 2,
    "explanation": "The correct answer is C. Channels 1, 6, and 11 are the standard non-overlapping channels in the 2.4 GHz band. Other combinations (like 1, 5, 9) result in overlapping signals that cause interference."
  },
  {
    "id": "z2-n3-study-005",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "A technician identifies a wireless signal and notes its unique MAC address. Which term describes this specific identifier?",
    "options": [
      "SSID",
      "ESSID",
      "BSSID",
      "S1ID"
    ],
    "correct_index": 2,
    "explanation": "The BSSID is the unique MAC address of the specific Access Point or radio. The SSID is the human-readable name (e.g., 'Guest_WiFi'), and the ESSID is the logical name that can span multiple APs."
  },
  {
    "id": "z2-n3-study-006",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.3,
    "question": "Which antenna type would be most appropriate for a point-to-point link between two distant towers?",
    "options": [
      "Omnidirectional",
      "Directional",
      "Broadcast",
      "Passive"
    ],
    "correct_index": 1,
    "explanation": "Directional antennas (including patch and Yagi) focus the signal in a specific direction, making them ideal for point-to-point links. Omnidirectional antennas radiate in all directions and are better for general local coverage."
  },
  {
    "id": "z2-n4-primer",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "What does PoE stand for?",
    "options": [
      "Power over Ethernet",
      "Advanced PoE Protocol",
      "Automated PoE System",
      "Active PoE Technology"
    ],
    "correct_index": 0,
    "explanation": "PoE stands for Power over Ethernet."
  },
  {
    "id": "z2-n4-study-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "You are laying a pipeline next to a massive, vibrating power plant that generates heavy electromagnetic noise. Which type of cabling should you use?",
    "options": [
      "UTP (Unshielded Twisted Pair)",
      "STP (Shielded Twisted Pair)",
      "Coaxial Cable",
      "Fiber Optic"
    ],
    "correct_index": 1,
    "explanation": "STP includes shielding to protect the signal from EMI (Electromagnetic Interference), much like an armored pipe protects fluid from external pressure or contaminants."
  },
  {
    "id": "z2-n4-study-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "A new office is being fitted out on the 8th floor of a building whose MDF is in the basement. The office desk is 70 meters of cable away from the 8th floor's IDF, but the IDF itself is connected to the basement MDF via a 200-meter fiber backbone run. Is this a valid design?",
    "options": [
      "No - the desk's 70m run plus the 200m backbone exceeds the 100m TIA-568 limit, so the whole path is non-compliant",
      "Yes - the 90m/100m TIA-568 horizontal cabling limit applies only to the IDF-to-desk run (70m, which is fine); the IDF-to-MDF backbone uses fiber, which is not bound by the 100m copper limit",
      "No - IDFs are not allowed to connect to desks directly, only to the MDF",
      "Yes, but only if the backbone cabling is also copper to keep latency consistent"
    ],
    "correct_index": 1,
    "explanation": "The 90m/100m TIA-568 limit applies to HORIZONTAL copper cabling \u2014 the IDF-to-desk run, here 70m, well within budget. Backbone (vertical) cabling between IDF and MDF is typically fiber precisely because it often spans much further than 100m, with distance limits measured in kilometers. Wrong: (A) incorrectly adds the two runs as one copper segment. (C) connecting end devices is the IDF's entire purpose. (D) is backwards \u2014 fiber is preferred for long backbone runs specifically because it ISN'T limited like copper."
  },
  {
    "id": "z2-n4-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "What does MDF stand for in network infrastructure?",
    "options": [
      "Media Distribution Frame",
      "Main Distribution Frame",
      "Managed Data Fabric",
      "Multi-Domain Firewall"
    ],
    "correct_index": 1,
    "explanation": "MDF (Main Distribution Frame) is the central wiring point for a building's network \u2014 housing core switches, routers, WAN connections, and patch panels. All IDFs connect back to the MDF."
  },
  {
    "id": "z2-n4-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "What type of UPS has zero transfer time because it always routes power through the inverter?",
    "options": [
      "Offline/standby UPS",
      "Line-interactive UPS",
      "Online/double conversion UPS",
      "Feroresonant UPS"
    ],
    "correct_index": 2,
    "explanation": "Online/double conversion UPS always runs through the inverter \u2014 utility power charges the battery, and the inverter powers the load 100% of the time. Zero transfer time on outage, cleanest power output."
  },
  {
    "id": "z2-n4-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "What is the maximum horizontal cable run length (permanent link) defined by TIA-568?",
    "options": [
      "50 meters",
      "75 meters",
      "90 meters",
      "100 meters"
    ],
    "correct_index": 2,
    "explanation": "TIA-568 specifies maximum 90m for the permanent horizontal link (wall jack to patch panel). Up to 10m is allowed for patch cables (both ends), giving a total of 100m channel length."
  },
  {
    "id": "z2-n4-study-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "Which UPS topology provides the highest level of protection by continuously running the load through an inverter?",
    "options": [
      "Offline/Standby",
      "Line-interactive",
      "Online/Double-conversion",
      "Passive-buffer"
    ],
    "correct_index": 2,
    "explanation": "The correct answer is C. Online/Double-conversion UPS systems provide the best protection because they constantly convert AC to DC and back to AC, isolating the equipment from power fluctuations. Offline and Line-interactive models have a brief delay when switching to battery."
  },
  {
    "id": "z2-n4-study-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.4,
    "question": "A technician needs to monitor the power consumption of several servers in a rack. Which type of PDU should they install?",
    "options": [
      "Basic PDU",
      "Switched PDU",
      "Metered PDU",
      "Unmanaged PDU"
    ],
    "correct_index": 2,
    "explanation": "A Metered PDU is specifically designed to show the current draw (power consumption) of the connected devices. A Switched PDU allows for remote control of outlets, and a Basic PDU provides only standard power distribution."
  },
  {
    "id": "z2-n5-primer",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "What does VXLAN stand for?",
    "options": [
      "Virtual Extensible LAN",
      "Advanced VXLAN Protocol",
      "Automated VXLAN System",
      "Active VXLAN Technology"
    ],
    "correct_index": 0,
    "explanation": "VXLAN stands for Virtual Extensible LAN."
  },
  {
    "id": "z2-n5-study-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "You are setting up a small office with basic VoIP phones that require very little power. Which 'grid standard' is the bare minimum required?",
    "options": [
      "802.3af",
      "802.3at",
      "802.3bt",
      "802.1X"
    ],
    "correct_index": 0,
    "explanation": "802.3af is the original PoE standard, providing up to 15.4W \u2014 sufficient for low-power devices like basic VoIP phones."
  },
  {
    "id": "z2-n5-study-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "A 24-port switch advertises a 400W PoE power budget. The network team plans to deploy 10 Wi-Fi 6 access points, each negotiating as 802.3at (PoE+) Class 4 devices drawing 25.5W each. After installing all 10 APs, how much of the power budget remains, and is the deployment safe?",
    "options": [
      "255W consumed, 145W remaining - safe, with headroom for a few more low-power devices like phones",
      "400W consumed exactly - safe, but with zero headroom for any future devices",
      "255W consumed, but unsafe because PoE+ devices require the switch to reserve double their rated class power",
      "510W consumed - unsafe, exceeds the 400W budget by 110W"
    ],
    "correct_index": 0,
    "explanation": "10 APs x 25.5W = 255W. 400W - 255W = 145W remaining \u2014 plenty of headroom for a few more low-power devices like phones (15.4W each) later. Wrong: (B) miscounts the total as exactly 400W. (C) invents a 'double reservation' rule that doesn't exist \u2014 the switch reserves the negotiated class wattage, not double. (D) doubles the AP power draw incorrectly (10 x 51W instead of 10 x 25.5W). Always do this math BEFORE a rollout."
  },
  {
    "id": "z2-n5-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "Which IEEE standard provides 15.4W of power per port?",
    "options": [
      "802.3af",
      "802.3at",
      "802.3bt",
      "802.3an"
    ],
    "correct_index": 0,
    "explanation": "802.3af (Type 1) delivers 15.4W max, with 12.95W available to the device after cable loss."
  },
  {
    "id": "z2-n5-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "Your VoIP phone needs 25W. Which PoE standard is the minimum required?",
    "options": [
      "802.3af",
      "802.3at",
      "802.3bt Type 3",
      "802.3bt Type 4"
    ],
    "correct_index": 1,
    "explanation": "802.3at (Type 2 / PoE+) provides up to 30W, supporting devices like PTZ cameras and VoIP phones."
  },
  {
    "id": "z2-n5-011",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "48-port switch with 740W budget. 20 APs (25W each) + 15 cameras (15W each). Enough power?",
    "options": [
      "Yes, 215W remaining",
      "Yes, 15W remaining",
      "No, need 15W more",
      "No, need 85W more"
    ],
    "correct_index": 1,
    "explanation": "20 APs \u00d7 25 W = 500 W. 15 cameras \u00d7 15 W = 225 W. Total draw = 725 W. With a 740 W budget, 740 - 725 = 15 W remains. The switch has enough power for this deployment."
  },
  {
    "id": "z2-n5-study-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.5,
    "question": "Which PoE standard is required to power a high-demand device that requires up to 30 Watts of power?",
    "options": [
      "802.3af",
      "802.3at",
      "802.3bt",
      "802.11ax"
    ],
    "correct_index": 1,
    "explanation": "802.3at (Type 2, also known as PoE+) provides up to 30W of power. 802.3af only provides up to 15.4W, and 802.3bt is required for even higher demands (60W+)."
  },
  {
    "id": "z2-g-001",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which routing protocol is used between Autonomous Systems on the internet?",
    "options": [
      "OSPF",
      "EIGRP",
      "BGP",
      "RIP"
    ],
    "correct_index": 2,
    "explanation": "BGP (Border Gateway Protocol) is the EGP (Exterior Gateway Protocol) that routes between ASes on the internet. OSPF, EIGRP, and RIP are IGPs used within a single AS."
  },
  {
    "id": "z2-g-002",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "OSPF has an administrative distance of:",
    "options": [
      "1",
      "90",
      "110",
      "120"
    ],
    "correct_index": 2,
    "explanation": "OSPF = AD 110. The AD pecking order: Connected(0) > Static(1) > eBGP(20) > EIGRP(90) > OSPF(110) > RIP(120) > iBGP(200)."
  },
  {
    "id": "z2-g-018",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "An attacker sends frames tagged with the native VLAN ID followed by an inner tag for VLAN 20. What attack is this, and what is the primary mitigation?",
    "options": [
      "ARP poisoning \u2014 mitigated by dynamic ARP inspection",
      "VLAN hopping (double tagging) \u2014 mitigated by changing native VLAN to an unused VLAN",
      "STP manipulation \u2014 mitigated by BPDU Guard",
      "MAC flooding \u2014 mitigated by port security"
    ],
    "correct_index": 1,
    "explanation": "Double tagging VLAN hopping: attacker's frame has outer tag = native VLAN (stripped by first switch) and inner tag = target VLAN (delivered by second switch). Mitigation: change native VLAN to an unused VLAN (not VLAN 1) and disable DTP."
  },
  {
    "id": "z2-g-003",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "A router learns 192.168.0.0/16 via EIGRP (AD 90) and 192.168.1.0/24 via OSPF (AD 110). Which route is installed in the routing table?",
    "options": [
      "192.168.0.0/16",
      "192.168.1.0/24",
      "Neither, as OSPF has a higher AD",
      "Both are installed"
    ],
    "correct_index": 1,
    "explanation": "The Longest Prefix Match rule takes precedence over Administrative Distance. Because /24 is a more specific subnet than /16, the router will select the OSPF route regardless of its higher AD."
  },
  {
    "id": "z2-g-004",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What is the primary purpose of configuring subinterfaces on a router?",
    "options": [
      "To increase the physical clock speed of the port",
      "To allow a single physical interface to route traffic for multiple VLANs",
      "To provide hardware-level redundancy for failed ports",
      "To encrypt data passing between different local segments"
    ],
    "correct_index": 1,
    "explanation": "Subinterfaces (often used in 'Router-on-a-Stick' configurations) allow a single physical interface to be divided into multiple logical interfaces, each assigned to a different VLAN."
  },
  {
    "id": "z2-g-005",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which routing protocol uses 'cost' as a metric based primarily on link bandwidth?",
    "options": [
      "RIP",
      "EIGRP",
      "OSPF",
      "BGP"
    ],
    "correct_index": 2,
    "explanation": "OSPF (Open Shortest Path First) uses 'cost' as its metric, which is calculated based on the bandwidth of the outgoing interface."
  },
  {
    "id": "z2-g-006",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "In an HSRP configuration, what is the term for the IP address shared by the active and standby routers?",
    "options": [
      "Gateway MAC",
      "Virtual IP (VIP)",
      "Standby Address",
      "Proxy Gateway"
    ],
    "correct_index": 1,
    "explanation": "HSRP (Hot Standby Router Protocol) provides redundancy by having multiple routers share a Virtual IP (VIP) and a virtual MAC address."
  },
  {
    "id": "z2-g-007",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "A floating static route is configured with an Administrative Distance (AD) of 200. When does this route become active?",
    "options": [
      "When the physical link to the primary router fails",
      "When the primary route's AD is manually increased",
      "When the primary route with a lower AD is removed from the routing table",
      "When the router receives an OSPF update for that prefix"
    ],
    "correct_index": 2,
    "explanation": "A floating static route has a higher Administrative Distance than the primary route. It remains 'hidden' in the configuration until the primary (lower AD) route is removed from the routing table."
  },
  {
    "id": "z2-g-008",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "To carve a new VLAN into the fabric of the network on a Cisco switch, which mode must you enter?",
    "options": [
      "VLAN Database Mode",
      "Global Configuration Mode",
      "Exec Mode",
      "Interface Configuration Mode"
    ],
    "correct_index": 1,
    "explanation": "To create or modify a VLAN (e.g., 'switch(config-vlan)#'), you must be in Global Configuration mode. Interface Configuration mode is used for assigning ports to existing VLANs."
  },
  {
    "id": "z2-g-009",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What is the primary purpose of an SVI (Switched Virtual Interface) on a Layer 3 switch?",
    "options": [
      "To provide a physical port for end-user devices",
      "To provide a routed gateway interface for a VLAN",
      "To map MAC addresses to specific IP addresses",
      "To broadcast traffic across all available subnets"
    ],
    "correct_index": 1,
    "explanation": "An SVI is a logical interface (like Interface Vlan 10) that allows a Layer 3 switch to route traffic between different VLANs by acting as the default gateway."
  },
  {
    "id": "z2-g-010",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which IEEE standard is specifically used for link aggregation and EtherChannel with LACP?",
    "options": [
      "802.1Q",
      "802.11n",
      "802.3ad",
      "802.1X"
    ],
    "correct_index": 2,
    "explanation": "IEEE 802.3ad is the standard for Link Aggregation (LAG), which allows multiple physical links to be combined into a single logical link for increased bandwidth and redundancy."
  },
  {
    "id": "z2-g-011",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "When connecting an IP phone to a switch port, which feature is used to separate voice traffic from data traffic?",
    "options": [
      "Voice VLAN",
      "Trunking Mode",
      "Spanning Tree Protocol",
      "Port Security"
    ],
    "correct_index": 0,
    "explanation": "A Voice VLAN allows a switch to identify and prioritize voice traffic (VoIP) over data traffic, often using a different subnet or priority level for the phone's traffic."
  },
  {
    "id": "z2-g-012",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What specific information does a switch examine to build its MAC address table?",
    "options": [
      "Destination IP address",
      "Source MAC address of incoming frames",
      "TTL (Time to Live) value",
      "Frame Check Sequence (FCS)"
    ],
    "correct_index": 1,
    "explanation": "A switch builds its MAC address table by looking at the source MAC address of an incoming frame. This allows it to know which port a specific device is connected to."
  },
  {
    "id": "z2-g-013",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which 802.11 standard operates exclusively in the 5 GHz band and is also known as Wi-Fi 5?",
    "options": [
      "802.11g",
      "802.11n",
      "802.11ac",
      "802.11ax"
    ],
    "correct_index": 2,
    "explanation": "802.11ac (Wi-Fi 5) operates exclusively in the 5 GHz band. While 802.11n can operate on both 2.4 and 5 GHz, and 802.11ax (Wi-Fi 6) is the successor to ac."
  },
  {
    "id": "z2-g-014",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What is the broadcast name of a wireless network called?",
    "options": [
      "SSID",
      "BSSID",
      "MAC Address",
      "Beacon Frame"
    ],
    "correct_index": 0,
    "explanation": "SSID (Service Set Identifier) is the unique name assigned to a wireless network for identification by users."
  },
  {
    "id": "z2-g-015",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which antenna type radiates signal in all directions?",
    "options": [
      "Directional",
      "Patch",
      "Omnidirectional",
      "Yagi"
    ],
    "correct_index": 2,
    "explanation": "An omnidirectional antenna radiates signals in all directions (360 degrees), making it ideal for general coverage areas."
  },
  {
    "id": "z2-g-016",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which wireless network mode involves devices connecting directly to each other without an Access Point (AP)?",
    "options": [
      "Infrastructure Mode",
      "Ad-hoc / IBSS",
      "Mesh Mode",
      "Repeater Mode"
    ],
    "correct_index": 1,
    "explanation": "Ad-hoc mode (Independent Basic Service Set or IBSS) allows devices to communicate directly with each other without the need for a central Access Point."
  },
  {
    "id": "z2-g-017",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "In a wireless site survey, what is the term for an area where the signal is too weak for reliable communication?",
    "options": [
      "Multipath",
      "Dead zone",
      "Attenuation",
      "Interference"
    ],
    "correct_index": 1,
    "explanation": "A dead zone (or coverage hole) is an area where the wireless signal is too weak to maintain a reliable connection due to distance or physical obstructions."
  },
  {
    "id": "z2-g-019",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What specific capability does a switched PDU provide to an administrator in this situation?",
    "options": [
      "Power cycle individual outlets",
      "Increase port bandwidth",
      "Assign static IP addresses",
      "Configure VLAN tagging"
    ],
    "correct_index": 0,
    "explanation": "A Switched Power Distribution Unit (PDU) allows administrators to remotely control and power cycle individual outlets, enabling the rebooting of equipment in remote locations without physical access."
  },
  {
    "id": "z2-g-020",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which environmental factor is most likely to cause hardware failure in a server room?",
    "options": [
      "High humidity",
      "Overheating / high temperature",
      "Dust accumulation",
      "Electromagnetic interference"
    ],
    "correct_index": 1,
    "explanation": "While dust and humidity are concerns, overheating/high temperature is the most immediate and common environmental factor leading to hardware failure in server environments."
  },
  {
    "id": "z2-g-021",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What is the standard unit of measurement for rack-mounted equipment height?",
    "options": [
      "RU",
      "U",
      "HU",
      "MU"
    ],
    "correct_index": 1,
    "explanation": "The 'U' (or Rack Unit) is the standard unit of measurement for the height of equipment in a rack, where 1U equals 1.75 inches."
  },
  {
    "id": "z2-g-022",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "Which PoE standard is capable of providing up to 30W per port?",
    "options": [
      "802.3af",
      "802.3at (PoE+)",
      "802.11ax",
      "802.3bz"
    ],
    "correct_index": 1,
    "explanation": "The IEEE 802.3at standard, also known as PoE+, can provide up to 30W of power per port, making it suitable for devices like PTZ cameras or high-power VOIP phones."
  },
  {
    "id": "z2-g-023",
    "zone": 2,
    "domain": "Network Implementation",
    "node": 2.0,
    "question": "What is the maximum cable distance for Ethernet runs per the TIA/EIA-568 standard?",
    "options": [
      "100 meters (328 feet)",
      "500 meters",
      "1,000 meters",
      "100 feet"
    ],
    "correct_index": 0,
    "explanation": "The TIA/EIA-568 standard specifies a maximum length of 100 meters (328 feet) for Ethernet runs to ensure signal integrity and prevent degradation."
  },
  {
    "id": "z3-n1-primer",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "What does NMS stand for?",
    "options": [
      "Network Management System",
      "Advanced NMS Protocol",
      "Automated NMS System",
      "Active NMS Technology"
    ],
    "correct_index": 0,
    "explanation": "NMS stands for Network Management System."
  },
  {
    "id": "z3-n1-study-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "A network administrator wants to be notified instantly whenever a specific router port loses its physical link. Which SNMP mechanism should they rely on?",
    "options": [
      "SNMP Polling (Request/Response)",
      "SNMP Traps",
      "ICMP Echo Requests",
      "ARP Table Broadcasts"
    ],
    "correct_index": 1,
    "explanation": "Correct: SNMP Traps are unsolicited notifications sent by an agent to the manager when a specific event occurs (like a link failure). Option A is incorrect because polling requires the manager to ask repeatedly. Option C (Ping) only tests reachability and does not provide specific status alerts. Option D is used for MAC address discovery."
  },
  {
    "id": "z3-n1-study-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "An engineer is trying to identify which internal server is consuming the most bandwidth during peak hours. Which tool provides the best visibility for this?",
    "options": [
      "Syslog records",
      "SNMP Traps",
      "NetFlow / IPFIX data",
      "ICMP TTL analysis"
    ],
    "correct_index": 2,
    "explanation": "Correct: NetFlow provides granular statistics on traffic flows (source/destination IPs, ports, and volume), making it the ideal tool for capacity planning. Option A (Syslog) is for discrete system events like login failures or hardware errors. Option B (Traps) are just alerts. Option D (TTL) is used to determine hop counts, not bandwidth usage."
  },
  {
    "id": "z3-n1-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "SNMP agents send unsolicited notifications to the NMS when an event occurs. What are these called?",
    "options": [
      "Polls",
      "Traps",
      "Queries",
      "Informs"
    ],
    "correct_index": 1,
    "explanation": "SNMP Traps are asynchronous notifications sent from an agent to the NMS (manager) without being polled. They are unreliable (UDP, no ACK). SNMPv2c/v3 Informs are similar but require acknowledgement."
  },
  {
    "id": "z3-n1-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Which UDP port does SNMP use for manager-to-agent queries?",
    "options": [
      "514",
      "161",
      "162",
      "2055"
    ],
    "correct_index": 1,
    "explanation": "SNMP uses UDP 161 for manager-to-agent queries (GET, SET requests). UDP 162 is used for agent-to-manager traps/informs. UDP 514 is syslog. UDP 2055 is NetFlow."
  },
  {
    "id": "z3-n1-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Syslog messages are sent to which default UDP port?",
    "options": [
      "161",
      "162",
      "514",
      "2055"
    ],
    "correct_index": 2,
    "explanation": "Syslog uses UDP port 514 by default. TCP 514 or TCP/TLS 6514 is used when reliability or encryption is needed. Syslog messages flow from network devices to a centralised syslog server."
  },
  {
    "id": "z3-n1-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Which syslog severity level indicates the system is unusable (highest severity)?",
    "options": [
      "Level 7 \u2014 Debug",
      "Level 0 \u2014 Emergency",
      "Level 1 \u2014 Alert",
      "Level 3 \u2014 Error"
    ],
    "correct_index": 1,
    "explanation": "Level 0 (Emergency) = system unusable. Lower number = higher severity. The scale: 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Info, 7=Debug."
  },
  {
    "id": "z3-n1-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "NetFlow / IPFIX is used to:",
    "options": [
      "Monitor CPU and memory on network devices",
      "Analyse traffic flows \u2014 source/destination IP, port, protocol, and byte counts",
      "Send log messages to a syslog server",
      "Configure devices remotely"
    ],
    "correct_index": 1,
    "explanation": "NetFlow (Cisco) and IPFIX (IETF standard) export traffic flow records from routers/switches to a collector. They show who is talking to whom, on what port, how much traffic \u2014 without capturing actual packet content."
  },
  {
    "id": "z3-n1-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "What is a MIB in the context of SNMP?",
    "options": [
      "The SNMP manager software",
      "A database of manageable objects and variables on a network device",
      "A security policy for SNMP access",
      "A type of SNMP packet"
    ],
    "correct_index": 1,
    "explanation": "MIB (Management Information Base) is a hierarchical database that describes all the objects that can be monitored or managed via SNMP on a device. Each object has a unique OID (Object Identifier) like 1.3.6.1.2.1.2.2.1.10 (interface octets in)."
  },
  {
    "id": "z3-n1-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "SNMPv3 with AuthPriv mode provides:",
    "options": [
      "Authentication only \u2014 no encryption",
      "Neither authentication nor encryption",
      "Both authentication and encryption (AES/DES)",
      "Encryption only \u2014 no authentication"
    ],
    "correct_index": 2,
    "explanation": "SNMPv3 has three security levels: NoAuthNoPriv (no security), AuthNoPriv (authentication only via MD5/SHA), and AuthPriv (authentication + encryption with AES or DES). AuthPriv is the most secure and recommended for production."
  },
  {
    "id": "z3-n1-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "What is a key security risk of using SNMPv1 or SNMPv2c in production?",
    "options": [
      "They do not support MIBs",
      "Community strings are transmitted in cleartext \u2014 can be sniffed",
      "They cannot generate traps",
      "They require complex certificate management"
    ],
    "correct_index": 1,
    "explanation": "SNMPv1 and v2c use community strings (e.g., 'public' for read-only, 'private' for read-write) transmitted in cleartext over UDP. An attacker sniffing the network can capture these strings and use them to read \u2014 or even write \u2014 device configurations."
  },
  {
    "id": "z3-n1-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Port mirroring (SPAN) is configured on a switch to:",
    "options": [
      "Improve port speed by mirroring traffic to a faster link",
      "Copy traffic from one port to a monitor port for analysis (e.g., Wireshark)",
      "Mirror switch configuration to a backup device",
      "Duplicate broadcast traffic to reduce flooding"
    ],
    "correct_index": 1,
    "explanation": "SPAN (Switched Port Analyzer) copies all traffic from a source port (or VLAN) to a designated monitor port \u2014 allowing a network analyser (Wireshark) or IDS sensor connected to the monitor port to inspect all that traffic."
  },
  {
    "id": "z3-n1-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Which syslog level would typically be generated when a router interface goes down?",
    "options": [
      "Level 0 \u2014 Emergency",
      "Level 2 \u2014 Critical",
      "Level 3 \u2014 Error",
      "Level 7 \u2014 Debug"
    ],
    "correct_index": 2,
    "explanation": "Interface down events are typically Level 3 (Error) in syslog. Level 0 (Emergency) is for total system failure. Level 7 (Debug) is verbose per-packet tracing. Knowing the severity helps filter relevant alerts from noise."
  },
  {
    "id": "z3-n1-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "What does establishing a network baseline mean?",
    "options": [
      "Configuring minimum security settings on all devices",
      "Recording normal performance metrics to compare against future anomalies",
      "Setting the lowest acceptable QoS threshold",
      "Backing up all device configurations"
    ],
    "correct_index": 1,
    "explanation": "A baseline documents 'normal' network behaviour \u2014 bandwidth utilisation, CPU loads, traffic patterns, error rates. Monitoring tools compare current metrics against the baseline to detect anomalies (spikes, unusual traffic) that may indicate problems or attacks."
  },
  {
    "id": "z3-n1-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "RSPAN differs from SPAN in that RSPAN:",
    "options": [
      "Requires a WLC to function",
      "Mirrors traffic from a remote switch across the network to a local monitor port",
      "Only captures inbound traffic",
      "Uses encryption to protect mirrored traffic"
    ],
    "correct_index": 1,
    "explanation": "RSPAN (Remote SPAN) extends port mirroring across multiple switches \u2014 traffic is tagged with a special RSPAN VLAN and transported across trunk links to reach the monitor port on a different switch. Useful when the monitoring workstation is not locally connected to the source switch."
  },
  {
    "id": "z3-n1-013",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "An SNMP Inform differs from an SNMP Trap in that an Inform:",
    "options": [
      "Uses TCP instead of UDP",
      "Requires the manager to send an acknowledgement \u2014 unacknowledged Informs are retransmitted",
      "Contains more detailed MIB data",
      "Can only be used with SNMPv1"
    ],
    "correct_index": 1,
    "explanation": "SNMPv2c/v3 Informs require the NMS to send an acknowledgement. If no ACK is received, the agent retransmits the Inform. Traditional Traps are fire-and-forget (UDP, no ACK) \u2014 can be lost silently."
  },
  {
    "id": "z3-n1-014",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Which NetFlow/IPFIX collector port is commonly used?",
    "options": [
      "UDP 161",
      "UDP 514",
      "UDP 2055",
      "TCP 443"
    ],
    "correct_index": 2,
    "explanation": "NetFlow records are exported to a collector on UDP port 2055 by default (also common: 9555, 9995). IPFIX (the IETF standard successor to NetFlow) uses the same mechanism. The collector analyses these records for traffic visibility."
  },
  {
    "id": "z3-n1-study-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.1,
    "question": "Which set of tools would a network administrator use to automate the configuration management of hundreds of switches across a large enterprise?",
    "options": [
      "ICMP and SNMP",
      "Ansible, Puppet, and Chef",
      "RTO and RPO",
      "SIEM and IDS"
    ],
    "correct_index": 1,
    "explanation": "Ansible, Puppet, and Chef are configuration management tools designed to automate the setup and maintenance of network devices. ICMP and SNMP are monitoring protocols used to check reachability and status, not for automated configuration deployment."
  },
  {
    "id": "z3-n2-primer",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "What does QoS stand for?",
    "options": [
      "Quality of Service",
      "Advanced QoS Protocol",
      "Automated QoS System",
      "Active QoS Technology"
    ],
    "correct_index": 0,
    "explanation": "QoS stands for Quality of Service."
  },
  {
    "id": "z3-n2-study-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "A user on a VoIP call reports brief moments where a syllable is completely missing - clean silence, no stutter or delay, just gone. At the same time, a continuous ping to the far end shows occasional 'Request timed out' results. Why can't the network simply retransmit the missing audio the way it would retransmit a dropped piece of a file download?",
    "options": [
      "It can - VoIP uses TCP, so missing audio is automatically retransmitted and replayed seamlessly",
      "The missing audio is caused by packet loss on a UDP stream; VoIP uses UDP precisely because a retransmitted packet would arrive too late to be useful in a live conversation",
      "The issue is jitter, not packet loss, and increasing the jitter buffer size would make the retransmission instantaneous",
      "The issue is latency - the round trip time is too high for any retransmission to succeed before the call ends"
    ],
    "correct_index": 1,
    "explanation": "Clean, silent gaps in a live call combined with ping timeouts point to packet loss on a UDP-based media stream. VoIP deliberately uses UDP because by the time a lost packet was retransmitted, the conversation has moved on \u2014 late audio is worse than missing audio. Wrong: (A) VoIP media uses UDP, not TCP, and even TCP retransmission wouldn't help real-time streams. (C) misattributes the symptom to jitter; a buffer doesn't make retransmission instantaneous. (D) describes overall delay, which wouldn't produce isolated silent gaps."
  },
  {
    "id": "z3-n2-study-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "An ISP guarantees a customer 100 Mbps. The customer's traffic occasionally bursts to 120 Mbps. The ISP's edge router is configured to instantly discard any traffic above 100 Mbps, with no buffering whatsoever. What is the ISP doing, and what's the likely effect on the customer's TCP-based downloads during those bursts?",
    "options": [
      "Traffic shaping - the excess 20 Mbps is queued and delivered slightly later, so TCP just sees extra latency with no drops",
      "Traffic policing - the excess packets are dropped immediately, which triggers TCP's congestion control (e.g., slow start), temporarily reducing throughput",
      "CoS remarking - the excess frames are tagged with a lower 802.1p priority but still delivered across the WAN without loss",
      "LLQ - the excess traffic is placed into a strict-priority queue ahead of the customer's other traffic"
    ],
    "correct_index": 1,
    "explanation": "'Instantly discard... with no buffering' is the textbook definition of traffic POLICING. Dropping TCP segments causes the sender to detect loss and invoke congestion control, cutting its sending rate until conditions improve. Wrong: (A) describes shaping, ruled out by 'no buffering.' (C) describes CoS, a Layer 2 mechanism that wouldn't survive a WAN hop and doesn't match 'discard.' (D) LLQ is a queuing priority mechanism for real-time traffic, not a rate-limiting tool for a customer's link."
  },
  {
    "id": "z3-n2-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "Jitter in networking refers to:",
    "options": [
      "The total delay from source to destination",
      "Variation in latency between consecutive packets",
      "Packet loss percentage",
      "Maximum bandwidth of a link"
    ],
    "correct_index": 1,
    "explanation": "Jitter is the variation in latency between packets. If packets arrive at 10ms, 30ms, 8ms, 25ms intervals, the variation is jitter. High jitter causes choppy VoIP and video. VoIP tolerance: jitter < 30ms."
  },
  {
    "id": "z3-n2-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "What is the difference between bandwidth and throughput?",
    "options": [
      "They are the same thing",
      "Bandwidth is the maximum capacity; throughput is the actual data rate achieved",
      "Throughput is always higher than bandwidth",
      "Bandwidth applies to wireless; throughput applies to wired"
    ],
    "correct_index": 1,
    "explanation": "Bandwidth is the theoretical maximum data rate of a link (e.g., 1 Gbps). Throughput is what's actually delivered after overhead, errors, and congestion. Throughput is always \u2264 bandwidth."
  },
  {
    "id": "z3-n2-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "VoIP quality degrades when which three metrics are poor? (Choose the correct set)",
    "options": [
      "Bandwidth, MTU, VLAN tagging",
      "Latency, jitter, packet loss",
      "Routing protocol convergence, DNS TTL, ARP cache",
      "Duplex, speed, fiber wavelength"
    ],
    "correct_index": 1,
    "explanation": "VoIP is sensitive to latency (< 150ms end-to-end), jitter (< 30ms), and packet loss (< 1%). QoS (DSCP EF marking, LLQ) is used to prioritise voice traffic over data on congested links."
  },
  {
    "id": "z3-n2-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "DSCP EF (Expedited Forwarding) has a value of:",
    "options": [
      "0",
      "10",
      "46",
      "63"
    ],
    "correct_index": 2,
    "explanation": "DSCP EF = 46. It marks packets for the highest-priority queue \u2014 used for VoIP/real-time traffic. DSCP BE (Best Effort) = 0 (default, no special treatment). The DSCP field is 6 bits in the IP header (0\u201363 range)."
  },
  {
    "id": "z3-n2-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "CRC errors on a switch interface most likely indicate:",
    "options": [
      "A routing loop",
      "Cable or physical layer problem (bad cable, connector, or interference)",
      "A spanning tree misconfiguration",
      "VLAN mismatch"
    ],
    "correct_index": 1,
    "explanation": "CRC (Cyclic Redundancy Check) errors occur when the FCS on a received frame doesn't match \u2014 indicating data corruption. Most common causes: bad cable, damaged connector, electromagnetic interference, or faulty SFP/transceiver."
  },
  {
    "id": "z3-n2-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "Traffic shaping vs traffic policing: what is the key difference?",
    "options": [
      "Shaping is inbound; policing is outbound",
      "Shaping buffers excess traffic (adds delay); policing drops excess traffic immediately",
      "Shaping uses DSCP; policing uses CoS",
      "They are identical functions with different names"
    ],
    "correct_index": 1,
    "explanation": "Traffic shaping queues excess traffic and transmits it when within the rate limit \u2014 smooth output but adds delay (buffer). Traffic policing drops or re-marks excess traffic instantly \u2014 hard limit, no delay added, but packets are lost."
  },
  {
    "id": "z3-n2-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "A duplex mismatch between two Ethernet devices causes which specific error to appear on the full-duplex side?",
    "options": [
      "Runts and giants",
      "Late collisions and CRC errors",
      "STP topology changes",
      "MAC flooding"
    ],
    "correct_index": 1,
    "explanation": "When one device is full-duplex and the other half-duplex: the HD device uses CSMA/CD and detects collisions. The FD device sees late collisions (detected after 512 bits \u2014 after a legitimate frame start) and CRC errors. This is a classic duplex mismatch signature."
  },
  {
    "id": "z3-n2-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "CoS (Class of Service / 802.1p) operates at which OSI layer?",
    "options": [
      "Layer 3 \u2014 IP header DSCP field",
      "Layer 2 \u2014 802.1Q VLAN tag PCP bits",
      "Layer 4 \u2014 TCP/UDP port",
      "Layer 7 \u2014 application payload"
    ],
    "correct_index": 1,
    "explanation": "CoS / 802.1p uses the 3-bit PCP (Priority Code Point) field in the 802.1Q VLAN tag \u2014 Layer 2. Values 0\u20137 (7 = highest priority). Only available on tagged (VLAN trunk) frames. DSCP is the Layer 3 equivalent in the IP header."
  },
  {
    "id": "z3-n2-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "Runts on a switch interface are frames smaller than the minimum Ethernet frame size. What is that minimum?",
    "options": [
      "32 bytes",
      "48 bytes",
      "64 bytes",
      "128 bytes"
    ],
    "correct_index": 2,
    "explanation": "The minimum valid Ethernet frame is 64 bytes (including the 14-byte header and 4-byte FCS). Frames smaller than 64 bytes are called runts \u2014 typically caused by collisions (CSMA/CD truncation) or a faulty NIC."
  },
  {
    "id": "z3-n2-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "LLQ (Low Latency Queuing) guarantees what for real-time traffic?",
    "options": [
      "Maximum bandwidth allocation",
      "Strict priority queue \u2014 real-time traffic is always served before other queues",
      "DSCP marking at Layer 3",
      "Traffic is buffered during congestion"
    ],
    "correct_index": 1,
    "explanation": "LLQ creates a strict priority queue that is always emptied before other queues. This guarantees VoIP and real-time traffic is never delayed by data traffic. Without LLQ, queuing delay increases jitter and latency for voice."
  },
  {
    "id": "z3-n2-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "An interface shows input errors and CRC errors but no output errors. The link partner shows similar errors on its output. What is the most likely cause?",
    "options": [
      "Routing misconfiguration",
      "Faulty cable or connector between the two devices",
      "STP blocking state",
      "MTU mismatch"
    ],
    "correct_index": 1,
    "explanation": "Input errors + CRC errors on one side matching output errors on the other side = physical layer problem between the two devices \u2014 bad cable, faulty connector, damaged SFP, or EMI interference. Replace the physical cable/connector first."
  },
  {
    "id": "z3-n2-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "An organisation notices VoIP calls are choppy even though total bandwidth utilisation is only 40%. What is the most likely cause and fix?",
    "options": [
      "Insufficient bandwidth \u2014 upgrade the link",
      "No QoS configured \u2014 voice traffic is competing with bulk data in the same queue",
      "DNS resolution delays affecting call setup",
      "STP convergence causing packet loss"
    ],
    "correct_index": 1,
    "explanation": "Choppy VoIP at low bandwidth utilisation = classic QoS problem. Without QoS, VoIP packets sit in the same queue as bulk data transfers. A large data burst fills the buffer, causing VoIP packets to queue \u2014 introducing jitter and latency. Fix: implement DSCP EF + LLQ for voice."
  },
  {
    "id": "z3-n2-013",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "What is the purpose of establishing a network baseline?",
    "options": [
      "To document the minimum security configuration",
      "To record normal performance metrics as a reference for anomaly detection",
      "To set the maximum allowed bandwidth per user",
      "To configure default QoS markings"
    ],
    "correct_index": 1,
    "explanation": "A baseline documents what 'normal' looks like \u2014 CPU usage, bandwidth, error rates, traffic patterns. When metrics deviate significantly from the baseline, it triggers investigation. Without a baseline, you cannot distinguish normal from abnormal."
  },
  {
    "id": "z3-n2-study-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.2,
    "question": "What is the primary purpose of a SIEM system in a network environment?",
    "options": [
      "To provide high-speed routing between local subnets.",
      "To aggregate logs from multiple sources to correlate events and detect anomalies.",
      "To act as a primary firewall for incoming traffic.",
      "To encrypt data packets traveling over public networks."
    ],
    "correct_index": 1,
    "explanation": "A SIEM (Security Information and Event Management) is specifically designed to aggregate logs from various sources, correlate that data to find security threats or anomalies, and assist in compliance/forensics."
  },
  {
    "id": "z3-n3-primer",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "What does NetFlow stand for?",
    "options": [
      "NetFlow",
      "Advanced NetFlow Protocol",
      "Automated NetFlow System",
      "Active NetFlow Technology"
    ],
    "correct_index": 0,
    "explanation": "NetFlow stands for NetFlow."
  },
  {
    "id": "z3-n3-study-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "An engineer submits an RFC to the CAB stating: 'Plan: Replace the core switch's failing uplink SFP module Friday at 11pm. Reason: rising CRC error counts on that interface.' The CAB sends it back without approval. What is most likely missing that the CAB needs before it can approve this change?",
    "options": [
      "The exact manufacturer serial number of the replacement SFP module",
      "A rollback plan describing what to do if the new SFP doesn't resolve the CRC errors or introduces a new problem",
      "A complete list of every individual employee whose traffic crosses that uplink",
      "A detailed log of every troubleshooting command already run to diagnose the CRC errors"
    ],
    "correct_index": 1,
    "explanation": "Every RFC needs a rollback plan \u2014 the 'how do we undo this if it doesn't work' answer. The CAB can't assess risk without knowing what happens if the new SFP also errors or the link doesn't come back (re-seat the old SFP, revert config, escalate). Wrong: (A) excessive detail the CAB doesn't need. (C) impractical \u2014 impact is described by scope/systems, not individual users. (D) useful background, but not the gating requirement."
  },
  {
    "id": "z3-n3-study-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "A technician needs to find which physical switch port a failing server's cable is plugged into, so they can dispatch someone to replace the cable. Which documentation should they check, and why won't the OTHER major diagram type help here?",
    "options": [
      "The logical diagram - it shows the server's IP address and VLAN, which is exactly the information needed to locate the cable",
      "The physical/wiring (or rack) diagram - it maps devices to actual switch ports, patch panel positions, and cable runs; the logical diagram only shows IP/VLAN relationships, not physical locations",
      "The IPAM database - it records the rack unit position of every device in the building",
      "Either document works equally well, since logical and physical diagrams are automatically kept in sync"
    ],
    "correct_index": 1,
    "explanation": "Locating a physical cable requires physical/wiring or rack documentation \u2014 it maps a device to an actual port, patch panel, and cable ID. Wrong: (A) the logical diagram shows addressing/routing, great for traffic flow but useless for finding a cable in a rack. (C) IPAM tracks IP allocation and DNS, not physical rack layout. (D) is wrong, and dangerously so \u2014 documentation does NOT sync itself, which is exactly why out-of-date diagrams are a recurring exam theme."
  },
  {
    "id": "z3-n3-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "A logical network diagram differs from a physical network diagram in that a logical diagram:",
    "options": [
      "Shows exact cable lengths",
      "Shows IP addressing, VLANs, and routing topology without physical locations",
      "Includes rack unit positions of devices",
      "Shows only Layer 1 connections"
    ],
    "correct_index": 1,
    "explanation": "Logical diagrams show network topology, IP subnets, routing, and VLANs \u2014 how data flows, not where equipment physically sits. Physical diagrams show actual device locations, cable runs, and port numbers."
  },
  {
    "id": "z3-n3-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "An AUP (Acceptable Use Policy) is:",
    "options": [
      "A technical document defining QoS parameters",
      "A policy that defines permitted uses of the organisation's network and systems by users",
      "A contract between an ISP and a customer",
      "A document describing the DR site"
    ],
    "correct_index": 1,
    "explanation": "An AUP defines what users are and are not allowed to do on the organisation's network \u2014 websites they can visit, software they can install, data they can share. Users typically must sign the AUP. Violations can result in disciplinary action."
  },
  {
    "id": "z3-n3-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "An SLA of 99.9% uptime allows approximately how much downtime per year?",
    "options": [
      "~52 minutes",
      "~8.76 hours",
      "~1 day",
      "~5 minutes"
    ],
    "correct_index": 1,
    "explanation": "99.9% uptime = 0.1% downtime. 0.001 \u00d7 8,760 hours/year \u2248 8.76 hours. 99.99% = ~52.6 min/year. 99.999% (five nines) = ~5.26 min/year."
  },
  {
    "id": "z3-n3-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "Before implementing a network change, the most important document to prepare is:",
    "options": [
      "A network diagram",
      "An RFC (Request for Change) with a rollback plan",
      "A syslog export",
      "An SNMP baseline report"
    ],
    "correct_index": 1,
    "explanation": "An RFC (Request for Change) documents the proposed change, reason, scope, risk, implementation steps, test criteria, and critically \u2014 a rollback plan. Without a rollback plan, a failed change can cause extended outages."
  },
  {
    "id": "z3-n3-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "What is IPAM used for in network operations?",
    "options": [
      "Intrusion Prevention and Monitoring",
      "IP Address Management \u2014 tracking and managing IP address allocation and DNS records",
      "Interconnect Protocol for Access Management",
      "Inline Packet Analysis Module"
    ],
    "correct_index": 1,
    "explanation": "IPAM (IP Address Management) is software or processes for tracking IP address allocations, subnets, DHCP leases, and DNS records. It prevents IP conflicts, maintains documentation, and supports auditing. Examples: Infoblox, phpIPAM, SolarWinds IPAM."
  },
  {
    "id": "z3-n3-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "The CAB (Change Advisory Board) is responsible for:",
    "options": [
      "Configuring network devices during a change window",
      "Reviewing and approving or rejecting Requests for Change",
      "Monitoring network performance post-change",
      "Writing the RFC documents"
    ],
    "correct_index": 1,
    "explanation": "The CAB evaluates proposed changes for risk, impact, and resource requirements \u2014 then approves, rejects, or requests modifications. It typically includes IT, security, operations, and business stakeholders."
  },
  {
    "id": "z3-n3-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "A BYOD policy should address which security concern as the highest priority?",
    "options": [
      "Personal device screen resolution requirements",
      "Network segmentation \u2014 personal devices on guest/isolated network, not corporate LAN",
      "Device color and form factor standards",
      "Mandatory antivirus brand"
    ],
    "correct_index": 1,
    "explanation": "BYOD risk: personal devices may be compromised, unpatched, or infected. Best practice: place personal devices on an isolated guest VLAN/network with internet access only \u2014 never on the corporate LAN with access to sensitive systems."
  },
  {
    "id": "z3-n3-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "What does DLP (Data Loss Prevention) technology monitor and prevent?",
    "options": [
      "Physical theft of server hardware",
      "Unauthorised exfiltration of sensitive data (email, USB, cloud upload)",
      "Denial of service attacks from the internet",
      "Unauthorised login attempts"
    ],
    "correct_index": 1,
    "explanation": "DLP monitors data in motion (network), at rest (storage), and in use (endpoints) for sensitive content \u2014 PII, credit card numbers (PCI), medical records (HIPAA). It blocks or alerts when sensitive data is about to leave the organisation unauthorised."
  },
  {
    "id": "z3-n3-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "An emergency change differs from a normal change in that:",
    "options": [
      "It never requires documentation",
      "It uses an expedited approval process \u2014 but documentation must still be completed after the fact",
      "It bypasses the rollback plan requirement",
      "Only the network admin can approve it"
    ],
    "correct_index": 1,
    "explanation": "Emergency changes (e.g., responding to an active security breach) use a streamlined or post-hoc approval process \u2014 fix first, document second. But documentation is never skipped entirely \u2014 the RFC must be completed after resolution for audit purposes."
  },
  {
    "id": "z3-n3-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "An NDA (Non-Disclosure Agreement) with a network vendor is important because:",
    "options": [
      "It defines the SLA for network uptime",
      "It legally protects confidential network information shared during the vendor engagement",
      "It replaces the need for an AUP",
      "It certifies the vendor's technical qualifications"
    ],
    "correct_index": 1,
    "explanation": "An NDA legally prevents the vendor from disclosing confidential information \u2014 network diagrams, IP schemes, security configurations \u2014 shared during sales, support, or implementation. Always require NDAs before sharing sensitive network documentation."
  },
  {
    "id": "z3-n3-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "A rack diagram is most useful for which activity?",
    "options": [
      "Designing IP addressing schemes",
      "Planning power distribution, rack unit allocation, and physical cable management in a data center",
      "Documenting routing protocol configurations",
      "Tracking user account permissions"
    ],
    "correct_index": 1,
    "explanation": "Rack diagrams show which equipment occupies which rack units (U positions), power draw per device, PDU connections, and cable management. Essential for capacity planning, data center moves, and preventing PDU/UPS overload."
  },
  {
    "id": "z3-n3-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "Why is out-of-date network documentation considered MORE dangerous than having no documentation?",
    "options": [
      "It wastes storage space",
      "It can actively mislead troubleshooting and cause engineers to make incorrect assumptions about the network",
      "It violates compliance requirements",
      "It cannot be shared with new team members"
    ],
    "correct_index": 1,
    "explanation": "An engineer consulting outdated documentation may wrongly diagnose problems (e.g., expecting a link to be a certain speed or subnet to be a certain range). This can extend outages and lead to incorrect changes. No documentation forces caution; wrong documentation induces false confidence."
  },
  {
    "id": "z3-n3-013",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "MDM (Mobile Device Management) is used in BYOD environments to:",
    "options": [
      "Block all personal devices from the network",
      "Enforce security policies, enable remote wipe, and containerise corporate data on personal devices",
      "Monitor personal device usage for billing purposes",
      "Provide VPN access to corporate resources"
    ],
    "correct_index": 1,
    "explanation": "MDM solutions (Intune, Jamf, MobileIron) enforce policies on enrolled personal devices \u2014 require PIN/encryption, remotely wipe if lost, and containerise corporate email/apps separate from personal apps. This is the technical enforcement side of a BYOD policy."
  },
  {
    "id": "z3-n3-study-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.3,
    "question": "Which version of SNMP is recommended for production environments because it supports both authentication and encryption?",
    "options": [
      "SNMPv1",
      "SNMPv2c",
      "SNMPv3",
      "ICMP"
    ],
    "correct_index": 2,
    "explanation": "SNMPv1 and v2c are considered insecure for modern production use because they lack robust security features. SNMPv3 is the standard for secure management as it includes both authentication and encryption (AuthPriv)."
  },
  {
    "id": "z3-n4-primer",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "What does MTBF stand for?",
    "options": [
      "Mean Time Between Failures",
      "Advanced MTBF Protocol",
      "Automated MTBF System",
      "Active MTBF Technology"
    ],
    "correct_index": 0,
    "explanation": "MTBF stands for Mean Time Between Failures."
  },
  {
    "id": "z3-n4-study-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "A company stores financial records on a RAID 5 array of six large drives. One drive fails, and the array enters degraded mode while a replacement is shipped - the rebuild will take about 18 hours once it arrives. What is the primary risk during those 18 hours, and how would RAID 6 change the outcome for future arrays?",
    "options": [
      "The array will run out of free space during the rebuild; RAID 0 would prevent this by not using parity",
      "A second disk failure during the 18-hour rebuild would cause total data loss; RAID 6's second independent parity block would let the array survive that second failure",
      "Read/write performance will be permanently reduced after the rebuild completes; RAID 1 fixes this by removing parity calculations entirely",
      "The rebuild will silently corrupt data on the surviving drives; RAID 10 avoids this because it never uses parity"
    ],
    "correct_index": 1,
    "explanation": "RAID 5 tolerates exactly one failed disk. During the rebuild \u2014 which can take many hours for large drives \u2014 the array has NO remaining fault tolerance, so a second failure means total data loss. RAID 6's second, independent parity block survives that second failure even mid-rebuild. Wrong: (A) rebuilds don't consume extra capacity. (C) performance returns to normal post-rebuild, and RAID 1's 50% capacity cost is a different trade-off. (D) rebuilding reconstructs data FROM parity onto the new disk \u2014 it doesn't corrupt surviving disks."
  },
  {
    "id": "z3-n4-study-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "A company's website runs on two web servers behind a load-balancer (active-active), with dual power supplies and two separate ISP links from different providers. However, both web servers query a SINGLE database server with no replica or failover instance. That database server crashes. What happens, and what concept does this illustrate?",
    "options": [
      "The load balancer automatically reroutes database queries to one of the web servers, so the site stays fully operational",
      "The site goes down entirely - the single database server is a SPOF, and no amount of redundancy in the web tier, power, or ISP links compensates for it",
      "RAID on the web servers' local disks automatically takes over the database's role until it's restored",
      "The dual ISP links detect the database failure and fail over to a backup database hosted by the second ISP"
    ],
    "correct_index": 1,
    "explanation": "A SPOF is ANY single component whose failure takes the whole system down \u2014 here, despite redundant web servers, power, and ISP links, the single database server is exactly that. Eliminating SPOFs means EVERY layer needs redundancy, not just the easy/cheap ones. Wrong: (A) load balancers distribute web traffic; they can't substitute for a database. (C) RAID protects local disks, not application-level database availability. (D) ISP redundancy addresses internet connectivity, not database hosting \u2014 a second ISP doesn't provide a database replica."
  },
  {
    "id": "z3-n4-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID 1 provides fault tolerance by:",
    "options": [
      "Striping data across multiple disks",
      "Writing identical data to two disks simultaneously (mirroring)",
      "Distributing parity across all disks",
      "Combining striping and mirroring"
    ],
    "correct_index": 1,
    "explanation": "RAID 1 mirrors data \u2014 every write goes to both disks simultaneously. If one disk fails, the other contains a complete copy. Requires minimum 2 disks; usable capacity = 50% (one disk's worth)."
  },
  {
    "id": "z3-n4-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "What is the minimum number of disks required for RAID 5?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correct_index": 1,
    "explanation": "RAID 5 requires a minimum of 3 disks (data striped + distributed parity). With 3 disks, 1 disk is effectively used for parity \u2014 usable capacity = N-1 disks. RAID 5 can survive one disk failure."
  },
  {
    "id": "z3-n4-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID 0 is NOT used for critical data because:",
    "options": [
      "It is too slow for practical use",
      "It provides no redundancy \u2014 any single disk failure destroys all data",
      "It requires too many disks",
      "It cannot be combined with other RAID levels"
    ],
    "correct_index": 1,
    "explanation": "RAID 0 stripes data across disks for maximum performance \u2014 no parity, no mirroring. If any disk fails, ALL data is lost. Never use RAID 0 for data you cannot afford to lose. It is only appropriate for scratch space or caches."
  },
  {
    "id": "z3-n4-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "What does NIC teaming provide?",
    "options": [
      "Route aggregation across multiple routers",
      "Combines multiple NICs into one logical interface for redundancy and/or increased bandwidth",
      "VLAN segmentation between two switches",
      "Wireless channel bonding"
    ],
    "correct_index": 1,
    "explanation": "NIC teaming (bonding) combines two or more physical NICs into one logical interface. Modes: Active-Backup (one NIC active, other standby \u2014 redundancy only) or LACP/802.3ad (both active \u2014 redundancy + bandwidth aggregation)."
  },
  {
    "id": "z3-n4-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "In an active-passive cluster, the passive node:",
    "options": [
      "Processes traffic alongside the active node",
      "Sits idle and only takes over if the active node fails",
      "Load balances traffic with the active node",
      "Backs up the active node's data only"
    ],
    "correct_index": 1,
    "explanation": "Active-passive (failover) clustering: the passive node is on standby, not processing requests. On active node failure, the passive node takes over. Simpler than active-active but wastes the standby node's capacity during normal operation."
  },
  {
    "id": "z3-n4-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID 5 can survive how many simultaneous disk failures?",
    "options": [
      "Zero",
      "One",
      "Two",
      "Up to half the array"
    ],
    "correct_index": 1,
    "explanation": "RAID 5 uses single distributed parity \u2014 can recover from exactly ONE disk failure. Two simultaneous failures = data loss. For environments with large disks (> 2TB) where rebuild times create risk windows, RAID 6 (two parity disks) is preferred."
  },
  {
    "id": "z3-n4-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID 10 (1+0) combines which two RAID levels?",
    "options": [
      "RAID 0 + RAID 5",
      "RAID 1 (mirroring) + RAID 0 (striping)",
      "RAID 5 + RAID 6",
      "RAID 1 + RAID 6"
    ],
    "correct_index": 1,
    "explanation": "RAID 10 mirrors data first (RAID 1), then stripes across the mirrored pairs (RAID 0). Minimum 4 disks. Combines the performance of striping with the redundancy of mirroring. Can survive one failure per mirrored pair \u2014 potentially multiple disk failures."
  },
  {
    "id": "z3-n4-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "A load balancer performs health checks on backend servers and removes failing servers from the pool. This is an example of:",
    "options": [
      "Traffic shaping",
      "Active-active high availability with automatic failover",
      "RAID-based storage redundancy",
      "NIC teaming"
    ],
    "correct_index": 1,
    "explanation": "An active-active load balancer distributes traffic across multiple servers, continuously health-checks them, and automatically removes any server that fails a health check \u2014 maintaining availability without administrator intervention."
  },
  {
    "id": "z3-n4-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "Multipathing in a SAN (Storage Area Network) environment provides:",
    "options": [
      "Higher storage capacity",
      "Multiple physical paths to storage \u2014 if one path fails, traffic uses an alternate path automatically",
      "RAID-level redundancy for storage data",
      "Encryption for data in transit to storage"
    ],
    "correct_index": 1,
    "explanation": "SAN multipathing uses multiple HBAs (Host Bus Adapters) and switches to create redundant paths between a server and storage. If one HBA, cable, or switch fails, I/O automatically fails over to an alternate path \u2014 no data loss, no downtime."
  },
  {
    "id": "z3-n4-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID 6 is preferred over RAID 5 for large disk arrays. Why?",
    "options": [
      "RAID 6 has better read performance",
      "RAID 6 tolerates two simultaneous disk failures \u2014 large disks have long rebuild times that expose RAID 5 to a second failure",
      "RAID 6 is cheaper to implement",
      "RAID 6 does not require a rebuild process"
    ],
    "correct_index": 1,
    "explanation": "Modern large drives (4TB+) can take 12\u201324 hours to rebuild a RAID 5 array. During rebuild, a second disk failure destroys the array. RAID 6 uses two parity disks, tolerating two simultaneous failures \u2014 the rebuild window is still protected."
  },
  {
    "id": "z3-n4-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "A single point of failure (SPOF) in a network design means:",
    "options": [
      "A device that monitors the entire network for failures",
      "Any single component whose failure takes down the entire system",
      "A backup configuration stored at one location",
      "A routing protocol that has a single path to all destinations"
    ],
    "correct_index": 1,
    "explanation": "A SPOF is any component \u2014 switch, router, link, power supply, ISP connection \u2014 whose failure causes complete service outage. HA design eliminates SPOFs through redundancy at every layer."
  },
  {
    "id": "z3-n4-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "Graceful degradation in a network context means:",
    "options": [
      "The network shuts down cleanly when overloaded",
      "The system continues to function at reduced capacity after a partial failure",
      "Traffic is gradually reduced during maintenance",
      "Routing protocols converge slowly to prevent loops"
    ],
    "correct_index": 1,
    "explanation": "Graceful degradation means the system keeps working \u2014 at reduced performance or capacity \u2014 after a partial failure, rather than failing completely. Example: RAID 5 operating in degraded mode after one disk fails (slower but still functional until disk is replaced)."
  },
  {
    "id": "z3-n4-013",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "RAID is NOT a substitute for backups because:",
    "options": [
      "RAID is too slow for frequent backups",
      "RAID protects against disk failure but not against accidental deletion, ransomware, fire, or site disaster",
      "RAID cannot protect data larger than 2TB",
      "RAID requires a RAID controller that adds cost"
    ],
    "correct_index": 1,
    "explanation": "RAID provides disk-level redundancy \u2014 if a drive fails, no data is lost. But RAID does NOT protect against: accidental file deletion (deleted immediately on both mirrors), ransomware encryption (both disks encrypted), or site-level disasters (fire, flood). Backups are still essential."
  },
  {
    "id": "z3-n4-study-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.4,
    "question": "A company determines that it can only tolerate 2 hours of downtime during a server failure. Which metric does this describe?",
    "options": [
      "RPO",
      "RTO",
      "MTBF",
      "SLA"
    ],
    "correct_index": 1,
    "explanation": "RTO (Recovery Time Objective) measures the maximum acceptable downtime. RPO (Recovery Point Objective) measures the maximum amount of data loss in terms of time."
  },
  {
    "id": "z3-n5-primer",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "What does SOP stand for?",
    "options": [
      "SOP",
      "Advanced SOP Protocol",
      "Automated SOP System",
      "Active SOP Technology"
    ],
    "correct_index": 0,
    "explanation": "SOP stands for SOP."
  },
  {
    "id": "z3-n5-study-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "A hospital's patient records database has an RPO of 15 minutes and an RTO of 1 hour. The server fails at 2:00 PM. The last backup completed at 1:50 PM, and restoring plus verifying that backup takes 40 minutes. Which statement correctly evaluates this incident against the targets?",
    "options": [
      "Both targets are met: 10 minutes of data loss is within the 15-minute RPO, and 40 minutes of recovery is within the 1-hour RTO.",
      "The RPO target is missed, because any data loss at all means the RPO has been violated.",
      "The RTO target is missed, because the recovery process took longer than the RPO of 15 minutes.",
      "RPO and RTO can't both apply to the same system, so the scenario is contradictory."
    ],
    "correct_index": 0,
    "explanation": "The data loss window is 1:50 PM to 2:00 PM = 10 minutes, within the 15-minute RPO \u2014 acceptable. Recovery took 40 minutes, within the 1-hour RTO \u2014 also acceptable. Both targets met. Wrong: (B) a 15-minute RPO means UP TO 15 minutes of loss is acceptable, not zero. (C) compares recovery time against the RPO figure instead of RTO \u2014 40 minutes is well under the 1-hour RTO. (D) every DR-planned system has both an RPO and an RTO \u2014 different axes of the same incident."
  },
  {
    "id": "z3-n5-study-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "A company runs a full backup every Sunday at midnight, and a differential backup every other night at midnight. The server's storage fails on Thursday at 10 AM, before that night's job has run. What is needed for a complete restore?",
    "options": [
      "Sunday's full backup plus every differential from Monday through Wednesday, restored in order.",
      "Sunday's full backup plus only Wednesday night's differential backup.",
      "Only Wednesday night's differential backup \u2014 differentials are self-contained.",
      "Sunday's full backup plus Thursday's differential backup, since that is the most recent."
    ],
    "correct_index": 1,
    "explanation": "Differential backups are cumulative since the last full, so Wednesday's differential already contains Monday, Tuesday, AND Wednesday's changes. A complete restore needs only Sunday's full plus that one differential. Wrong: (A) describes how INCREMENTAL restores work \u2014 sequential pieces \u2014 not differentials. (C) a differential only captures changes since the full; without the full as baseline, those changes have nothing to apply to. (D) the failure was Thursday morning, before Thursday night's backup ran \u2014 Wednesday's is the most recent."
  },
  {
    "id": "z3-n5-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "RTO (Recovery Time Objective) defines:",
    "options": [
      "How much data can be lost in a disaster",
      "The maximum acceptable time to restore a system or service after a disaster",
      "The minimum backup frequency required",
      "The geographic distance between primary and DR sites"
    ],
    "correct_index": 1,
    "explanation": "RTO = 'How long can we be down?' It's the maximum acceptable outage duration. A short RTO (e.g., 1 hour) requires a hot site. A long RTO (e.g., 1 week) allows a cold site. RTO drives DR site and HA investment decisions."
  },
  {
    "id": "z3-n5-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "RPO (Recovery Point Objective) defines:",
    "options": [
      "How quickly systems must be restored",
      "The maximum acceptable data loss measured in time (how old can backups be?)",
      "The physical location of the DR site",
      "The number of redundant power feeds required"
    ],
    "correct_index": 1,
    "explanation": "RPO = 'How much data can we lose?' If RPO is 4 hours, you must back up at least every 4 hours. RPO drives backup frequency and replication decisions. An RPO of 0 requires continuous real-time replication."
  },
  {
    "id": "z3-n5-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "A cold DR site provides:",
    "options": [
      "A fully operational mirror of the primary site",
      "Partial equipment for faster recovery than cold",
      "Space, power, and cooling \u2014 but no equipment installed",
      "Cloud-based virtual infrastructure"
    ],
    "correct_index": 2,
    "explanation": "A cold site is just the physical space \u2014 raised floor, power, cooling, connectivity \u2014 but no hardware installed. Recovery requires shipping and installing equipment, then restoring from backups. Cheapest but slowest recovery (days to weeks)."
  },
  {
    "id": "z3-n5-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "A full backup backs up:",
    "options": [
      "Only data changed since the last backup",
      "Only data changed since the last full backup",
      "All data regardless of whether it has changed",
      "Only the operating system and configuration files"
    ],
    "correct_index": 2,
    "explanation": "A full backup copies ALL data every time \u2014 the complete data set. It takes the longest and uses the most storage, but restoration is simplest (single backup set). Typically done weekly, with incremental or differential backups in between."
  },
  {
    "id": "z3-n5-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "An incremental backup backs up:",
    "options": [
      "All data since the last full backup",
      "All data changed since the last backup of any type (full OR incremental)",
      "The entire file system every time",
      "Only deleted files"
    ],
    "correct_index": 1,
    "explanation": "Incremental backups capture only changes since the LAST backup \u2014 whether that last backup was a full or another incremental. Fastest to create, smallest size. Restore requires full backup + every incremental in sequence."
  },
  {
    "id": "z3-n5-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "Which backup strategy is fastest to restore from (aside from a full backup alone)?",
    "options": [
      "Incremental \u2014 only need the last incremental",
      "Differential \u2014 only need the last full + last differential",
      "Incremental with deduplication",
      "Snapshot-based backups"
    ],
    "correct_index": 1,
    "explanation": "Differential restore requires only two backup sets: the last full backup + the most recent differential. Incremental restore requires the full backup + EVERY incremental taken since \u2014 potentially many media sets and complex restore sequencing."
  },
  {
    "id": "z3-n5-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "The 3-2-1 backup rule states:",
    "options": [
      "Back up daily for 3 days, weekly for 2 weeks, monthly for 1 month",
      "Keep 3 copies of data, on 2 different media types, with 1 copy stored offsite",
      "Use 3 backup servers, 2 full backups, 1 incremental",
      "Retain backups for 3 years, with 2 tested annually, 1 in cold storage"
    ],
    "correct_index": 1,
    "explanation": "3-2-1: 3 copies of data (original + 2 backups), on 2 different media types (e.g., disk + tape, or disk + cloud), with 1 copy offsite (protects against site disaster). This is the gold standard for backup strategy."
  },
  {
    "id": "z3-n5-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "MTTR (Mean Time To Repair) measures:",
    "options": [
      "How often a component fails on average",
      "The average time to repair or restore a failed system",
      "The geographic distance to the DR site",
      "The time between scheduled maintenance windows"
    ],
    "correct_index": 1,
    "explanation": "MTTR is the average repair/recovery time for a failed component or system. Lower MTTR = faster recovery = better availability. Drives support contract decisions (e.g., 4-hour hardware replacement SLA)."
  },
  {
    "id": "z3-n5-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "A hot DR site differs from a warm site primarily because:",
    "options": [
      "Hot sites are cheaper than warm sites",
      "Hot sites are fully operational with live data replication \u2014 failover can be immediate or near-immediate",
      "Hot sites only contain networking equipment, not servers",
      "Hot sites are located in the same building as the primary site"
    ],
    "correct_index": 1,
    "explanation": "Hot sites are fully operational mirrors of the primary site with continuous data replication. Failover can happen in minutes. They are the most expensive DR option. Warm sites have hardware but require data restoration (hours). Cold sites need equipment deployed (days)."
  },
  {
    "id": "z3-n5-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "MTBF (Mean Time Between Failures) is used to:",
    "options": [
      "Determine how long recovery will take",
      "Measure how often a component fails on average \u2014 used to plan redundancy",
      "Calculate backup frequency requirements",
      "Define the maximum acceptable downtime"
    ],
    "correct_index": 1,
    "explanation": "MTBF is the average time between failures for a component. Higher MTBF = more reliable. Used to compare hardware reliability, calculate expected failure rates, and justify redundancy decisions. Availability = MTBF / (MTBF + MTTR)."
  },
  {
    "id": "z3-n5-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "An organisation has an RPO of 1 hour. What is the MINIMUM backup frequency required?",
    "options": [
      "Daily full backups are sufficient",
      "Backups every 1 hour \u2014 or continuous replication if RPO must be strictly met",
      "Weekly full + daily incremental",
      "RPO does not dictate backup frequency"
    ],
    "correct_index": 1,
    "explanation": "RPO of 1 hour means at most 1 hour of data can be lost. This requires backups every 1 hour or continuous replication. If the last backup was 2 hours ago when disaster strikes, you have already violated the RPO."
  },
  {
    "id": "z3-n5-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "Why should DR plans be tested regularly?",
    "options": [
      "Testing is only required by compliance frameworks, not operationally necessary",
      "An untested DR plan may fail when needed \u2014 hardware, procedures, and team knowledge need validation",
      "Testing DR plans automatically updates the RTO/RPO values",
      "Regular testing reduces MTBF of production systems"
    ],
    "correct_index": 1,
    "explanation": "DR plans fail due to: outdated procedures, hardware that no longer works, undocumented configuration changes, and staff who don't know the process. Regular tabletop exercises, failover drills, and full DR tests validate that the plan actually works before it is needed for real."
  },
  {
    "id": "z3-n5-study-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.5,
    "question": "In an active-active high availability configuration, how is traffic handled?",
    "options": [
      "One node handles all traffic while the second remains on standby.",
      "Both nodes handle traffic simultaneously to provide redundancy and load sharing.",
      "Traffic is only sent to a secondary node if the primary fails.",
      "Only one node is active at a time, but it switches between them every hour."
    ],
    "correct_index": 1,
    "explanation": "In an active-active configuration, all available nodes handle traffic simultaneously. In an active-passive configuration, only one node handles traffic while the other remains in standby to take over if the primary fails."
  },
  {
    "id": "z3-g-001",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "SNMP uses UDP 161 for queries. What port do Traps and Informs use?",
    "options": [
      "UDP 160",
      "UDP 162",
      "UDP 514",
      "UDP 2055"
    ],
    "correct_index": 1,
    "explanation": "SNMP Traps and Informs are sent to UDP 162 (manager). UDP 161 = manager-to-agent queries. UDP 514 = syslog. UDP 2055 = NetFlow."
  },
  {
    "id": "z3-g-002",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "Which syslog severity level represents 'Warning' conditions?",
    "options": [
      "Level 2",
      "Level 3",
      "Level 4",
      "Level 5"
    ],
    "correct_index": 2,
    "explanation": "Syslog level 4 = Warning. 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Info, 7=Debug. Mnemonic: Every Awesome Cisco Engineer Will Need Daily Biscuits."
  },
  {
    "id": "z3-g-003",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "NetFlow exports traffic flow data to a collector on which default UDP port?",
    "options": [
      "161",
      "514",
      "1433",
      "2055"
    ],
    "correct_index": 3,
    "explanation": "NetFlow uses UDP 2055 by default (also common: 9555, 9995). IPFIX is the IETF standard successor. Both provide flow-level traffic visibility: who talked to whom, how much, on what port."
  },
  {
    "id": "z3-g-004",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "RTO defines the maximum acceptable time to recover. RPO defines:",
    "options": [
      "The minimum hardware requirements for a DR site",
      "The maximum acceptable data loss measured in time",
      "The physical distance between primary and DR sites",
      "The minimum backup media types required"
    ],
    "correct_index": 1,
    "explanation": "RPO = Recovery Point Objective = 'How much data can we afford to lose?' measured in time. If RPO = 4 hours, backups must run every 4 hours. RTO = 'How long can we be down?'"
  },
  {
    "id": "z3-g-005",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "Which backup type requires the most media sets for a full restore?",
    "options": [
      "Full backup",
      "Differential backup",
      "Incremental backup",
      "Snapshot backup"
    ],
    "correct_index": 2,
    "explanation": "Incremental restore requires: the last full backup + EVERY incremental taken since. Differential only needs last full + last differential. Full backup alone needs only itself."
  },
  {
    "id": "z3-g-006",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "SNMPv3 AuthPriv mode provides which two security features?",
    "options": [
      "Authentication + Encryption",
      "Authentication + Authorisation",
      "Encryption + Compression",
      "Authorisation + Accounting"
    ],
    "correct_index": 0,
    "explanation": "SNMPv3 AuthPriv = Authentication (MD5 or SHA \u2014 verifies the sender) + Privacy/Encryption (AES or DES \u2014 encrypts the payload). This is the only SNMP version that protects data in transit."
  },
  {
    "id": "z3-g-007",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "RAID 5 can tolerate one disk failure. RAID 6 can tolerate:",
    "options": [
      "One disk failure",
      "Two disk failures",
      "Three disk failures",
      "Any number if a hot spare is present"
    ],
    "correct_index": 1,
    "explanation": "RAID 6 uses double distributed parity \u2014 tolerates two simultaneous disk failures. Preferred over RAID 5 for large drives where rebuild times create a second failure risk window."
  },
  {
    "id": "z3-g-008",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "A hot DR site differs from a warm site because a hot site:",
    "options": [
      "Has no equipment installed",
      "Requires shipping servers before use",
      "Is fully operational with live data replication \u2014 immediate or near-immediate failover",
      "Is located in the same building"
    ],
    "correct_index": 2,
    "explanation": "Hot site: fully staffed, equipment running, data continuously replicated. Failover in minutes. Warm site: hardware present but needs data restore (hours). Cold site: no equipment (days/weeks)."
  },
  {
    "id": "z3-g-009",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "DSCP EF (Expedited Forwarding) is used for which traffic type?",
    "options": [
      "Best-effort web browsing",
      "VoIP and real-time traffic \u2014 strict priority queue",
      "Management traffic like SNMP",
      "Bulk file transfers"
    ],
    "correct_index": 1,
    "explanation": "DSCP EF = 46. Used for VoIP and real-time traffic requiring strict priority. It instructs routers to process these packets before all others. DSCP BE (0) = default best-effort."
  },
  {
    "id": "z3-g-010",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "A network engineer runs a change during a maintenance window and the change breaks connectivity. What should happen next?",
    "options": [
      "Continue troubleshooting until fixed, regardless of time",
      "Execute the documented rollback plan immediately to restore service",
      "Escalate to the CAB for emergency approval",
      "Document the failure and plan a new change for next week"
    ],
    "correct_index": 1,
    "explanation": "If a change breaks service, the first action is to execute the rollback plan documented in the RFC. Returning to the last known good state is always faster than unknown troubleshooting. Post-mortem analysis happens after service is restored."
  },
  {
    "id": "z3-g-011",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "The 3-2-1 backup rule requires: 3 copies of data, on 2 different media types, with:",
    "options": [
      "1 copy tested monthly",
      "1 copy stored offsite",
      "1 copy in encrypted format",
      "1 copy on tape"
    ],
    "correct_index": 1,
    "explanation": "3-2-1 rule: 3 copies, 2 media types, 1 offsite. The offsite copy protects against site-level disasters (fire, flood, theft). The 2 media types protect against media-specific failures."
  },
  {
    "id": "z3-g-012",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "Duplex mismatch between two Ethernet devices causes which error on the full-duplex side?",
    "options": [
      "Runts",
      "Giants",
      "Late collisions and CRC errors",
      "VLAN tagging errors"
    ],
    "correct_index": 2,
    "explanation": "Full-duplex side sees late collisions (after 512 bits \u2014 shouldn't happen in FD) and CRC errors, because the HD side uses CSMA/CD and truncates frames mid-transmission. Classic duplex mismatch signature."
  },
  {
    "id": "z3-g-013",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "Why is RAID not a substitute for backups?",
    "options": [
      "RAID is too slow to be reliable",
      "RAID protects against drive failure only \u2014 ransomware encryption, accidental deletion, and site disasters affect all RAID disks simultaneously",
      "RAID only works for disks smaller than 2TB",
      "RAID requires a separate controller that can fail"
    ],
    "correct_index": 1,
    "explanation": "RAID protects against physical drive failure. It does NOT protect against: ransomware (encrypts all drives), accidental deletion (instantly reflected on all mirrors), or site disasters. Backups (especially offsite) are still required."
  },
  {
    "id": "z3-g-014",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "MTBF (Mean Time Between Failures) and MTTR (Mean Time To Repair) relate to system availability how?",
    "options": [
      "Availability = MTTR / MTBF",
      "Availability = MTBF / (MTBF + MTTR)",
      "Availability = MTBF - MTTR",
      "They are unrelated to availability calculations"
    ],
    "correct_index": 1,
    "explanation": "Availability = MTBF / (MTBF + MTTR). To improve availability: increase MTBF (more reliable hardware) or decrease MTTR (faster repairs). Five nines (99.999%) requires extremely high MTBF and very low MTTR."
  },
  {
    "id": "z3-g-015",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "SPAN (port mirroring) is used on a switch to:",
    "options": [
      "Increase port bandwidth by mirroring to a faster uplink",
      "Copy traffic from a source port to a monitor port for packet capture and analysis",
      "Back up the switch configuration to an external server",
      "Mirror VLAN configurations to a redundant switch"
    ],
    "correct_index": 1,
    "explanation": "SPAN copies all traffic from a source port (or VLAN) to a designated monitor port. A packet analyser (Wireshark) or IDS sensor connected to the monitor port can then inspect all traffic \u2014 without disrupting the monitored network."
  },
  {
    "id": "z3-g-016",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "An organisation's RPO is 2 hours but their backup system only runs daily full backups at midnight. The system fails at 11:30 PM. How much data is lost?",
    "options": [
      "2 hours of data",
      "Approximately 23.5 hours of data \u2014 the full day since last backup",
      "No data \u2014 RAID protects all data",
      "30 minutes of data"
    ],
    "correct_index": 1,
    "explanation": "Last backup: midnight previous night. Failure at 11:30 PM = 23.5 hours of data lost. This VIOLATES the 2-hour RPO. The fix: implement hourly incremental backups or continuous replication to meet the RPO requirement."
  },
  {
    "id": "z3-g-017",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "Which QoS mechanism guarantees real-time (VoIP) traffic is always dequeued before other traffic?",
    "options": [
      "DSCP marking",
      "CBWFQ (Class-Based Weighted Fair Queuing)",
      "LLQ (Low Latency Queuing)",
      "Traffic shaping"
    ],
    "correct_index": 2,
    "explanation": "LLQ creates a strict priority queue emptied before all other queues. DSCP marking classifies traffic (necessary but not sufficient). CBWFQ guarantees bandwidth minimums but doesn't strictly prioritise. Traffic shaping buffers \u2014 doesn't queue."
  },
  {
    "id": "z3-g-018",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "An SLA that guarantees 99.99% uptime allows approximately how much downtime per year?",
    "options": [
      "~8.76 hours",
      "~52.6 minutes",
      "~5.26 minutes",
      "~1 day"
    ],
    "correct_index": 1,
    "explanation": "99.99% = 0.01% downtime. 0.0001 \u00d7 525,600 min/year = 52.6 minutes. 99.9% = 8.76 hours. 99.999% (five nines) = 5.26 minutes. Know these numbers for the exam."
  },
  {
    "id": "z3-g-019",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "VoIP calls are choppy despite network utilisation being under 50%. What is the most likely cause?",
    "options": [
      "Insufficient bandwidth \u2014 must upgrade the link",
      "No QoS implemented \u2014 voice traffic is competing in the same queue as bulk data",
      "DNS failures are affecting call routing",
      "NAT is causing one-way audio"
    ],
    "correct_index": 1,
    "explanation": "Choppy VoIP at low utilisation = QoS problem. Without QoS, a burst of data fills the queue \u2014 voice packets wait, increasing jitter beyond the 30ms tolerance. Implement DSCP EF marking and LLQ to guarantee voice has strict priority."
  },
  {
    "id": "z3-g-020",
    "zone": 3,
    "domain": "Network Operations",
    "node": 3.0,
    "question": "RAID 10 uses mirroring AND striping. What is its minimum disk requirement and fault tolerance?",
    "options": [
      "Minimum 2 disks \u2014 tolerates loss of any 1 disk",
      "Minimum 3 disks \u2014 tolerates loss of 1 disk",
      "Minimum 4 disks \u2014 tolerates loss of 1 disk per mirrored pair",
      "Minimum 4 disks \u2014 tolerates loss of any 2 disks"
    ],
    "correct_index": 2,
    "explanation": "RAID 10 requires minimum 4 disks (2 mirrored pairs, then striped). It can tolerate the loss of one disk per mirrored pair \u2014 potentially 2 or more disk failures if they are in different pairs. RAID 6 also tolerates 2 failures but with better capacity efficiency."
  },
  {
    "id": "z4-n1-primer",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "What does MFA stand for?",
    "options": [
      "Multi-Factor Authentication",
      "Advanced MFA Protocol",
      "Automated MFA System",
      "Active MFA Technology"
    ],
    "correct_index": 0,
    "explanation": "MFA stands for Multi-Factor Authentication."
  },
  {
    "id": "z4-n1-study-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An employee opens an email attachment disguised as an invoice. Nothing visibly happens, but weeks later, security analysts discover the program has been embedded in the OS kernel, hiding its own process from Task Manager and antivirus scans, while a separate hidden routine is set to wipe the file server on the date the employee's manager is scheduled to leave the company. Which TWO malware characteristics are present in this scenario?",
    "options": [
      "A worm (self-propagating across the network) and a virus (requires a host file to spread)",
      "A trojan (disguised as a legitimate file to gain initial entry) combined with a rootkit (kernel-level hiding) and a logic bomb (triggers on a future condition)",
      "Ransomware (encrypts files for payment) and spyware (logs keystrokes)",
      "A logic bomb only \u2014 the disguised attachment and kernel hiding are both side effects of the same logic bomb mechanism"
    ],
    "correct_index": 1,
    "explanation": "The disguised attachment = TROJAN (looks legitimate to gain entry). Hiding from Task Manager/AV at kernel level = ROOTKIT. The routine triggered by a future date = LOGIC BOMB. Wrong: (A) nothing here self-propagates to other hosts or attaches to files to spread, ruling out worm/virus. (C) no files are encrypted for ransom, and the kernel-hiding plus timed wipe described isn't keystroke logging, ruling out ransomware/spyware. (D) a logic bomb is just the trigger \u2014 it doesn't explain HOW the malware got in (trojan) or stayed hidden (rootkit); these are three separate techniques working together."
  },
  {
    "id": "z4-n1-study-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "A forensic investigation traces a breach to a phishing email opened 14 months ago by an employee in the accounts department. Since that initial access, an external attacker has maintained undetected access to the file server, exfiltrating small amounts of data during normal business hours specifically to blend in with regular traffic, with no public statement or visible disruption at any point. Which threat actor category does this MOST likely describe?",
    "options": [
      "Script kiddie \u2014 using a phishing email is the hallmark of a low-skill, off-the-shelf attack",
      "Hacktivist \u2014 the long-term campaign shows a clear ideological commitment",
      "Advanced Persistent Threat (APT) \u2014 the long dwell time, stealth, and low-and-slow exfiltration designed to blend in are the defining characteristics",
      "Insider threat \u2014 only someone with existing employee credentials could access the file server for 14 months"
    ],
    "correct_index": 2,
    "explanation": "APT's name says it all: ADVANCED (evaded detection over a year by mimicking normal traffic), PERSISTENT (14 months of access), THREAT (ongoing exfiltration). Wrong: (A) script kiddies are noisy and short-lived \u2014 sustaining 14+ months of stealth takes far more discipline than 'borrowed tools.' (B) hacktivism is defined by visibility (manifesto, defacement, public DDoS); the scenario explicitly says there was none. (D) the initial access came via an EXTERNAL attacker phishing the employee \u2014 the employee was a victim, not the perpetrator; an outsider patiently operating for a year is the textbook APT pattern."
  },
  {
    "id": "z4-n1-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An attacker sends thousands of SYN packets to a server without completing the TCP handshake. What attack is this?",
    "options": [
      "UDP flood",
      "SYN flood (DoS \u2014 protocol attack)",
      "DNS amplification",
      "Ping of Death"
    ],
    "correct_index": 1,
    "explanation": "SYN flood: attacker sends SYN but never completes the 3-way handshake. The server allocates state for each half-open connection until its table fills \u2014 legitimate connections are refused. Mitigation: SYN cookies (server doesn't allocate state until handshake complete)."
  },
  {
    "id": "z4-n1-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "Phishing, spear phishing, and whaling are all forms of which broader attack category?",
    "options": [
      "DDoS",
      "Social engineering",
      "Physical intrusion",
      "On-path attacks"
    ],
    "correct_index": 1,
    "explanation": "All three are social engineering \u2014 manipulating humans to divulge information or perform actions. Phishing = mass/generic. Spear phishing = targeted. Whaling = specifically targets senior executives (C-suite)."
  },
  {
    "id": "z4-n1-003",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An attacker sends fraudulent ARP replies to associate their MAC address with the gateway IP. What attack is this?",
    "options": [
      "DNS poisoning",
      "ARP poisoning",
      "DHCP starvation",
      "IP spoofing"
    ],
    "correct_index": 1,
    "explanation": "ARP poisoning (ARP spoofing): the attacker poisons ARP caches \u2014 hosts send traffic destined for the gateway to the attacker instead, enabling man-in-the-middle interception. Mitigation: Dynamic ARP Inspection (DAI) on switches."
  },
  {
    "id": "z4-n1-004",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "Vishing is a social engineering attack conducted via:",
    "options": [
      "Email",
      "SMS text message",
      "Voice call or phone",
      "Physical impersonation in person"
    ],
    "correct_index": 2,
    "explanation": "Vishing = Voice Phishing. Attacker calls the victim impersonating IT support, a bank, government agency, etc. Smishing = SMS. Phishing = email. All exploit trust and urgency."
  },
  {
    "id": "z4-n1-005",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "A DDoS attack differs from a DoS attack primarily because:",
    "options": [
      "DDoS only targets web servers",
      "DDoS uses a distributed botnet of many compromised hosts \u2014 harder to block a single source",
      "DDoS operates at Layer 7 only",
      "DoS attacks are more damaging"
    ],
    "correct_index": 1,
    "explanation": "DoS = single source. DDoS = Distributed \u2014 botnet of thousands of compromised machines launch the attack simultaneously. DDoS is much harder to mitigate because you can't block a single source IP."
  },
  {
    "id": "z4-n1-006",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An attacker sets up a Wi-Fi network with the same SSID as the corporate network to trick users into connecting. This is called:",
    "options": [
      "Rogue DHCP server",
      "Evil twin AP",
      "War driving",
      "Deauth attack"
    ],
    "correct_index": 1,
    "explanation": "Evil twin: a fake AP broadcasting the same SSID as the legitimate network. Users connect thinking it's real \u2014 attacker intercepts all traffic. Mitigation: 802.1X Enterprise authentication (rogue AP cannot present valid RADIUS credentials)."
  },
  {
    "id": "z4-n1-007",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "Password spraying differs from brute force in that password spraying:",
    "options": [
      "Tries all possible passwords against one account",
      "Tries a few common passwords across many accounts \u2014 avoids triggering lockout policies",
      "Uses pre-computed hash tables",
      "Only targets admin accounts"
    ],
    "correct_index": 1,
    "explanation": "Password spraying: try 'Password1', 'Spring2024', 'CompanyName1' against thousands of accounts \u2014 stays under lockout threshold per account. Brute force: try every possible password against one account \u2014 quickly triggers lockout. Spray = stealth; brute = loud."
  },
  {
    "id": "z4-n1-008",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "DNS poisoning attacks work by:",
    "options": [
      "Overloading DNS servers with requests",
      "Injecting forged DNS records into a resolver's cache to redirect users to malicious sites",
      "Brute-forcing DNS zone transfer credentials",
      "Intercepting HTTPS traffic to DNS servers"
    ],
    "correct_index": 1,
    "explanation": "DNS cache poisoning: attacker injects forged DNS responses into a recursive resolver's cache. Users querying that resolver get malicious IPs for legitimate domains \u2014 redirected without knowing. Mitigation: DNSSEC (cryptographically signs DNS records)."
  },
  {
    "id": "z4-n1-009",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An on-path attack (formerly MITM) positions the attacker between two communicating hosts. Which technology BEST prevents this on encrypted connections?",
    "options": [
      "Firewall ACLs",
      "Certificate validation + mutual TLS authentication",
      "Port security on switches",
      "VLAN segmentation"
    ],
    "correct_index": 1,
    "explanation": "TLS with proper certificate validation prevents MITM \u2014 the client verifies the server's certificate is signed by a trusted CA and matches the intended hostname. Mutual TLS (client + server certificates) provides bi-directional authentication. An attacker cannot forge a valid certificate."
  },
  {
    "id": "z4-n1-010",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "A rogue DHCP server attack can be mitigated by which switch feature?",
    "options": [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection",
      "Storm control"
    ],
    "correct_index": 1,
    "explanation": "DHCP snooping designates switch ports as trusted (uplink to real DHCP server) or untrusted (client ports). DHCP OFFER and ACK messages on untrusted ports are dropped \u2014 preventing rogue DHCP servers from distributing malicious gateway/DNS settings."
  },
  {
    "id": "z4-n1-011",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "Which attack uses pre-computed hash tables to crack password hashes, and what defeats it?",
    "options": [
      "Brute force \u2014 defeated by complexity requirements",
      "Rainbow table attack \u2014 defeated by salting password hashes before storage",
      "SYN flood \u2014 defeated by SYN cookies",
      "Dictionary attack \u2014 defeated by lockout policies"
    ],
    "correct_index": 1,
    "explanation": "Rainbow tables are pre-computed plaintext\u2192hash mappings. An attacker with a stolen password hash database can look up hashes to find passwords instantly. Salting adds a unique random value to each password before hashing \u2014 same password produces different hashes, defeating pre-computed tables."
  },
  {
    "id": "z4-n1-012",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An employee receives a text message claiming their package is delayed and asks them to click a link to reschedule. This is:",
    "options": [
      "Phishing",
      "Vishing",
      "Smishing",
      "Pretexting"
    ],
    "correct_index": 2,
    "explanation": "Smishing = SMS phishing. Text messages (SMS) used to deliver a malicious link or extract information. The package delivery pretense is a common smishing lure. Vishing = voice call. Phishing = email."
  },
  {
    "id": "z4-n1-013",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "A DNS amplification attack is a volumetric DDoS technique. How does the amplification work?",
    "options": [
      "Attacker directly sends massive DNS queries to the victim",
      "Attacker sends small DNS queries with the victim's spoofed IP as source \u2014 open resolvers send large responses to the victim",
      "Attacker poisons DNS cache to redirect victims to malicious IPs",
      "Attacker intercepts DNS responses and replaces them with malicious entries"
    ],
    "correct_index": 1,
    "explanation": "DNS amplification: attacker spoofs victim's IP and sends small DNS queries (requesting large record types like ANY or TXT) to open recursive resolvers. Resolvers send large responses to the victim's IP. Amplification factor can be 50x \u2014 small query creates large attack traffic aimed at victim."
  },
  {
    "id": "z4-n1-014",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "A deauthentication attack against wireless clients is best mitigated by:",
    "options": [
      "WPA2 PSK with a strong passphrase",
      "802.11w (Management Frame Protection) and WPA3",
      "Disabling SSID broadcasting",
      "Using channels 1, 6, or 11"
    ],
    "correct_index": 1,
    "explanation": "Deauth attacks send spoofed management frames (deauthentication) to force clients off the AP \u2014 enabling MITM or forcing WPA2 handshake capture. 802.11w (MFP) adds cryptographic protection to management frames, preventing spoofing. WPA3 also requires MFP."
  },
  {
    "id": "z4-n1-015",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "Tailgating (piggybacking) is a physical security attack where:",
    "options": [
      "An attacker monitors network traffic from a nearby location",
      "An attacker follows an authorised person through a secured door without using their own credentials",
      "An attacker installs a keylogger on a target's computer",
      "An attacker uses social media to gather target information"
    ],
    "correct_index": 1,
    "explanation": "Tailgating: attacker physically follows an authorised employee through badge-access doors \u2014 exploiting courtesy (holding the door). Mitigations: mantraps/airlocks (only one person per cycle), security awareness training, security guards."
  },
  {
    "id": "z4-n1-016",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.1,
    "question": "An APT (Advanced Persistent Threat) is distinguished from other attacks by:",
    "options": [
      "Using only volumetric DDoS techniques",
      "Long-term, stealthy access \u2014 often nation-state sponsored \u2014 focused on espionage rather than immediate disruption",
      "Targeting only financial institutions",
      "Requiring physical access to the target"
    ],
    "correct_index": 1,
    "explanation": "APT = long-term, stealthy, targeted. Nation-state actors often run APTs to maintain persistent access for intelligence gathering \u2014 staying hidden for months or years. Contrast with script kiddies (noisy, opportunistic) or ransomware gangs (quick financial payoff)."
  },
  {
    "id": "z4-n2-primer",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "What does APT stand for?",
    "options": [
      "Advanced Persistent Threat",
      "Advanced APT Protocol",
      "Automated APT System",
      "Active APT Technology"
    ],
    "correct_index": 0,
    "explanation": "APT stands for Advanced Persistent Threat."
  },
  {
    "id": "z4-n2-study-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "An employee's laptop is compromised via a phishing email while connected to the internal corporate Wi-Fi. In a traditional PERIMETER-based security model, what is the most significant immediate risk \u2014 and how would a Zero Trust architecture change that outcome?",
    "options": [
      "Traditional: the firewall would have already blocked the phishing email, so this scenario couldn't happen under either model.",
      "Traditional: because the laptop is already 'inside' the trusted network, the attacker likely has broad lateral access to internal resources with no further checks; Zero Trust requires every resource access to be re-authenticated and authorized regardless of network location, sharply limiting lateral movement.",
      "Traditional and Zero Trust behave identically once a device is connected to the internal network \u2014 the security model only affects external/remote connections.",
      "Zero Trust would have prevented the phishing email from being delivered in the first place, since it inspects all inbound email content."
    ],
    "correct_index": 1,
    "explanation": "This is Zero Trust's core motivation: in a perimeter model, 'inside the network' is treated as trustworthy, so one compromised device can move laterally with little friction. Zero Trust removes that assumption \u2014 every resource access requires its own check, containing the blast radius to only what that session was explicitly granted. Wrong: (A) phishing routinely bypasses filters \u2014 that's why this scenario is common. (C) Zero Trust applies scrutiny INSIDE the network too, the opposite of perimeter models. (D) Zero Trust governs resource access, not email filtering \u2014 it doesn't claim to stop phishing delivery."
  },
  {
    "id": "z4-n2-study-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A company deploys an inline IPS between its core switch and edge router. During a software update, the IPS crashes unexpectedly. Network monitoring shows that traffic continued flowing between the LAN and the internet throughout the crash, completely uninspected, until the IPS came back online 10 minutes later. Which failure mode was this IPS configured for, and what is the security implication?",
    "options": [
      "Fail-closed \u2014 all traffic was blocked until the IPS recovered, which is why the outage lasted 10 minutes.",
      "Fail-open \u2014 traffic passed through uninspected during the outage, prioritizing availability over security; this represents a real (if temporary) security gap with zero intrusion detection/prevention active.",
      "Active-active clustering \u2014 the IPS automatically failed over to a redundant unit with no service interruption or security gap.",
      "This is impossible \u2014 an inline device that crashes must always stop all traffic through it, regardless of configuration."
    ],
    "correct_index": 1,
    "explanation": "Traffic 'continued flowing... completely uninspected' during the crash \u2014 that's the definition of fail-open. The 10-minute window is a real security gap: no IPS signatures were checked, so attack traffic would have passed freely. Wrong: (A) fail-CLOSED means total connectivity loss during the crash, the opposite of what's described. (C) nothing indicates a redundant unit or automatic failover \u2014 'uninspected' rules out a seamless handoff to a working IPS. (D) this is exactly why fail-open hardware bypass exists \u2014 many inline appliances include a physical bypass (relay/optical switch) that connects the wire pairs directly when the inspection engine fails, keeping the link up."
  },
  {
    "id": "z4-n2-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "The key difference between a stateless and stateful firewall is:",
    "options": [
      "Stateless firewalls are faster but inspect application payloads",
      "Stateful firewalls track connection state \u2014 return traffic is automatically permitted without explicit rules",
      "Stateless firewalls only work at Layer 7",
      "Stateful firewalls cannot filter by port number"
    ],
    "correct_index": 1,
    "explanation": "Stateful firewalls maintain a connection state table. When an internal host initiates a TCP connection outbound, the returning traffic is automatically allowed because the firewall recognizes it belongs to an established session. Stateless firewalls evaluate every packet independently \u2014 you need explicit rules for return traffic."
  },
  {
    "id": "z4-n2-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "IDS differs from IPS in that IDS:",
    "options": [
      "Blocks malicious traffic inline",
      "Detects and alerts only \u2014 does NOT block traffic",
      "Is always host-based",
      "Requires a RADIUS server"
    ],
    "correct_index": 1,
    "explanation": "IDS (Intrusion Detection System) = passive \u2014 monitors traffic and generates alerts. It does NOT block. IPS (Intrusion Prevention System) = active/inline \u2014 sits in the traffic path and can DROP malicious traffic in real time."
  },
  {
    "id": "z4-n2-003",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A DMZ (Demilitarized Zone) is used to:",
    "options": [
      "Isolate management traffic from user traffic",
      "Place public-facing servers between the untrusted internet and the trusted internal network",
      "Create a separate VLAN for guest users",
      "Encrypt traffic between branch offices"
    ],
    "correct_index": 1,
    "explanation": "The DMZ (screened subnet) is a buffer zone for public-facing services \u2014 web, email, DNS. Internet users can reach DMZ servers, but DMZ servers cannot initiate connections to the internal LAN. If a DMZ server is compromised, the attacker is still blocked from the internal network."
  },
  {
    "id": "z4-n2-004",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A WAF (Web Application Firewall) is specifically designed to protect against:",
    "options": [
      "Network-layer DDoS attacks",
      "Web application attacks such as SQL injection, XSS, and CSRF (OWASP Top 10)",
      "Brute force against SSH services",
      "BGP hijacking at the routing layer"
    ],
    "correct_index": 1,
    "explanation": "WAF specifically inspects HTTP/HTTPS traffic for web application attacks \u2014 SQL injection, cross-site scripting (XSS), CSRF, path traversal, etc. (OWASP Top 10). A standard firewall cannot detect these attacks because they are hidden within legitimate HTTP requests."
  },
  {
    "id": "z4-n2-005",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A honeypot in network security is:",
    "options": [
      "An encrypted password vault for storing credentials",
      "A decoy system designed to attract attackers and log their techniques",
      "A backup DNS server",
      "A type of IPS signature database"
    ],
    "correct_index": 1,
    "explanation": "A honeypot is a fake, deliberately vulnerable system with no legitimate traffic. Any access to it is suspicious. It logs attacker techniques, tools, and IPs \u2014 providing threat intelligence. A honeynet is a network of multiple honeypots."
  },
  {
    "id": "z4-n2-006",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "Zero Trust security is based on which core principle?",
    "options": [
      "Trust all internal traffic; verify external traffic only",
      "Never trust, always verify \u2014 every access request requires authentication and authorisation regardless of network location",
      "Trust is granted once per user per session",
      "Only external connections need encryption"
    ],
    "correct_index": 1,
    "explanation": "Zero Trust: no implicit trust based on network location (even being inside the corporate network). Every user, device, and application must authenticate and be authorised for every resource. Microsegmentation and continuous verification are core Zero Trust controls."
  },
  {
    "id": "z4-n2-007",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "Defense in depth means:",
    "options": [
      "Placing the firewall deep in the network",
      "Layering multiple overlapping security controls so compromise of one layer doesn't lead to full breach",
      "Using deep packet inspection on all traffic",
      "Encrypting data at multiple OSI layers"
    ],
    "correct_index": 1,
    "explanation": "Defense in depth (castle model): multiple layers of security \u2014 perimeter firewall, IPS, network segmentation, endpoint protection, DLP, encryption, MFA, etc. An attacker who bypasses one layer faces the next. No single control is sufficient."
  },
  {
    "id": "z4-n2-008",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "An IPS generates a false positive. What is the impact?",
    "options": [
      "A real attack is not detected",
      "Legitimate traffic is blocked \u2014 potential service disruption",
      "The IPS stops monitoring",
      "Alerts are sent to the wrong destination"
    ],
    "correct_index": 1,
    "explanation": "A false positive on an IPS means the system incorrectly identifies legitimate traffic as malicious and DROPS it. This can block users, services, or applications. False positives are a key operational challenge with IPS \u2014 signatures must be carefully tuned."
  },
  {
    "id": "z4-n2-009",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A jump server (bastion host) is used for:",
    "options": [
      "Routing traffic between DMZ and internal network",
      "Providing a hardened, audited single access point to manage sensitive internal systems remotely",
      "Hosting public web applications in the DMZ",
      "Accelerating encrypted VPN connections"
    ],
    "correct_index": 1,
    "explanation": "A bastion host/jump server is a hardened gateway: admins connect to it first (typically via SSH or RDP), then access internal servers from there. All commands are logged for audit. It reduces the attack surface by limiting direct external access to internal management interfaces."
  },
  {
    "id": "z4-n2-010",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "Microsegmentation in a data centre applies firewall policies at:",
    "options": [
      "The perimeter only",
      "Per-workload or per-VM level \u2014 controls East-West traffic inside the data centre",
      "Only between DMZ and internal LAN",
      "The ISP edge router"
    ],
    "correct_index": 1,
    "explanation": "Microsegmentation applies granular firewall rules between individual workloads or VMs inside the data centre \u2014 controlling East-West (lateral) traffic. Traditional firewalls only control North-South (in/out) traffic. Microsegmentation limits lateral movement if one VM is compromised."
  },
  {
    "id": "z4-n2-011",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A NGFW identifies application traffic regardless of port number. What capability enables this?",
    "options": [
      "Deep packet inspection with App-ID (application identification)",
      "Stateful connection tracking",
      "Certificate revocation checking",
      "MAC address filtering"
    ],
    "correct_index": 0,
    "explanation": "NGFW App-ID uses deep packet inspection, protocol decoders, and behavioral analysis to identify applications regardless of port \u2014 e.g., BitTorrent on port 80 is still identified as BitTorrent, not HTTP. This is impossible with traditional port-based firewalls."
  },
  {
    "id": "z4-n2-012",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "A company's web server in the DMZ is compromised. With a proper two-firewall DMZ design, what is the attacker's next obstacle?",
    "options": [
      "The compromised web server's local firewall",
      "The inner firewall separating the DMZ from the internal LAN \u2014 which blocks DMZ-initiated connections inbound",
      "The ISP's edge router",
      "The RADIUS server"
    ],
    "correct_index": 1,
    "explanation": "Proper DMZ design: outer firewall (internet\u2192DMZ) + inner firewall (DMZ\u2192LAN). The inner firewall blocks unsolicited connections from the DMZ to the LAN. A compromised DMZ server cannot directly reach internal systems \u2014 the inner firewall limits blast radius."
  },
  {
    "id": "z4-n2-013",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "UTM (Unified Threat Management) is best described as:",
    "options": [
      "A routing protocol for secure networks",
      "A single appliance combining firewall, IPS, antivirus, web filter, VPN, and DLP",
      "A type of honeypot deployment",
      "A wireless security framework"
    ],
    "correct_index": 1,
    "explanation": "UTM consolidates multiple security functions into one device \u2014 reducing cost and complexity for small/medium businesses. Downside: single point of failure, potential performance bottleneck, and less flexibility than best-of-breed individual solutions."
  },
  {
    "id": "z4-n2-014",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "The implicit deny rule at the end of every firewall ACL means:",
    "options": [
      "Traffic matching the last explicit rule is denied",
      "Any traffic not matched by a permit rule above is automatically dropped",
      "The firewall denies all traffic until a permit rule is added",
      "Only outbound traffic is implicitly denied"
    ],
    "correct_index": 1,
    "explanation": "Implicit deny: the last (invisible) rule at the bottom of every ACL drops ALL traffic not explicitly permitted above. You don't see it, but it's always there. This is why forgetting to add a needed permit rule causes mysterious connectivity issues."
  },
  {
    "id": "z4-n2-015",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.2,
    "question": "An IDS is deployed in tap/SPAN mode. If it detects a serious attack, what limitation exists?",
    "options": [
      "It cannot generate alerts",
      "It cannot block the attack \u2014 it can only alert. Traffic has already passed before detection.",
      "It will automatically update firewall rules",
      "It will terminate the attacker's connection directly"
    ],
    "correct_index": 1,
    "explanation": "IDS in tap/SPAN mode receives a copy of traffic \u2014 it is out-of-band. By the time it generates an alert, the attack traffic has already been forwarded to the target. IDS can log and alert but CANNOT block. An IPS deployed inline can drop packets before they reach the destination."
  },
  {
    "id": "z4-n3-primer",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "What does NAC stand for?",
    "options": [
      "Network Access Control",
      "Advanced NAC Protocol",
      "Automated NAC System",
      "Active NAC Technology"
    ],
    "correct_index": 0,
    "explanation": "NAC stands for Network Access Control."
  },
  {
    "id": "z4-n3-study-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "A packet capture of a TLS handshake shows the client and server using RSA or ECDHE to agree on a 'pre-master secret,' but the bulk of the session's traffic is encrypted with AES-256-GCM. Why does TLS use TWO different types of encryption instead of just one?",
    "options": [
      "AES is considered insecure for key exchange, so RSA must always run first as a security upgrade",
      "Asymmetric encryption (RSA/ECDHE) solves the problem of securely agreeing on a secret with no prior shared key, but it's computationally expensive; once both sides share a symmetric session key, fast AES handles the bulk data \u2014 this combination is called hybrid encryption",
      "RSA encrypts the connection metadata while AES encrypts only the TCP headers",
      "The handshake uses AES first to establish the connection, and RSA only encrypts the final few packets for extra protection"
    ],
    "correct_index": 1,
    "explanation": "Asymmetric encryption (RSA/ECDHE) is the only practical way for two parties with no prior shared secret to agree on one, but it's far too slow for bulk data. Symmetric AES is fast but needs a shared key first. TLS combines both: use the slow asymmetric step ONCE to establish a session key, then fast AES for everything else \u2014 HYBRID encryption. Wrong: (A) AES isn't 'insecure' for key exchange, it's USELESS for it \u2014 symmetric algorithms require the key to already be shared. (C) RSA/ECDHE establishes the session key, not metadata; AES encrypts the whole payload, not just headers. (D) reverses the order \u2014 asymmetric happens FIRST, then AES handles the bulk session."
  },
  {
    "id": "z4-n3-study-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "An employee visiting https://hr.internal.corp on their personal laptop gets a 'Your connection is not private (NET::ERR_CERT_AUTHORITY_INVALID)' warning. A coworker visiting the exact same URL on a company-managed laptop sees no warning at all. What is the MOST likely explanation?",
    "options": [
      "The connection is unencrypted on the personal laptop but encrypted on the company laptop",
      "The HR portal uses a certificate signed by the company's internal CA. The managed laptop has that internal CA's root certificate in its trusted store and can build a complete chain; the personal laptop doesn't, so the chain is broken \u2014 the connection may still be encrypted, but the identity can't be verified",
      "The certificate has expired, but only according to the personal laptop's clock",
      "This always indicates an active man-in-the-middle attack targeting the personal laptop specifically"
    ],
    "correct_index": 1,
    "explanation": "'Untrusted CA' means the browser couldn't build a chain back to a root it trusts \u2014 it does NOT mean the connection is unencrypted (TLS can succeed even when identity verification fails). The classic cause: a private CA. The managed laptop has the org's internal root pre-installed and validates the chain; the personal laptop never received that root, so the same cert looks 'untrusted.' Wrong: (A) encryption and identity verification are separate checks. (C) clock-skew gives a different error (CERT_DATE_INVALID) and would affect both devices equally. (D) one device erroring while another doesn't, on an internal site, points to a missing root CA, not an active attack."
  },
  {
    "id": "z4-n3-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "IPsec ESP (Encapsulating Security Payload) provides:",
    "options": [
      "Authentication only \u2014 no encryption",
      "Encryption, integrity, and authentication of the payload",
      "Only IP header authentication",
      "NAT traversal capability"
    ],
    "correct_index": 1,
    "explanation": "ESP (IP protocol 50) provides confidentiality (encryption), integrity, and authentication of the payload. AH (IP protocol 51) provides only integrity and authentication \u2014 NO encryption. Almost all deployments use ESP."
  },
  {
    "id": "z4-n3-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "SSL/TLS VPN has an advantage over IPsec VPN because:",
    "options": [
      "It uses stronger encryption",
      "It operates over HTTPS (port 443) \u2014 usually not blocked by firewalls; easier for remote users",
      "It is faster than IPsec",
      "It requires no client software"
    ],
    "correct_index": 1,
    "explanation": "SSL/TLS VPN uses port 443 (HTTPS) \u2014 rarely blocked because it's the same port used for all web traffic. IPsec uses UDP 500/4500, which can be blocked by strict firewalls. SSL VPN is also available clientless via browser (for portal access)."
  },
  {
    "id": "z4-n3-003",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "IPsec Tunnel mode vs Transport mode: which one is used for site-to-site VPNs?",
    "options": [
      "Transport mode \u2014 encrypts only the payload",
      "Tunnel mode \u2014 encrypts the entire original packet and adds a new outer IP header",
      "Both are equivalent for site-to-site",
      "Neither \u2014 site-to-site uses GRE only"
    ],
    "correct_index": 1,
    "explanation": "Tunnel mode encrypts the ENTIRE original IP packet (header + payload) and wraps it in a new outer IP header with the VPN gateway addresses. This is required for site-to-site VPNs because the original private IPs need to be hidden and transported across the internet."
  },
  {
    "id": "z4-n3-004",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "AES is classified as which type of encryption algorithm?",
    "options": [
      "Asymmetric",
      "Symmetric",
      "Hashing",
      "Elliptic curve"
    ],
    "correct_index": 1,
    "explanation": "AES (Advanced Encryption Standard) is a symmetric block cipher \u2014 same key encrypts and decrypts. It is the standard for bulk data encryption (VPN tunnels, disk encryption, TLS session data). RSA and ECC are asymmetric algorithms."
  },
  {
    "id": "z4-n3-005",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "A digital certificate's primary purpose is to:",
    "options": [
      "Encrypt all network traffic automatically",
      "Bind a public key to a verified identity, signed by a trusted Certificate Authority",
      "Replace the need for passwords",
      "Enable faster routing between networks"
    ],
    "correct_index": 1,
    "explanation": "A digital certificate (X.509) contains a public key, the identity it belongs to, validity period, and is digitally signed by a CA. Anyone trusting that CA can verify the certificate is authentic \u2014 enabling TLS/HTTPS, email signing, VPN authentication."
  },
  {
    "id": "z4-n3-006",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "Split tunneling in a VPN means:",
    "options": [
      "Two VPN tunnels run simultaneously for redundancy",
      "Only corporate/private traffic routes through the VPN \u2014 internet traffic goes directly via the local ISP",
      "The VPN connection is divided into authentication and data channels",
      "Traffic is split evenly across two VPN gateways"
    ],
    "correct_index": 1,
    "explanation": "Split tunneling: only traffic destined for corporate networks goes through the VPN tunnel. Internet traffic (YouTube, social media) exits locally via the user's ISP. This reduces VPN gateway load but means internet traffic is NOT protected by corporate security controls."
  },
  {
    "id": "z4-n3-007",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "IKE Phase 1 in IPsec negotiation establishes:",
    "options": [
      "The actual IPsec data tunnel (ESP/AH parameters)",
      "A secure management channel (ISAKMP SA) used to protect Phase 2 negotiations",
      "The symmetric session key directly",
      "The routing table entries for VPN traffic"
    ],
    "correct_index": 1,
    "explanation": "IKE Phase 1 creates the ISAKMP SA (Security Association) \u2014 a secure, authenticated channel between the two VPN endpoints using Diffie-Hellman key exchange. Phase 2 then negotiates the actual IPsec SA (ESP/AH parameters) within this protected channel."
  },
  {
    "id": "z4-n3-008",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "CRL vs OCSP: when checking if a certificate has been revoked, OCSP is preferred because:",
    "options": [
      "OCSP is encrypted; CRL is not",
      "OCSP provides real-time per-certificate status without downloading an entire revocation list",
      "CRL requires a RADIUS server",
      "OCSP is cheaper to implement"
    ],
    "correct_index": 1,
    "explanation": "CRL (Certificate Revocation List) requires downloading the entire list of revoked certificates \u2014 slow and potentially stale (updated periodically). OCSP (Online Certificate Status Protocol) allows a client to query the revocation status of a single certificate in real time. Much more efficient."
  },
  {
    "id": "z4-n3-009",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "PFS (Perfect Forward Secrecy) in IPsec/TLS ensures that:",
    "options": [
      "The VPN never disconnects",
      "If long-term keys are compromised, previously recorded encrypted sessions cannot be decrypted",
      "All traffic is always encrypted with AES-256",
      "Certificates are automatically renewed"
    ],
    "correct_index": 1,
    "explanation": "PFS generates a unique ephemeral Diffie-Hellman key pair for each session. Even if the long-term private key is later compromised, past session recordings cannot be decrypted \u2014 each session used a different key that was never stored."
  },
  {
    "id": "z4-n3-010",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "RSA is classified as which type of algorithm, and what is it primarily used for in TLS?",
    "options": [
      "Symmetric \u2014 bulk encryption of session data",
      "Asymmetric \u2014 key exchange and digital signatures (not bulk encryption)",
      "Hashing \u2014 verifying data integrity",
      "Block cipher \u2014 encrypting blocks of data"
    ],
    "correct_index": 1,
    "explanation": "RSA is asymmetric (public/private key pair). In TLS it is used for key exchange (encrypting the pre-master secret) and digital signatures. It is NOT used for bulk data encryption \u2014 that's AES (symmetric, much faster). TLS uses RSA/ECDH to establish the session key, then AES for data."
  },
  {
    "id": "z4-n3-011",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "IPsec AH (Authentication Header) provides which security service that ESP also provides?",
    "options": [
      "Confidentiality (encryption)",
      "Data origin authentication and integrity \u2014 but NOT encryption",
      "NAT traversal support",
      "Key management"
    ],
    "correct_index": 1,
    "explanation": "AH (IP protocol 51) provides authentication and integrity only \u2014 it signs the entire IP packet but does NOT encrypt. ESP also provides authentication and integrity (plus encryption). The key difference: AH = no encryption; ESP = encryption. Use ESP."
  },
  {
    "id": "z4-n3-012",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "A web browser displays a certificate error saying the certificate is not trusted. The most likely cause is:",
    "options": [
      "The website is down",
      "The certificate was not signed by a CA trusted in the browser's trust store (self-signed or unknown CA)",
      "The TLS version is outdated",
      "The website is using the wrong port"
    ],
    "correct_index": 1,
    "explanation": "Browser trust is based on the certificate chain back to a trusted Root CA in the OS/browser trust store. If the certificate is self-signed or signed by an unknown CA (not in the trust store), the browser cannot verify authenticity and shows a trust error."
  },
  {
    "id": "z4-n3-013",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "What IPsec ports/protocols must be permitted through a firewall for an IPsec VPN to function?",
    "options": [
      "TCP 443 and TCP 1194",
      "UDP 500 (IKE), UDP 4500 (NAT traversal), and IP protocol 50 (ESP)",
      "TCP 1723 and GRE protocol 47",
      "UDP 161 and UDP 162"
    ],
    "correct_index": 1,
    "explanation": "IPsec requires: UDP 500 for IKE (key exchange/negotiation), UDP 4500 for NAT-T (NAT traversal \u2014 encapsulates ESP in UDP when NAT is present), and IP protocol 50 (ESP) for the actual encrypted data. If a firewall blocks these, the VPN fails."
  },
  {
    "id": "z4-n3-014",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.3,
    "question": "GRE (Generic Routing Encapsulation) alone is insufficient for secure site-to-site tunnels. Why, and what is the solution?",
    "options": [
      "GRE is too slow \u2014 use MPLS instead",
      "GRE provides no encryption or authentication \u2014 combine with IPsec (GRE over IPsec) for security",
      "GRE only supports IPv4 \u2014 use 6in4 instead",
      "GRE cannot carry routing protocol updates"
    ],
    "correct_index": 1,
    "explanation": "GRE (IP protocol 47) creates a tunnel that can carry any Layer 3 protocol including multicast/broadcast and routing protocol updates \u2014 but it is completely unencrypted and unauthenticated. GRE over IPsec = GRE tunnel wrapped in IPsec encryption for both flexibility and security."
  },
  {
    "id": "z4-n4-primer",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "What does MFA stand for?",
    "options": [
      "Multi-Factor Authentication",
      "Multi-Function Access",
      "Managed Firewall Architecture",
      "Main Frame Authentication"
    ],
    "correct_index": 0,
    "explanation": "MFA stands for Multi-Factor Authentication, requiring two or more verification factors."
  },
  {
    "id": "z4-n4-study-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "A company wants strong, certificate-based MUTUAL authentication for a small number of high-security lab devices, while a separate department wants to roll out 802.1X to thousands of BYOD laptops WITHOUT installing a client certificate on each one. Which EAP types fit these two needs, respectively?",
    "options": [
      "EAP-FAST for the high-security devices; LEAP for the BYOD laptops",
      "EAP-TLS for the high-security devices (mutual certificate auth \u2014 strongest available, but requires a client cert per device); PEAP for the BYOD laptops (server certificate builds an encrypted tunnel, then username/password authenticates inside it \u2014 no client cert needed)",
      "LEAP for both, since it requires no certificates anywhere and works on any device",
      "PEAP for the high-security devices (because it uses a tunnel) and EAP-TLS for the BYOD laptops (because it doesn't need a server certificate)"
    ],
    "correct_index": 1,
    "explanation": "EAP-TLS needs a cert on BOTH client and server \u2014 strongest mutual auth, but requires a PKI to issue/distribute/revoke a cert per device, suiting a small pool of high-security endpoints. PEAP wraps username/password (MSCHAPv2) inside a TLS tunnel built from ONLY a server cert \u2014 clients need none, ideal for thousands of BYOD devices. Wrong: (A) EAP-FAST is roughly comparable to PEAP, not stronger than EAP-TLS, and LEAP is insecure everywhere. (C) LEAP's vulnerability to offline dictionary attacks rules it out entirely. (D) reverses the requirements \u2014 PEAP has no client cert, and EAP-TLS demands a server cert, the worst fit for 'no certificates at all.'"
  },
  {
    "id": "z4-n4-study-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "A junior tech accidentally connects both ends of a spare patch cable into two access ports on the same switch. STP has been globally disabled on this switch for unrelated troubleshooting. Within seconds, every device on the switch loses connectivity and CPU utilization spikes to 100%. Which feature, if configured on those access ports, would have limited the damage even with STP disabled?",
    "options": [
      "DHCP snooping \u2014 it would have blocked the looped traffic since it arrived on an untrusted port",
      "Storm control \u2014 configured to monitor the percentage of broadcast traffic on each port and drop excess traffic or err-disable the port once a threshold is exceeded, capping the storm's impact regardless of why the loop exists",
      "Port security \u2014 limiting MAC addresses per port would have stopped the broadcast storm, since loops generate excessive new MAC addresses",
      "An extended ACL blocking broadcast traffic \u2014 ACLs are the standard mechanism switches use to limit broadcast storms"
    ],
    "correct_index": 1,
    "explanation": "Storm control is a rate-based safety net for excessive broadcast/multicast/unknown-unicast traffic on a port \u2014 exactly the symptom of a Layer 2 loop, regardless of why it exists. It doesn't prevent the loop, but caps the damage. Wrong: (A) DHCP snooping filters DHCP messages and builds a binding table \u2014 unrelated to broadcast storms. (C) port security limits distinct MAC addresses per port; a storm is the SAME frame looping, not new MACs. (D) ACLs filter routed traffic by IP/port/protocol \u2014 not the rate-based Layer-2 tool for loop-induced storms."
  },
  {
    "id": "z4-n4-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "RADIUS uses which transport protocol and ports for authentication?",
    "options": [
      "TCP 49",
      "UDP 1812 (auth) and UDP 1813 (accounting)",
      "TCP 1812 and TCP 1813",
      "UDP 514"
    ],
    "correct_index": 1,
    "explanation": "RADIUS uses UDP 1812 for authentication/authorization and UDP 1813 for accounting. Legacy ports 1645/1646 also appear on exams. RADIUS uses UDP (connectionless) \u2014 compare with TACACS+ which uses TCP 49."
  },
  {
    "id": "z4-n4-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "TACACS+ uses which protocol and port?",
    "options": [
      "UDP 1812",
      "TCP 49",
      "UDP 162",
      "TCP 443"
    ],
    "correct_index": 1,
    "explanation": "TACACS+ (Terminal Access Controller Access Control System Plus) uses TCP port 49. TCP ensures reliable delivery \u2014 important for device administration sessions. It also encrypts the ENTIRE payload (unlike RADIUS which only encrypts the password)."
  },
  {
    "id": "z4-n4-003",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "In the 802.1X framework, what role does the network switch play?",
    "options": [
      "Supplicant \u2014 provides credentials",
      "Authenticator \u2014 forwards EAP between the client and RADIUS server",
      "Authentication Server \u2014 verifies credentials",
      "Certificate Authority \u2014 issues client certificates"
    ],
    "correct_index": 1,
    "explanation": "802.1X roles: Supplicant (client/endpoint providing credentials), Authenticator (switch or AP \u2014 forwards EAP messages between supplicant and RADIUS), Authentication Server (RADIUS \u2014 verifies credentials and returns Accept/Reject). The switch itself does not validate credentials."
  },
  {
    "id": "z4-n4-004",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "The three components of AAA stand for:",
    "options": [
      "Administration, Auditing, Accountability",
      "Authentication, Authorisation, Accounting",
      "Access, Authorisation, Auditing",
      "Attestation, Authorisation, Accounting"
    ],
    "correct_index": 1,
    "explanation": "AAA: Authentication (who are you? \u2014 verify identity), Authorisation (what can you do? \u2014 permissions/access rights), Accounting (what did you do? \u2014 logging for audit/billing). RADIUS and TACACS+ both provide AAA services."
  },
  {
    "id": "z4-n4-005",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "Port security on a switch can be configured to allow only a specific number of MAC addresses per port. When a violation occurs, the default violation mode is:",
    "options": [
      "Protect \u2014 silently drops frames from unknown MACs",
      "Restrict \u2014 drops frames + sends SNMP alert",
      "Shutdown \u2014 disables the port (err-disabled state)",
      "Ignore \u2014 logs only, does not drop"
    ],
    "correct_index": 2,
    "explanation": "The default port security violation mode is Shutdown \u2014 the port is placed in err-disabled state and must be manually re-enabled. Protect = silent drop. Restrict = drop + log/SNMP. Shutdown = port goes down (most disruptive but most obvious)."
  },
  {
    "id": "z4-n4-006",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "Dynamic ARP Inspection (DAI) relies on which other Layer 2 security feature to validate ARP packets?",
    "options": [
      "Port security MAC table",
      "DHCP snooping binding table",
      "802.1X authentication state",
      "IP Source Guard whitelist"
    ],
    "correct_index": 1,
    "explanation": "DAI uses the DHCP snooping binding table \u2014 which maps MAC addresses to IP addresses based on legitimate DHCP transactions. When an ARP reply arrives on an untrusted port, DAI checks if the source MAC/IP pair matches the binding table. Mismatches = ARP poisoning \u2192 packet dropped."
  },
  {
    "id": "z4-n4-007",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "A standard ACL vs an extended ACL: what additional matching criteria does an extended ACL provide?",
    "options": [
      "VLAN membership",
      "Destination IP, transport protocol (TCP/UDP), and source/destination port numbers",
      "MAC address",
      "ToS/DSCP values only"
    ],
    "correct_index": 1,
    "explanation": "Standard ACL: matches source IP only (numbered 1\u201399). Extended ACL: matches source IP + destination IP + protocol (TCP/UDP/ICMP/etc.) + source/destination port numbers (numbered 100\u2013199). Extended ACLs allow precise traffic control."
  },
  {
    "id": "z4-n4-008",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "Extended ACLs should be placed as close to the SOURCE as possible. Why?",
    "options": [
      "To reduce the number of ACL entries needed",
      "To block traffic as early as possible \u2014 preventing unwanted traffic from traversing the network",
      "To avoid affecting the destination router",
      "Because extended ACLs only work at ingress interfaces near the source"
    ],
    "correct_index": 1,
    "explanation": "Extended ACLs applied near the source drop unwanted traffic immediately \u2014 preventing it from wasting bandwidth traversing the network to be dropped later. Standard ACLs (source IP only) go near the destination to avoid over-blocking traffic from reaching other destinations."
  },
  {
    "id": "z4-n4-009",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "RADIUS vs TACACS+: which encrypts the entire packet payload (not just the password)?",
    "options": [
      "RADIUS \u2014 full packet encryption",
      "TACACS+ \u2014 encrypts entire payload",
      "Both encrypt the entire payload equally",
      "Neither \u2014 both use plaintext"
    ],
    "correct_index": 1,
    "explanation": "TACACS+ encrypts the entire packet body \u2014 credentials, authorisation data, accounting records. RADIUS only encrypts the password field in the Access-Request. This is why TACACS+ is preferred for device administration where commands are also logged."
  },
  {
    "id": "z4-n4-010",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "NAC (Network Access Control) performs which function before granting network access?",
    "options": [
      "Assigns VLANs based on SSID",
      "Assesses endpoint posture (antivirus up-to-date, patches current, compliant with policy) before allowing access",
      "Encrypts all traffic from the endpoint",
      "Provides 802.1X RADIUS authentication only"
    ],
    "correct_index": 1,
    "explanation": "NAC evaluates endpoint health/posture: is antivirus running and current? Are patches applied? Does it have a corporate certificate? Non-compliant endpoints are quarantined to a remediation VLAN where they can download updates, then re-assessed."
  },
  {
    "id": "z4-n4-011",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "A user connects to a switch port with a new device. Port security with sticky MAC is enabled. What happens?",
    "options": [
      "The port shuts down \u2014 sticky MAC only allows pre-configured MACs",
      "The device's MAC is dynamically learned and saved to the running-config as the allowed MAC \u2014 only that device can use that port going forward",
      "Any device is allowed \u2014 sticky MAC only logs MACs",
      "The device must authenticate via 802.1X first"
    ],
    "correct_index": 1,
    "explanation": "Sticky MAC: the first MAC address learned on the port is dynamically added to the port security configuration as the allowed MAC. If a different MAC tries to use that port, it triggers a violation. The sticky MAC is saved to running-config and persists across reboots if saved to startup-config."
  },
  {
    "id": "z4-n4-012",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "Why is TACACS+ preferred over RADIUS for network device administration (managing routers/switches via CLI)?",
    "options": [
      "TACACS+ supports more users",
      "TACACS+ separates AAA services, encrypts the full payload, and supports per-command authorisation \u2014 critical for auditing admin CLI activity",
      "RADIUS cannot authenticate network devices",
      "TACACS+ is faster due to UDP transport"
    ],
    "correct_index": 1,
    "explanation": "TACACS+ advantages for device admin: (1) full payload encryption \u2014 commands are private; (2) separated AAA \u2014 fine-grained per-command authorisation (restrict engineers to show commands only); (3) per-command accounting \u2014 complete audit trail of all CLI commands. RADIUS is better suited for network access auth (users connecting to Wi-Fi or VPN)."
  },
  {
    "id": "z4-n4-013",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "IP Source Guard on a switch port prevents:",
    "options": [
      "ARP poisoning attacks",
      "Hosts from sending traffic with a source IP address not assigned to them via DHCP",
      "Rogue DHCP server attacks",
      "MAC flooding attacks"
    ],
    "correct_index": 1,
    "explanation": "IP Source Guard filters traffic on untrusted ports using the DHCP snooping binding table. Only packets with source IPs matching the binding table are forwarded. Hosts cannot spoof another host's IP address on the same segment."
  },
  {
    "id": "z4-n4-014",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "DHCP snooping must be configured with trusted and untrusted ports. Which port should be marked as trusted?",
    "options": [
      "All access ports connected to end users",
      "The uplink port connecting to the legitimate DHCP server or core switch",
      "Any port with a static IP configured",
      "Only wireless AP ports"
    ],
    "correct_index": 1,
    "explanation": "DHCP snooping trusted = ports that are allowed to send DHCP server messages (OFFER, ACK). Only uplink ports leading to the actual DHCP server should be trusted. All client-facing access ports are untrusted \u2014 DHCP OFFERs from those ports are dropped (prevents rogue DHCP)."
  },
  {
    "id": "z4-n4-015",
    "zone": 4,
    "domain": "Network Security",
    "node": 4.4,
    "question": "An engineer configures a standard ACL to block traffic from 10.1.1.0/24 from reaching a file server at 192.168.10.5. Where should this ACL be applied?",
    "options": [
      "On the router interface closest to the source (10.1.1.0/24 subnet)",
      "On the router interface closest to the destination (192.168.10.5) \u2014 standard ACLs near destination",
      "On the file server's NIC directly",
      "On the core switch as a VACL"
    ],
    "correct_index": 1,
    "explanation": "Standard ACLs match source IP only \u2014 if placed near the source, they would block traffic to ALL destinations from that subnet, not just the file server. Placed near the destination, they only block traffic headed to that specific interface/subnet. Always place standard ACLs close to the destination."
  },
  {
    "id": "z4-g-001",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "ARP poisoning is mitigated by which Layer 2 switch feature?",
    "options": [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection (DAI)",
      "Storm control"
    ],
    "correct_index": 2,
    "explanation": "DAI validates ARP packets on untrusted ports against the DHCP snooping binding table. Invalid ARP replies (where MAC/IP doesn't match a known DHCP lease) are dropped \u2014 preventing ARP poisoning MITM attacks."
  },
  {
    "id": "z4-g-002",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "TACACS+ uses which transport protocol and port?",
    "options": [
      "UDP 1812",
      "UDP 1813",
      "TCP 49",
      "TCP 443"
    ],
    "correct_index": 2,
    "explanation": "TACACS+ uses TCP 49. TCP ensures reliable delivery for device management sessions. RADIUS uses UDP 1812 (auth) / 1813 (accounting)."
  },
  {
    "id": "z4-g-003",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "IPsec ESP (protocol 50) vs AH (protocol 51): which provides encryption?",
    "options": [
      "AH provides encryption; ESP provides authentication only",
      "ESP provides encryption + authentication; AH provides authentication only (no encryption)",
      "Both provide encryption equally",
      "Neither \u2014 they rely on GRE for encryption"
    ],
    "correct_index": 1,
    "explanation": "ESP (IP protocol 50) = encryption + authentication + integrity. AH (IP protocol 51) = authentication + integrity ONLY \u2014 no encryption. In practice, always use ESP."
  },
  {
    "id": "z4-g-004",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "IDS vs IPS: which one can actively block malicious traffic?",
    "options": [
      "IDS \u2014 detects and blocks",
      "IPS \u2014 detects and blocks (inline)",
      "Both can block equally",
      "Neither \u2014 both only alert"
    ],
    "correct_index": 1,
    "explanation": "IPS is deployed inline and can drop/block malicious traffic. IDS is passive (tap/SPAN mode) \u2014 detects and alerts only. IDS cannot block because traffic has already passed before detection."
  },
  {
    "id": "z4-g-005",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "Zero Trust security operates on which core principle?",
    "options": [
      "Trust internal users; verify external users only",
      "Never trust, always verify \u2014 all access requests require authentication regardless of network location",
      "Trust is granted after initial MFA",
      "Only cloud resources require Zero Trust"
    ],
    "correct_index": 1,
    "explanation": "Zero Trust: no implicit trust \u2014 even inside the network perimeter. Every user and device must authenticate and be authorised for every resource, every time. Assumes breach has already occurred."
  },
  {
    "id": "z4-g-006",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "Password spraying avoids account lockout by:",
    "options": [
      "Using a dictionary of complex passwords against one account",
      "Trying a small number of common passwords across many accounts \u2014 staying under the per-account lockout threshold",
      "Using GPU acceleration to try billions of passwords per second",
      "Targeting only accounts with expired passwords"
    ],
    "correct_index": 1,
    "explanation": "Spraying: try 'Password1' against 10,000 accounts \u2014 each account only sees 1 attempt (under lockout threshold). Brute force: try millions of passwords against 1 account \u2014 immediately triggers lockout. Spray = stealthy, slow, distributed."
  },
  {
    "id": "z4-g-007",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "A WAF (Web Application Firewall) specifically protects against:",
    "options": [
      "Volumetric DDoS attacks",
      "SQL injection, XSS, and other OWASP Top 10 web application attacks",
      "ARP poisoning on the LAN",
      "BGP route hijacking"
    ],
    "correct_index": 1,
    "explanation": "WAF inspects HTTP/HTTPS application layer traffic for web-specific attacks (SQLi, XSS, CSRF, path traversal). Standard firewalls cannot detect these because they're embedded in legitimate-looking HTTP requests."
  },
  {
    "id": "z4-g-008",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "DHCP snooping must be configured before enabling DAI. Why?",
    "options": [
      "DHCP snooping provides the certificate authority for DAI",
      "DAI uses the DHCP snooping binding table (MAC-to-IP mappings) to validate ARP packets \u2014 without it, DAI has no reference data",
      "DHCP snooping assigns VLAN membership used by DAI",
      "DAI uses DHCP snooping port trust settings only"
    ],
    "correct_index": 1,
    "explanation": "DAI validates ARP by checking the source MAC/IP against the DHCP snooping binding table. If DHCP snooping isn't running (no binding table), DAI cannot validate anything and will either pass or drop all traffic. DHCP snooping must populate the binding table first."
  },
  {
    "id": "z4-g-009",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "The implicit deny at the end of an ACL means:",
    "options": [
      "The last explicit rule blocks all traffic",
      "All traffic not matched by an explicit permit rule above is automatically dropped",
      "Traffic is denied only on outbound interfaces",
      "The deny applies to management traffic only"
    ],
    "correct_index": 1,
    "explanation": "Every ACL has an invisible implicit deny all at the bottom. Any traffic reaching this rule (not matched above) is dropped silently. This is the most common cause of unexpected ACL blocking \u2014 forgetting to include a needed permit."
  },
  {
    "id": "z4-g-010",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "802.1X port-based access: what state is the port in before authentication completes?",
    "options": [
      "Authorised \u2014 all traffic permitted",
      "Unauthorised \u2014 only EAP/802.1X traffic allowed; all other traffic blocked",
      "Forwarding \u2014 same as standard switch port",
      "Err-disabled \u2014 requires manual recovery"
    ],
    "correct_index": 1,
    "explanation": "802.1X port starts unauthorised \u2014 only EAPOL (EAP over LAN) authentication frames pass. No IP traffic permitted until RADIUS returns Access-Accept. Then the port moves to authorised state. Guest VLAN can be configured for devices that fail 802.1X."
  },
  {
    "id": "z4-g-011",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "DNS poisoning is best mitigated by:",
    "options": [
      "Enabling HTTPS-only on web servers",
      "DNSSEC \u2014 cryptographically signs DNS responses so forged records are detected and rejected",
      "Increasing DNS TTL values",
      "Using RADIUS for DNS authentication"
    ],
    "correct_index": 1,
    "explanation": "DNSSEC adds cryptographic signatures to DNS records. Resolvers verify the signature chain \u2014 forged or modified DNS responses fail signature validation and are rejected. Also: use encrypted DNS (DoH/DoT) to prevent interception."
  },
  {
    "id": "z4-g-012",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "RADIUS encrypts only the password in authentication packets. TACACS+ encrypts:",
    "options": [
      "Only the username",
      "The entire packet payload",
      "Only accounting records",
      "Nothing \u2014 TACACS+ uses TLS externally"
    ],
    "correct_index": 1,
    "explanation": "TACACS+ encrypts the entire body of every packet \u2014 credentials, commands, authorization, accounting data. RADIUS only encrypts the password field. This makes TACACS+ more secure for device management where command history is sensitive."
  },
  {
    "id": "z4-g-013",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "PFS (Perfect Forward Secrecy) protects against which specific threat?",
    "options": [
      "Brute force of current session keys",
      "Decryption of previously recorded traffic if long-term private keys are later compromised",
      "Certificate revocation failures",
      "Replay attacks"
    ],
    "correct_index": 1,
    "explanation": "Without PFS, an attacker who records encrypted traffic and later obtains the server's private key can decrypt all past sessions. PFS generates a unique ephemeral key per session (Diffie-Hellman) \u2014 past sessions remain protected even if the long-term key is compromised."
  },
  {
    "id": "z4-g-014",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "A DMZ (screened subnet) in a two-firewall design restricts traffic how?",
    "options": [
      "Internet \u2192 DMZ allowed. DMZ \u2192 internal LAN blocked by inner firewall. Internal \u2192 DMZ allowed.",
      "Internet \u2192 DMZ blocked. DMZ \u2192 internal LAN allowed.",
      "All traffic between all zones is blocked by default.",
      "DMZ and internal LAN are the same security zone."
    ],
    "correct_index": 0,
    "explanation": "Two-firewall DMZ: outer firewall allows internet to reach DMZ servers (web, mail, DNS). Inner firewall blocks DMZ from initiating connections to the internal LAN. Internal users can reach DMZ. A compromised DMZ server cannot reach internal systems."
  },
  {
    "id": "z4-g-015",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "Whaling is a specific type of spear phishing that targets:",
    "options": [
      "Maritime organisations",
      "Senior executives and C-suite (CEO, CFO, COO)",
      "Network administrators specifically",
      "Employees with database access"
    ],
    "correct_index": 1,
    "explanation": "Whaling = 'going after the big fish' \u2014 highly targeted spear phishing against senior executives. Attackers research the target thoroughly. Common themes: fake legal subpoenas, wire transfer requests (BEC \u2014 Business Email Compromise), regulatory notices."
  },
  {
    "id": "z4-g-016",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "A standard ACL should be placed close to the DESTINATION. An extended ACL should be placed close to the SOURCE. Why the difference?",
    "options": [
      "Standard ACLs are more complex and require more processing near the destination",
      "Standard ACLs only match source IP \u2014 placing near source would block all traffic from that source to ALL destinations. Near destination = only blocks traffic to that specific destination. Extended ACLs match src+dst so can safely filter near source.",
      "Extended ACLs use more memory and need to be near the source to conserve resources",
      "There is no difference \u2014 both should be placed near the source"
    ],
    "correct_index": 1,
    "explanation": "Standard ACL near source = blocks ALL traffic from that source to everywhere (too broad). Near destination = only affects traffic going to that specific subnet. Extended ACL near source = precise enough (knows src+dst+port) to block only intended traffic, and kills it early before it wastes bandwidth."
  },
  {
    "id": "z4-g-017",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "An evil twin AP differs from a rogue AP in that:",
    "options": [
      "Evil twin uses stronger encryption than the legitimate AP",
      "Evil twin broadcasts the same SSID as the legitimate AP to trick users into connecting \u2014 enabling MITM",
      "Rogue AP is set up outside the building; evil twin is inside",
      "They are the same thing"
    ],
    "correct_index": 1,
    "explanation": "Rogue AP: any unauthorised AP connected to the corporate network. Evil twin: a rogue AP that mimics a legitimate AP's SSID to deceive users \u2014 it may not even be connected to the corporate network. Users connect thinking it's real; attacker intercepts traffic."
  },
  {
    "id": "z4-g-018",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "A SYN flood is a Protocol DDoS attack. What mechanism does it exploit, and what is the primary mitigation?",
    "options": [
      "It exploits DNS cache \u2014 mitigated by DNSSEC",
      "It exploits TCP 3-way handshake \u2014 sends many SYN packets but never completes handshake, exhausting server state tables. Mitigated by SYN cookies.",
      "It exploits ICMP echo \u2014 mitigated by blocking ICMP",
      "It exploits BGP \u2014 mitigated by route filtering"
    ],
    "correct_index": 1,
    "explanation": "SYN flood fills the server's half-open connection table \u2014 server reserves resources for each SYN waiting for the final ACK that never comes. SYN cookies: server encodes session state in the SYN-ACK sequence number \u2014 no state allocated until ACK received with valid cookie."
  },
  {
    "id": "z4-g-019",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "Defense in depth differs from Zero Trust in that defense in depth:",
    "options": [
      "Replaces perimeter security with identity-based access",
      "Layers multiple overlapping security controls \u2014 perimeter, internal, host, data \u2014 so one failure doesn't mean full compromise",
      "Assumes breach has already occurred",
      "Eliminates trust for all internal traffic"
    ],
    "correct_index": 1,
    "explanation": "Defense in depth = multiple security layers (network, host, application, data). Zero Trust = authentication/authorisation model: no implicit trust regardless of location, continuous verification. They are complementary \u2014 Zero Trust is a subset principle that fits within defense in depth."
  },
  {
    "id": "z4-g-020",
    "zone": 4,
    "domain": "Network Security",
    "node": 0,
    "question": "IPsec tunnel mode vs transport mode \u2014 which is used for remote access VPN (laptop \u2192 corporate HQ)?",
    "options": [
      "Transport mode \u2014 encrypts payload only, IP header preserved",
      "Tunnel mode \u2014 encrypts entire original packet with new outer IP header",
      "Both modes work equally for remote access",
      "Neither \u2014 remote access VPN uses GRE only"
    ],
    "correct_index": 1,
    "explanation": "Remote access VPN (laptop \u2192 corporate HQ) typically uses tunnel mode \u2014 the client's private IP is encapsulated inside the VPN tunnel with a new outer IP header containing the client's public IP and VPN gateway IP. The original private-addressed packet is fully encrypted inside."
  },
  {
    "id": "z5-n1-primer",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "What does CAT5e stand for?",
    "options": [
      "CAT5e",
      "Advanced CAT5e Protocol",
      "Automated CAT5e System",
      "Active CAT5e Technology"
    ],
    "correct_index": 0,
    "explanation": "CAT5e stands for CAT5e."
  },
  {
    "id": "z5-n1-study-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "A user reports their connection 'feels slow' today. The helpdesk pulls up last month's recorded interface stats for that port (typical: 20% utilization, <5ms latency) and compares them to today's readings (95% utilization, 80ms latency) \u2014 immediately pointing to congestion. Separately, a technician with no historical data simply swaps the user's patch cable for a known-good one to see if performance improves. How do these two techniques differ?",
    "options": [
      "They're identical \u2014 comparing to a baseline IS the same thing as swapping a component",
      "The helpdesk used baseline comparison (current metrics vs recorded normal-operation metrics to spot a deviation); the technician used component substitution (replacing a suspect part with a known-good one to test if the symptom is hardware-related) \u2014 most useful when no baseline exists",
      "Baseline comparison only works on wireless networks, while component swapping only works on wired networks",
      "Component swapping should always be tried BEFORE establishing a theory of probable cause, per CompTIA's 7-step process"
    ],
    "correct_index": 1,
    "explanation": "Comparing current metrics to a recorded baseline is data-driven anomaly detection \u2014 it shows what changed and by how much. Component substitution is a hypothesis test \u2014 swap a suspect part to see if the symptom follows it. They're complementary, not identical; substitution especially shines when no baseline exists. Wrong: (A) one compares numbers, the other tests a physical hypothesis \u2014 not the same thing. (C) nothing limits baseline comparison to wireless or substitution to wired \u2014 both apply broadly. (D) per the 7-step process, you form a theory (step 2) BEFORE testing it (step 3); randomly swapping parts first is the 'shotgun' anti-pattern."
  },
  {
    "id": "z5-n1-study-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "At 9 AM, multiple finance department users suddenly start getting 'certificate not trusted' warnings on an internal HR portal that worked fine yesterday. No other internal site is affected. Before running any packet captures, what should the technician check FIRST?",
    "options": [
      "Immediately replace the HR server's network cable \u2014 hardware degrades randomly, so a cable swap is always the right first step",
      "Check the change management log for any changes to the HR portal's certificate, the internal CA, or related infrastructure overnight \u2014 a sudden, isolated symptom strongly suggests a recent change is the cause",
      "Re-image every finance department workstation, since a cert error affecting multiple users at once must mean malware",
      "Escalate immediately to the ISP, since certificate errors are always caused by upstream DNS issues"
    ],
    "correct_index": 1,
    "explanation": "A sudden symptom hitting MULTIPLE users at once, isolated to ONE app, is the classic signature of a recent change rather than gradual decay, malware, or a random fault \u2014 checking the change log directly tests the most probable cause first. Wrong: (A) cable issues typically affect one user, not many users on one app simultaneously, and swapping hardware first is the 'shotgun' anti-pattern. (C) re-imaging is drastic with no malware evidence, and malware producing an identical cert error across many machines on one site would be unusual versus a simple changed certificate. (D) cert trust errors are a PKI issue, not DNS \u2014 escalating to the ISP skips internal investigation."
  },
  {
    "id": "z5-n1-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "What is the FIRST step in CompTIA's network troubleshooting methodology?",
    "options": [
      "Test a theory",
      "Establish a plan of action",
      "Identify the problem",
      "Document the findings"
    ],
    "correct_index": 2,
    "explanation": "Step 1 is to identify the problem \u2014 gather information from users, identify symptoms, reproduce the issue, check recent changes, and review logs. You must understand the problem before theorising about the cause."
  },
  {
    "id": "z5-n1-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "After implementing a fix, what is the NEXT step in CompTIA's troubleshooting methodology?",
    "options": [
      "Document the findings",
      "Identify the problem again",
      "Verify full system functionality and no side effects",
      "Escalate to the next tier"
    ],
    "correct_index": 2,
    "explanation": "Step 6 is to verify full system functionality after implementing the solution. Check that the original problem is resolved AND that the fix didn't break anything else. Only then proceed to Step 7 (documentation)."
  },
  {
    "id": "z5-n1-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "Documentation (Step 7 in troubleshooting) is important because:",
    "options": [
      "It is only required for compliance reasons",
      "It creates a knowledge base for future troubleshooting and records what changed in the environment",
      "It satisfies the change management requirement for the CAB",
      "It is only done when escalating"
    ],
    "correct_index": 1,
    "explanation": "Documentation records the problem, root cause, steps taken, and resolution \u2014 creating institutional knowledge. Future engineers (or your future self) can resolve similar issues faster. It also tracks all changes made to the environment."
  },
  {
    "id": "z5-n1-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "The 'divide and conquer' troubleshooting approach typically starts at which OSI layer?",
    "options": [
      "Layer 1 (Physical)",
      "Layer 7 (Application)",
      "Layer 3 (Network) \u2014 test IP connectivity first to split the problem",
      "Layer 2 (Data Link)"
    ],
    "correct_index": 2,
    "explanation": "Divide and conquer starts at Layer 3 \u2014 can you ping the gateway? If yes, the issue is above Layer 3. If no, focus below. This quickly narrows the problem scope without testing every layer sequentially."
  },
  {
    "id": "z5-n1-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "A user reports their internet is not working. The FIRST question you should ask is:",
    "options": [
      "What browser are you using?",
      "What has changed recently on your computer or network?",
      "Have you tried restarting your computer?",
      "What is your IP address?"
    ],
    "correct_index": 1,
    "explanation": "The most valuable first question in troubleshooting: 'What changed?' Most problems follow a change \u2014 a software update, a new cable, a configuration edit, a new device. Identifying the change often leads directly to the root cause."
  },
  {
    "id": "z5-n1-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "You test your theory at Step 3 and the fix doesn't resolve the issue. What should you do?",
    "options": [
      "Proceed to Step 4 and implement a different fix anyway",
      "Return to Step 2 and establish a new theory of probable cause",
      "Escalate immediately to Tier 2",
      "Skip to Step 7 and document the failure"
    ],
    "correct_index": 1,
    "explanation": "If your theory is proven wrong, go back to Step 2 \u2014 establish a new theory. Never implement a fix based on a disproven theory. The methodology is iterative: 1\u21922\u21923, if wrong: 2\u21923, until theory is confirmed, then 4\u21925\u21926\u21927."
  },
  {
    "id": "z5-n1-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "Bottom-up troubleshooting starts at Layer 1. What is the correct order?",
    "options": [
      "Application \u2192 Presentation \u2192 Session \u2192 Transport \u2192 Network \u2192 Data Link \u2192 Physical",
      "Physical \u2192 Data Link \u2192 Network \u2192 Transport \u2192 Session \u2192 Presentation \u2192 Application",
      "Network \u2192 Physical \u2192 Application \u2192 Transport",
      "Transport \u2192 Network \u2192 Physical \u2192 Application"
    ],
    "correct_index": 1,
    "explanation": "Bottom-up follows the OSI model from Physical (Layer 1) up to Application (Layer 7): Physical \u2192 Data Link \u2192 Network \u2192 Transport \u2192 Session \u2192 Presentation \u2192 Application. Fix the lowest layer issue first \u2014 upper layers often fix themselves."
  },
  {
    "id": "z5-n1-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "When should a technician ESCALATE a problem rather than implement a fix?",
    "options": [
      "After documenting the issue",
      "When the fix is beyond their skill level, access rights, or authority to implement",
      "After the first failed theory",
      "Only when the problem affects more than 10 users"
    ],
    "correct_index": 1,
    "explanation": "Escalation happens at Step 5 when: the technician lacks the technical skill, doesn't have the required system access, or is not authorised to make the change (e.g., needs CAB approval for a production firewall change). Escalation is not failure \u2014 it's the right process."
  },
  {
    "id": "z5-n1-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "A user can ping their default gateway but cannot reach internet sites by IP address. Which OSI layer has the problem?",
    "options": [
      "Layer 1 or 2 \u2014 physical/link issue",
      "Layer 3 \u2014 routing issue between the LAN and the internet",
      "Layer 7 \u2014 application issue",
      "Layer 4 \u2014 TCP port blocked"
    ],
    "correct_index": 1,
    "explanation": "Pinging the gateway confirms Layer 1, 2, and local Layer 3 work. Failing to reach internet IPs (not just names) = routing problem \u2014 traffic isn't being forwarded correctly beyond the local gateway. Check the router's default route and upstream connectivity."
  },
  {
    "id": "z5-n1-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "A user can ping internet IPs but cannot browse websites by name. Which layer/service has the problem?",
    "options": [
      "Layer 1 \u2014 physical cable disconnected",
      "Layer 3 \u2014 IP routing broken",
      "DNS \u2014 name resolution failure (Layer 7 / service)",
      "Layer 4 \u2014 TCP handshake failing"
    ],
    "correct_index": 2,
    "explanation": "If ping by IP works but ping/browse by hostname fails \u2014 DNS is the problem. IP routing works fine (Layer 3 up to 7 is functional for IP). The host cannot resolve hostnames to IPs. Use nslookup to diagnose DNS."
  },
  {
    "id": "z5-n1-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "A switch port shows 'line protocol down' but 'line up'. What does this indicate?",
    "options": [
      "Layer 1 physical connection is fine, but Layer 2 is failing (possibly duplex mismatch or keepalive issue)",
      "Physical cable is disconnected",
      "The VLAN is misconfigured",
      "The spanning tree has blocked this port"
    ],
    "correct_index": 0,
    "explanation": "'Line up' = physical signal detected (Layer 1 OK). 'Protocol down' = Layer 2 failing \u2014 keepalive packets not received, duplex mismatch, encapsulation mismatch, or the remote end has a shutdown. This is a classic Cisco IOS show interface output pattern."
  },
  {
    "id": "z5-n1-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.1,
    "question": "You're troubleshooting a connectivity issue. Ping to local hosts works. Ping to gateway fails. What is the MOST likely cause?",
    "options": [
      "DNS server is down",
      "IP address, subnet mask, or default gateway misconfiguration on the host",
      "The ISP link is down",
      "A firewall is blocking ICMP"
    ],
    "correct_index": 1,
    "explanation": "Ping to local hosts works = Layer 1/2 and local Layer 3 are functional. Ping to gateway fails = the host likely has the wrong gateway IP, wrong subnet mask (placing gateway in different subnet), or the gateway IP is not configured. Check ipconfig /all."
  },
  {
    "id": "z5-n2-primer",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "What does MMF stand for?",
    "options": [
      "Multi-Mode Fiber",
      "Advanced MMF Protocol",
      "Automated MMF System",
      "Active MMF Technology"
    ],
    "correct_index": 0,
    "explanation": "MMF stands for Multi-Mode Fiber."
  },
  {
    "id": "z5-n2-study-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A technician runs a fiber light source and power meter test on a new single-mode run between two buildings \u2014 light is detected at the far end within the expected loss budget, so the fiber itself seems fine. But when matching switches are connected via SFPs, the link light never comes up. They discover one SFP is an 850nm multimode transceiver and the other is a 1310nm single-mode transceiver. What's the issue, and why didn't the power meter test catch it?",
    "options": [
      "The fiber run is simply too long for any transceiver \u2014 distance is the only issue",
      "The two transceivers operate at different wavelengths/fiber types (850nm MMF vs 1310nm SMF) and can't link with each other regardless of fiber condition; a power meter test only confirms the fiber can carry SOME light, not that two specific transceivers are compatible with each other or the fiber type",
      "Power meters can only test copper cabling, so the result is meaningless here",
      "The transceivers must be DAC cables, not SFPs, which is why they're incompatible"
    ],
    "correct_index": 1,
    "explanation": "A power/light test verifies the fiber's physical continuity and loss budget \u2014 it says nothing about whether the electronics on each end speak the same 'language.' An 850nm multimode SFP and a 1310nm single-mode SFP use different light sources and wavelengths \u2014 they won't link no matter how clean the fiber is. Wrong: (A) nothing indicates the run exceeds single-mode's distance limits \u2014 the failure is a transceiver mismatch, not distance. (C) optical power meters are a fiber-only tool, irrelevant to copper. (D) DAC cables are a different medium entirely; the issue is purely SFP wavelength/type mismatch."
  },
  {
    "id": "z5-n2-study-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A building installs 200 PoE+ security cameras (802.3bt, ~60W each), with all cables run together in a single large bundle inside a sealed conduit. After a few months, cameras in the CENTER of the bundle show intermittent connectivity and higher-than-expected attenuation on cable certification tests, while cables on the OUTER edge of the bundle test fine. What is the most likely cause, and what would help?",
    "options": [
      "The center cables are simply longer than the outer cables, exceeding the 100m limit",
      "Cumulative heat from high-wattage PoE+ current across hundreds of bundled cables raises the temperature inside the bundle, especially in the center where airflow is worst; higher temperature increases copper resistance and attenuation. Using Cat6A and following bundle-size deratings or improving airflow would help",
      "PoE+ cameras require fiber, not copper, so copper cabling will always fail eventually",
      "The issue is unrelated to PoE \u2014 it must be EMI from fluorescent lighting near the conduit"
    ],
    "correct_index": 1,
    "explanation": "Heat from current through hundreds of bundled PoE+ cables accumulates inside a sealed bundle, hitting center cables hardest where airflow is worst. Heat raises copper resistance, which directly increases attenuation \u2014 exactly the certification failures described, isolated to the center. Cat6A's larger conductors dissipate heat better; bundle-size deratings and better airflow reduce the buildup. Wrong: (A) cable length is per-run, unrelated to position-in-bundle. (C) PoE+ over copper is standard up to 100m at full power. (D) EMI from lighting correlates with proximity to fixtures, not center-vs-edge bundle position."
  },
  {
    "id": "z5-n2-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "Which tool is used to locate the far end of an unknown cable by injecting an audio tone and tracing it?",
    "options": [
      "OTDR",
      "Cable certifier",
      "Toner generator and probe (fox and hound)",
      "Loopback adapter"
    ],
    "correct_index": 2,
    "explanation": "A toner generator and probe (fox and hound): the generator injects an audio tone at one end; the probe detects the tone at the other end \u2014 allowing you to trace unlabelled cables through walls, ceilings, and cable bundles."
  },
  {
    "id": "z5-n2-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "An OTDR is used primarily for troubleshooting:",
    "options": [
      "Copper Ethernet cable faults",
      "Wi-Fi channel interference",
      "Fiber optic cables \u2014 locating breaks and measuring loss",
      "Power supply issues in network equipment"
    ],
    "correct_index": 2,
    "explanation": "OTDR (Optical Time Domain Reflectometer) sends a light pulse into fiber and measures backscattered/reflected light to locate faults, breaks, and splices \u2014 reporting the exact distance to each event. Essential for fiber troubleshooting."
  },
  {
    "id": "z5-n2-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A straight-through Ethernet cable is used to connect:",
    "options": [
      "Switch to switch (same device type)",
      "PC to PC directly",
      "PC to switch (different device types)",
      "Router console port to laptop"
    ],
    "correct_index": 2,
    "explanation": "Straight-through cable: same pinout (T568B or T568A) on both ends \u2014 used to connect DIFFERENT device types (PC \u2192 switch, switch \u2192 router). Crossover cable: different standards on each end \u2014 used to connect SAME device types (PC \u2192 PC, switch \u2192 switch). MDI/MDIX on modern equipment auto-corrects this."
  },
  {
    "id": "z5-n2-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "T568A and T568B wiring standards differ in which way?",
    "options": [
      "They use completely different pin assignments",
      "Orange and green pairs are swapped between the two standards",
      "T568A uses Cat5e; T568B uses Cat6",
      "They use different connector types"
    ],
    "correct_index": 1,
    "explanation": "T568A and T568B differ only in that the orange pair (pins 1,2) and green pair (pins 3,6) are swapped. Both are valid \u2014 but you must use the SAME standard on both ends of a straight-through cable. A crossover cable uses T568A on one end and T568B on the other."
  },
  {
    "id": "z5-n2-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A loopback adapter is used to:",
    "options": [
      "Bridge two network segments",
      "Test a port by connecting TX to RX \u2014 verifies the port's send and receive hardware",
      "Convert between fiber and copper",
      "Capture traffic on a port for analysis"
    ],
    "correct_index": 1,
    "explanation": "A loopback adapter connects the transmit pin to the receive pin on a port. Traffic sent by the port is immediately received back. If the loopback test passes, the port hardware is functional \u2014 isolating the issue to the cable or remote device."
  },
  {
    "id": "z5-n2-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A cable passes a basic continuity test but shows excessive errors at Gigabit speeds. What fault is most likely?",
    "options": [
      "Open circuit on one pair",
      "Split pair \u2014 wires from different pairs crossed \u2014 passes continuity but causes crosstalk",
      "Cable too short",
      "Wrong connector type"
    ],
    "correct_index": 1,
    "explanation": "Split pairs: a wire from pair 2 and a wire from pair 3 are used together instead of the correct pair. The basic continuity test (all 8 pins connected) passes, but the untwisted wires generate high crosstalk (NEXT) at Gigabit speeds. A wire map tester with pair identification catches this."
  },
  {
    "id": "z5-n2-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "CRC errors are increasing on a switch interface after a new cable was installed. What should you check FIRST?",
    "options": [
      "VLAN configuration",
      "The new cable and its connectors \u2014 bad crimping or damaged cable causes CRC errors",
      "Spanning tree topology",
      "DHCP lease table"
    ],
    "correct_index": 1,
    "explanation": "CRC errors indicate corrupt frames \u2014 most commonly caused by physical layer issues: bad cable, loose connector, poor crimping, damaged SFP transceiver, or EMI interference. New cable + new CRC errors = strong indicator to replace/re-crimp the cable first."
  },
  {
    "id": "z5-n2-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "What is attenuation in a cable, and when does it become a problem?",
    "options": [
      "Voltage fluctuations caused by power surges \u2014 only a problem near generators",
      "Signal loss as it travels along the cable \u2014 becomes a problem beyond the cable's rated distance",
      "Interference between cables \u2014 only occurs in unshielded cables",
      "Incorrect impedance matching \u2014 only relevant for coaxial cable"
    ],
    "correct_index": 1,
    "explanation": "Attenuation is the weakening of signal over distance. For copper Ethernet (Cat5e/6), the limit is 100m total channel. Beyond that, signal degrades below usable levels \u2014 errors increase, speed drops, link may fail. Fiber has much lower attenuation and can run kilometres."
  },
  {
    "id": "z5-n2-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A rollover cable (console cable) connects which two things?",
    "options": [
      "Two switches for inter-VLAN routing",
      "PC/laptop serial/USB port to router or switch console port for management",
      "Two patch panels in the same rack",
      "Fiber equipment to copper Ethernet"
    ],
    "correct_index": 1,
    "explanation": "Rollover cables (Cisco console cables) have pins completely reversed (pin 1\u21948, 2\u21947, etc.) \u2014 they look like a flat grey cable. Used ONLY for out-of-band management access to the router/switch console port. Not used for data connectivity."
  },
  {
    "id": "z5-n2-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "Which tool would best identify whether an existing fiber cable run meets the loss budget for 10GbE at 300m?",
    "options": [
      "Cable continuity tester",
      "Toner probe",
      "Optical power meter and light source (or OTDR)",
      "Spectrum analyser"
    ],
    "correct_index": 2,
    "explanation": "An optical power meter measures the actual optical signal strength (dBm) at the far end of the fiber. Compare received power against the transmitter's output power \u2014 the difference is the insertion loss. If within budget, the link will work. OTDR provides a detailed loss profile including splice and connector losses."
  },
  {
    "id": "z5-n2-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A switch port shows high input errors and runts. The remote device is a server with a NIC set to full-duplex 1Gbps. The switch port is set to auto-negotiate. What is the most likely cause?",
    "options": [
      "The cable is too long",
      "Duplex mismatch \u2014 auto-negotiate may settle at half-duplex if the NIC forces full-duplex without advertising",
      "The server NIC is faulty",
      "The switch VLAN configuration is wrong"
    ],
    "correct_index": 1,
    "explanation": "When one side forces full-duplex and the other auto-negotiates: the auto-negotiating switch port may fall back to half-duplex (no duplex info received). Result: server sends full-duplex, switch expects half-duplex CSMA/CD \u2014 collisions, runts, CRC errors on the switch side. Fix: set both sides explicitly to the same duplex and speed."
  },
  {
    "id": "z5-n2-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "EMI (Electromagnetic Interference) on a copper cable run can be mitigated by:",
    "options": [
      "Increasing cable bandwidth category (Cat5e to Cat6)",
      "Running the cable parallel to power cables for maximum proximity",
      "Using shielded cable (STP/FTP) and routing away from high-EMI sources; crossing power cables at 90 degrees",
      "Reducing cable length to under 50m"
    ],
    "correct_index": 2,
    "explanation": "EMI mitigation for copper cable: (1) use shielded cable (STP/FTP) near motors, fluorescent lights, power cables \u2014 shield must be properly grounded; (2) route data cables away from power cables; (3) where crossing is unavoidable, cross at 90 degrees to minimise coupling; (4) use fiber optic cable (immune to EMI) in high-interference environments."
  },
  {
    "id": "z5-n2-013",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A punch-down tool is used when:",
    "options": [
      "Testing cable continuity",
      "Terminating copper cable into a patch panel or keystone jack (110 block / 66 block)",
      "Tracing cables through walls",
      "Measuring optical signal strength"
    ],
    "correct_index": 1,
    "explanation": "A punch-down tool seats individual wires into IDC (Insulation Displacement Connector) slots on 110-type patch panels and keystone jacks. It simultaneously inserts the wire and cuts off the excess \u2014 correct seating is critical for cable performance."
  },
  {
    "id": "z5-n2-014",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.2,
    "question": "A fiber link passes an optical power meter test (loss within budget) but the interface still doesn't come up. What should you check next?",
    "options": [
      "Replace the fiber with copper",
      "Check TX/RX polarity \u2014 fiber has separate transmit and receive strands that may be swapped",
      "The cable is too short",
      "Replace the entire patch panel"
    ],
    "correct_index": 1,
    "explanation": "Fiber links use separate strands for TX and RX. If TX on one end connects to TX on the other (instead of RX), the link cannot come up regardless of optical power. Check that the patch cable and cassette are wired TX\u2192RX on both ends (straight-through vs crossover polarity). This is a common installation mistake."
  },
  {
    "id": "z5-n3-primer",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "What does TDR stand for?",
    "options": [
      "Time Domain Reflectometer",
      "Advanced TDR Protocol",
      "Automated TDR System",
      "Active TDR Technology"
    ],
    "correct_index": 0,
    "explanation": "TDR stands for Time Domain Reflectometer."
  },
  {
    "id": "z5-n3-study-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "Users report connections to an internal app server (port 8443) get abruptly reset a few seconds after connecting. A technician runs tcpdump simultaneously at the client and the server. The server-side capture shows SYN, SYN-ACK, and several data packets \u2014 but the server NEVER sends a RST. The client-side capture shows a RST arriving with a source IP matching the server. What does this discrepancy most likely indicate, and what should the technician check next?",
    "options": [
      "The server's NIC is faulty and dropping its own outgoing RST packets before they reach the capture",
      "An intermediate device (firewall, IPS, or load balancer) on the path is injecting a RST with a spoofed source IP to terminate the connection \u2014 likely a security policy, idle timeout, or inspection rule; check inline security device logs/policies for that connection",
      "TCP RST packets are never visible in packet captures \u2014 the client must be misreading a FIN packet as a RST",
      "The client's OS generated the RST locally due to a timeout, and the source IP shown in a capture is irrelevant"
    ],
    "correct_index": 1,
    "explanation": "If the server's own capture shows it never sent a RST, but the client received one appearing to be FROM the server, that RST was injected ON THE PATH \u2014 classic behavior of an inline security appliance terminating a connection by sending a spoofed RST, which looks to the receiver exactly like the other side hung up. This is why multi-point captures matter \u2014 they surface discrepancies a single capture would hide. Wrong: (A) a NIC dropping its OWN outgoing packets wouldn't explain the CLIENT receiving a RST from somewhere on the wire. (C) RST is a normal flag, distinct from FIN, in any capture. (D) a client-generated RST would carry the CLIENT's source IP, not the server's."
  },
  {
    "id": "z5-n3-study-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "A technician needs to find (1) which physical switch port a user's laptop (known MAC address) is plugged into, AND (2) how that access switch connects upstream to the distribution switch (which port-to-port link). Which combination of commands provides this, and why can't either alone do the whole job?",
    "options": [
      "show mac address-table alone provides both, since MAC addresses uniquely identify both end devices and switches",
      "show mac address-table (to find which port the laptop's MAC is learned on) plus show cdp/lldp neighbors (to find which port connects to the distribution switch and which port it terminates on there) \u2014 the MAC table maps end-host locations, while CDP/LLDP maps inter-device topology",
      "show cdp neighbors alone provides both, since CDP tracks every MAC address on every port, including end-user devices",
      "Neither command can provide this \u2014 only a physical site walk-through with a cable tracer can determine port-to-port connections"
    ],
    "correct_index": 1,
    "explanation": "The MAC table is built from frames received \u2014 it records which port each source MAC was last seen on, exactly how you find an end-host's port. CDP/LLDP is separate: devices announce themselves to direct neighbors, revealing device-to-device topology that a MAC table doesn't show. Wrong: (A) two switches don't exchange identity via MAC entries \u2014 an uplink port just shows a pile of OTHER devices' MACs learned through it. (C) CDP/LLDP isn't typically supported on end-user devices \u2014 it's for infrastructure links. (D) CDP/LLDP exists specifically to avoid physical cable tracing \u2014 both commands are standard, fast tools."
  },
  {
    "id": "z5-n3-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "What does a 169.254.x.x IP address in ipconfig output indicate?",
    "options": [
      "A valid static IP assigned by the admin",
      "A public IP assigned by the ISP",
      "APIPA \u2014 the host failed to obtain a DHCP address and self-assigned a link-local address",
      "An IPv6 link-local address"
    ],
    "correct_index": 2,
    "explanation": "169.254.x.x is APIPA (Automatic Private IP Addressing) \u2014 assigned by Windows/macOS when DHCP fails. The host cannot reach other networks with this address (link-local only). Fix: resolve the DHCP issue (server down, scope exhausted, cable unplugged)."
  },
  {
    "id": "z5-n3-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "The traceroute / tracert command is used to:",
    "options": [
      "Test if a remote host is reachable",
      "Show the hop-by-hop path packets take to a destination and the RTT at each hop",
      "Display the local routing table",
      "Scan open ports on a remote host"
    ],
    "correct_index": 1,
    "explanation": "Traceroute/tracert uses incrementing TTL values to discover each router hop between source and destination. It shows RTT at each hop and where packets stop \u2014 useful for identifying where connectivity fails or latency is introduced."
  },
  {
    "id": "z5-n3-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "What command would you use to test DNS resolution on a Windows machine?",
    "options": [
      "ping",
      "tracert",
      "nslookup",
      "netstat"
    ],
    "correct_index": 2,
    "explanation": "nslookup (or dig on Linux/macOS) queries DNS servers and displays the results \u2014 showing which DNS server responded, the resolved IP, and any errors (NXDOMAIN = name not found). Essential for DNS troubleshooting."
  },
  {
    "id": "z5-n3-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "What does 'ping 127.0.0.1' test?",
    "options": [
      "Connectivity to the default gateway",
      "Connectivity to the DNS server",
      "The local TCP/IP stack \u2014 loopback address",
      "Whether the NIC has a cable connected"
    ],
    "correct_index": 2,
    "explanation": "127.0.0.1 is the loopback address \u2014 it tests the local TCP/IP stack without requiring a network interface or cable. If this fails, the TCP/IP stack itself is broken (reinstall TCP/IP stack). If this passes but other pings fail, the issue is external to the host."
  },
  {
    "id": "z5-n3-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "The arp -a command displays:",
    "options": [
      "The local routing table",
      "The DNS cache",
      "The ARP cache \u2014 IP-to-MAC address mappings learned by the local host",
      "Open network ports and connections"
    ],
    "correct_index": 2,
    "explanation": "arp -a shows the ARP cache \u2014 the local table mapping IP addresses to MAC addresses. Useful for detecting ARP poisoning (same IP mapped to two different MACs), duplicate IPs, or confirming the gateway resolves to the correct MAC."
  },
  {
    "id": "z5-n3-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "traceroute shows '* * *' at a particular hop. What does this mean?",
    "options": [
      "The link at that hop is down",
      "That router does not respond to ICMP TTL-exceeded messages \u2014 but traffic may still be forwarded",
      "The destination is unreachable",
      "Packet loss is 100% at that hop"
    ],
    "correct_index": 1,
    "explanation": "'* * *' means no ICMP TTL-exceeded response was received from that hop. Many routers are configured not to respond to ICMP messages (rate limiting or ACL). This does NOT necessarily mean the link is broken \u2014 if subsequent hops respond, traffic is still flowing through it."
  },
  {
    "id": "z5-n3-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "pathping (Windows) is more useful than tracert because it:",
    "options": [
      "Uses TCP instead of ICMP",
      "Combines tracert path discovery with per-hop packet loss statistics over multiple samples",
      "Resolves hostnames faster",
      "Can bypass firewall restrictions"
    ],
    "correct_index": 1,
    "explanation": "pathping sends multiple packets to each hop and calculates packet loss percentage per hop \u2014 identifying exactly which hop is dropping packets. tracert shows RTT only for a single sample. pathping takes longer but provides more diagnostic information for intermittent issues."
  },
  {
    "id": "z5-n3-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "nmap is used for which troubleshooting/security task?",
    "options": [
      "Capturing full packet payloads",
      "Network discovery and port scanning \u2014 identifying live hosts and open ports/services",
      "Displaying local ARP cache",
      "Measuring optical fiber signal loss"
    ],
    "correct_index": 1,
    "explanation": "nmap (Network Mapper) performs host discovery (which hosts are alive) and port scanning (which ports are open/filtered/closed) and service/OS detection. Used for network inventory, vulnerability assessment, and confirming firewall rules are working."
  },
  {
    "id": "z5-n3-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "On a Cisco switch, 'show interface Gi0/1' shows 'input errors: 1240, CRC: 1240'. What should you investigate?",
    "options": [
      "VLAN configuration on the port",
      "The physical cable and connector between this port and the connected device",
      "The spanning tree state of the port",
      "The DHCP lease table"
    ],
    "correct_index": 1,
    "explanation": "Input CRC errors on a Cisco interface = corrupt frames arriving \u2014 physical layer problem. Check: the cable (replace it), the patch panel termination, the connector crimping, and the SFP/transceiver. Also check for duplex mismatch (late collisions often accompany CRC in that case)."
  },
  {
    "id": "z5-n3-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "What does 'netstat -an' display?",
    "options": [
      "The ARP cache with MAC addresses",
      "All active TCP/UDP connections and listening ports with numeric addresses (no DNS resolution)",
      "The local routing table",
      "Interface IP configuration"
    ],
    "correct_index": 1,
    "explanation": "netstat -an shows all active connections (ESTABLISHED) and listening ports (LISTENING) in numeric format (-n skips DNS reverse lookup for speed). Useful for identifying which services are listening, detecting unexpected connections, and confirming a service started on the correct port."
  },
  {
    "id": "z5-n3-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "ipconfig /flushdns clears the local DNS resolver cache. When should you use this?",
    "options": [
      "After changing a NIC driver",
      "When a DNS record has been updated but the host still resolves the old IP (stale cache)",
      "After changing the default gateway",
      "When APIPA is assigned"
    ],
    "correct_index": 1,
    "explanation": "Windows caches DNS responses for their TTL. If a DNS record is updated (server IP changed, domain moved), clients still resolve the old IP until their cache expires. ipconfig /flushdns forces immediate re-query of DNS for all names."
  },
  {
    "id": "z5-n3-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "On a router, 'show ip route' shows no default route (0.0.0.0/0). What connectivity impact does this have?",
    "options": [
      "No impact \u2014 directly connected routes still work",
      "Only traffic to directly connected networks will be routed \u2014 all other traffic is dropped (no internet)",
      "Only OSPF routes will fail",
      "DNS queries will fail"
    ],
    "correct_index": 1,
    "explanation": "Without a default route (gateway of last resort), the router drops any packet destined for a network not in its routing table. For internet access, a default route pointing to the ISP is essential. Hosts behind this router lose all non-local connectivity."
  },
  {
    "id": "z5-n3-013",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "Which command on a Windows host would show the local IP address, subnet mask, default gateway, and DNS server addresses?",
    "options": [
      "netstat",
      "arp -a",
      "ipconfig /all",
      "route print"
    ],
    "correct_index": 2,
    "explanation": "ipconfig /all shows complete NIC configuration: IP address, subnet mask, default gateway, DNS server addresses, MAC address, DHCP lease information, and whether DHCP or static IP is used. The '/all' flag is essential \u2014 plain 'ipconfig' omits DNS and MAC."
  },
  {
    "id": "z5-n3-014",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.3,
    "question": "A user can ping 8.8.8.8 but not www.google.com. nslookup www.google.com returns 'DNS request timed out'. What is the problem?",
    "options": [
      "The IP route to Google is broken",
      "The DNS server configured on the host is unreachable or not responding",
      "The TLS certificate for Google is expired",
      "The default gateway is wrong"
    ],
    "correct_index": 1,
    "explanation": "Ping to 8.8.8.8 works = IP routing fine. nslookup timeout = the DNS server (not 8.8.8.8 apparently \u2014 or 8.8.8.8 is unreachable via UDP 53) is not responding. Check: ipconfig /all to see which DNS server is configured, then ping that server. If that DNS server is unreachable, fix DNS server config or firewall rules for UDP 53."
  },
  {
    "id": "z5-n4-primer",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "What does WPA2 stand for?",
    "options": [
      "Wi-Fi Protected Access 2",
      "Advanced WPA2 Protocol",
      "Automated WPA2 System",
      "Active WPA2 Technology"
    ],
    "correct_index": 0,
    "explanation": "WPA2 stands for Wi-Fi Protected Access 2."
  },
  {
    "id": "z5-n4-study-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A multi-floor office has two complaints: (1) users in a large open warehouse far from any AP report weak, dropping signal, and (2) users in a densely-packed engineering area near many APs report slow speeds despite strong signal, with spectrum analysis showing heavy channel overlap. An engineer proposes moving warehouse clients toward 2.4GHz and engineering-area clients toward 5GHz/6GHz. Does this make sense?",
    "options": [
      "No \u2014 frequency band has no effect on range or congestion; the issue must be AP hardware age in both cases",
      "Yes \u2014 2.4GHz's lower frequency travels farther and penetrates obstacles better, helping the warehouse's range problem; 5GHz/6GHz offer far more non-overlapping channels and wider-bandwidth options, reducing the congestion/overlap causing the engineering area's slowdowns",
      "No \u2014 6GHz should be used in the warehouse, because higher frequencies always have the longest range",
      "Yes, but only because 2.4GHz devices are inherently newer and faster than 5GHz devices"
    ],
    "correct_index": 1,
    "explanation": "Frequency affects both propagation physics and available spectrum \u2014 2.4GHz's longer wavelength gives better range/penetration, useful where coverage (not speed) is the bottleneck, despite only 3 channels. 5GHz (24+) and 6GHz (59 channels) provide far more spectrum to spread dense deployments without overlap, addressing congestion, at the cost of range. Wrong: (A) this range-vs-channels tradeoff IS the core effect of frequency. (C) reverses it \u2014 6GHz has the SHORTEST range of the three, the worst choice for a sparse warehouse. (D) 2.4GHz isn't 'faster' or 'newer' \u2014 5GHz/6GHz support wider channels and higher throughput; the conclusion in B is right, but for range/channel reasons, not device age."
  },
  {
    "id": "z5-n4-study-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A company needs to bridge a warehouse network to a main office network 1.5 miles away, with clear rooftop-to-rooftop line-of-sight. They install standard omnidirectional antennas on wireless bridges at both ends, but the link is unreliable with very low throughput. What change would most likely fix this, and why?",
    "options": [
      "Replace the omnidirectional antennas with high-gain directional antennas (parabolic dish or high-gain Yagi) aimed precisely at each other \u2014 concentrating the radio energy into a narrow, high-gain beam toward the only receiver that matters, instead of spreading it 360\u00b0",
      "Increase the transmit power on the omnidirectional antennas \u2014 power output, not antenna pattern, determines point-to-point link quality",
      "Switch both ends to 2.4GHz, since lower frequencies are always better for long-distance links regardless of antenna type",
      "1.5 miles is simply impossible for any wireless technology \u2014 a fiber run is the only solution"
    ],
    "correct_index": 0,
    "explanation": "Omni antennas spread energy 360\u00b0 \u2014 for a PtP link, only a tiny fraction reaches the other end, while the antenna receives interference equally from every direction. A directional antenna concentrates the SAME transmit power into a narrow beam aimed at the other end, dramatically increasing received signal while reducing interference \u2014 exactly what long-distance PtP requires. Wrong: (B) an omni at higher power still wastes most power in useless directions, and EIRP limits cap this anyway \u2014 antenna pattern, not raw power, is the key lever. (C) 2.4GHz isn't 'always better'; many PtP bridges run on 5GHz with directional antennas \u2014 the antenna mismatch is the root cause. (D) 1.5-mile PtP bridges with directional antennas and clear LOS are common and well-established."
  },
  {
    "id": "z5-n4-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A laptop connected to Wi-Fi shows IP address 169.254.47.12. What does this indicate?",
    "options": [
      "Excellent Wi-Fi signal \u2014 the AP assigned a link-local address",
      "Successful WPA3 authentication",
      "DHCP failure \u2014 Wi-Fi connected but could not obtain a DHCP address",
      "The MAC address was blocked by wireless ACL"
    ],
    "correct_index": 2,
    "explanation": "169.254.x.x (APIPA) means the device connected to the Wi-Fi network successfully at Layer 2 but failed to get a DHCP address (DHCP server down, scope exhausted, or DHCP relay misconfigured). The Wi-Fi association itself worked \u2014 this is a DHCP/Layer 3 issue."
  },
  {
    "id": "z5-n4-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A user's Wi-Fi disconnects every time the office microwave is used. What is the cause?",
    "options": [
      "The AP needs a firmware update",
      "Microwave interference \u2014 microwave ovens emit 2.4 GHz RF in the same band as 802.11b/g/n",
      "The user's Wi-Fi password is being reset",
      "Co-channel interference from a neighbouring AP"
    ],
    "correct_index": 1,
    "explanation": "Microwave ovens emit wideband RF energy in the 2.4 GHz ISM band \u2014 overlapping with 802.11b/g/n Wi-Fi. When the microwave runs, it raises the noise floor and causes disconnections. Fix: connect the client to a 5 GHz SSID (802.11ac or 5GHz 802.11n), which is unaffected by microwave ovens."
  },
  {
    "id": "z5-n4-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A user cannot find their corporate Wi-Fi SSID even though other users nearby can. What is the most likely cause?",
    "options": [
      "The user's device is banned from the wireless network",
      "The user's device only supports 5 GHz but the SSID is broadcast on 2.4 GHz only, or the device is too far from the AP",
      "The AP has been deauthenticated",
      "The SSID uses WPA3 which the device doesn't support"
    ],
    "correct_index": 1,
    "explanation": "If others can see the SSID but one user cannot: (1) device may only support one band and the SSID is on the other band, (2) device is at the edge of coverage range while others are closer, (3) device's Wi-Fi adapter is disabled, or (4) the device driver has a compatibility issue."
  },
  {
    "id": "z5-n4-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "An office has three APs all on channel 6 of the 2.4 GHz band. Users experience slow speeds. What is the problem?",
    "options": [
      "The gateway is overloaded",
      "Co-channel interference \u2014 all APs sharing channel 6 compete for airtime",
      "The SSIDs are broadcasting on different channels",
      "WPA2 authentication is too slow"
    ],
    "correct_index": 1,
    "explanation": "Co-channel interference: multiple APs on the same channel must take turns transmitting (CSMA/CA). The more APs on a channel, the more contention \u2014 resulting in lower throughput per client. Fix: assign APs to non-overlapping channels (1, 6, 11) so each AP has its own channel."
  },
  {
    "id": "z5-n4-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A new employee cannot connect to the corporate Wi-Fi. They receive an 'Authentication Failed' error. What should you check first?",
    "options": [
      "The AP firmware version",
      "Whether the passphrase (PSK) entered is correct and that WPA2 vs WPA3 client settings match the AP",
      "The DHCP scope",
      "Whether the corporate switch has the correct VLAN"
    ],
    "correct_index": 1,
    "explanation": "Authentication failed = credentials problem. First check: correct PSK (case-sensitive), correct security type (WPA2-PSK vs WPA3-SAE vs WPA2-Enterprise). If Enterprise: check RADIUS reachability, correct username/password, valid certificate."
  },
  {
    "id": "z5-n4-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "Users in a conference room far from the nearest AP complain of poor Wi-Fi performance despite showing 'connected'. What is the issue?",
    "options": [
      "The SSID password is wrong for that room",
      "Weak signal / low RSSI \u2014 AP too far away; client transmits at low MCS rate to compensate for weak signal",
      "The AP is overheating",
      "Co-channel interference is too high"
    ],
    "correct_index": 1,
    "explanation": "802.11 rate adaptation: as signal weakens (distance increases), the client/AP automatically uses lower, more robust modulation rates (e.g., drops from 802.11ac 433Mbps to 802.11n 54Mbps or lower). User stays 'connected' but at a fraction of the potential speed. Fix: add an AP or extend coverage."
  },
  {
    "id": "z5-n4-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A user on WPA2 Enterprise fails to authenticate. They receive a certificate error. What is most likely wrong?",
    "options": [
      "Wrong PSK entered",
      "RADIUS server certificate is expired, untrusted, or the client is not configured to trust the CA that signed the RADIUS cert",
      "The DHCP scope is exhausted",
      "The AP's channel is congested"
    ],
    "correct_index": 1,
    "explanation": "WPA2 Enterprise with PEAP or EAP-TLS: the client validates the RADIUS server's certificate. If the cert is expired, self-signed and untrusted, or the CA is not in the device's trust store \u2014 authentication fails with a certificate error. Fix: renew cert, install CA cert on clients, or update client EAP profile."
  },
  {
    "id": "z5-n4-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "After deploying a new LWAP, it won't appear in the WLC. What should you check?",
    "options": [
      "Whether the AP is within range of other APs",
      "Whether the AP received an IP from DHCP and whether it can reach the WLC on UDP 5246/5247 (CAPWAP)",
      "Whether the AP's channel is set correctly",
      "Whether the AP's SSID password is configured"
    ],
    "correct_index": 1,
    "explanation": "LWAP boot process: (1) gets DHCP address (option 43 may provide WLC IP), (2) discovers WLC via CAPWAP on UDP 5246/5247, (3) downloads config from WLC. If AP doesn't appear in WLC: check DHCP (has the AP got an IP?), check CAPWAP reachability (firewall blocking?), check WLC AP licence."
  },
  {
    "id": "z5-n4-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A spectrum analyser shows a constant wide-band noise source at 2.4 GHz that isn't a Wi-Fi signal. What is a likely source?",
    "options": [
      "A misconfigured SSID",
      "A malfunctioning or leaking microwave oven, or a cordless phone operating in the 2.4 GHz band",
      "A rogue access point on channel 6",
      "Bluetooth pairing traffic"
    ],
    "correct_index": 1,
    "explanation": "Non-802.11 interference appears on a spectrum analyser as non-channel-shaped noise. Wide-band continuous 2.4 GHz interference = microwave oven (when cooking). Pulsed 2.4 GHz = cordless phones. Frequency-hopping = Bluetooth or ZigBee. A rogue AP would look like a proper 802.11 signal."
  },
  {
    "id": "z5-n4-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A user connects to Wi-Fi but can only reach local network resources \u2014 not the internet. Other users on the same AP have internet access. What is the most likely cause specific to this user's device?",
    "options": [
      "The AP DHCP scope is exhausted",
      "The user's device has a manually configured incorrect default gateway or DNS server",
      "The AP is overloaded with too many clients",
      "The 5 GHz band is saturated"
    ],
    "correct_index": 1,
    "explanation": "If other users on the same AP have internet access, the AP/DHCP/routing are all working. The problem is specific to this device: likely a manually configured wrong default gateway or wrong DNS server (overriding DHCP-provided settings). Check: ipconfig /all \u2014 is the gateway correct? Is DNS correct?"
  },
  {
    "id": "z5-n4-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "During a VoIP call, a user walks between two APs and the call drops. Coverage overlap was measured at 10%. What is wrong?",
    "options": [
      "The user's device does not support 802.11r",
      "Insufficient cell overlap \u2014 10% is too low for seamless roaming. Minimum ~15-20% overlap required for clients to associate with the new AP before losing the old one",
      "The user's device is on the wrong VLAN",
      "WPA3 SAE takes too long to re-authenticate"
    ],
    "correct_index": 1,
    "explanation": "Wireless roaming requires sufficient cell overlap (~15-20%) so the client can discover and pre-authenticate with the new AP before the old AP signal drops too low. With 10% overlap, the client loses the first AP before associating with the second \u2014 causing the call drop. Fix: increase AP power or add an AP."
  },
  {
    "id": "z5-n4-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "Hidden SSID (not broadcasting the network name) is considered weak security because:",
    "options": [
      "It prevents devices from connecting at all",
      "Clients must broadcast probe requests for the hidden SSID \u2014 attackers can see the network name in these probe frames",
      "Hidden SSIDs cannot use WPA2 encryption",
      "The AP becomes visible to all devices when broadcasting"
    ],
    "correct_index": 1,
    "explanation": "Hiding the SSID only removes it from beacon frames. Clients that know the SSID actively probe for it \u2014 sending the SSID name in clear text in probe request frames. Any passive RF monitor can capture these and learn the hidden SSID. It provides no meaningful security benefit and causes connection issues."
  },
  {
    "id": "z5-n4-013",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.4,
    "question": "A network admin notices multiple clients rapidly disconnecting and reconnecting to the corporate AP. What attack is most likely occurring?",
    "options": [
      "ARP poisoning attack on the LAN",
      "Deauthentication (deauth) flood attack \u2014 attacker sends spoofed deauth frames forcing clients off the AP",
      "DHCP starvation \u2014 client IPs are being stolen",
      "STP topology change causing MAC table flush"
    ],
    "correct_index": 1,
    "explanation": "Deauth flood: attacker sends a continuous stream of spoofed 802.11 deauthentication management frames (no auth required in WPA2 without 802.11w) \u2014 clients continuously disconnect. Mitigation: enable 802.11w (Management Frame Protection) which requires management frames to be cryptographically authenticated."
  },
  {
    "id": "z5-n5-primer",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "What does DHCP stand for?",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Advanced DHCP Protocol",
      "Automated DHCP System",
      "Active DHCP Technology"
    ],
    "correct_index": 0,
    "explanation": "DHCP stands for Dynamic Host Configuration Protocol."
  },
  {
    "id": "z5-n5-study-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A company stands up a new mail server and creates an A record (mail.example.com \u2192 new IP), but forgets to update the MX record, which still points to 'oldmail.example.com' \u2014 a name with no A record at all. Separately, the PTR record for the new mail server's IP still resolves back to the OLD server's hostname. What are the likely consequences of EACH issue?",
    "options": [
      "Both are cosmetic only \u2014 DNS records are purely for human readability with no functional impact",
      "The stale MX record means inbound email can't be delivered (other mail servers can't find a valid destination via 'oldmail.example.com'); the mismatched PTR record can get outbound mail flagged as spam, since many receiving servers check that the sending IP's PTR hostname matches the sender (forward-confirmed reverse DNS)",
      "Both issues only affect IPv6 connectivity \u2014 IPv4 mail delivery is unaffected by MX or PTR records",
      "The MX record issue is irrelevant because A records alone are sufficient for email delivery; only the PTR record matters"
    ],
    "correct_index": 1,
    "explanation": "MX records tell other mail servers WHERE to deliver mail for a domain \u2014 if it points to a hostname with no A/AAAA record, inbound mail fails entirely, no matter how correct the new server's own A record is. PTR records (reverse DNS) are checked by many receiving servers as part of spam filtering \u2014 a mismatch between a sending IP's PTR hostname and the actual sender (FCrDNS) can get outbound mail flagged. Wrong: (A) MX and PTR have direct functional consequences, not just informational ones. (C) these are application-layer (DNS/SMTP) concerns, independent of IPv4 vs IPv6. (D) an A record only resolves a name once you know which name to look up \u2014 that's the MX record's job."
  },
  {
    "id": "z5-n5-study-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A new VLAN 30 (subnet 10.30.0.0/24) is created on a Layer 3 switch. Devices plugged into VLAN 30 receive APIPA (169.254.x.x) addresses instead of addresses from the central DHCP server, which lives on VLAN 1 and already has a configured scope for 10.30.0.0/24. What is the most likely missing configuration, and how does it work?",
    "options": [
      "The DHCP server needs a second network card physically connected to VLAN 30",
      "An 'ip helper-address' (DHCP relay) pointing to the central DHCP server is missing on VLAN 30's SVI \u2014 without it, DHCP DISCOVER broadcasts from VLAN 30 never cross the router boundary; the relay converts the broadcast to a unicast packet addressed to the server, tagging it with the VLAN 30 gateway's IP so the server picks the correct scope",
      "VLAN 30 needs its own separate DHCP server \u2014 a single DHCP server can never serve more than one subnet, even with relay configured",
      "The clients need static routes manually configured pointing to the DHCP server"
    ],
    "correct_index": 1,
    "explanation": "DHCP DISCOVER is a broadcast, and routers don't forward broadcasts between subnets by design. An 'ip helper-address' on the VLAN 30 SVI listens for DHCP broadcasts and relays them as unicast to the configured server, including the GIADDR so the server picks the right scope and knows where to reply. Wrong: (A) one server can serve many subnets/scopes \u2014 that's the point of relay. (C) one centrally-located server with multiple scopes is standard, made possible by relay. (D) clients can't have static routes before they HAVE an IP \u2014 this is a Layer 2/3 issue solved by relay."
  },
  {
    "id": "z5-n5-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "New devices on the network are failing to get IP addresses. Existing devices work fine. What is the most likely DHCP cause?",
    "options": [
      "DHCP is disabled",
      "DNS is down",
      "DHCP scope exhaustion \u2014 all available IPs in the pool are already assigned",
      "The default gateway is unreachable"
    ],
    "correct_index": 2,
    "explanation": "When existing devices work (they already have leases) but new devices cannot get IPs, the DHCP scope is typically exhausted \u2014 all available addresses are leased. Fix: expand the scope, reduce lease time, or clean up stale leases from disconnected devices."
  },
  {
    "id": "z5-n5-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A user can ping IPs but cannot reach websites by name. ipconfig /all shows DNS: 192.168.1.50 but that server is offline. What is the fix?",
    "options": [
      "Replace the network cable",
      "Correct the DNS server address \u2014 point to a working DNS server (either manually or via DHCP option 6)",
      "Enable DHCP on the interface",
      "Renew the IP address with ipconfig /release /renew"
    ],
    "correct_index": 1,
    "explanation": "IP works but DNS fails = wrong or unreachable DNS server. The quickest fix: update the DHCP scope's DNS option (option 6) to point to a working DNS server, then renew client leases. Or manually set a working DNS server (8.8.8.8 temporarily for testing)."
  },
  {
    "id": "z5-n5-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "Two workstations have been manually configured with the same IP address. What symptom will users experience?",
    "options": [
      "Both machines have double the network speed",
      "Neither machine may function reliably on the network \u2014 ARP conflicts cause intermittent connectivity",
      "Only one machine works; the other is blocked",
      "The switch disables both ports for security"
    ],
    "correct_index": 1,
    "explanation": "Duplicate IP addresses cause ARP conflicts \u2014 both machines respond to ARP requests for that IP. Traffic destined for that IP gets routed to whichever machine responded last, causing intermittent failures for both. Some operating systems also display a duplicate IP warning. Fix: assign unique static IPs or use DHCP."
  },
  {
    "id": "z5-n5-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A host can reach other devices on its local subnet but cannot reach any remote networks. The default gateway is set to 0.0.0.0. What is wrong?",
    "options": [
      "The DNS server is unreachable",
      "No default gateway configured \u2014 without a gateway, the host cannot send traffic off the local subnet",
      "The subnet mask is wrong",
      "The NIC driver needs updating"
    ],
    "correct_index": 1,
    "explanation": "The default gateway tells the host where to send packets destined for networks it doesn't have a direct route to. Without it (0.0.0.0 or blank), traffic to remote networks is dropped locally. Fix: configure the correct default gateway (usually the router's LAN interface IP)."
  },
  {
    "id": "z5-n5-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "NTP (Network Time Protocol) time synchronisation failure can cause which serious problem?",
    "options": [
      "Slower internet speeds",
      "Kerberos authentication failures \u2014 Active Directory requires clocks within 5 minutes of each other",
      "DHCP scope exhaustion",
      "DNS NXDOMAIN errors"
    ],
    "correct_index": 1,
    "explanation": "Kerberos (used in Active Directory/Windows authentication) requires all clocks to be within 5 minutes of each other. If time skew exceeds this, authentication fails \u2014 users cannot log in, access shares, or authenticate to domain resources. NTP uses UDP port 123."
  },
  {
    "id": "z5-n5-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A host at 192.168.1.10/24 cannot communicate with another host at 192.168.1.200/25. The admin claims they're on the same network. What is the problem?",
    "options": [
      "The hosts need static routes to each other",
      "Subnet mask mismatch \u2014 one host uses /24, the other /25. They calculate different network ranges and cannot communicate directly",
      "The switch needs VLANs configured",
      "DNS is resolving to incorrect IPs"
    ],
    "correct_index": 1,
    "explanation": "/24 = network 192.168.1.0 with range .1\u2013.254. /25 = network 192.168.1.128 with range .129\u2013.254. The /25 host calculates that the /24 host (192.168.1.10) is on a DIFFERENT network and sends it to the default gateway instead of direct ARP. The /24 host does the opposite \u2014 sends direct. This asymmetric routing breaks communication."
  },
  {
    "id": "z5-n5-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "nslookup returns 'NXDOMAIN' for a new server hostname. What does this mean?",
    "options": [
      "The DNS server is offline",
      "The hostname does not exist in DNS \u2014 the DNS record was not created",
      "The hostname resolves to the wrong IP",
      "The DNS cache needs flushing"
    ],
    "correct_index": 1,
    "explanation": "NXDOMAIN (Non-Existent Domain) means the queried hostname doesn't exist in DNS at all \u2014 no A/AAAA record found. The DNS server responded but couldn't find the record. Fix: create the missing DNS record for the new server. Different from a timeout (server unreachable) or wrong IP (wrong record value)."
  },
  {
    "id": "z5-n5-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A DHCP server is configured with option 3 set to 192.168.1.1, but the actual router's LAN IP is 192.168.1.254. Users cannot reach the internet. What is the root cause?",
    "options": [
      "The DHCP scope has no available addresses",
      "DHCP option 3 (default gateway) is wrong \u2014 clients receive the incorrect gateway IP and cannot route off-subnet",
      "DNS option 6 is not configured",
      "The DHCP server lease time is too short"
    ],
    "correct_index": 1,
    "explanation": "DHCP option 3 is the default gateway distributed to clients. If misconfigured (points to non-existent 192.168.1.1 instead of actual gateway 192.168.1.254), clients try to send off-subnet traffic to 192.168.1.1 \u2014 which doesn't exist or isn't a router. Fix: correct option 3 in the DHCP scope."
  },
  {
    "id": "z5-n5-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "A server has a static IP 192.168.1.50 configured. The DHCP scope also includes 192.168.1.50 in its range. After adding a new workstation, connectivity issues occur. What is happening?",
    "options": [
      "The DHCP scope is exhausted",
      "The DHCP server assigns 192.168.1.50 to the new workstation \u2014 duplicate IP with the server causes ARP conflicts",
      "The new workstation's NIC is faulty",
      "The default VLAN is misconfigured"
    ],
    "correct_index": 1,
    "explanation": "Static IPs within a DHCP range cause IP conflicts \u2014 the DHCP server doesn't know about the static assignment and may lease the same IP. Fix: (1) exclude all static IPs from the DHCP scope using DHCP exclusion ranges, or (2) use DHCP reservations (bind IP to MAC). Always exclude static IPs from DHCP pools."
  },
  {
    "id": "z5-n5-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "After moving a server to a new subnet, internal users cannot reach it by name even though they can ping the server's new IP directly. What is most likely the problem?",
    "options": [
      "The server's NIC failed during the move",
      "The DNS A record for the server still points to the old IP \u2014 update the DNS record to the new IP",
      "The server's default gateway needs updating",
      "The DHCP lease for the server has expired"
    ],
    "correct_index": 1,
    "explanation": "Ping by IP works = Layer 3 routing correct. Name fails = DNS stale record. The DNS server still has the old IP for the server's hostname. Fix: update the DNS A record to the new IP, then flush DNS cache on clients (ipconfig /flushdns) if the old record is still cached."
  },
  {
    "id": "z5-n5-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "ipconfig /release followed by ipconfig /renew fails to get a new IP address. The user gets 169.254.x.x. What should you investigate?",
    "options": [
      "Whether the user typed the commands correctly",
      "DHCP server availability \u2014 is it running? Can the client reach it? Is the scope exhausted?",
      "Whether TLS 1.3 is enabled",
      "Whether 802.1X is configured on the switch port"
    ],
    "correct_index": 1,
    "explanation": "APIPA after manual release/renew = the DHCP DISCOVER broadcast from the client got no response. Investigate: (1) Is the DHCP server running? (2) Is there a DHCP relay if the server is on a different subnet? (3) Is the scope exhausted? (4) Is the switch port in the correct VLAN?"
  },
  {
    "id": "z5-n5-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 5.5,
    "question": "Certificate errors start appearing on all domain-joined Windows computers exactly 12 hours after an NTP server went offline. Why?",
    "options": [
      "NTP outage caused the firewall rules to expire",
      "Clock skew exceeded 5 minutes \u2014 Kerberos authentication is failing, causing certificate validation to fail as domain auth is required",
      "The CA certificate expired simultaneously",
      "DNS stopped resolving the certificate server"
    ],
    "correct_index": 1,
    "explanation": "Without NTP, Windows clocks drift. After sufficient drift (>5 minutes from domain time), Kerberos authentication fails \u2014 domain computers cannot authenticate to domain controllers. Many certificate operations (OCSP, CRL, TLS auth) depend on successful domain authentication. Fixing NTP and resyncing time resolves the cascade."
  },
  {
    "id": "z5-g-001",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "What is Step 1 of CompTIA's troubleshooting methodology?",
    "options": [
      "Implement the solution",
      "Document findings",
      "Identify the problem",
      "Test the theory"
    ],
    "correct_index": 2,
    "explanation": "Step 1: Identify the problem \u2014 gather info, identify symptoms, reproduce the issue, ask what changed. Never skip this: understanding the problem before theorising prevents wasted effort."
  },
  {
    "id": "z5-g-002",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A host shows IP 169.254.12.5. What does this mean and what should you check first?",
    "options": [
      "Valid static IP \u2014 check routing table",
      "APIPA \u2014 DHCP failed. Check DHCP server status and scope availability.",
      "IPv6 link-local \u2014 check IPv6 config",
      "Subnet is exhausted \u2014 check all addresses"
    ],
    "correct_index": 1,
    "explanation": "169.254.x.x = APIPA. The host connected to the network but received no DHCP response. Check: DHCP server running? Scope has addresses? Relay configured if server is on another subnet? Switch VLAN correct?"
  },
  {
    "id": "z5-g-003",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "An OTDR is the correct tool for which task?",
    "options": [
      "Testing copper patch cable continuity",
      "Locating a break in a fiber optic cable and measuring distance to the fault",
      "Tracing an unlabelled cable through a wall",
      "Scanning for open ports on a server"
    ],
    "correct_index": 1,
    "explanation": "OTDR sends a light pulse into fiber, measures backscattered reflections, and reports: exact distance to breaks, splice quality, connector loss, and total end-to-end loss. Essential for fiber troubleshooting."
  },
  {
    "id": "z5-g-004",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A user can ping 8.8.8.8 but cannot browse websites. nslookup returns NXDOMAIN for all queries. What is the problem?",
    "options": [
      "Default gateway is wrong",
      "DNS \u2014 the hostname being looked up doesn't exist in DNS (or wrong DNS server configured)",
      "IP routing is broken",
      "TLS certificate error"
    ],
    "correct_index": 1,
    "explanation": "Ping 8.8.8.8 works = IP routing fine. NXDOMAIN from nslookup = DNS can reach the server but no record exists for that name, OR the wrong DNS server is queried. Check: ipconfig /all to see DNS server, verify it's correct, check the DNS record exists."
  },
  {
    "id": "z5-g-005",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "Traceroute shows * * * at hop 5 but hop 6 responds normally. What does this mean?",
    "options": [
      "Hop 5 is down \u2014 traffic is being rerouted around it",
      "Hop 5 does not respond to ICMP TTL-exceeded messages \u2014 traffic is still flowing through it",
      "Hop 5 has packet loss",
      "There is a routing loop at hop 5"
    ],
    "correct_index": 1,
    "explanation": "* * * = no ICMP TTL-exceeded response received \u2014 the router likely rate-limits or drops these messages. Since hop 6 responds, traffic IS passing through hop 5 \u2014 it's not down. This is normal for many ISP routers."
  },
  {
    "id": "z5-g-006",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "After implementing a fix, what MUST you do before documenting?",
    "options": [
      "Escalate to confirm the fix is approved",
      "Verify full system functionality AND check for side effects from the change",
      "Restart all affected services",
      "Notify the CAB of the change"
    ],
    "correct_index": 1,
    "explanation": "Step 6: Verify full system functionality. Confirm the original problem is resolved AND that the fix didn't break anything else. Only after successful verification should you proceed to Step 7 (documentation)."
  },
  {
    "id": "z5-g-007",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "T568A and T568B differ because:",
    "options": [
      "They use different cable categories (Cat5e vs Cat6)",
      "The orange and green wire pairs are swapped between the two standards",
      "T568A uses 4 pairs; T568B uses 2 pairs",
      "They specify different maximum cable lengths"
    ],
    "correct_index": 1,
    "explanation": "T568A and T568B only differ in that orange (pins 1,2) and green (pins 3,6) pairs are swapped. Both are valid EIA/TIA standards. A cable with T568A on one end and T568B on the other = crossover cable."
  },
  {
    "id": "z5-g-008",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "NTP failure causes Kerberos authentication to fail. Why?",
    "options": [
      "NTP is required for DHCP leases to remain valid",
      "Kerberos requires all domain clocks to be within 5 minutes of each other \u2014 time skew beyond that causes authentication rejection",
      "NTP provides the encryption keys for Kerberos tickets",
      "NTP failure causes DNS records to expire"
    ],
    "correct_index": 1,
    "explanation": "Kerberos tickets include timestamps and have a 5-minute clock skew tolerance (configurable but default is 5 min). If a client's clock drifts more than 5 minutes from the KDC (domain controller), ticket validation fails \u2014 authentication rejected. NTP keeps all clocks synchronised. NTP uses UDP 123."
  },
  {
    "id": "z5-g-009",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A cable passes continuity testing but has high errors at Gigabit speed. The most likely cause is:",
    "options": [
      "Cable too long for Cat6",
      "Split pair \u2014 wires from different pairs twisted together cause crosstalk that passes continuity but fails at high speeds",
      "Open circuit on pair 4",
      "Wrong connector type (RJ45 vs RJ11)"
    ],
    "correct_index": 1,
    "explanation": "Split pairs pass a basic continuity test (all 8 pins connected) but fail performance tests. Untwisted wires from mismatched pairs create high NEXT (Near-End CrossTalk) that corrupts Gigabit signals. Only a proper wire map tester with pair identification catches this."
  },
  {
    "id": "z5-g-010",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "Two hosts on the same subnet have the same static IP. What symptom will be observed?",
    "options": [
      "The switch disables both ports",
      "Intermittent connectivity for both hosts \u2014 ARP replies from both confuse other devices about which MAC owns that IP",
      "One host takes priority and the other is completely blocked",
      "Both hosts share the same MAC address"
    ],
    "correct_index": 1,
    "explanation": "Duplicate IP \u2192 ARP conflict: both machines respond to ARP requests for the same IP. Other hosts' ARP caches flip between both MACs. Traffic intended for the IP gets delivered to whichever machine won the last ARP race \u2014 intermittent for both. OS-level ARP conflict warnings may appear."
  },
  {
    "id": "z5-g-011",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "Which Windows command clears the local DNS resolver cache?",
    "options": [
      "arp -d",
      "netstat -f",
      "ipconfig /flushdns",
      "route delete"
    ],
    "correct_index": 2,
    "explanation": "ipconfig /flushdns clears the Windows DNS resolver cache \u2014 forces the host to re-query DNS for all future hostname lookups. Use when: DNS records have been updated but the host still resolves the old IP; stale cache entries causing wrong connections."
  },
  {
    "id": "z5-g-012",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A Cisco switch port shows 'FastEthernet0/1 is up, line protocol is down'. What does this indicate?",
    "options": [
      "Physical cable is disconnected",
      "Physical signal detected (Layer 1 up) but Layer 2 protocol not establishing \u2014 likely duplex mismatch, encapsulation mismatch, or remote end issue",
      "The port is in spanning tree blocking state",
      "VLAN is not configured on the port"
    ],
    "correct_index": 1,
    "explanation": "'Line up' = carrier detected on the wire (Layer 1 working). 'Protocol down' = Layer 2 keepalives failing. Common causes: duplex mismatch (FD vs HD), encapsulation mismatch on WAN links, remote device with 'shutdown' command, or keepalive timer mismatch."
  },
  {
    "id": "z5-g-013",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "Wi-Fi disconnects whenever a microwave is used nearby. The permanent fix is:",
    "options": [
      "Reboot the AP when it happens",
      "Replace the microwave",
      "Move the client to a 5 GHz SSID \u2014 5 GHz is not affected by 2.4 GHz microwave interference",
      "Set the AP channel to 14"
    ],
    "correct_index": 2,
    "explanation": "5 GHz (802.11ac/n) is completely outside the microwave oven's 2.4 GHz interference band. Moving clients to 5 GHz permanently solves this. Channel 14 is illegal in most countries and doesn't solve the interference."
  },
  {
    "id": "z5-g-014",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A user can reach local hosts but nothing beyond the gateway. show ip route on the gateway router shows no default route. What is the fix?",
    "options": [
      "Add a DNS server entry",
      "Add a default route (0.0.0.0/0) pointing to the ISP router",
      "Enable NAT on the router",
      "Expand the DHCP scope"
    ],
    "correct_index": 1,
    "explanation": "Without a default route (0.0.0.0/0), the router drops all packets destined for unknown networks. 'ip route 0.0.0.0 0.0.0.0 [ISP-gateway-IP]' adds the default route \u2014 all non-local traffic is forwarded to the ISP for internet routing."
  },
  {
    "id": "z5-g-015",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "DHCP scope exhaustion occurs when:",
    "options": [
      "The DHCP server's disk is full",
      "All IP addresses in the DHCP pool are currently leased \u2014 no IPs available for new devices",
      "The DHCP relay agent is unreachable",
      "The default gateway IP is wrong"
    ],
    "correct_index": 1,
    "explanation": "DHCP scope exhaustion: every address in the configured range is assigned to a current or stale lease. New devices send DHCPDISCOVER but receive no DHCPOFFER. Fix: expand the scope, reduce lease duration, remove stale leases, or add address exclusions for static devices."
  },
  {
    "id": "z5-g-016",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "netstat -an on a server shows port 443 NOT in the LISTENING state. Users cannot reach the HTTPS website hosted on this server. What does this tell you?",
    "options": [
      "The firewall is blocking port 443 inbound",
      "The web server process is not running \u2014 it has not bound to port 443",
      "The SSL certificate is expired",
      "The DNS record points to the wrong IP"
    ],
    "correct_index": 1,
    "explanation": "If port 443 is not in LISTENING state, the web server software is not running or failed to bind to the port. The service must be started first. A firewall block would show the port listening on the server but not reachable from outside \u2014 very different from no listener at all."
  },
  {
    "id": "z5-g-017",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "The toner probe (fox and hound) is used to:",
    "options": [
      "Measure optical signal loss in fiber",
      "Inject an audio tone and trace an unlabelled cable through walls and bundles",
      "Test a switch port's send/receive hardware",
      "Certify Cat6A cable to 10GbE standards"
    ],
    "correct_index": 1,
    "explanation": "Fox and hound: tone generator at one end injects an audible signal; the probe detects it at the other end. Used to identify and trace unlabelled cables through walls, ceilings, conduits, and patch panel bundles without disrupting service."
  },
  {
    "id": "z5-g-018",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A user has a static IP configured but it's within the DHCP range. Another device gets assigned the same IP. What is the correct fix?",
    "options": [
      "Delete the static IP from the workstation",
      "Exclude the static IP from the DHCP scope using a DHCP exclusion range",
      "Change the DHCP scope to a different subnet",
      "Enable DHCP snooping on the switch"
    ],
    "correct_index": 1,
    "explanation": "The DHCP server is unaware of manual static assignments. Configure a DHCP exclusion range to exclude all static IPs from the DHCP pool \u2014 the server will never assign those addresses dynamically. Best practice: reserve a block (e.g., .1\u2013.20) for static assignments and start DHCP scope at .21."
  },
  {
    "id": "z5-g-019",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "In the bottom-up OSI troubleshooting approach, you confirm Layer 1 (cable connected, link lights on) and Layer 2 (switch shows port up, MAC learned). Ping to gateway fails. Which layer is suspect?",
    "options": [
      "Layer 1 \u2014 check cable again",
      "Layer 2 \u2014 check MAC table",
      "Layer 3 \u2014 check IP address, subnet mask, default gateway configuration",
      "Layer 7 \u2014 check application firewall"
    ],
    "correct_index": 2,
    "explanation": "Layer 1 and 2 confirmed OK. Ping to gateway fails = Layer 3 issue. Most likely: wrong IP address, wrong subnet mask (places gateway in different network), or wrong default gateway IP configured on the host. Run ipconfig /all and verify each value."
  },
  {
    "id": "z5-g-020",
    "zone": 5,
    "domain": "Network Troubleshooting",
    "node": 0,
    "question": "A LWAP stops working after a WLC failover. The backup WLC has a different IP. What must be configured for the APs to find the backup WLC?",
    "options": [
      "Update the AP firmware manually",
      "Configure DHCP option 43 with the backup WLC IP, or configure the AP with the backup WLC IP directly \u2014 APs need to know where to find the WLC",
      "Add the AP SSID to the backup WLC manually",
      "Reconfigure all 802.1X certificates"
    ],
    "correct_index": 1,
    "explanation": "LWAPs discover the WLC via: DHCP option 43 (WLC IP), DNS lookup (CISCO-CAPWAP-CONTROLLER), or direct configuration. After WLC failover to a different IP, APs need to find the new WLC. Configure DHCP option 43 to list the backup WLC IP, or use WLC HA to maintain the same management IP."
  }
];
