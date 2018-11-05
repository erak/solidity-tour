# A Tour of Solidity

Welcome to the tour of the Solidity programming language. It covers the most important features of the language.

#### Try out: https://bit-shift.github.io/solidity-tour/

It aims to be an open platform that users of the language can easily contribute to. This will allow to create the most valuable experience for new developers.

The tour is built with Hugo, a static website generator. It contains some React.js components, as well as a Solidity compiler and an EVM runtime for JavaScript.

## Ideas / Roadmap
- Developer experience through gamification (maybe a game)
- Split up into several sections:
    - Intro (only compilation)
    - Advanced (deploy to JavaScript VM and run transaction)
- Integrate Javascript EVM for transaction execution

# Contribute

## Add & edit lessons

Writing up lessons or ``steps`` is straight-forward. To get started, please fork and then clone your repository:
```
git clone --recursive git@github.com:<username>/solidity-tour.git
```

### Install Hugo

Please install Hugo following installation guide: https://gohugo.io/getting-started/installing/.

After this is done, return to the project directory and test the installation:
```
hugo server
```
The tour is now avaiable: http://localhost:1313/solidity-tour/.

### Edit content

They are stored in markdown files as part of the ``content`` directory.
```
ls content/steps
```
Lists all currently available lessons / ``steps``:

```
1.md
2.md
...
```

#### Modify an exiting step

Steps are defined in plain markdown files, that also use a front-matter to pass arguments, as well as custom Hugo-specific shortcodes. The template for steps can be found at ``archetypes/default.md``

Let's start with the first step, which can be found at ``content/steps/1.md`` (rendered version: http://localhost:1313/solidity-tour/steps/1).

##### Front-matter

Every content file starts a front-matter that contains information for the html rendering pipeline. 
```
---
title: "1"
date: 2018-11-04T03:09:05+01:00
draft: false
menu: "main"
---
```

##### Code editor

The first section is a code editor that is rendered as an instance of the ACE editor (https://ace.c9.io/):
```
{{< code >}}
pragma solidity >=0.4.0 <0.6.0;

contract  {
}
{{< / code >}}
```

##### Documentation

```
{{% docs %}}
## Contracts

Contracts in Solidity are...
{{% / docs %}}
```

The documenation should also contain some example code:
```
{{% docs %}}
## Contracts

Contracts in Solidity are...


```JavaScript
contract SimpleStorage {}
``
{{% / docs %}}
```

#### Create a new step

This can be done with the folling command. The tour defines a template (so called archetype) under ``archetypes/default.md`` that is being taken whenever a new site is generated:
```
hugo new steps/<step-id>.md
```

### See the result locally

In the project directory, start Hugo and serve the pages from memory:
```
hugo server
```
Hugo will now listen to all the changes you make to the content and refresh the page in your browser (if http://localhost:1313/solidity-tour/ is open).

### Propose changes to the tour

Do the changes look good? Great! Let's create a pull request.

First you need to commit and push the changes to your repository.
```
git checkout -b my-patch
git add content/steps/<my-patch-id>.md
git commit -m "<commit message>"
git push --set-upstream origin my-patch
```
After this is done, you can create a pull request in the main repository at https://github.com/bit-shift/solidity-tour/compare. Github provides an option to compare across forks. You can review your changes compared to the master branch and then create the pull request.

Thank you for your contribution :)


## Improve framework

### Preparations

#### Install Hugo

Please install Hugo following installation guide: https://gohugo.io/getting-started/installing/.

After this is done, return to the project directory and test the installation:
```
hugo server
```
The tour is now avaiable: http://localhost:1313/solidity-tour/.

#### Install solc-js

Get Node.js:
```
sudo dnf install npm
```

Install solc-js with npm:
```
cd themes/solidity-tour/app/
npm install solc
```

#### Install browserify
```
npm install -g browserify
```

### Build

#### Run development server

In the project directory, start Hugo and serve the pages from memory:
```
hugo server
```
Hugo will now listen to all the changes you make to the content and refresh the page in your browser (if http://localhost:1313/solidity-tour/ is open).

After changing the React component of the tour (``themes/soltour/app/index.js``), the application has to be bundled again:
```
./browserify.sh
```

This calls browserify and publishes the bundled application:
```
browserify themes/solidity-tour/app/index.js > themes/solidity-tour/static/js/bundle.js
```

Hugo also watches for the ``bundle.js`` and will reload the page after the command returned.

#### Build the tour:

Build the tour without running the development server:
```
./browserify.sh
hugo
```

### Deploy to github.io

Following theses instructions will deploy the tour to ``https://<username>.github.io/solidity-tour``.

Create a ``gh-pages`` branch for your forked repository (this has to be done only once):
```
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```
Please check in the project settings, that Github.io is picking up the content from the ``gh-pages`` branch.

Now, deploy and enjoy:
```
./deploy.sh
```