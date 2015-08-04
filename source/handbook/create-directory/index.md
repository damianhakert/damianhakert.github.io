---
layout: markdown_page
title: "How to create a directory"
---

To create a directory in your project, you need to use your [shell](http://doc.gitlab.com/ce/gitlab-basics/basic-git-commands.html). You can learn how to [start using Git on the command line](http://doc.gitlab.com/ce/gitlab-basics/start-using-git.html) and the [command line basic commands](http://doc.gitlab.com/ce/gitlab-basics/command-line-commands.html) before reading this documentation.

The following are the basic steps to create a directory through your shell (the words in capital letters are a message about what you need to add. Remember not to use capital letters):

Go into the repository or project that you'll be working on:
```
cd NAME-OF-PROJECT
```

Download the latest changes in the project, so that you work on an up-to-date copy:
```
git pull
```

Create a branch (remember you can't add spaces, you need to use a hyphen or underscore):
```
git checkout -b NAME-OF-BRANCH
```

Go into the file where you'd like to add the directory:
```
cd NAME-OF-FILE
```

Create a directory:
```
mkdir NAME-OF-YOUR-NEW-DIRECTORY
```

Go into the directory where you'd like to add information:
```
cd NAME-OF-YOUR-NEW-DIRECTORY
```

Create a README.md or index.md in directory (depends where you are creating it):
```
touch README.md
nano README.md
```

- ADD YOUR INFORMATION

#### Note:
If you created an index.md, remember to add the following information at the top of your file (README.md doesn't require this information):

---
layout: markdown_page
title: "ADD YOUR DOCUMENT'S TITLE"
---

- Press: control + X
- Type: Y
- Press: enter

Go back one directory or file:
```
cd ../
```

View the changes you've made (it's important to be aware of what's happening and what's the status of your changes):
```
git status
```

Add the changes to later commit (you'll be able to see your changes in red when you type "git status"):
```
git add PASTE-HERE-ALL-THE-INFO-THAT-IS-IN-RED
```

Check the status and you should see the name of your directory in green:
```
git status
```

Add a commit with your changes:
```
git commit -m "DESCRIBE COMMIT IN A FEW WORDS"
```

Now you can push (send) your changes (in the branch NAME-OF-BRANCH) to GitLab (the git remote named 'origin'):
```
git push origin NAME-OF-BRANCH
```
