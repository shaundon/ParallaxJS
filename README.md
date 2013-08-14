# ParallaxJS

A library for adding iOS 7 style parallax animations to things.

For the moment this requires jQuery and a browser that supports CSS3 transitions, but I'm working on making it plugin free.

There's a demo available at http://sdonnelly.co.uk/projects/parallax. There's also a demo of using it to make an iOS 7 home screen style effect at http://sdonnelly.co.uk/projects/parallax/ios.html. The code for both of these demos is in this repo.

## Usage

Include parallax.js and parallax.css in your page. Add the class `parallax` to an element to have the parallax effect apply to it. On devices that don't support orientation, you won't see anything happen so it's best to test using a smartphone.

### Modifiers

You can combine the `parallax` class with modifiers to change the intensity of the effect. The available ones are `more`, `less` and `subtle`.

Feel free to get in touch or submit a pull request if there's anything you feel could be added. This is more of a proof of concept right now, but it could become more in future.



