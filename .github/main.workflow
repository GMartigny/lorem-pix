workflow "Deploy to now on tag" {
  resolves = [
    "Now deploy to prod",
    "npm publish",
  ]
  on = "push"
}

action "npm install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "npm test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
  needs = ["npm install"]
}

action "Filter only tags" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "tag"
  needs = ["npm test"]
}

action "Now deploy to prod" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  secrets = ["ZEIT_TOKEN"]
  args = "--target production"
  needs = ["Filter only tags"]
}

action "npm publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filter only tags"]
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
