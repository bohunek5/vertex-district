# VERTEX District — protected presentation

The browser application is encrypted in app.encrypted.json. Public files contain the access gate, assets and third-party libraries. Routes under /vertex-district/ preserve their path, language query and project hash when unlocked.

source.encrypted.json contains an encrypted, compressed archive of the project’s source directories, local backend, tests, export scripts and assets. Databases, records in data/, environment files, credentials, node_modules, Git history and working artifacts are excluded. Restore with scripts/restore-github-source.mjs from the working project. Every archived file includes a SHA-256 checksum.

Both envelopes use AES-256-GCM with PBKDF2-SHA-256 (600000 iterations); UTF-8 envelope format is authenticated as additional data. Static hosting runs only the browser application, with local save/export as indicated in the interface. It does not run the local server or transmit inquiries.

The access password is not stored in this repository. Anyone given it can decrypt the application and source archive; this presentation gate is not backend account authentication.
