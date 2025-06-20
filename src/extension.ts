import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // This extension only contributes keybindings, so no activation logic is needed
  console.log("Ctrl+E Selection to REPL extension is now active!");
}

export function deactivate() {
  // No cleanup needed
}
