# Digital Marketplace - Visual Regression Testing
This repo contains configuration for BackstopJS, which we run through our Jenkins CI, against our Preview environment, to detect unintended visual regressions introduced by new code merged into the Marketplace.

We currently do not commit reference images to Git history. We may do this in the future, which would allow developers to run the visual regression tests locally against the approved state of the Marketplace. 



## Setup
You'll need the DM running locally with the nginx magic applied so routes join up under http://localhost

You'll also need node installed locally.

Clone this repo and run:
`npm install`

## Running tests locally
Simply run:
`npm run test -- --configPath=config.js`

With the basic setup as supplied, this will run an initial test on your localhost.  Everything will fail because you don't have any reference screenshots.  To get some references, simply approve your test run:

`npm run approve -- --configPath=config.js`

Now you can happily change your local apps and run tests (with `npm run test`) to make sure you've not broken things!  Everytime you do a good change, simply `npm run approve` to update your reference screenshots.
