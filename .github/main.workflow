workflow "Deploy to now on tag" {
  resolves = ["GitHub Action for Zeit"]
  on = "push"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "test"
}

action "Filters for GitHub Actions-1" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["GitHub Action for npm"]
  args = "tag"
}

action "GitHub Action for Zeit" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["Filters for GitHub Actions-1"]
  secrets = ["ZEIT_TOKEN"]
  args = "--target production"
}
