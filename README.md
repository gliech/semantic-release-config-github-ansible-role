# [@gliech/semantic-release-config-github-ansible-role][1]

> **Disclaimer:** This configuration does not do much by itself and was mainly
> created so that I won't have to replace configurations in all of my
> repositories if I decide to change the way I do semantic versioning.

A shareable semantic-release config that publishes ansible roles to
[Ansible Galaxy][3]. Requires the following environment variables to publish
the role:

| Name                     | Description                                                                                                       |                                        
| :----------------------: | ----------------------------------------------------------------------------------------------------------------- |
| `ANSIBLE_GALAXY_API_KEY` | Ansible Galaxy API key that can be found at <https://galaxy.ansible.com/me/preferences>                           |
| `GITHUB_REPOSITORY`      | Name of the role repository on GitHub in the form of `owner/repo` (automatically set in GitHub Actions Workflows) |

This shareable configuration uses [@gliech/semantic-release-config-base][2],
which serves as the source for most changes to the default options for plugins
included here.

## Usage

As this module and [@gliech/semantic-release-config-base][2] contain all
necessary modules as dependencies, you only have to install this module itself.

In addition this repository provides a reusable GitHub Actions workflow that you
can use in your `.github/workflows`. 

```yaml
---
on:
  push:
name: main
jobs:
  release:
    name: test & release
    uses:
      gliech/semantic-release-config-github-ansible-role/.github/workflows/test_release.yml@v1
    secrets:
      ANSIBLE_GALAXY_API_KEY: ${{ secrets.ANSIBLE_GALAXY_API_KEY }}
```

The reusable workflow also defines 3 optional inputs:

| Name                     | Type    | Default | Description                                                                      |                                        
| :----------------------: | :-----: | :-----: | -------------------------------------------------------------------------------- |
| `semrel_config_version`  | string  | `"1.x"` | Can be used to pin the version of the npm module used                            |
| `syntax_checks`          | boolean | `true`  | Can be used to disable the yamllint and ansible-lint checks done by the workflow |
| `molecule_test`          | boolean | `true`  | Can be used to disable the molecule test done by the workflow                    |

## License

This project is licensed under the terms of the [BSD 4-Clause License](LICENSE)

[1]: https://www.npmjs.com/package/@gliech/semantic-release-config-github-ansible-role
[2]: https://www.npmjs.com/package/@gliech/semantic-release-config-base
[3]: https://galaxy.ansible.com/
