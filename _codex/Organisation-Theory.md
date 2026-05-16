---
---

## Suggestion

If you want one rule to anchor the whole project, use this: **store notes for retrieval, not just storage**. In practice that means each note should answer:  
- “What is this about?”  
- “How do I find it?”  
- “What does it connect to?”  

---

## What to avoid

Avoid overbuilding taxonomy too early. Too many tags, folders, or rigid categories can make the system harder to maintain than the notes themselves. It is usually better to start simple and let structure emerge from actual use, then refine the organization as patterns appear.

---

# Finding things later

Make retrieval easy by combining lookup methods:

- **Title search** for exact concepts.  
- **Tags** for broad themes like `writing`, `philosophy`, or `systems`.  

A useful rule is: if you would struggle to find a note in two years, it probably needs either a better title, or better tags.

---

# A simple workflow

1. Capture raw thoughts in `inbox/`.  
2. Once in a while, rewrite the worthwhile ones as permanent notes.  
3. Add pertinent tags to notes.  
4. Archive or delete notes that no longer deserve space.

# File and folder naming conventions

Invalid Characters: Special characters like ", *, <, >, ?, /, \, |, and : are not allowed in file or folder names.


# Folder structure 

## Limitations of file path

The default maximum file path length in Windows is 260 characters. 
It can be changed by enabling "long paths" on windows 10/11 but some older applications may still fail with paths over 260 characters.

OneDrive and SharePoint enforce a maximum file path length of 400 characters for the entire URL, which includes the folder structure and file name.

## Other Limitations of OneDrive

File Numbers: You can't share a folder if it contains more than 50,000 items, and you should avoid having more than 5,000 unique permissions in a library.

## Flat structure

A flat folder structure involves organizing content without any hierarchical nesting. All content items are placed at the same level, typically within a single folder. Here are some considerations for a flat folder structure:

Advantages:

    Simplicity: A flat structure is straightforward and easy to understand, especially for smaller content libraries.
    Quick Access: Users can quickly locate and access content without navigating through multiple levels of folders.
    Flexibility: Content items are not constrained by specific folder hierarchies, allowing for greater flexibility in organizing materials.

Considerations:

    Limited Organization: Without nested folders, managing and categorizing a large volume of content can become challenging and result in a cluttered view.
    Potential Disorganization: Content may become difficult to find if there is no clear organization scheme, especially when there are numerous items.

## Nested Structure

A nested folder structure involves organizing content in a hierarchical manner, with subfolders placed within parent folders. This approach creates a deeper level of organization. Consider the following factors:

Advantages:

    Organization and Categorization: Nested folders enable a systematic categorization of content, allowing for easier management and navigation.
    Scalability: The hierarchical nature of nested folders accommodates larger content libraries and makes it easier to maintain an organized structure.
    Granularity: Subfolders can provide more specific and refined categorization, helping users locate content with precision.

Considerations:

    Complexity: A nested structure may introduce complexity, particularly if there are multiple levels of subfolders, making it harder for users to locate content quickly.
    Potential Over-Organization: Excessive nesting can lead to confusion and overly specific categorization, making it difficult for users to identify the appropriate folder to access content.

# File organisation

Shallow hierarchy: One level for each broad domain avoids over‑nesting. (Separation usually scales better for something like a long‑term commonplace book.)

Separation of concern : You might be tempted to group spaghetti-carbonara.md and how-to-write-recipe.md in a folder named recipes, but maybe the recipe-writing principles are applicable in another domain i.e : programming. Each domain evolves independently.

Example structure

    commonplace/
    ├── recipes/              # concrete recipes
    ├── recipe-writing/       # how to write recipes
    ├── csharp/               # C# concepts
    ├── sql/                  # SQL concepts
    ├── ubuntu/               # Ubuntu / Linux
    ├── movies/               # movie history
    ├── inbox/                # raw captures
    └── indexes/              # cross‑topic hubs

Example contents

    recipes/spaghetti-carbonara.md

    recipe-writing/how-to-write-a-good-recipe.md

    csharp/linq-introduction.md

    sql/joins-explained.md

    ubuntu/cli-shortcuts.md

    movies/classic-hollywood-history.md


# Recomendation

flat architecture is the best way to structure sites and content to optimize it for things like search, avoiding file path limitations, and manually navigating content.

Each level increment the search difficulty

Use context, not hierarchy

: Instead of relying on deeply nested folders, use context to organize your files. Label your files clearly and use tags or metadata to make them easy to find.


You can still add “database‑like” behavior via tags and front‑matter:

```text
title: Understanding JOINs in SQL
tags: sql, databases, beginner
created: 2026-04-30
links: sql/optimization.md
```

Then tools like Obsidian, Hugo, or simple scripts can act almost like a light‑weight DB on top of the files.

---

# What would be the best way to overview horizontal information?

If you treat everything as tags, the system becomes noisy.
If you treat everything as folders, the system becomes rigid.
If you treat everything as relations, the system becomes too abstract.

A useful mental model
Think of it like this:
* Categories = shelves
* Tags = colored stickers
* Glossary = dictionary
* Relations = map of influence
That gives both:
* navigability
* conceptual overview


It depends on what you want to demonstrate.

Is it a tags

Is it a category

Is it a glossary

Is it relation

It also depend on how the information will be used. Ex; it would be a impractical to group together all handbook into a single document.


Solution : merge information together. Ex if you have typography rule and layout theory, merge them in a single document. In the top of the document you could add a graph pf the relation.


Current problem :

Design related

Marketing

Handbook

User interface

## noticed repetitive theme 

Theory

Handbook

About?

---
