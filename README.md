I've moved the working repo for this game to https://github.com/flypup/duel-of-the-devs

This fork will stay in the state is was submitted at the end of the game off event. For more details on the work being done, check out [my blog](http://robwalch.com).

# Duel to the Devs

Play the game [here](http://flypup.github.com/game-off-2012/). It's a [gh-pages](http://pages.github.com/) branch of this repo containing just the distribution files built with [yeoman](https://github.com/yeoman).

The title and game are inspired by the 1983 kung-fu classic [Duel to the Death](http://www.youtube.com/watch?v=8utvOMioMro). We have not yet implemented all 72 techniques or 36 chambers featured in this film :expressionless: We've been expecting you!

## What We Use

* [Chipmunk-js](https://github.com/josephg/Chipmunk-js) 2D physics model
* [EaselJS](https://github.com/CreateJS/EaselJS) SpriteSheet class
* [stats.js](https://github.com/mrdoob/stats.js) guess I'm a fan of [@mrdoob](https://github.com/mrdoob)
* [dat-gui](http://code.google.com/p/dat-gui/) for testing and tuning a variety of things
* [three.js](http://threejs.org/) 3D rendering - Didn't make it into this release, but we hope to contribute or at least come up with our own sprite renderer that make it viable for HTML5 games on platforms where WebGL is not available or canvas rendering needs a boost.

## Controls

### Desktop Browser
* w-a-s-d | arrow keys to move
* space key or mouse (click/hold) to fight (push/pull)
* f key fullscreen
* p key pause
* o key toggle debug

### Gamepad API Enabled
* left stick to move
* right stick to fight (push/pull)

### Mobile (Touch Enabled)
* virtual left stick to move
* virtual right stick to fight (push/pull)
* tap upper right corner to pause
* tap upper left corner to toggle debug

![version 0.1.107](http://flypup.github.com/game-off-2012/img/ui/screenshot.jpg)

## Credits

* [@robwalch](https://github.com/robwalch) Code 
* [@flypup](http://www.behance.net/flypup) Art
* x_x Sound
