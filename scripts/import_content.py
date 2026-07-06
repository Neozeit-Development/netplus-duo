"""Import study questions from network-rpg zone JSON files into static/questions.js.

Reads zone-N.json files from the network-rpg content directory, extracts
encounters that have a question/options/correct_index (study_encounter, mob,
and zone-level guardian encounters), and writes them out as a QUESTIONS array
for the frontend, tagged with the official CompTIA Network+ domain each zone
maps to.
"""
import json
from pathlib import Path

CONTENT_DIR = Path("/mnt/more-extra/Repos/network-rpg/content")
OUTPUT_PATH = Path(__file__).resolve().parent.parent / "static" / "questions.js"
FRONTEND_DATA = Path(__file__).resolve().parent.parent / "frontend" / "src" / "data" / "questions.json"
ZONE_FILES = ["zone-1.json", "zone-2.json", "zone-3.json", "zone-4.json", "zone-5.json"]

# Official CompTIA Network+ (N10-009) exam domains, one per zone.
DOMAIN_NAMES = {
    1: "Networking Concepts",
    2: "Network Implementation",
    3: "Network Operations",
    4: "Network Security",
    5: "Network Troubleshooting",
}


def extract_questions(zone_path: Path) -> list[dict]:
    zone_data = json.loads(zone_path.read_text())
    zone_num = zone_data["zone"]
    domain_name = DOMAIN_NAMES[zone_num]
    questions = []

    for node in zone_data.get("nodes", []):
        node_id = node.get("id")
        for encounter in node.get("encounters", []):
            if encounter.get("type") not in ("study_encounter", "mob"):
                continue
            if "question" not in encounter or "options" not in encounter:
                continue

            questions.append({
                "id": encounter["id"],
                "zone": zone_num,
                "domain": domain_name,
                "node": node_id,
                "question": encounter["question"],
                "options": encounter["options"],
                "correct_index": encounter["correct_index"],
                "explanation": encounter.get("explanation", ""),
            })

    for encounter in zone_data.get("guardian_encounters", []):
        if "question" not in encounter or "options" not in encounter:
            continue
        questions.append({
            "id": encounter["id"],
            "zone": zone_num,
            "domain": domain_name,
            "node": encounter.get("node", zone_num),
            "question": encounter["question"],
            "options": encounter["options"],
            "correct_index": encounter["correct_index"],
            "explanation": encounter.get("explanation", ""),
        })

    return questions


def main():
    all_questions = []
    for filename in ZONE_FILES:
        zone_path = CONTENT_DIR / filename
        zone_questions = extract_questions(zone_path)
        print(f"{filename}: {len(zone_questions)} questions")
        all_questions.extend(zone_questions)

    print(f"Total: {len(all_questions)} questions")

    js_content = "const QUESTIONS = " + json.dumps(all_questions, indent=2) + ";\n"
    OUTPUT_PATH.write_text(js_content)
    FRONTEND_DATA.parent.mkdir(parents=True, exist_ok=True)
    FRONTEND_DATA.write_text(json.dumps(all_questions, indent=2))
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Wrote {FRONTEND_DATA}")


if __name__ == "__main__":
    main()
