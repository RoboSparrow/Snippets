#!/usr/bin/env bash

# thank you to https://frankindev.com/2020/11/26/permissions-for-.ssh-folder-and-key-files/ for the overview below:
#
# +------------------------+-------------------------------------+-------------+-------------+
# | Directory or File      | Man Page                            | Recommended | Mandatory   |
# |                        |                                     | Permissions | Permissions |
# +------------------------+-------------------------------------+-------------+-------------+
# | ~/.ssh/                | There is no general requirement to  | 700         |             |
# |                        | keep the entire contents of this    |             |             |
# |                        | directory secret, but the           |             |             |
# |                        | recommended permissions are         |             |             |
# |                        | read/write/execute for the user,    |             |             |
# |                        | and not accessible by others.       |             |             |
# +------------------------+-------------------------------------+-------------+-------------+
# | ~/.ssh/authorized_keys | This file is not highly sensitive,  | 600         |             |
# |                        | but the recommended permissions are |             |             |
# |                        | read/write for the user, and not    |             |             |
# |                        | accessible by others                |             |             |
# +------------------------+-------------------------------------+-------------+-------------+
# | ~/.ssh/config          | Because of the potential for abuse, |             | 600         |
# |                        | this file must have strict          |             |             |
# |                        | permissions: read/write for the     |             |             |
# |                        | user, and not accessible by others. |             |             |
# |                        | It may be group-writable provided   |             |             |
# |                        | that the group in question contains |             |             |
# |                        | only the user.                      |             |             |
# +------------------------+-------------------------------------+-------------+-------------+
# | ~/.ssh/identity        | These files contain sensitive data  |             | 600         |
# | ~/.ssh/id_dsa          | and should be readable by the user  |             |             |
# | ~/.ssh/id_rsa          | but not accessible by others        |             |             |
# |                        | (read/write/execute)                |             |             |
# +------------------------+-------------------------------------+-------------+-------------+
# | ~/.ssh/identity.pub    | Contains the public key for         | 644         |             |
# | ~/.ssh/id_dsa.pub      | authentication.  These files are    |             |             |
# | ~/.ssh/id_rsa.pub      | not sensitive and can (but need     |             |             |
# |                        | not) be readable by anyone.         |             |             |
# +------------------------+-------------------------------------+-------------+-------------+

find ~/.ssh -type f -exec chmod 600 {} \;

chmod 700 ~/.ssh
chmod 644 ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/id_rsa

chmod -f 600 ~/.ssh/authorized_keys
chmod -f 600 ~/.ssh/config

chmod -f 644 ~/.ssh/known_hosts

ls -la ~/.ssh
