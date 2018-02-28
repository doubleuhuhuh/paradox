# Crescendo Toolkit [cc-toolkit]

## Get started
- yarn add https://bitbucket.org/trillitech/toolkit.git -save  OR npm i https://bitbucket.org/trillitech/toolkit.git -save
- Include js modules using cc-toolkit/js/[module-name]. Using AMD would look like 

```
#!javascript
define(['cc-toolkit/js/page'], function(){})
```

- Include scss modules using ~cc-toolkit/scss/[module-name].  
```
#!scss
@import '~cc-toolkit/scss/form';
```


## Tools
- node
- yarn
- gulp
- webpack

## TODO
- base file (main file / imports )
- variables
- forms
- buttons
- type ( fonts )
- reset
- grid


## Recommended modules for your needs
- jquery : https://www.npmjs.com/package/jquery
- js-cookie : https://www.npmjs.com/package/js-cookie - working with cookies
- ismobilejs : https://www.npmjs.com/package/ismobilejs - mobile testing
- store2 : https://www.npmjs.com/package/store2 - Local/Session storage
- google-maps : https://www.npmjs.com/package/google-maps - Async loading of google maps
- extend : https://www.npmjs.com/package/extend - object extend 

## untested
- urljs - get and set hash variables : https://www.npmjs.com/package/urljs  
- slugify2 : https://www.npmjs.com/package/slugify2



## Development
To develop you will need to clone this repo and https://bitbucket.org/trillitech/frontend-toolkit. The then make a yarn link of the local cc-toolkit repo to use in the frontend-toolkit repo. Steps to do this.

```
#!terminal
$ git clone git@bitbucket.org:trillitech/toolkit.git
$ cd toolkit
$ yarn
$ gulp
$ yarn link
$ cd ../
$ hg clone https://bitbucket.org/trillitech/frontend-toolkit
$ cd frontend-toolkit
$ yarn
$ yarn link cc-toolkit
$ gulp ( or gulp server )
```