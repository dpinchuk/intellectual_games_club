# WebDriver I/O v.5 from scratch

<a name="prerequisites"></a>
## 1. Prerequisites
#### 1.1. Node.js:
Install the latest Node.js **Recommended For Most Users** from
https://nodejs.org/en/
#### 1.2. Install Git:
https://git-scm.com/
#### 1.3. Install Java SE Development Kit:
https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html

===

### Additional MacOS prerequisites:
#### 1.4. Install Xcode:
https://developer.apple.com/xcode/

===

### Additional Windows prerequisites:
#### 1.5. Install Python 2.7.
https://www.python.org/downloads/release/python-2716/

===

### Optional (but desired):
#### 1.6. Install VS Code.
https://code.visualstudio.com

<a name="creating-project"></a>
## 2. Creating project
#### 2.1. Create a project folder:
First, create a folder for storing all projects, e.g. `projects`. Navigate to the created folder and create a folder for automation project. For example, `automation-webdriverio`.
#### 2.2. Initialize your project:
Open the created folder (automation-webdriverio) with VS Code, open the Terminal and tun the following code:
````
npm init -y
````
This action creates `package.json` file.

<a name="modules"></a>
## 3. Modules installation and configuration
#### 3.1. Install webDriver I/O:
````
npm i webdriverio
````
#### 3.2. Install CLI:
````
npm i @wdio/cli
````
#### 3.3. Create WebDriver I/O configuration by running:
````
./node_modules/.bin/wdio config
````
This script runs WDIO Configuration Helper which will help you to create configuration file.
Select the answers based on the following info:
1. Your tests should be launched `locally`.
2. We'll use `mocha` framework.
3. Commands should run `synchronous`.
4. Test specs are located in `./test/specs/*.js`.
5. Reporters we're going to use are `spec` and `allure`.
6. Service needed is `selenium-standalone`.
7. Base URL is `http://qa.intgames.org/`

Wait till the end of the installation process.

<a name="wdio-configuration"></a>
## 4. Update WebDriver I/O configuration:
Open configuration file `wdio.conf.js` and update the following data:
````
capabilities: [{
  maxInstances: 1,
  browserName: 'chrome',
}],
````
````
logLevel: 'silent',
````
````
 mochaOpts: {
  ui: 'bdd',
  timeout: 60000,
  compilers: ['js:@babel/register']
},
````

<a name="test-scripts"></a>
## 5. Modify test script:
Open `package.json` and modify `test` script to get the following:
````
"test": "wdio wdio.conf.js"
````

<a name="first-test"></a>
## 6. Creating the first test
#### 6.1. Create `test` folder, then `specs` folder inside and open it.
#### 6.2. Create `test.js` file and open it.
#### 6.3. Add the first test:
````
import assert from 'assert';

describe('Client', function () { //Suite

  it('Get title', function () { //Test
    browser.url('/');
    let title = browser.getTitle();
    browser.pause(2000); //Pause
    assert.equal(title, 'Intellectual Games Club');
  })

});
````

<a name="babel"></a>
## 7. Instal `Babel` to use JavaScript ES6 syntax
#### 7.1. Install necessary modules:
````
npm install @babel/core @babel/cli @babel/preset-env @babel/register
````
#### 7.2. Create and open Babel Configuration file - `babel.config.js`.
#### 7.3. Paste the following code into the file:
````
module.exports = {
  presets: [
    ['@babel/preset-env', {
        targets: {
          node: 12
        }
    }]
  ]
}
````

<a name="first-test-run"></a>
## 8. Running the first test
#### 8.1. Run the first test:
````
npm test
````
Wait until test is finished. 
You should see the message with one suite, one sub-suite, and one test passed:
````
[chrome #0-0] Client
[chrome #0-0]      ✓ Get title
[chrome #0-0]
[chrome #0-0] 1 passing (3.4s)
````

<a name="allure"></a>
## 10. Configuring Allure reporter:
#### 10.1. Configure reporter in `wdio.conf.js`:
Add the following code under `reporters: ['dot','spec','allure'],`:
````
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
````
#### 10.2. Install Allure Commandline globally:
````
npm i allure-commandline -g
````
#### 10.3. Create a script to generate and open a report:
Add the following script to `package.json`:
````
"report": "allure generate --clean && allure open"
````
#### 10.4. Create a script to clean `allure-results` folder before running a test:
Add the following script to `package.json`:
````
"clean": "rm -rf allure-results"
````
#### 10.5. Modify test script to include `clean` and `report` scripts:
Replace the test script in `package.json` by the following code:
````
"test": "npm run clean && wdio wdio.conf.js && npm run report"
````
Now your scripts should look like this:
````
"test": "npm run clean && wdio wdio.conf.js && npm run report",
"report": "allure generate --clean && allure open",
"clean": "rm -rf allure-results"
````
#### 10.6. Run `npm test` to try.
`allure-results` folder shoul be removed automatically before the test starts. Allure Report should appear once the testing finished. To kill the precess press `Ctrl+C`.

<a name="chai"></a>
## 11. Adding `chai` assertion library:
#### 11.1. Install `chai` module:
````
npm i chai
````
#### 11.2. Import new module into your files:
Replace the old assert import:
````
import assert from 'assert';
````
by new assert from chai:
````
import { assert } from 'chai';
````
Please make sure you replaced it in all the test files. Now you can use all the methods described here:
https://www.npmjs.com/package/chai


<a name="smoke"></a>
## 12. Adding Smoke suite:
#### 12.1. Go to `test` folder, create `smoke` folder, and open it:
````
cd test
mkdir smoke
cd smoke
````
#### 12.2. Create `smoke.js` file and open it:
````
touch smoke.js
open smoke.js
````
#### 12.3. Copy and paste the following code to the file:
````
import { assert } from 'chai';

describe('Login', function () {

  it('Works', function () {
    browser.url('/');
    $('#email').setValue('testreacttest@gmail.com');
    $('#pass').setValue('testTest');
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(5000);
    assert.isTrue(newBug.isDisplayed());
  })

});
````
#### 12.4. Create folder for regression testing:
Get back to `test` folder, create `reg` folder there, and move existing test files to it:
````
cd ..
mkdir reg
mv client.js reg/client.js
mv login.js reg/login.js
cd ..
````
#### 12.5. Update the configuration:
Open `wdio.conf.js` file and update the test specs including the new folder path:
````
specs: [
        './test/reg/client.js',
        './test/reg/login.js'
    ],
````
#### 12.6. Create smoke test configuration:
Copy and rename the existing Regression configuration (`wdio.conf.js`) to create a new configuration file (`smoke.conf.js`):
````
cp wdio.conf.js smoke.conf.js
````
#### 12.7. Update the configuration:
Open the new configuration file `smoke.conf.js` and provide a path to the smoke test:
````
specs: [
        './test/smoke/smoke.js'
    ],
````
#### 12.8. Create and run `smoke` script:
Open `package.json` and add `smoke` script:
````
"smoke": "npm run clean && wdio smoke.conf.js && npm run report"
````
Once done, run the test:
````
npm run smoke
````


<a name="git"></a>
## 13. Working with Git
#### 13.1. Create GitHub account:
https://github.com/join
#### 13.2. Once logged in create new repository:
https://github.com/new
Provide `Repository name` and click `Create repository`.
On the next page you have the instruction how to connect your local repo with the remote one.
#### 13.3. Initialize local git repo:
Get back to Terminal and type:
````
git init
````
#### 13.4. Create and configure `.gitignore` file:
This file is used to list all folders and files which should be ignored by Git.
````
touch .gitignore
open .gitignore
````
Add the following lines to the file:
````
node_modules
allure-results
allure-report
.git
.idea
````
#### 13.5. Add all files to Git and create first commit:
````
git add .
git commit -m "first commit"
````
#### 13.6. Add all files to Git and create first commit:
````
git add .
git commit -m "first commit"
````
#### 13.7. Connect your local git with remote GitHub repo:
Get the link from the page you get on GitHub:
````
git remote add origin {link}
````
#### 13.8. Push your local code to the remote repo:
````
git push -u origin master
````
#### 13.9. Some git commands to use:
1) List of branches:
````
git branch
````
2) Create branch:
````
git branch {name}
````
3) Delete branch:
````
git branch -D {name}
````
4) Switch to another branch:
````
git checkout {name}
````
5) Commiting changes:
````
git commit -m "commit message"
````
6) Pushing changes:
````
git push
````