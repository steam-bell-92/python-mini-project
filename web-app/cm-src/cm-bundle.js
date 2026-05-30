/**
 * cm-bundle.js  —  CodeMirror 6 entry point
 * Bundles only what the Python Playground needs:
 *   • EditorState / EditorView (core)
 *   • basicSetup (line numbers, bracket matching, history, etc.)
 *   • Python language support + syntax highlighting
 *   • One Dark theme (VS Code Dark+ inspired)
 *   • Key bindings (indentWithTab)
 */

import { EditorState }                       from '@codemirror/state';
import { EditorView, keymap, lineNumbers,
         highlightActiveLineGutter,
         highlightSpecialChars,
         drawSelection, dropCursor,
         rectangularSelection,
         crosshairCursor,
         highlightActiveLine }               from '@codemirror/view';
import { defaultKeymap, history,
         historyKeymap, indentWithTab }      from '@codemirror/commands';
import { syntaxHighlighting,
         defaultHighlightStyle,
         bracketMatching,
         indentOnInput,
         foldGutter, foldKeymap }            from '@codemirror/language';
import { python }                            from '@codemirror/lang-python';
import { oneDark }                           from '@codemirror/theme-one-dark';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { autocompletion, completionKeymap,
         closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete';

/* Expose as a global so playground.js (plain IIFE) can call it */
window.CodeMirrorPython = {
    EditorState,
    EditorView,
    keymap,
    lineNumbers,
    highlightActiveLineGutter,
    highlightSpecialChars,
    drawSelection,
    dropCursor,
    rectangularSelection,
    crosshairCursor,
    highlightActiveLine,
    defaultKeymap,
    history,
    historyKeymap,
    indentWithTab,
    syntaxHighlighting,
    defaultHighlightStyle,
    bracketMatching,
    indentOnInput,
    foldGutter,
    foldKeymap,
    python,
    oneDark,
    searchKeymap,
    highlightSelectionMatches,
    autocompletion,
    completionKeymap,
    closeBrackets,
    closeBracketsKeymap,
};
