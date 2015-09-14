# How to add a team member to GitLab’s team page


## Add your picture
Note: in some of these steps, your
[shell](http://doc.gitlab.com/ce/gitlab-basics/start-using-git.html) will
require you to add your gitlab.com username and password. Also, make sure
that you've already [created your SSH
keys](http://doc.gitlab.com/ce/gitlab-basics/create-your-ssh-keys.html) for
GitLab.com.

The first thing you should do is find the picture that you’d like to add to
our [team page](https://about.gitlab.com/team/) and then follow the "[how
to add an image](http://doc.gitlab.com/ce/gitlab-basics/add-image.html)"
steps. Any photo that you provide will be made black-and-white
automatically after you add it, but it must be square.

## Add yourself to the Team page

1. Log in to [GitLab.com](https://gitlab.com).

1. Go to the project
[www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com). If you
don't have access to this project yet, please ask your manager to grant you
access.

1. On the left side of your screen, click on "Files".

1. Find the dropdown menu at the top of your screen and find the branch
that you previously created to add your picture (they are in alphabetical
order). If you don't have a branch yet, follow the steps to [create a new
branch](http://doc.gitlab.com/ce/gitlab-basics/create-branch.html).
![dropdown menu](source/images/dropdown-branch-teampage.jpg)

1. Find the file where the [Team page](https://about.gitlab.com/team/) is
located, by clicking on each of the following files: source/ team/
index.html.

1. When you are in “index.html”, click on “edit” on the top right side of
your screen.

1. Your information should be added after the last person on the team page.
You need to copy and paste the following format and fill in your own
information:

```
- name: Linus Torvalds
  role: developer
  picture: picture_linus.jpg
  twitter: Linus_Torvalds
  gitlab: linustorvalds
  story:  |
          Linus was the principal force behind the development of the Linux
          kernel that became the most popular kernel for operating systems.
          He later became the chief architect of the Linux kernel and now
          acts as the project's coordinator. He also created the
          distributed revision control system git. He joined when it was
          created.
```
Don't forget to use other team members' information as a reference and to
respect the spaces between lines. Please don't use "tab" because it will brake the page format.

* After you added your information, add a comment to your commit and click
on “Commit Changes”.

* Create a [Merge
Request](http://doc.gitlab.com/ce/gitlab-basics/add-merge-request.html) and
assign it to your manager for review.
