/*
  modal.js - Project launcher modal dialogue and instructions helper.
*/

import { safeRun } from "./utils.js";

let lastFocusedElement = null;
let removeTrap = null;
let currentProjectName = "";

function getFocusableElements(root) {
  const sel =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(root.querySelectorAll(sel)).filter((el) => {
    return (
      !el.closest('[aria-hidden="true"]') &&
      !el.classList.contains("visually-hidden")
    );
  });
}

function trapFocus(modalEl) {
  const handler = function (e) {
    if (e.key !== "Tab" || !modalEl.classList.contains("active")) return;
    const focusables = getFocusableElements(modalEl);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus({ preventScroll: true });
    }
  };
  document.addEventListener("keydown", handler, true);
  return function () {
    document.removeEventListener("keydown", handler, true);
  };
}

function setMainInert(isInert) {
  const main = document.getElementById("main-content");
  if (!main) return;
  if (isInert) main.setAttribute("inert", "");
  else main.removeAttribute("inert");
}

export function showInfoModal(title, steps) {
  const overlay = document.getElementById("infoModalOverlay");
  const titleEl = document.getElementById("infoModalTitle");
  const listEl = document.getElementById("infoModalList");

  if (!overlay || !titleEl || !listEl) return;

  titleEl.textContent = title;
  listEl.innerHTML = steps.map((step) => "<li>" + step + "</li>").join("");

  overlay.classList.add("active");

  const closeBtn = document.getElementById("infoModalClose");
  const gotItBtn = document.getElementById("infoModalGotIt");

  function closeModal() {
    overlay.classList.remove("active");
    closeBtn?.removeEventListener("click", closeModal);
    gotItBtn?.removeEventListener("click", closeModal);
    overlay.removeEventListener("click", overlayClick);
  }

  function overlayClick(e) {
    if (e.target === overlay) closeModal();
  }

  closeBtn?.addEventListener("click", closeModal);
  gotItBtn?.addEventListener("click", closeModal);
  overlay.addEventListener("click", overlayClick);
}

export function setupModalInfoButton(projectName) {
  currentProjectName = projectName;
  const infoBtn = document.getElementById("modalInfoBtn");
  if (!infoBtn) return;

  // Remove old listener by cloning
  const newBtn = infoBtn.cloneNode(true);
  infoBtn.parentNode.replaceChild(newBtn, infoBtn);

  newBtn.addEventListener("click", function () {
    if (typeof window.getProjectInstructions === "function") {
      const info = window.getProjectInstructions(currentProjectName);
      showInfoModal(info.title, info.steps);
    }
  });
}

export function openProjectSafe(name, trigger) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  if (!modal || !modalBody) return;
  lastFocusedElement = trigger || document.activeElement;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.style.overflow = "hidden";
  setMainInert(true);

  safeRun(function () {
    if (typeof window.getProjectHTML === "function") {
      modalBody.innerHTML =
        window.getProjectHTML(name) ||
        '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';
    } else {
      modalBody.innerHTML =
        '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';
    }
    if (typeof window.initializeProject === "function")
      window.initializeProject(name);
    setupModalInfoButton(name);

    // Inject info button next to the title (works for all projects)
    const projectContent = modalBody.querySelector(".project-content");
    if (projectContent) {
      let firstHeading = projectContent.querySelector(
        "h2, h3, .resume-analyzer-copy h2, .pet-title"
      );
      if (!firstHeading) {
        firstHeading = projectContent.querySelector(
          '[class*="title"], [class*="header"] h2'
        );
      }

      if (firstHeading && !projectContent.querySelector(".inline-info-btn")) {
        const infoBtn = document.createElement("button");
        infoBtn.className = "inline-info-btn";
        infoBtn.innerHTML = "ⓘ";
        infoBtn.setAttribute("aria-label", "How to use this project");

        infoBtn.style.marginLeft = "12px";
        infoBtn.style.background = "none";
        infoBtn.style.border = "none";
        infoBtn.style.fontSize = "1.3rem";
        infoBtn.style.cursor = "pointer";
        infoBtn.style.color = "var(--accent)";
        infoBtn.style.verticalAlign = "middle";

        infoBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          if (typeof window.getProjectInstructions === "function") {
            const info = window.getProjectInstructions(name);
            showInfoModal(info.title, info.steps);
          }
        });

        if (firstHeading.style.display !== "inline-block") {
          firstHeading.style.display = "inline-block";
        }
        firstHeading.appendChild(infoBtn);
      }
    }
  });

  removeTrap = trapFocus(modal);
  const focusables = getFocusableElements(modalBody);
  const firstFocusable = focusables[0] || modalClose;
  if (firstFocusable && typeof firstFocusable.focus === "function") {
    firstFocusable.focus({ preventScroll: true });
  }
}

export function closeProjectSafe() {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modal.classList.contains("active")) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.paddingRight = "";
  document.body.style.overflow = "";
  setMainInert(false);
  if (removeTrap) {
    removeTrap();
    removeTrap = null;
  }
  if (modalBody) {
    modalBody.innerHTML = "";
  }
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;

  // Dispatch custom event to notify orchestration that modal closed
  const event = new CustomEvent("projectModalClosed");
  document.dispatchEvent(event);
}

export function initModal() {
  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");

  if (modalClose) modalClose.addEventListener("click", closeProjectSafe);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeProjectSafe();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeProjectSafe();
  });

  // Expose openProjectSafe and closeProjectSafe on window object for legacy references
  window.openProjectSafe = openProjectSafe;
  window.closeProjectSafe = closeProjectSafe;
}
