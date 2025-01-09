# Nowhow Foswiki Speedify

A Firefox extension that caches all view-only pages from nowhow's Foswiki instance, to speed up navigation.

- Cached pages are indicated by a watermark
- Cached pages expire after 4 hours
- Pages for manipulating content, like editing and attaching files are not cached.
- The default reload actions by the browser (F5, CTRL-F5 and the cache setting in the DEV tools) are not affected

Later improvements

- Paging can be toggled via a button besides the address bar or via the CTRL-F8 key combination
- Caching is disabled temporarily after the redirect upon an edit of a wiki topic


## Technical details

Uses a minimal set of permissions, only on nowhow.ch and it's subdomains


## Credits
   - The bike-fast icon by GreenTurtwig (Apache License 2.0)
