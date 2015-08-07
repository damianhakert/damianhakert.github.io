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
steps.

## Add yourself to the Team page

1. Log in to [GitLab.com](https://gitlab.com).

1. On the right side of your screen, click on the project "GitLab.com/ www-gitlab-com".

1. On the left side of your screen, click on "Files".

1. Find the dropdown menu at the top of your screen and find the branch that you previously created to add your picture (they are in alphabetical order). Click on it.

1. Find the file where the Team page is located, by clicking on each of the following files: source/ team/ index.html.

1. When you are in “index.html”, click on “edit” on the top right side of your screen.

1. Your information should be added in HTML, after the last person on the team page. You need to copy and paste one of the following 2 examples into the correct space. Where it is in capital letters, you need to fill in your own information:

#### Example 1: if you should be added next to somebody else on the [team page](https://about.gitlab.com/team/) :
```
     <div class="col-md-4 member">
        <img src="../images/team/`NAME OF YOUR PICTURE.JPG or NAME OF YOUR PICTURE.PNG`" alt="`YOUR NAME`" width="200" height="200" />
        <h3>`YOUR NAME`</h3><h4>`YOUR JOB POSITION`</h4>
        <div class="social">
          <a href="https://twitter.com/`YOUR TWITTER ACCOUNT`">Twitter</a>
          <a href="https://gitlab.com/u/`YOUR GITLAB USER NAME`">GitLab</a>
        </div>
        <p>
          `ADD YOUR DESCRIPTION HERE`
        </p>
      </div>
```
#### Example 2: if you need to start a new line to add yourself on the [team page](https://about.gitlab.com/team/):
```
 </div>

    <div class="row">

<div class="col-md-4 member">
        <img src="../images/team/`NAME OF YOUR PICTURE.JPG or NAME OF YOUR PICTURE.PNG`" alt="`YOUR NAME`" width="200" height="200" />
        <h3>`YOUR NAME`</h3><h4>`YOUR JOB POSITION`</h4>
        <div class="social">
          <a href="https://twitter.com/`YOUR TWITTER ACCOUNT`">Twitter</a>
          <a href="https://gitlab.com/u/`YOUR GITLAB USER NAME`">GitLab</a>
        </div>
        <p>
          `ADD YOUR DESCRIPTION HERE`
        </p>
      </div>
```

* After you added your information, add a comment to your commit and click on “Commit Changes”.

* Create a [Merge Request](http://doc.gitlab.com/ce/gitlab-basics/add-merge-request.html) and assign it to your manager for review.
