name: Bug report 🐞
description: File a bug report
title: "🐞[Bug]: "
labels: 'bug'
body:
  - type: checkboxes
    id: existing-issue
    attributes:
      label: Is there an existing issue for this?
      description: Please search to see if an issue already exists for the bug you encountered.
      options:
        - label: I have searched the existing issues
          required: true
  - type: textarea
    id: what-happened
    attributes:
      label: Describe the bug
      description: A concise description of what you are experiencing.
      placeholder: Tell us what you see!
    validations:
      required: true
  - type: textarea
    id: expected-behaviour
    attributes:
      label: Expected behavior
      description: A clear and concise description of what you expected to happen.
    validations:
      required: true
  - type: textarea
    id: screenshots
    attributes:
      label: Add Screenshots
      description: Add sufficient screenshots to explain your issue.
  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: Please provide details about your environment
      placeholder: |
        - OS: [e.g., Windows 11, macOS 14, Ubuntu 22.04]
        - Python Version: [e.g., 3.10.5]
        - Project File: [e.g., Rock-Paper-Scissor.py]
  - type: textarea
    id: additional-context
    attributes:
      label: Additional Context
      description: Add any other context about the problem here.
  - type: checkboxes
    id: contribution-record
    attributes:
      label: Before you submit
      options:
        - label: "I have read the Contributing Guidelines"
          required: true
        - label: "I want to work on this issue"
          required: false
        - label: "I am participating in GSSoC 2026"
          required: false
