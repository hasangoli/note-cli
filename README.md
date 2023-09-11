# NodeJS Notes CLI

A node CLI to manage your notes with just one line of command

## Features

- Create note with tags
- Show all notes
- Filter notes by search
- Remove a specific note via id
- Clear all notes

## Installation

First of all install node and npm before continue. Use the code below to ensure you have them installed :

```bash
node -v
npm -v
```

After that in the root directory run this command to add note as a CLI to your OS environment :

```bash
npm link
```

Then you can see the instruction to use note CLI using the below command :

```bash
note --help
```

## Usage/Examples

Create note :

- using `-t` or `--tags` to add tags to your note
- adding tags is optional

```bash
note new "Hello World" -t "Tag 1, Tag 2"
```

List all notes :

```bash
note all
```

Filter by search a piece of note :

```bash
note find "Hello"
```

Remove note by a specific ID :

```bash
note remove 123
```

And finally remove all notes :

```bash
note clean
```

## Uninstall

Remove CLI from your pc :

- Run the command below in the root of project

```bash
npm unlink
```
