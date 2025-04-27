### KumavOS Ocaps Runtime (Pet Daemon)

This is an experiment in running [Endo pet daemon](https://github.com/endojs/endo/tree/master/packages/daemon) apps in KumavOS.

Each `.ocaps` file is a javascript file that gets run in a special sandboxed environment within an iframe.
It can make requests to the host for other objects in the system.
The "cat wallet" is a special app with host privileges that can manage requests from apps.

For example, `catagotchi.ocaps` needs an "LLM" to drive its speech and will request one at boot.
The user can provide it with either the OpenAI LLM adapter (requires API key) or a fake LLM object.

Further integration into KumavOS is worth experimenting, including first class UI integration for object requests, file picker ui, etc.
