# How to add a team member to GitLab’s website step by step

## Add your picture
1. Find the picture that you’d like to add.

2. Go to your terminal and add a copy of the www-gitlab-com repository (you can find the HTTPS on the project in gitlab.com)
```
git clone `PASTE HERE THE HTTPS FROM THE WWW-GITLAB-COM REPO`
```
This will make a copy of the GitLab repository and it will be stored in your computer automatically.

3. On your computer, find where the repository’s folder is stored (as a regular file) and click on the following files:
	www-gitlab-com
	source
	images
	team
	THEN, PASTE THE PICTURE THAT YOU’D LIKE TO USE
	
4. Go back to the terminal, and add the following commands:
	To find the correct file
```
cd www-gitlab-com
cd source
cd images
cd team
Create a new branch
git checkout -b `NAME OF YOUR BRANCH`
```
	Check if your picture was correctly added to the “team” file
```
ls
```
	Check the status and you should see your picture’s name in red 
```
git status
```
    Add your changes to the branch
```
add `NAME OF YOUR PICTURE`
```
	Check the status and you should see your picture’s name in green
```		
git status
```
	Go back to the main file
```
~/www-gitlab-com
```
	Add the commit
```
git commit -m “ADD HERE THE COMMENT FOR YOUR COMMIT”
```
	Send your changes to gitlab.com
```
git push origin NAME OF YOUR BRANCH
git remote -v
```
Your picture should've been added to gitlab.com. 

## Add yourself to the team’s page
1. In gitlab.com, go to the branch that you created in your terminal
	click on the project www-gitlab-com
	click on “commits” on the left side menu
	find your branch in the dropdown menu at the top
    click on your branch 
    
2. Find the file where the team’s page is located,  clicking on each of the following: www-gitlab-com/ source/ team/ index.html

3. When you are in “index.html”, click on “edit” on the top right side of the page

4. To edit, add your information in the following way:

#### If your description should be placed next to somebody else’s on the website's page:
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
If you need to start a new line to add your description on the website's page:
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

5. Add your commit comments and click on “Commit Changes”.

6. Add a merge request and assign it to someone to review and approve it. 