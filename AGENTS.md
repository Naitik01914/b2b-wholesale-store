<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all store catalog content in `src/lib/store-data.ts` and render it through shared card components, so product data is never duplicated.
- Persist the shopping cart under the single `b2b-wholesale-cart` browser key, so items survive refreshes until explicitly removed.
