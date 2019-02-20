# Scholar.txt 2
## Simple-essay

<small><a href="http://moacir.com">Moacir P. de Sá Pereira</a> / <a href="http://twitter.com/muziejus">@muziejus</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a><br />
moacir.p@columbia.edu<br />
NY, NY, 20 February 2019</small>

---

## [talks.moacir.com/simple-essay](http://talks.moacir.com/simple-essay)

Note: This will let you follow along with me, which will come in handy when
you have to click on links and copy paste things.

---

## Software to Get

<div class="row">
<div class="col-6">
<h3><i class="fab fa-apple"></i> MacOS</h3>
<ol>
<li>MacTeX (<a href="http://tug.org/mactex/">tug.org/mactex/</a>)</li>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (installed via Atom)</li>
<li>Pandoc (<a href="http://pandoc.org">pandoc.org</a>)</li>
<li>Zotero (<a href="http://zotero.org">zotero.org</a>)</li>
<li>Better BibTeX (<a href="https://retorque.re/zotero-better-bibtex/">link</a>)</li>
</ol>
</div>

<div class="col-6">
<h3><i class="fab fa-windows"></i> Windows</h3>
<ol>
<li>MiKTeX (<a href="http://miktex.org">miktex.org</a>)</li>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (<a href="http://gitforwindows.org">gitforwindows.org</a>)</li>
<li>Pandoc (<a href="http://pandoc.org">pandoc.org</a>)</li>
<li>Zotero (<a href="http://zotero.org">zotero.org</a>)</li>
<li>Better BibTeX (<a href="https://retorque.re/zotero-better-bibtex/">link</a>)</li>
</ol>
</div>

---

## While All That’s Downloading, Three Processes:

1. Writing the essay
1. Putting the essay together
1. Putting the essay under version control

---

## Writing the essay

1. Edit metadata about the essay (formatted in [YAML](https://rollout.io/blog/yaml-tutorial-everything-you-need-get-started/))
1. Write sections of content (formatted in [Markdown](https://guides.github.com/features/mastering-markdown/))
1. Process sections and metadata with a shell script
1. Repeat

---

## Putting the essay together

1. Getting the simple-essay code (`git clone`)
1. Creating and processing content (“Writing the essay”)
1. Adding a milestone to our work (`git commit`)
1. Pushing the work to an online repository (`git push`)
1. Repeat (except getting the code)

---

## Putting the essay under version control

1. Uh. It’s time for Git.
1. Wait why Git?
1. Not Git. Please not Git.

---

## Git Is…

* “free and open source distributed version control system designed to handle
everything from small to very large projects with speed and efficiency.”
* “easy to learn.”
* A busybody keeping track of all the changes to all your files and never
forgetting them.

Note: That part about “easy to learn” is probably not true. Git is insanely
powerful, and even people who use it every day probably don’t use more than a
tiny chunk of it. And that’s because what IS easy is learning just enough Git
to make it useful for you.

---

## Git Is…

<ol>
<li class="fragment">Part of a backup solution</li>
<li class="fragment">An intention tracker/writing journal</li>
<li class="fragment">A declutterer</li>
<li class="fragment">A multi-verse generator</li>
<li class="fragment">A collaboration engine</li>
</ol>

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

--> Icons by Font Awesome. [License](https://fontawesome.com/license).

---


## Your essay is not a _document_.<br />It is a _project_.

---

## Hopefully downloading is done, so let’s install…

---

## Back to putting the essay together

1. Getting the simple-essay code (`git clone`)
1. Creating and processing content (“Writing the essay”)
1. Adding a milestone to our work (`git commit`)
1. Pushing the work to an online repository (`git push`)
1. Repeat (except getting the code)

---

## Getting the Simple-essay code: GitHub <i class="fab fa-github"></i>

1. Create an account at [github.com](http://github.com)
1. Fork the [`simple-essay`
   repository](http://github.com/plain-plain-text/simple-essay) (or “project.”)

---

## Making changes: Atom, the Plain Text editor

1. Install Atom plugins: [github.com/plain-plain-text/atom-config/](http://github.com/plain-plain-text/atom-config)
1. *Install Git* (if you haven’t already)
1. Clone your own, forked `simple-cv` repository from GitHub via Atom’s
   Command Palette (cmd-shift-p or ctrl-shift-p).
1. Link Atom to GitHub via GitHub panel in Atom.
1. Start editing.

---

## Key files in Simple-essay

* 📁 `sections/`: a folder containing a bunch of Markdown files that make up
the content of your essay.
* `bibliography.bib`: a
[BibLaTeX](https://ctan.org/pkg/biblatex?lang=en)-formatted database of the sources you will be citing from [this Zotero
collection](https://www.zotero.org/moacir/items/collectionKey/7G84VPGE). 
* `metadata.yml`: a [YAML](https://learnxinyminutes.com/docs/yaml/) file
with the metadata for the essay.
* `process.ps1` and `process.sh`: PowerShell and shell scripts that convert
your Markdown content into `.docx` and `.pdf` files.
* `sections.txt`: a list of files from inside `sections/`, in the order in which they should appear in the final document.
* `template.tex`: the TeX template for generating the pdf.

---

## Scholarly Markdown: footnotes

Markdown:

```markdown
This is the introduction of the essay.^[It’s important 
to put many jokes in footnotes.] In this essay, in the 
voice of Indiana Jones…
```

Output:

![screenshot of opening lines](https://i.imgur.com/FBHq5q5.jpg)

---

## Scholarly Markdown: citations

Markdown:

```markdown
I will attempt to say smart things about Djuna Barnes’s 
1936 novel _Nightwood_ [@nightwood]. I’ve…
```

Output:

![screenshot of opening lines](https://i.imgur.com/FBHq5q5.jpg)

---

<img src="https://i.imgur.com/pytLVsu.png" alt="screenshot of Zotero"
	style="max-height: 80vh;" />

---

## Adding a milestone: Atom

1. Edit metadata file.
1. Edit files `sections/`, add new ones, edit `sections.txt`.
1. Process files via interactive shell.
1. Save, Stage, Commit.

---

## Thanks!
### [@muziejus](http://twitter.com/muziejus) / moacir.p@columbia.edu
