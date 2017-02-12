---
layout: markdown_page
title: "Tools and Tips"
---

## Welcome to our Tools and Tips page

A lot of tools we use are described in the rest of the handbook (GitLab, Google
Docs, Google Hangouts, 1Password, etc.). This section is for tools that don't
fit anywhere else.

### Google Slides templates

Use these [GitLab branded slide templates](https://drive.google.com/drive/folders/0B6i7Xg1yiB8teTdIT21pWHYwYms?usp=sharing) when creating slide decks for internal or external use.

### Calendly

[Calendly](https://calendly.com/) connects to your Google calendar so people can book a time with you without having a Google Account.

1. Set up a [Calendly](https://calendly.com/) account
1. Link it to your GitLab Google Calendar to make it possible for people to schedule a call with you
1. All meetings will have the same Google Hangout URL on your calendar based on your @gitlab.com email handle. You can use that in the booking text above. Events on your calendar will automatically have the Google Hangout URL added, so you can use [the plus landing page](https://plus.google.com/hangouts/_/gitlab.com) to quickly jump into the call. Please note that the appointment will show up in other peoples calendar with a different link, to it is essential that you set a text with the link for your time slot as specified below.
1. Set up the 45 minute time slot with the following event description text (replacing XXXXX with your @gitlab.com handle):

    > This will be a Google Hangout at https://plus.google.com/hangouts/_/gitlab.com/XXXXX
    >
    > Question? Please email me. GitLab Primer: https://about.gitlab.com/primer/

1. If you intend to use any of the other event types, make sure to add this to their event descriptions as well.
1. For people outside of GitLab Inc, send them your Calendly link that links directly to the 45 minute time slot: "Are any of the times on https://calendly.com/XXXXX/45min/ convenient for you? If so please book one, if not please let me know what times are good for you and we'll find an alternative."
1. Update your availability on [Calendy Event Types](https://calendly.com/event_types/)
1. Add your Calendly link to your [Slack profile](https://get.slack.help/hc/en-us/articles/204092246-Editing-your-profile). For `Display Text`, use this line: `Schedule a meeting with me!` so GitLabbers can schedule a 1:1 call with you in GitLab, by simply clicking your Calendly link in your Slack profile.

Keep in mind that unlike normal Google Calendar events, Calendly events are not automatically synchronized between both parties when changes are made.  If an event needs to be cancelled or modified, make sure to use Calendly to do so.

### Shush

[$4.99 tool for OSX](http://mizage.com/shush/) that allows you to use you fn key as a push to talk or push to mute.
Never again will you have switch window focus to Google Hangout or Zoom to speak or mute.
The icon will show the current state of your mic input (x means muted).
With a right click you can switch from push to talk to push to mute.
Don't forget to unblock your mic in Zoom/Google Hangouts immediately after joining.
Be warned that page up with fn+down arrow will activate it.
Use space for page down instead of fn+up arrow.

#### Shush alternative for Linux

If you use Linux (eg; [Arch](https://www.archlinux.org/), [Ubuntu](https://www.ubuntu.com/) or [Fedora](https://getfedora.org/)) then you can create system-wide keyboard shortcut to mute/unmute your mic.
Please note that it only works for Linux distributions which use [ALSA](http://alsa-project.org/main/index.php/Main_Page) system for sounds (most popular Linux distributions use ALSA). All you need to do is go to your desktop environment's _Keyboard Settings_ and create a custom shortcut with command `amixer set Capture toggle` and assign a key combination of your choice (eg; `Pause Break` key). Once this is done, you can mute/unmute your mic using the assigned keyboard shortcut while you're in any application. Refer to this original answer on [Askubuntu](http://askubuntu.com/a/13364/12242) to learn more.

### Disabling OS X Notification Center

During a presentation or screen share, you might want to disable your notifications on OS X to prevent distractions or possible embarrassment.

The Notification Center can be quickly disabled by Option-Clicking the menu bar icon in the top right of your screen. This disables notifications until the next day. Option-Click again to re-enable immediately. Alternatively, click on the Notification Center icon, then scroll _up_ to reveal the "Do Not Disturb" toggle.

### Google Calendar

[This Chrome extension](https://chrome.google.com/webstore/detail/google-calendar-guests-mo/hjhicmeghjagaicbkmhmbbnibhbkcfdb?hl=en) will allow guests to modify calendar appointments by default.

Add a filter to remove invites responses from your inbox with the following query:

`*.ics subject:("invitation" OR "accepted" OR "rejected" OR "updated" OR "canceled event" OR "declined") when where calendar who organizer`

### Zoom

To set up a Zoom meeting, sign up for a free [basic account](https://gitlab.zoom.us/signup), and share the link for your "personal meeting room" with your participants. Note that on the Basic license, meetings are capped at 50 people, and meeting durations are capped at 40 minutes. If you need to be able to organize calls longer than 40 minutes using Zoom, contact People Ops to be granted a [Pro account](https://about.gitlab.com/handbook/people-operations/sop/#make-zoom-pro). By default, only Service Engineers and members of the Sales team are given Pro accounts during onboarding since their job routinely involves making video calls with (potential) customers.

To record the meeting set up [cloud recording](https://support.zoom.us/hc/en-us/articles/202921119-Automatic-Recording). You can also configure Zoom to save to the cloud automatically. Go to "My Meeting Settings" and find the "Recording" section, then click on "Cloud Recording".
Setting the topic of the meeting is important, otherwise all meetings will be recorded with a generic name; a folder will be created with the name of the recording on Google Drive.

### Google Cloud Platform

Please see the secure note with the name 'Google Cloud Platform' in the shared vault in 1password for the credentials.

Once in the console, you can spin up VM instances, Kubernetes clusters, etc. Please
remove any resources that you are not using, since the company is [billed
monthly](https://cloud.google.com/pricing/). If you are unable to create a
resource due to quota limits, file an issue on the [Infrastructure
Tracker](https://gitlab.com/gitlab-com/infrastructure).

### Gmail

#### Filters

It might be useful to add a Gmail filter that adds a label to any GitLab
notification email in which you are specifically mentioned, as opposed to a
notification that you received simply because you were subscribed to the issue
or merge request.

1. Search for `@your_gitlab_username` in Gmail
1. Click the down arrow on the right side of the search field
1. Click "Create filter with this search"
1. Check "Apply the label:" and select a label to add, or create a new one, such
   as "Mentioned"
1. Check "Also apply filter to matching conversations."
1. Click "Create filter"

#### Advance

If you use the archive function you normally return to your overview.
With auto-advance you can return to the next message.
Enable 'Auto-advance' in the labs section under settings.
The default setting of showing the next older message is OK.

#### Email signature

Set up an [email signature](https://support.google.com/mail/answer/8395) which includes your full name and job title so people can quickly know what you do.

### Hangouts

In Chrome, Hangouts tends to consume 100% of CPU due to use of the vp9 codec.
On MacOS switching to Safari solves this since it will use h264 that is hardware accelerated.
On all platforms suffering from less than stellar performance, investigate the
[h264ify](https://github.com/erkserkserks/h264ify) extension on the
[Chrome Web Store](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal).

### Hangouts on air

Hangouts on Air probably only works with a maximum of 15 people for scheduled calls (same limit as normal Google Hangouts).

Potential problem: even when I logged in as GitLab and got the bar below the call, I could not switch it too on-air!
I did notice that the time was not properly set (anymore?).
I did a test event before and that seemed to work OK.
I'll try one more time to see if it works.

Potential problem 2: the video showed up as listed by default

Go to [My live events on YouTube](https://www.youtube.com/my_live_events) and switch to the GitLab account on the top right (you need to be a manager of our YouTube channel).

Go to => life streaming => events and create a new one with the attributes:

- type => quick (using Google Hangouts on Air)
- advanced: promotions: disable both checkboxes
- time needs to be set correctly

The view on watch page URL only allows for people to watch it.
Window that pops up when you press the start hangout on air button has the proper URL that you can send to other people and/or add it to the calendar invite, it is structured like: https://plus.google.com/hangouts/_/ytl/LONGHASH.
When people join the event they have to [accept a warning](https://gitlab.com/snippets/16245).

[Completed live events](https://www.youtube.com/my_live_events?filter=completed) will show the video and you can click the image to view it.
You can use actions to make it public here

BTW Trying to set this up via Google+ via [Hangouts on Air](https://support.google.com/plus/answer/7126353?hl=en) instead of via YouTube doesn't seem to connect to the right YouTube channel, even if you selected the right account on the top right.

### Appear.in

[Appear.in](https://appear.in/) allows you to instantly create a free video chat room for up to 8 participants with no login and no installation. It also offers a free reliable mobile video conference app.

### One Tab

[One Tab (Free)](https://www.one-tab.com/) tames tabs into a list which can be sorted and exported.

### Quitter

[Quitter (Free)](https://marco.org/apps) will switch off apps for you after some period of inactivity. Consider using this to hide Slack after a while to reduce your urge to check new messages all the time.

### TripMode

[TripMode ($7.99)](https://www.tripmode.ch/) lets you control which apps can use the internet. Especially useful when you're working on a cellular/metered connection.

### Check which process occupies a given port

When the GitLab Development Kit cannot start using the `./run` command and
Unicorn terminates because port 3000 is already in use, you will have to check
what process is using it. Running `sudo lsof -i -n -P | grep TCP | grep 3000`
will yield the offender so this process can be killed. It might be wise to alias
this command in your `.bash_profile` or equivalent for your shell.

### Shell aliases

Use command aliases in your shell to speed up your workflow. Take a look at [these aliases](https://gitlab.com/sytses/dotfiles/blob/master/zsh/aliases.zsh) and others in [Sid's dotfiles project](https://gitlab.com/sytses/dotfiles/tree/master). For example, by adding the following to your `.bash_profile` or equivalent for your shell, you can just type <kbd>s</kbd> to checkout the `master` branch of this website, pull the latest changes, and open the repository in Sublime Text:

```sh
alias gco='git checkout'
alias gl='git pull --prune'
alias gca='git commit -a'
alias gp='git push origin HEAD'
alias www='cd ~/Dropbox/Repos/www-gitlab-com/source'
alias s='www;subl .;gco master;gl'
```

After editing, you can just type <kbd>gca</kbd> to commit all of your changes, followed by <kbd>gp</kbd> to push them to the remote branch.

### MobileDay

If you install [MobileDay (Free)](https://mobileday.com/) on your phone and give it access to your Google Calendar it can dial into conference calls for you. It is very good at detecting the number and password from the calendar invite.

### Keeping You Awake

[Keeping You Awake (Free & Open Source)](https://github.com/newmarcel/KeepingYouAwake) is a macOS utility application that can prevent your Mac from entering sleep mode for a predefined duration or as long as it is activated.

### Enable screen lock on your mac menu bar

1. Open up the `Keychain Access` application
2. In the menu bar (next to the apple logo), click on `Keychain Access`
3. Click on `Preferences`
4. Check the box `Show keychain status in menu bar`
5. The lock icon should now show up on your menu bar

You can lock your screen by clicking the lock icon on the menu bar and clicking `Lock Screen`

### Visual help to differentiate between GitLab servers

If you are working on multiple GitLab instances and want to have a visual differentiation, you can change the default [Application theme](http://docs.gitlab.com/ce/profile/preferences.html#application-theme) to a different color.

### How to change your username at GitLab.com

- Starting point: let's say your username is `old-mary` and you want it
to be just `mary`.
- **Note:** each GitLab account is tracked by an **userID**, which is a number stored in
a database. If we change the username, the userID does not change. And all the
permissions, issues, MRs, and relevant stuff within GitLab are related to your
**userID**, not with your username.
- **Note:** if you are not a GitLab Team member, the same process applies; except
your e-mail ([STEP 2](#change-username-step-2)), which will be different
(will not be @gitlab.com email), so you can replace it with your own email account.

**STEP 1: Request your new username**

- Access the username you want to request via `https://gitlab.com/u/mary`.
- Check it's activity, projects, to see if he/she is an inactive -
[according to the handbook](/handbook/support/policies/#dormant-usernames).
- Send your request to `support@gitlab.com`, explaining the reasons why
you need that username.
- There's no guarantee that the username will be available for you. Please
check the [handbook guidelines for dormant usernames](/handbook/support/policies/#dormant-usernames).

**STEP 2: Create a new account with your new username**
{: #change-username-step-2}

- If support replies to you telling that the username is free to use, create a new
GitLab.com account with it. Use a personal email to register your new account and
choose one that has not been used with your old GitLab account.
- Navigate to your [**Profile Settings** > **Emails**](https://gitlab.com/profile/emails),
and add a new email. ⭐️ **Trick** ⭐️ If your email at GitLab is `mary@gitlab.com`,
add the new email as `mary+something@gitlab.com`:
this is a [Gmail trick](https://support.google.com/mail/answer/12096?hl=en)! All
your emails sent to this alias will end up in your GitLab email account. 😃
- Navigate to <https://gitlab.com/profile/notifications> and choose the notifications
email: `mary+something@gitlab.com`.
- Open your old account in one browser and the new one in another browser
(e.g., Chrome and Firefox, or Chrome and Safari) - log in to both accounts at
the same time.

**STEP 3: Let's have some fun (kidding, this is critical!)**

- Navigate to <https://gitlab.com/profile/account> in both your accounts.
- Look for your username. This operation has to be done quickly, otherwise you are
risking to loose your awesome new username to someone else quicker than you. We
need to **swap** the usernames between both accounts, so you'll keep all your
history, your privileges, issues, and MRs assigned to you, etc.
- If you work with 2 monitors, open each browser on one monitor. If you don't,
open them in parallel, so that you can keep an eye on both at the same time.
- Rename your new username `mary` to something like `mary-1` and DO NOT click
**update username** yet. Rename your old username `old-mary` to your new
username `mary` and don't update that either. Just leave them typed into the boxes.
- Make sure you did the previous step right!
- ⚠️ **CRITICAL** ⚠️ Update the first one (`mary` to `mary-1`). Immediately, click
**update** on the other one (`old-mary` to `mary`).
- Immediately, rename the `mary-1` to your old one `old-mary` and click
**update username** again.
- Ta-Da! 🙌

**STEP 4: Move your projects (or not)**

- Now, if you have any personal projects, you might want to import them to
your new account (the one that has your old username now). To do that, in
your new account (the one with the old username), click **Create a New Project**,
give it the very same name as the original one, click **Git - add repo by url**,
and paste the `https://` url of your project there. To make things easier, make
sure all the projects you want to import are set to `public` view.  You can make
them private afterwards.
- If you have GitLab Pages projects with the default **GitLab.io** url, you will need
to import them to you new account, then make a change to **trigger a build** and
redeploy your site. They will be affected only if you're using a
[CNAME with a subdomain instead of an A record](/2016/04/07/gitlab-pages-setup/#custom-domains).
This won't affect Pages projects that use custom domains, as they all point to
the same Pages server IP via `A` record. Your groups won't be affected either,
as they operate under their own namespace. Add both users as members of your
groups and nothing changes.

That's it! Don't forget to update your username on the
[team page](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/team.yml)
and on the [Marketing Handbook](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/source/handbook/marketing/index.html.md),
in case you're a Marketing Team member.

### Do NOT Use

**Flash**: Due to security flaws, we strongly recommend _not_ using Adobe Flash. Certainly do not install it on your local machine. But even the Google Chrome plugin that let's you see embedded Flash content in websites can pose a security hazard. If you have not already, go to your [Chrome plugins](chrome://plugins) and disable Flash. For further context, note that [Google Chrome is removing Flash support soon](https://nakedsecurity.sophos.com/2016/05/18/yet-more-bad-news-for-flash-as-google-chrome-says-goodbye-sort-of/), and while the [plugin is better than a local install of Flash](http://security.stackexchange.com/questions/98117/should-flash-be-disabled-or-are-sandboxes-secure-enough), it still leaves vulnerabilities for [zero-day attacks](http://www.pctools.com/security-news/zero-day-vulnerability/).
