# Codex
Commonplace book are personal notebooks used to compile any information the owner finds interesting or useful. They can variously contain notes, proverbs, adages, aphorisms, maxims, recipes, quotes, letters, poems, tables of weights and measures, prayers, legal formulas, and other professional references. 

# Why use GitHub as a form of commonplace book or codex?

GitHub can be conceptualized as a contemporary instantiation of the commonplace book—reconfigured within a computational and networked epistemic environment. Its underlying version control system enables granular diachronic tracking of intellectual production, allowing not only the preservation of successive states of thought but also the systematic reconstruction of their evolution. This affords a form of reflexive scholarship in which the genealogy of ideas becomes analyzable in its own right.

Moreover, GitHub’s inherently distributed and optionally public architecture facilitates both dissemination and collaborative knowledge production. It transforms the traditionally private codex into a potentially intersubjective space, where annotation, critique, and iterative refinement can occur across temporal and geographic boundaries.

The platform’s digital structure also enables advanced operations on information—such as modular reorganization, forking (conceptual duplication with divergence), and computational analysis—thereby extending the affordances of the classical commonplace book. In this sense, it is not merely a repository of notes, but an active environment for the manipulation, recombination, and interrogation of knowledge.

Its digital format further allows for efficient organization, editing, duplication, and analysis of information. Finally, because GitHub is accessible through a web browser, its contents can be reached from a wide range of devices—including computers, smartphones, tablets, smartwatches and many more.

# A note on the value it gain over time and its day to day usage

The value of a commonplace book lies in its capacity to function as a cumulative and evolving archive of thought, where fragments of reading, observation, and reflection are preserved and placed into meaningful relation. Over time, its pertinence increases rather than diminishes: what may begin as scattered excerpts or provisional notes gradually acquires coherence as patterns, themes, and intellectual preoccupations emerge. This layering transforms the commonplace book into a site of long-term cognition, enabling retrospective insight and the reactivation of past ideas within new contexts. Its enduring relevance stems from this temporal depth, as earlier entries are continually reinterpreted, recombined, and recontextualized in light of subsequent knowledge.

In daily practice, a commonplace book can be used as a disciplined yet flexible tool for capturing and processing information. One might record striking passages from readings, summarize arguments, note personal reflections, or pose questions that arise throughout the day. Regular engagement—whether through brief entries or more extended annotations—cultivates attentiveness and intellectual continuity. Over time, the book becomes a personalized reference system, facilitating recall, synthesis, and creative recombination. Its utility lies not only in storage but in use: revisiting, cross-referencing, and building upon prior entries turns it into an active instrument for thinking rather than a passive repository of notes.

# Past attemps 

My earlier attempts at building a commonplace system took several forms, each revealing its own limitations over time. I initially relied on manual compilation—handwritten notebooks and loosely organized pages—which, while intellectually engaging, quickly became tedious to maintain. As the volume of material grew, reorganizing entries or revisiting past notes became increasingly impractical. The rigidity of the format made it difficult to manipulate information: duplicating, restructuring, or synthesizing ideas required disproportionate effort, ultimately limiting flexibility.

I then transitioned to a simple digital system based on nested folders containing text files, images, and other documents. Although this approach improved storage capacity and allowed for multimodal content, it lacked coherence and accessibility across contexts. Navigating deeply nested structures became cumbersome, and the absence of version control meant I had little visibility into how my ideas evolved over time. More recently, I experimented with tools such as Obsidian and Google Drive. While these platforms offered synchronization and more advanced interfaces, they introduced their own challenges: a certain loss of simplicity, limited control over versioning, and constraints in customization. In each case, the system either became too rigid, too opaque, or too complex, falling short of supporting a fluid and sustainable intellectual workflow.

# proposed structure

- inbox/ for unprocessed captures.
- archive/ for retired or obsolete notes.


# Files



<ul>
{% for file in site._codex %}
  <li>
    <a href="{{ file.url }}">{{ file.name }}</a>
  </li>
{% endfor %}
</ul>
