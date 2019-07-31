# Meteor 1.8.2-beta.16, import issue 10658

This repo is there to support Meteor issue: https://github.com/meteor/meteor/issues/10658

To recreate this repo from scratch:

```
meteor create ie-import-issue --release 1.8.2-beta.16 --react
cd ie-import-issue
meteor npm install ramda
meteor
```

At this point, the application starts and is fully functional in IE 11

Now, go ahead and add the following import to `/imports/ui/App.jsx`

```jsx
import { compose } from 'ramda';
```

You'll see IE turn blank.
