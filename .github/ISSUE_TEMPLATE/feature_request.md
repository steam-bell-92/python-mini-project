name: Feature request ✨
description: Suggest an idea for this project
title: "✨[Feature]: "
labels: 'enhancement'
body:
  - type: checkboxes
    id: existing-issue
    attributes:
      label: Is there an existing issue for this?
      description: Please search to see if a similar feature request already exists.
      options:
        - label: I have searched the existing issues
          required: true
  - type: textarea
    id: feature-description
    attributes:
      label: Feature Description
      description: A clear and concise description of the feature you'd like to see.
      placeholder: Tell us about your feature idea!
    validations:
      required: true
  - type: textarea
    id: problem-statement
    attributes:
      label: Problem Statement
      description: Is this feature request related to a problem? Please describe.
      placeholder: "Example: I'm always frustrated when..."
    validations:
      required: true
  - type: textarea
    id: proposed-solution
    attributes:
      label: Proposed Solution
      description: Describe the solution you'd like to see implemented.
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives Considered
      description: Describe any alternative solutions or features you've considered.
  - type: textarea
    id: benefits
    attributes:
      label: Benefits
      description: How would this feature benefit users or learners?
  - type: dropdown
    id: project-type
    attributes:
      label: If suggesting a new mini-project, which category does it fit?
      options:
        - Select an option
        - Game
        - Mathematical Tool
        - Utility
        - Crypto/Text Tool
        - Other (please specify)
  - type: checkboxes
    id: implementation
    attributes:
      label: Implementation
      description: Would you be willing to work on this?
      options:
        - label: "Yes, I can work on this"
        - label: "No, but I can help test"
        - label: "Just suggesting the idea"
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

