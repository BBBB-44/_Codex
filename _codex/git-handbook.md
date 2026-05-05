---
---

<img width="960" height="401" alt="Git-logo-white svg" src="https://github.com/user-attachments/assets/2cea87ae-b7af-4b07-9918-81384fe8070e" />

ABOUT GIT

Git is a distributed version control software system[10] that is capable of managing versions of source code or data. It is often used to control source code by programmers who are developing software collaboratively.

# Specify a specific account when using git clone

For HTTPS cloning, you can force Git to use a specific account by prepending the username to the URL. This is useful if you have multiple accounts and want to ensure Git prompts you for the credentials of the correct one. 
```
git clone git@github.com:username/repository.git
```
# Setting Commit Identity for the Repo

Navigate into the repository and run:
```
git config user.name "Your Name"
git config user.email "your-account-email@example.com"
```
