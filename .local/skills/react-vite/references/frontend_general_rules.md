## Frontend

- Use `wouter` for routing on the frontend.
  - If you need to add a new page, add them to the `src/pages` directory and register them in `src/App.tsx`.
  - If there are multiple pages, use a sidebar for navigation. Use the `Link` component or the `useLocation` hook from `wouter` instead of modifying the window directly.
- For forms, always use shadcn's `useForm` hook and `Form` component from `@/components/ui/form` which wraps `react-hook-form`.
  - When appropriate, use the `zodResolver` from `@hookform/resolvers/zod` to validate form data.
  - Use `.extend` to add validation rules to the schema.
  - Remember that the form component is controlled, ensure you pass default values to the `useForm` hook.
- Use the Orval-generated hooks from `@workspace/api-client-react` for all API calls. Do not write raw `fetch` or manual TanStack Query hooks when generated hooks exist.
  - Generated query hooks return `T` directly — NOT wrapped in `{ data: T }`.
  - When passing options like `enabled`, you MUST also pass `queryKey`:

    ```typescript
    const { data } = useGetNote(noteId, { query: { enabled: !!noteId, queryKey: getGetNoteQueryKey(noteId) } });
    ```

  - For mutations, `onSuccess` receives `T` directly:

    ```typescript
    createRoom.mutate({ data: { name } }, {
      onSuccess: (room) => { setLocation(`/room/${room.id}`); }
    });
    ```

  - Invalidate related queries after mutations using the generated queryKey helpers.
  - Show a loading or skeleton state while queries (via `.isLoading`) or mutations (via `.isPending`) are being made.
- Common pitfalls to avoid:
  - The `useToast` hook is exported from `@/hooks/use-toast`.
  - If a form is failing to submit, try logging out `form.formState.errors` to see if there are form validation errors for fields that might not have associated form fields.
  - DO NOT explicitly import React as the existing Vite setup has a JSX transformer that does it automatically.
  - Use `import.meta.env.<ENV_VAR>` to access environment variables on the frontend instead of `process.env.<ENV_VAR>`. Note that variables must be prefixed with `VITE_` in order for the env vars to be available on the frontend.
  - `<SelectItem>` will throw an error if it has no value prop. Provide a value prop like this `<SelectItem value="option1">`.
  - NEVER import something you don't use — TypeScript will fail the build on unused imports.
  - Always import React hooks (`useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`) from `"react"` — never from a router library like `"wouter"`.
- Add a `data-testid` attribute to every HTML element that users can interact with (buttons, inputs, links, etc.) and to elements displaying meaningful information (user data, status messages, dynamic content, key values).
  - Use unique, descriptive identifiers following this pattern:
    - Interactive elements: `{action}-{target}` (e.g., `button-submit`, `input-email`, `link-profile`)
    - Display elements: `{type}-{content}` (e.g., `text-username`, `img-avatar`, `status-payment`)
  - For dynamically generated elements (lists, grids, repeated components), append a unique identifier at the end: `{type}-{description}-{id}`
    - Examples: `card-product-${productId}`, `row-user-${index}`, `text-price-${itemId}`
    - The dynamic identifier can be any unique value (database ID, index, key) as long as it's unique within that group
  - Keep test IDs stable and descriptive of the element's purpose rather than its appearance or implementation details.

## Styling and Theming

- CSS custom properties use space-separated HSL values (no `hsl()` wrapper):

  ```css
  :root { --primary: 221 83% 53%; }
  ```

  Usage: `background-color: hsl(var(--primary));`
- The scaffold's `index.css` ships with every CSS custom property set to `red` as a placeholder. Rewrite the `:root` and `.dark` blocks with a cohesive theme palette before writing any components. If any `red` values remain, the page will render with red backgrounds, borders, and text.
- When adding Google Fonts or any `@import url(...)` to index.css, it MUST be the very first line of the file — before `@import "tailwindcss"` and all other statements. PostCSS will fail silently if any `@import url(...)` appears after other CSS rules.
- Use the `@`-prefixed paths to import shadcn components and hooks.
- Use icons from `lucide-react` to signify actions and provide visual cues. Use `react-icons/si` for company logos.
- User may attach assets (images, etc.) in their request.
  - If the user asks you to include attached assets in the app, you can reference them in the frontend with the `@assets/...` import syntax.
  - For example, if the user attached asset is at `attached_assets/example.png`, you can reference it in the frontend with `import examplePngPath from "@assets/example.png"`.

## Dark Mode

1. Set `darkMode: ["class"]` in tailwind.config.ts and define color variables in `:root` and `.dark` CSS classes
2. Create ThemeProvider with useState("light"), useEffect to toggle "dark" class on document.documentElement, and localStorage sync
3. When not using utility class names configured in `tailwind.config.ts`, always use explicit light/dark variants for ALL visual properties: `className="bg-white dark:bg-black text-black dark:text-white"`. When using utility classes configured in tailwind config, you can assume these already been configured to automatically adapt to dark mode.
