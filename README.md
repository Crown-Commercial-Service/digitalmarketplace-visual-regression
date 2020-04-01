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

## Updating tests
To add new test scenarios, update `config.js` under the `scenarios` key and follow the format of other entries in the list. After your updates are merged to master, the Jenkins job will run the new tests automatically (ie it pulls latest master every time the job runs). If you're updating existing scenarios to fix a test failure as part of your pipeline, you should use the pipeline popup menu to re-run visual regression tests and then approve them. If you're adding new tests, you'll probably want to run the visual regression tests directly (i.e. not as part of a release pipeline) through the Jenkins job (using 'Build with parameters') and then approve them manually as well. Make sure to review the test report before approving to check nothing else has slipped in, and ensure no-one else triggers a test run between your test and approval.

## Licence

Unless stated otherwise, the codebase is released under [the MIT License][mit].
This covers both the codebase and any sample code in the documentation.

The documentation is [&copy; Crown copyright][copyright] and available under the terms
of the [Open Government 3.0][ogl] licence.

[mit]: LICENCE
[copyright]: http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/
[ogl]: http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
