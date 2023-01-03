# repeti-to-anki

This is a simple script to import decks from [repetico](https://www.repetico.de) to Anki. This is solely a proof of concept to export your self-created cards and NOT an endorsement of copyright infringements.

## Prerequisites

You need the following tools installed:

- Node.js
- Yarn
- A browser plugin to save a complete HTML snapshot like [SingleFile](https://github.com/gildas-lormeau/SingleFile)

## How-to

1. Clone the repository `git clone https://github.com/henniaufmrenni/repeti-to-anki`
2. Install the dependencies `cd repeti-to-anki && yarn`
3. From the repetico homepage go to one of your card decks.
4. Scroll all the way down so that all cards are loaded.
5. Save the complete page snapshot with a tool like `SingleFile`
6. Copy the snapshot the `repeti-to-anki` directory and rename it to `input.html`
7. Run `node index.js` in your terminal
8. Import the output file located under `output.txt` in Anki. The fields should be auto-detected when using Anki's default settings, otherwise change the `Delimiter` to `semicolon`.

## License

Copyright 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
