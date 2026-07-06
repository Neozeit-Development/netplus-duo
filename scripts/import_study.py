"""Import study guide content from network-rpg study-N.json + zone-N.json files
into static/study_content.js.

Builds a domain -> objective (node) -> study items tree for the in-app Study
Guide screen: each domain corresponds to one official CompTIA Network+
(N10-009) exam domain, each objective corresponds to one exam sub-objective
(e.g. 1.1, 1.2, ...), and each item is a table/mnemonic/concept/list card.
"""
import json
from pathlib import Path

CONTENT_DIR = Path("/mnt/more-extra/Repos/network-rpg/content")
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "static" / "study_content.js"
FRONTEND_DATA = Path(__file__).resolve().parent.parent / "frontend" / "src" / "data" / "study_content.json"
ZONE_NUMS = [1, 2, 3, 4, 5]

DOMAIN_NAMES = {
    1: "Networking Concepts",
    2: "Network Implementation",
    3: "Network Operations",
    4: "Network Security",
    5: "Network Troubleshooting",
}


def build_domain(zone_num: int) -> dict:
    zone_data = json.loads((CONTENT_DIR / f"zone-{zone_num}.json").read_text())
    study_data = json.loads((CONTENT_DIR / f"study-{zone_num}.json").read_text())

    objectives = []
    for node in zone_data.get("nodes", []):
        node_id = node["id"]
        items = study_data.get(str(node_id), [])
        objectives.append({
            "id": node_id,
            "name": node.get("name", ""),
            "description": node.get("description", ""),
            "items": items,
        })

    return {
        "zone": zone_num,
        "domain": DOMAIN_NAMES[zone_num],
        "flavorName": zone_data.get("name", ""),
        "objectives": objectives,
    }


def main():
    domains = [build_domain(z) for z in ZONE_NUMS]

    total_items = sum(len(o["items"]) for d in domains for o in d["objectives"])
    print(f"Built {len(domains)} domains, {total_items} study items")

    js_content = "const STUDY_CONTENT = " + json.dumps(domains, indent=2) + ";\n"
    OUTPUT_PATH.write_text(js_content)
    FRONTEND_DATA.parent.mkdir(parents=True, exist_ok=True)
    FRONTEND_DATA.write_text(json.dumps(domains, indent=2))
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {FRONTEND_DATA}")


if __name__ == "__main__":
    main()
