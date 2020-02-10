## click-outside

This is a demo for adding click-outside interactions to close a dropdown by using refs. This demonstrates:

* How to use an onClick method to toggle the dropdown div via a component’s state
* How to use refs with SPFx
* How to use refs with event listeners for click outside functionality
* How to use callback functions to allow a component to affect its parent’s state

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp serve
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp serve 
gulp bundle
gulp bundle --ship
gulp package-solution
gulp package-solution --ship
