#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

for f in nat_dev_en nat_ml_en nat_designer_en; do
  echo "pdflatex $f"
  pdflatex -interaction=nonstopmode "$f.tex" >/dev/null
  pdflatex -interaction=nonstopmode "$f.tex" >/dev/null
done

for f in nat_dev nat_ml nat_designer; do
  echo "xelatex $f"
  xelatex -interaction=nonstopmode "$f.tex" >/dev/null
  xelatex -interaction=nonstopmode "$f.tex" >/dev/null
done

echo "Done."
