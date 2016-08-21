---
layout: markdown_page
title: "Making Gifs"
---

Go to the [Handbook](/handbook/)

Animated gifs are an awesome way of showing of features that need a little more than just an image, either for marketing purposes or explaining a feature in more detail. This page holds all information on the entire process of creating a gif.

### On this page
{:.no_toc}

- TOC
{:toc}


## General

> The GIF format is popular because it works everywhere and has a no-fuss UI. – [Kornel](https://kornel.ski/efficient-gifs#sec44)

Gifs are used everywhere for a reason, but as you can read in the referenced article above, they are also expensive. Expensive in that a gif can quickly become a big file, which takes longer to load. To create great looking gifs that walk the line between file size and quality, some steps need be considered.

## The Process

### Step 1

Show only what you need to. Not everything needs to be in there, its a glimpse.

### Step 2

> All my GIFs start as videos – [Invision | Andy Orsow](http://blog.invisionapp.com/7-tips-for-designing-awesome-gifs/)

Most of the time you will want to create your gifs from a video file. This can give you expert control over the output if you need it (e.g. motion blur can add additional proffesionalism). Video files will in most cases be created from a screen recording software, details can be found in the [Tools Section](#tools)

### Step 3

Reduce the amount of colors visible. You can do this either be thinking beforehand what exactly you will capture or by limiting the amount of output colors exported in the resulting gif (see options [gifify](#gifify) ). Check your result to see if it fits your needs.

Another step could be to drop duplicate frames by manually searching through all frames. For more information on this, look [here](http://blog.invisionapp.com/7-tips-for-designing-awesome-gifs/). This additional step can take a lot of time. As with anything: "Only use it if you need to".

### Step 4

Try to go for a minimum of 15 fps and see if the result is good enough with your "compress", "speed", and "resolution" settings.

## Tools

There are many different tools to record your screen or to create gifs. Use whichever tool you are comfortable with, but remember: "In order to create great looking gifs that walk the line between file size and quality a certain control over each step of [the process](#the-process) is preferred".

The *main* tools featured in this article are all free to use.

### Screen recording

#### Quicktime (OSX)

On every Mac, Quicktime has already been installed. It features a nice screen record option and even has basic trim and splitting functions in the *edit* menu! Perfect for creating those [video files](#step-1).

![quicktime gif](/handbook/product/making-gifs/quicktime.gif)

Worthy of mentioning:
- [Screeny](https://itunes.apple.com/us/app/screeny/id440991524?mt=12) (free for now)
- [Screenflow](http://www.telestream.net/screenflow/) (not free)
- [Gif Brewery](http://gifbrewery.com/) (not free)
- [licecap](http://www.cockos.com/licecap/) (free, but limited options for output, results can have bad colors)
- [ffscreencast](https://github.com/cytopia/ffscreencast) (cli tool, only capture the whole screen)

#### Camstudio (Windows)

[Camstudio](http://camstudio.org/) is a free tool. Not yet tested...

#### FFCast + FFmpeg (Linux)

[FFCast](https://github.com/lolilolicon/FFcast) is a command line tool that wraps around ffmpeg to capture screen regions in order to record it or capture it. Optionally this could be piped into gifify.

### Converting to Gif

#### Gifify (command line tool)

[Gifify](https://github.com/vvo/gifify) is a command line tool and gives you the most complete set of options in order to convert your video files to gifs. It is probably the best free tool available, with the most control.

Example command: `gifify input.mov -o output.gif --resize 960:-1 --compress 0 --colors 50 --speed 1.05 --fps 15`

#### Convert video to gif online

- [EZGif](http://ezgif.com/video-to-gif) (Pretty good results and provides some settings)
- [Giphy Gifmaker](https://giphy.com/create/gifmaker) (You can keep your GIFs private if you have an account. Otherwise: "all of your GIF are belong to GIPHY")

Worthy of mentioning:
- [Gif Brewery](http://gifbrewery.com/) (osx, not free)

## Relevant links

- [Product Handbook](/handbook/product)
