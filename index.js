module.exports = {
  ...require("@gliech/semantic-release-config-base"),
  ...{
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      "@semantic-release/git",
      "@semantic-release/github",
      [
        "@semantic-release/exec",
        {
          "publishCmd": "ansible-galaxy role import --token ${process.env.ANSIBLE_GALAXY_API_KEY} --branch ${envCi.isPr ? envCi.prBranch : envCi.branch} ${process.env.GITHUB_REPOSITORY.replace('/', ' ')}"
        }
      ]
    ]
  }
}
