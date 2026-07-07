"""Flask app for NetPlus Duo — serves the built React SPA."""
from pathlib import Path

from flask import Flask, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "frontend" / "dist"

app = Flask(__name__, static_folder=None)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path: str):
    """Serve built assets, or index.html for client-side routes."""
    if path and (DIST_DIR / path).is_file():
        return send_from_directory(DIST_DIR, path)

    index = DIST_DIR / "index.html"
    if not index.is_file():
        return (
            "Frontend not built. Run: cd frontend && npm ci && npm run build",
            503,
            {"Content-Type": "text/plain"},
        )
    return send_from_directory(DIST_DIR, "index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
