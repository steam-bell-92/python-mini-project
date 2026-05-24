name: New Project Proposal 🎮
description: Propose a new mini-project to add to the collection
title: "🎮[Project]: "
labels: 'new-project'
body:
  - type: checkboxes
    id: existing-issue
    attributes:
      label: Is there an existing issue for this?
      description: Please search to see if a similar project proposal already exists.
      options:
        - label: I have searched the existing issues
          required: true
  - type: textarea
    id: project-name
    attributes:
      label: Project Name
      description: Enter the name of your proposed project.
      placeholder: "e.g., Number Guessing Game"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of what this project does.
      placeholder: "Tell us what this project is about!"
    validations:
      required: true
  - type: dropdown
    id: category
    attributes:
      label: Category
      description: Which category does this project fit into?
      options:
        - Select an option
        - Game
        - Mathematical Tool
        - Utility/Calculator
        - Crypto/Text Tool
        - Pattern/Art Generator
        - Other
      multiple: false
    validations:
      required: true
  - type: textarea
    id: learning-objectives
    attributes:
      label: Learning Objectives
      description: What Python concepts will users learn from this project?
      placeholder: |
        - Loops
        - Conditionals
        - Data Structures
        - [Add more...]
  - type: textarea
    id: key-features
    attributes:
      label: Key Features
      description: List the main features of this project.
      placeholder: |
        - Feature 1
        - Feature 2
        - Feature 3
    validations:
      required: true
  - type: textarea
    id: ui-ux
    attributes:
      label: UI/UX
      description: Describe the user interface (emojis, menu structure, etc.)
  - type: textarea
    id: example-output
    attributes:
      label: Example Output
      description: Show an example of what the project output would look like.
      placeholder: |
        ```
        Example output here
        ```
  - type: dropdown
    id: implementation-status
    attributes:
      label: Implementation Status
      options:
        - Select an option
        - Just an idea
        - Already coded and ready
        - Need help implementing
      multiple: false
    validations:
      required: true
  - type: textarea
    id: additional-info
    attributes:
      label: Additional Information
      description: Any other details, mockups, or references?
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
