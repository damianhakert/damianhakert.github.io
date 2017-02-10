#!/bin/bash
for filename in public/comparison/pdfs/*.html; do
  pdffilename=${filename/.html/.pdf}
  echo "👉  Generating PDF for $filename..."

  wkhtmltopdf --margin-left 0 --margin-right 0 --margin-top 0 --zoom 3 $filename $pdffilename

  # remove the HTML file
  rm $filename

  echo "✅  PDF pdffilename generated!"
done
