# Deploying 

Install s3cmd (`brew install s3cmd` or `sudo apt-get install s3cmd`) and
configure it with credentials which have full access to s3://www.gitlab.com.
Then run `rake sync`.

If you want to use an s3cfg-file other than ~/.s3cfg, run the task as `rake sync[/my/s3cfg]`.
