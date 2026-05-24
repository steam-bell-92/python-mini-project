name: Pull Request 🔄
description: Submit a Pull Request
title: "[PR]: "
body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Provide a brief description of your changes
      placeholder: What changes are you making?
    validations:
      required: true
  - type: dropdown
    id: type-of-change
    attributes:
      label: Type of Change
      description: Mark the relevant option
      options:
        - Select an option
        - Bug fix (non-breaking change which fixes an issue)
        - New feature (non-breaking change which adds functionality)
        - New mini-project
        - Documentation update
        - UI/UX improvement
        - Code refactoring
        - Other (please describe)
      multiple: false
    validations:
      required: true
  - type: textarea
    id: related-issue
    attributes:
      label: Related Issue
      description: Link any related issues here (e.g., Closes #123)
      placeholder: "Closes #(issue number)"
  - type: textarea
    id: testing
    attributes:
      label: How Has This Been Tested?
      description: Describe how you tested your changes
      placeholder: |
        - [ ] Tested on Windows
        - [ ] Tested on macOS
        - [ ] Tested on Linux
        - [ ] Multiple test runs completed
        - [ ] Edge cases tested
  - type: textarea
    id: environment-info
    attributes:
      label: Environment
      description: Please provide your environment details
      placeholder: |
        Python Version: 
        OS:
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots (if applicable)
      description: Add screenshots to demonstrate changes, especially for UI updates
  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      description: Make sure all items are completed before submitting
      options:
        - label: "I have been assigned this issue before raising this PR"
          required: true
        - label: "My code follows the project's style guidelines"
          required: true
        - label: "I have tested my code thoroughly"
          required: true
        - label: "My project runs without errors"
          required: true
        - label: "No external dependencies added (unless necessary)"
          required: false
        - label: "I have updated the README.md (if adding new project)"
          required: false
        - label: "I am participating in GSSoC 2026"
          required: false
