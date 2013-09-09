# Development

Serve a local build on http://localhost:4000 using `bundle exec jekyll serve`.
After each change you have to restart.

# Deploying 

## s3cmd
Install s3cmd (`brew install s3cmd` or `sudo apt-get install s3cmd`) and the AWS command
line tools (`pip install awscli==0.14.1`).
Configure s3cmd with credentials which have full access to s3://www.gitlab.com and put (or link)
the `.s3cfg` file in the root of this repository. Then run `rake sync`.

## wkhtmltopdf
Download the _static_ version of wkhtmltopdf from https://code.google.com/p/wkhtmltopdf/downloads/list 
and link the executable into `bin/`.

# Staging
Run `rake stage` to create an S3 bucket for the current commit.
