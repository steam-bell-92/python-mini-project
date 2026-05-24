---
name: agent-inbox
description: List and manage user feedback items from the agent inbox. Use when the user asks about feedback, bug reports, feature requests, or inbox items.
---

# Agent Inbox Skill

List and manage user feedback items from the agent inbox.

## When to Use

Use this skill when the user:

- Asks about feedback, bug reports, or feature requests
- Wants to check their agent inbox
- Asks you to review or manage inbox items
- Wants to acknowledge, dismiss, or mark feedback as implemented

## When NOT to Use

- To automatically check the inbox without the user asking
- To auto-implement feedback (present items to the user instead)
- For general project task management (use project tasks instead)

## Available Functions

### listAgentInboxItems(statusFilter, topicFilter)

List inbox items with optional filters. Checks if the agent inbox is enabled first.

**Parameters:**

- `statusFilter` (list[str], optional): Filter by status
- `topicFilter` (list[str], optional): Filter by topic

**Status values:** `"PENDING"`, `"ACKNOWLEDGED"`, `"DISMISSED"`, `"IMPLEMENTED"`, `"DELETED"`

**Topic values:** `"BUG_REPORT"`, `"FEATURE_REQUEST"`, `"DESIGN"`, `"CONTENT"`, `"OTHER"`

**Returns:** Dict with:

- `items`: List of inbox items
- `totalCount`: Total number of matching items

Each item contains:

- `id`: Unique item identifier
- `replId`: The repl this item belongs to
- `status`: Current status
- `topic`: Item topic/category
- `feedbackText`: The feedback content
- `currentPage`: Page the feedback was submitted from
- `screenshots`: List of screenshot URLs
- `timeCreated`: ISO timestamp
- `timeUpdated`: ISO timestamp

**Example:**

```javascript
// List all pending items
const result = await listAgentInboxItems({ statusFilter: ["PENDING"] });
for (const item of result.items) {
    console.log(`[${item.topic}] ${item.feedbackText}`);
}

// List bug reports
const result = await listAgentInboxItems({ topicFilter: ["BUG_REPORT"] });
for (const item of result.items) {
    console.log(`[${item.topic}] ${item.feedbackText}`);
}
```

### updateAgentInboxItem(itemId, status)

Update the status of an inbox item.

**Parameters:**

- `itemId` (str, required): The item ID to update
- `status` (str, required): New status to set

**Status values:** `"PENDING"`, `"ACKNOWLEDGED"`, `"DISMISSED"`, `"IMPLEMENTED"`, `"DELETED"`

**Returns:** Dict with the updated item fields (same shape as items in list response).

**Example:**

```javascript
// Acknowledge an item after reviewing it
const result = await updateAgentInboxItem({ itemId: "abc123", status: "ACKNOWLEDGED" });
console.log(`Updated: ${result.id} -> ${result.status}`);
```

## Item Topics

- `BUG_REPORT`: Bug reports from users
- `FEATURE_REQUEST`: Feature requests
- `DESIGN`: Design feedback
- `CONTENT`: Content-related feedback
- `OTHER`: Other feedback

## Item Statuses

- `PENDING`: New, unprocessed item
- `ACKNOWLEDGED`: Item has been seen and noted
- `DISMISSED`: Item was dismissed
- `IMPLEMENTED`: Feedback has been implemented
- `DELETED`: Item was deleted

## Example Workflow

```javascript
// 1. List pending inbox items
const result = await listAgentInboxItems({ statusFilter: ["PENDING"] });
console.log(`Found ${result.totalCount} pending items`);

// 2. Review each item and acknowledge
for (const item of result.items) {
    console.log(`[${item.topic}] ${item.feedbackText}`);
    await updateAgentInboxItem({ itemId: item.id, status: "ACKNOWLEDGED" });
}
```

## Error Handling

- **Inbox not enabled**: Raises `RuntimeError` if the agent inbox is not enabled for the repl
- **Invalid status**: Raises `ValueError` for unrecognized status strings
- **Invalid topic**: Raises `ValueError` for unrecognized topic strings
