---
title: "How to use GitLab CI and MacStadium to build your MacOS or iOS projects"
author: Achilleas Pipinellis
author_twitter: _axil
categories: tutorial
image_title:
description: "Learn how to use GitLab CI on MacStadium's mini servers to build your iOS projects."
twitter_image:
---



<!-- more -->

{::options parse_block_html="true" /}

## Create a MacStadium account

## Choose a mac mini plan

## Connect to the mac mini

There are two ways connecting to your mac mini: VNC and SSH.

### Connect with VNC

There are many VNC solutions

- [TigerVNC](http://tigervnc.org/) (Multi-platform)
- [Vinagre](https://wiki.gnome.org/Apps/Vinagre) (GNU/Linux)
- [Remmina](http://www.remmina.org/wp/) (GNU/Linux)
- [UltraVNC](http://www.uvnc.com/index.php)
- [RealVNC](https://www.realvnc.com/)

### Connect with SSH

```bash
ssh administrator@1.2.3.4
```

## Configure the user account

1. Create new user ?
1. Auto-login https://support.apple.com/en-us/HT201476

## Setup the development environment

Warning about virtual mouse
https://www.macstadium.com/faqs/#can-i-upgrade-my-mac-operating-system-from-os-x-1010-to-1011


### Install Xcode

There are two ways to install Xcode. You can either download it from Apple's
developer portal or use the App Store where you might be asked to fill in your
credit card information.

Manually downloading Xcode will save you the hassle of providing Apple with a
credit card. There is no need to store that information in the remote machine
that you will use just for building apps.

<i class="fa fa-info-circle" aria-hidden="true" style="color: rgb(49, 112, 143);"></i>
At the time of this writing, the latest macOS version that came with the
mac mini is macOS 10.11 El Capitan. Thus, we are gonna use Xcode 7.3.1, but you
are free to update to the latest macOS and Xcode tools.
{: .alert .alert-info}

1. Go to <https://developer.apple.com/download/more>
1. Login with your existing AppleID or create one
1. Select the Xcode version you wish to install. I opted to download the latest
   stable version.

   ![Download latest stable Xcode](images/blogimages/macstadium-post/download-xcode-without-cc-info.png)


   This should download the Xcode package in your Downloads folder and
   decompress it automatically. After 7-8 minutes it should finish.

1. Move `Xcode.app` to `/Applications` so that it can be found by Launchpad:

   ```
   mv ~/Downloads/Xcode.app /Applications
   ```

1. Double click on Xcode in order to install it. The verification will
   begin, that should take a minute.
1. Answer "Open" when you are asked if you are sure you want to open it.
1. Select "Agree" in the License Agreement and provide your administrator
   password.
1. The installation process should begin and after a while you will have Xcode
   installed and ready to be used.

In the next step we will install the command line developer tools.

### Install the command line tools


1. Open the Terminal app or run this command via SSH:

    ```bash
    xcode-select --install
    ```
1. Accept the License Agreement

## Install and configure the GitLab Runner

## Test project with CI


