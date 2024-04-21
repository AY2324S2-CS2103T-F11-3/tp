---
layout: default.md
title: "Yash's Project Portfolio Page"
---

### Project: Tether

Tether is an Applicant Tracking System (ATS) for hiring managers in small to mid-range startups. The user interacts with it using a _Command Line Interface_, and it has a _Graphical User Interface_ created with JavaFX. It is written in Java, and has about 15 kLoC.

Given below are my contributions to the project.

### Features

-----------------------------------------------------------------------------------------------------------------------------

**Code contributed**: [RepoSense link](https://nus-cs2103-ay2324s2.github.io/tp-dashboard/?search=yashpola&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other&since=2024-02-23&tabOpen=true&tabType=authorship&tabAuthor=yashpola&tabRepo=AY2324S2-CS2103T-F11-3/tp%5Bmaster%5D&authorshipIsMergeGroup=false&authorshipFileTypes=docs~functional-code~test-code~other&authorshipIsBinaryFileTypeChecked=false&authorshipIsIgnoredFilesChecked=false).


**New Feature**: Added status-tagging for applicants and interviewers.


* What it does: For applicants, this feature allows hiring managers to set and view applicant statuses among "resume review", "pending interview", "completed interview", "waiting list", "accepted", "rejected". For interviewers, this feature toggles their statuses automatically between "free" and "interview with [applicant name]".
* Justification: This feature improves the product significantly because hiring managers often need to record where each applicant is in the hiring pipeline at any given time, and check interviewer availabilities at a glance.
* Highlights: This enhancement required an in-depth weighing of cost/benefit to users such as whether restricting users from setting custom applicant statuses was sensible, or blocking users from setting interviewer statuses at all was acceptable. Implementation wise there were some challenges in rendering, storing, and reading multiple interviewer statuses for an interviewer.


**New Feature**: Added ability to filter persons by status.


* What it does: allows hiring managers to filter persons by valid applicant and interviewer statuses.
* Justification: This feature is a minor enhancement to the product that allows users to group persons quickly by statuses for a quick overview. Moreover, this feature is instrumental as an alternative to `find`, should users lack the necessary information to `find` persons by their personal details.


**New Feature**: Added a command to view overall statistics of stored data in terms of total applicants, interviewers, and interviews (as well as a breakdown of applicant and interviewer numbers by status).


**Enhancements to existing features**:
* Updated the GUI color scheme and touched up app layout (Pull requests [\#49](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/49/files), [\#121](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/121/files)).
* Created a new `Interviewer` type from existing `Person` to more closely model the typical usage for hiring managers.


### Project management

-----------------------------------------------------------------------------------------------------------------------------

* Set up team repository and product website.
* Managed releases `v1.2` - `v1.4` (4 releases) on GitHub.


### Documentation

-----------------------------------------------------------------------------------------------------------------------------

**User Guide**:
* Added documentation for the features `applicant_status`, `filter_by_status`, and `view_overall_statistics` (Pull request [\#147](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/147)).
* Enhancements:
  * Standardised descriptions for all features (ensured most features follow the format of "Description, Example usage, Parameter constraints, Notes"),
  * Enhanced readability of descriptions, and
  * Added orientation sections ("Context on Tether" and "Gathering your bearings") to more smoothly introduce hiring managers to Tether.


**Developer Guide**:
* Added implementation details of the `applicant_status` command.
* Added use cases (Main Success Scenario and Extensions) and manual testing guide for `applicant_status`, `filter_by_status` and `view_overall_statistics`.
* Added Non Functional Requirements for product.


### Community

-----------------------------------------------------------------------------------------------------------------------------

* Reviewed teammates' pull requests with non-trivial review comments. Example pull requests: [\#120](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/120), [\#143](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/143), [\#122](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/122), [\#95](https://github.com/AY2324S2-CS2103T-F11-3/tp/pull/95).
* Aided in bug-triaging and response for received bug reports.
* Contributed to course-wide forum discussions in terms of asking and answering technical, administrative, and conceptual questions. Example contributions: [1](https://github.com/nus-cs2103-AY2324S2/forum/issues/667), [2](https://github.com/nus-cs2103-AY2324S2/forum/issues/584), [3](https://github.com/nus-cs2103-AY2324S2/forum/issues/583), [4](https://github.com/nus-cs2103-AY2324S2/forum/issues/732)).
* Reported functionality and documentation bugs for other teams ([link](https://github.com/yashpola/pe/issues)).


