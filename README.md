# Ctrl+E Selection to REPL

A simple VSCode extension that adds a keyboard shortcut mapping **Ctrl+E** to send the current selection to the debug REPL.

## Features

- Adds `Ctrl+E` keyboard shortcut
- Maps to `editor.debug.action.selectionToRepl` command
- Works when debugging and you want to quickly evaluate selected code

## Installation

1. Package the extension: `vsce package`
2. Install the generated `.vsix` file in VSCode

## Usage

1. Start a debug session in VSCode
2. Select some code in the editor
3. Press `Ctrl+E` to send the selection to the debug REPL

## Requirements

- VSCode 1.74.0 or higher
- Active debug session for the command to work
