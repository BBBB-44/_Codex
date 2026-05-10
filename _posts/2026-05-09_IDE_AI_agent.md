# First Time Using an AI IDE Agent

I tried using an AI IDE agent for the first time today.

I didn’t want to let an AI agent run freely on my computer, so I started looking into sandboxed environments and containers.

At first, I tried setting up a Docker container. That quickly became complicated because of compatibility issues with my Windows 10 setup. I can’t update the PC due to other restrictions.

After spending quite a while dealing with Windows compatibility issues, I finally managed to install WSL and Ubuntu.

In the end, that turned out not to be very useful for what I was trying to do.

Then I moved on to Windows Sandbox. That also took longer than expected because of additional compatibility problems.

After all that setup work, I still had to manually install:
- Git
- Cursor
- A lightweight IDE (I chose Sublime Text)

Then Cursor refused to work.

I kept getting errors such as:
- “Too many free trials”
- “Timeout waiting for provider”

Which was confusing on a completely fresh install.

I wasn’t using a VPN or doing anything unusual — just a clean sandbox environment.

After another 30 minutes trying to troubleshoot it, I gave up and switched to VS Code instead.

The AI agent experience for ASP projects wasn’t very convincing. It used a lot of tokens on small tasks and still struggled to provide useful results.

Then I installed Cline and tested their default free agent.

Unfortunately, the experience was similar.

Next, I tried using a free OpenRouter API key connected to Cline.

Again, I ran into:
- high token usage
- weak results on simple tasks
- unreliable outputs

At that point, I was mostly just tired from the setup process.

## What Might Have Been the Problem?

A few possibilities:
- Trying to run ASP projects inside VS Code instead of Visual Studio, which normally handles a lot of the tooling automatically
- AI coding agents potentially performing better on web stacks than on ASP projects
- The architecture/setup complexity confusing the agents
- Sandboxed environments interfering with how some tools expect to operate

Or maybe current AI coding agents still aren’t mature enough for this kind of workflow.

## Final Thoughts

Most of the time wasn’t spent coding — it was spent dealing with:
- Windows compatibility issues
- WSL setup
- Sandbox configuration
- Docker problems
- Authentication issues
- Free-tier limitations
- AI agents wasting tokens on minor tasks

And after all that, the coding assistance itself still felt underwhelming.

I’m still interested in the idea of local AI coding agents though, especially ones that:
- run fully offline
- don’t rely on subscriptions
- use resources more efficiently
- and can better understand larger projects and environments

There’s also a good chance I’m simply too inexperienced with these tools right now. Maybe the workflow improves once you know which tools fit which use cases.

At least I ended up documenting the process of setting up a sandboxed environment, along with a reusable startup configuration to reduce repetitive setup and boilerplate downloads.
