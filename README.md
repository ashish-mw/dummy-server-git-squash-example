# Squashing commits in git

The purpose of this exercise is to squash multiple commits
into one single commit. Making it easy to do rollbacks if need be :)

## The flow

```
$ git checkout develop
$ git checkout -b my-feature-branch
$ # do stuff 1. in app.js
$ git add -a
$ git commit -m "wip: change return to Hello World!"
$ # do stuff 2. in app.js
$ git add -a
$ git commit -m "wip: use a port variable instead of hard coding 4567"
```

- Create a branch from `develop` and name it your feature branch.
- Open `app.js` and look for markers in comments `-> 1.` and `-> 2.`
- Do just `-> 1.` first and then make a commit.
- Then do `-> 2.` and make a commit.