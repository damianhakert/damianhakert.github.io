---
layout: markdown_page
title: "Desktop vs mobile"
---

### Product strategy and vision

We are currently focused on source control scenarios and the ecosystem of tools within a typical software team. These are squarely within the realm of desktop experiences (where "desktops" of course encompass "laptops"). And so we are still very much focused on developer-centric tools. As we expand our product, and integrate additional features and personas beyond the technical contributor, there are many realistic use cases where a user is on a phone or a tablet in a truly mobile setting, i.e. not sitting at a desk in an office. However, to get there, we have to make our feature set more powerful. Integrating many traditionally git-centered features (and inventing new ones) into the desktop browser itself is the current approach. But at some point, we may want/need to invest in mobile-first technologies (such as native apps) to create mobile-first products. We are not there yet. We need to be focused on the best desktop experience first (with web being the primary technology). Furthermore, it is not clear right now if we will leapfrog into truly mobile-first products immediately, or transition there with incremental products (e.g. a tablet-optimized version of GitLab that offers a first-class touch UI that is also adaptable to external keyboard inputs).

---

### UX design

UI components are different in desktop vs mobile, stemming from mouse indirection and keyboard input versus direct manipulation on touch interfaces. We should emphasize these concepts when describing recommended UI components and screen sizes. Designers shouldn't be hindered by mobile considerations, but design for the best desktop one.

---

### Development

We should prescribe leveraging mobile responsive web frameworks (obviously). But in addition, we need to caution against investing resources into mobile-specific code, since it increases the complexity of the codebase, which ultimately means we move slower.

---

### Mobile vs mobile

Since we are using mobile responsive web frameworks, we can essentially use screen real estate as a proxy for desktop vs mobile. Thus, we are taking the _good enough_ approach here to move quickly as we build GitLab. In particular, the tablet experience should be similar, if not identical to that of the desktop, in most cases.

---

### Graceful degradation

We need to be intentional in our design of gracefully degrading features from desktop to mobile. Sometimes, "graceful", means just not making the feature available for mobile. For example, rendering detailed charts may become burdensome or even impossible to design, code, and maintain for mobile. In that case, we should seriously consider just _not_ including it. Not viewing a chart may be the better overall experience.
