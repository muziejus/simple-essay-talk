# Scholar.txt 1
## Simple-CV

<small><a href="http://moacir.com">Moacir P. de Sá Pereira</a> / <a href="http://twitter.com/muziejus">@muziejus</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a><br />
moacir.p@columbia.edu<br />
NY, NY, 6 February 2019</small>

Note: Thanks all for coming, and let’s get started on today’s workshop. First
thing’s first, I want you all to open up this presentation on your computers.
It will make things much, much easier. Head on over to 

---

## [talks.moacir.com/simple-cv](http://talks.moacir.com/simple-cv)

Note: This will let you follow along with me, which will come in handy when
you have to click on links and copy paste things.

---

## Software to get

<div class="row">
<div class="col-6">
<h3><i class="fab fa-apple"></i> MacOS</h3>
<ol>
<li>MacTeX (<a href="http://tug.org/mactex/">tug.org/mactex/</a>)</li>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (installed via Atom)</li>
<li>Pandoc (<a href="http://pandoc.org">pandoc.org</a>)</li>
</ol>
</div>

<div class="col-6">
<h3><i class="fab fa-windows"></i> Windows</h3>
<ol>
<li>MiKTeX (<a href="http://miktex.org">miktex.org</a>)</li>
<li>Atom (<a href="http://atom.io">atom.io</a>)</li>
<li>Git (<a href="http://gitforwindows.org">gitforwindows.org</a>)</li>
<li>Pandoc (<a href="http://pandoc.org">pandoc.org</a>)</li>
</ol>
</div>

Note: While these are all downloading, I’ll describe a bit...

---

## While all that’s downloading, here’s Git

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

## The Four Steps to Git

1. Save
1. Stage
1. Commit
1. Push

Note: For most purposes if you’re working on Git on your own, you’re content
with these four commands. This is a process of recording your work.

---

## The Four Steps to Git

<ol>
<li class="fragment">Save - continuous (with autosave). Not even part of Git.</li>
<li class="fragment">Stage - less frequent. Also known as `git add`.</li>
<li class="fragment">Commit - less frequent still.</li>
<li class="fragment">Push - less frequent still.</li>
</ol>

Note: Saving is what you already do. The files you work with have changes that
get saved to the disk. Then, in staging a file, you’re giving Git a heads up
to keep track of the changes you have made. In committing, you’re putting down
a milestone for the changes the files have undergone. And in pushing, you’re
syncing your new changes with a server.

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

--> Icons by Font Awesome. [License](https://fontawesome.com/license).

Note: Here’s a slightly more visual way to think about this. But you’ll notice
here that I’m talking about “changes,” not a “document.” This is a central
conceit of Git.

---

## You’re not working on a _document_.<br />You’re working on a _project_.

Note: For the rest of today, we’ll be working on a project that is your CV.
It’s not a single document. In fact, it’s many--it’s at least the html page
that is your online CV and the pdf that is the print version. In a project,
files come and go. They could be datasets, collections of text like chapters
or sections of an article, or even, like in today’s workshop, the various
parts of your CV.

---

## Next up, GitHub <i class="fab fa-github"></i>

1. Create an account at [github.com](http://github.com)
1. Fork the [`simple-cv`
   repository](http://github.com/plain-plain-text/simple-cv) (or “project.”)
1. Enable GitHub pages on the new repository

Note: for this part, I get to do some live demoing along with you all. What is
GitHub?

---

## Atom, the hackable plain text editor

1. Install “platformio” plugin
1. Enable autosave
1. Clone repository from GitHub
1. Link Atom to GitHub

Note: Atom is brought to us by the people at GitHub. It probably won’t win you
any cool kid awards amongst your hacker nerd friends, but it’s an easy editor
to learn, I think, and its Git integration is tip-top.

---




## Thanks!
### [@muziejus](http://twitter.com/muziejus) / moacir.p@columbia.edu
