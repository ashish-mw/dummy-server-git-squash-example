# Squashing commits in git

The purpose of this exercise is to squash multiple commits
into one single commit. Making it easy to do rollbacks if need be :)

## The flow

```
$ git checkout develop
$ git checkout -b my-feature-branch
$ # do stuff 1. in app.js
$ git add -A
$ git commit -m "wip: change return to Hello World!"
$ # do stuff 2. in app.js
$ git add -A
$ git commit -m "wip: use a port variable instead of hard coding 4567"
```

- Create a branch from `develop` and name it your feature branch.
- Open `app.js` and look for markers in comments `-> 1.` and `-> 2.`
- Do just `-> 1.` first and then make a commit.
- Then do `-> 2.` and make a commit.
- Now if we take a look at our commit history, we can see something like this

```
(my-feature-branch)$ git ls
* 873255f (HEAD ->  my-feature-branch) wip: use a port variable instead of hard coding 4567
* 6576598 wip: change return to Hello World!
* 6556841 (origin/develop, develop) update readme and app.js for tutorial
* 8fbf12b (origin/main, main) initial commit
```

- `ls` command in git is something I have in my `~/.gitconfig` file. Get it
[from the handbook](https://handbook.mediwavedigital.com/tools/#git)
- `6556841` is the last good commit that we dont want to change
```
(my-feature-branch)$ git rebase -i 6556841
```
- This will open up vim or nano or your configured editor. It could look
something like this
```
# This is a combination of 2 commits.
# This is the 1st commit message:

wip: change return to Hello World!

# This is the commit message #2:

wip: use a port variable instead of hard coding 4567

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu Aug 25 14:31:37 2022 +0530
#
# interactive rebase in progress; onto 6556841
# Last commands done (2 commands done):
#    pick 6576598 wip: change return to Hello World!
#    squash 873255f wip: use a port variable instead of hard coding 4567
# No commands remaining.
# You are currently rebasing branch 'my-feature-branch' on '6556841'.
#
# Changes to be committed:
#	modified:   app.js
#
```
- We can remove the content to say just this
```
cleanup app.js

- change to hello world!
- change port to use a variable

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Thu Aug 25 14:31:37 2022 +0530
#
# interactive rebase in progress; onto 6556841
# Last commands done (2 commands done):
#    pick 6576598 wip: change return to Hello World!
#    squash 873255f wip: use a port variable instead of hard coding 4567
# No commands remaining.
# You are currently rebasing branch 'my-feature-branch' on '6556841'.
#
# Changes to be committed:
#	modified:   app.js
#
```
- Save the commit message and close out from your editor.
- Now our history looks like
```
(my-feature-branch)$ g ls
* 9023b31 (HEAD -> my-feature-branch) cleanup app.js
* 6556841 (origin/develop, develop) update readme and app.js for tutorial
* 8fbf12b (origin/main, main) initial commit
```
- TADA! 2 commits merged into one.
- Now if we go back to merge our feature branch into `develop`, we'd get
a nice commit message pre-filled :)
