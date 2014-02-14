# Deploying

```
git remote add deploy deploy@blue-moon.gitlap.com:~/www-gitlab-com.git
git push deploy master
```

# Development

Serve a local build on http://localhost:4000 using:

bundle exec jekyll serve --watch

# Deployment setup
Set up a build server with a bare repository and the hook in `_support/hooks`.
Install site and PDF build dependencies `sudo apt-get texlive-latex-recommended ruby1.9.1-dev ruby1.9.1`

Unfortunately, the pandoc version that ships with Ubuntu 12.04 is too old, so we have to build from source.

```
sudo apt-get install haskell-platform
sudo su - deploy # become the user who performs the build
cabal update
cabal install pandoc # takes a while
```

Copy `_support/user/bash_profile` to `~deploy/.bash_profile` to make sure the build script picks up the pandoc executable.
