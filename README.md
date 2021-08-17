# [@gliech/semantic-release-config-github-ansible-role][1]

> **Disclaimer:** This configuration does not do much by itself and was mainly
> created so that I won't have to replace configurations in all of my
> repositories if I decide to change the way I do semantic versioning.

A shareable semantic-release config that publishes ansible roles to
[Ansible Galaxy][3]. Requires the following environment variables to publish
the role:

| Name                     | Description                                                                                                       |                                        
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| `ANSIBLE_GALAXY_API_KEY` | Ansible Galaxy API key that can be found at <https://galaxy.ansible.com/me/preferences>                           |
| `GITHUB_REPOSITORY`      | Name of the role repository on GitHub in the form of `owner/repo` (automatically set in GitHub Actions Workflows) |

This shareable configuration is meant to be used in conjunction with
[@gliech/semantic-release-config-base][2] which serves as the source for most
changes to the default options for plugins used here.

## License

This project is licensed under the terms of the [BSD 4-Clause License](LICENSE)

[1]: https://www.npmjs.com/package/@gliech/semantic-release-config-github-ansible-role
[2]: https://www.npmjs.com/package/@gliech/semantic-release-config-base
[3]: https://galaxy.ansible.com/
