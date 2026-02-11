const nameInput = document.getElementById("subjectName");
const semesterInput = document.getElementById("subjectSemester");
const notesInput = document.getElementById("subjectNotes");
const contentInput = document.getElementById("subjectContent");
const examInput = document.getElementById("subjectExam");
const channelsInput = document.getElementById("subjectChannels");
const sourcesInput = document.getElementById("subjectSources");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const currentList = document.getElementById("currentSemesterList");
const nextList = document.getElementById("nextSemesterList");
const storageKey = "study-subjects-v3";
const notificationHostId = "toastHost";
const editModalId = "editModal";
const editOverlayId = "editOverlay";
let activeEditIndex = null;

function ensureToastHost() {
  let host = document.getElementById(notificationHostId);
  if (host) return host;
  host = document.createElement("div");
  host.id = notificationHostId;
  document.body.appendChild(host);
  return host;
}

function notify(message, type = "info") {
  const host = ensureToastHost();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  host.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2800);
}

function ensureEditModal() {
  let overlay = document.getElementById(editOverlayId);
  let modal = document.getElementById(editModalId);
  if (overlay && modal) return { overlay, modal };

  overlay = document.createElement("div");
  overlay.id = editOverlayId;
  overlay.className = "modal-overlay hidden";

  modal = document.createElement("div");
  modal.id = editModalId;
  modal.className = "modal hidden";

  modal.innerHTML = `
    <div class="modal-header">
      <div class="modal-title">Edit subject</div>
      <button class="modal-close" type="button" aria-label="Close">×</button>
    </div>
    <div class="modal-body">
      <div class="modal-grid">
        <div>
          <label for="editName">Subject name</label>
          <input id="editName" type="text" />
        </div>
        <div>
          <label for="editNotes">Study method</label>
          <textarea id="editNotes"></textarea>
        </div>
        <div>
          <label for="editContent">Subject content</label>
          <textarea id="editContent"></textarea>
        </div>
        <div>
          <label for="editExam">Exam details</label>
          <textarea id="editExam"></textarea>
        </div>
        <div>
          <label for="editChannels">Study channels</label>
          <textarea id="editChannels" placeholder="https://t.me/..."></textarea>
        </div>
        <div>
          <label for="editSources">External sources</label>
          <textarea id="editSources" placeholder="https://youtube.com/..."></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="action-btn action-move modal-cancel" type="button">Cancel</button>
      <button class="action-btn action-edit modal-save" type="button">Save changes</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  const closeModal = () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
    activeEditIndex = null;
  };

  overlay.addEventListener("click", closeModal);
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.querySelector(".modal-cancel").addEventListener("click", closeModal);

  return { overlay, modal };
}

function openEditModal(item, index) {
  const { overlay, modal } = ensureEditModal();
  activeEditIndex = index;

  modal.querySelector("#editName").value = item.name || "";
  modal.querySelector("#editNotes").value = item.notes || "";
  modal.querySelector("#editContent").value = item.content || "";
  modal.querySelector("#editExam").value = item.exam || "";
  modal.querySelector("#editChannels").value = (item.channels || []).join(", ");
  modal.querySelector("#editSources").value = (item.sources || []).join(", ");

  const saveBtn = modal.querySelector(".modal-save");
  const onSave = () => {
    if (activeEditIndex === null) return;
    const items = loadSubjects();
    const current = items[activeEditIndex];
    if (!current) return;

    const newName = modal.querySelector("#editName").value.trim();
    const newNotes = modal.querySelector("#editNotes").value.trim();
    const newContent = modal.querySelector("#editContent").value.trim();
    const newExam = modal.querySelector("#editExam").value.trim();
    const newChannels = modal.querySelector("#editChannels").value.trim();
    const newSources = modal.querySelector("#editSources").value.trim();

    if (!newName) { notify("Please enter a subject name.", "error"); return; }
    if (!newNotes) { notify("Please write how you will study this subject.", "error"); return; }

    const editedChannels = newChannels ? parseLinks(newChannels) : { links: [], invalid: [] };
    const editedSources = newSources ? parseLinks(newSources) : { links: [], invalid: [] };
    if (editedChannels.invalid.length) { notify("Study channels must be valid links (http/https). Invalid: " + editedChannels.invalid.join(", "), "error"); return; }
    if (editedSources.invalid.length) { notify("External sources must be valid links (http/https). Invalid: " + editedSources.invalid.join(", "), "error"); return; }

    items[activeEditIndex] = {
      ...current,
      name: newName,
      notes: newNotes,
      content: newContent,
      exam: newExam,
      channels: editedChannels.links,
      sources: editedSources.links
    };
    saveSubjects(items);
    render();
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
    activeEditIndex = null;
  };

  saveBtn.replaceWith(saveBtn.cloneNode(true));
  modal.querySelector(".modal-save").addEventListener("click", onSave);

  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function loadSubjects() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}
function saveSubjects(items) {
  const payload = JSON.stringify(items);
  localStorage.setItem(storageKey, payload);
  localStorage.setItem(`${storageKey}-backup`, payload); // Backup copy in localStorage under "study-subjects-v3-backup"
}
function resetForm() { nameInput.value = ""; semesterInput.value = "current"; notesInput.value = ""; contentInput.value = ""; examInput.value = ""; channelsInput.value = ""; sourcesInput.value = ""; }
function parseLinks(raw) {
  if (!raw) return { links: [], invalid: [] };
  const entries = raw.split(/[\n,]+/).map(l => l.trim()).filter(Boolean);
  const links = []; const invalid = [];
  entries.forEach(entry => { try { const url = new URL(entry); if (url.protocol === "http:" || url.protocol === "https:") links.push(url.href); else invalid.push(entry); } catch { invalid.push(entry); } });
  return { links, invalid };
}
function createMetaLine(label, value) { if (!value) return null; const line = document.createElement("div"); line.innerHTML = `<strong>${label}:</strong> ${value}`; return line; }
function createLinksBlock(label, links) { if (!links || !links.length) return null; const block = document.createElement("div"); const title = document.createElement("strong"); title.textContent = label + ":"; const list = document.createElement("ul"); links.forEach(link => { const li = document.createElement("li"); const a = document.createElement("a"); a.href = link; a.textContent = link; a.target = "_blank"; li.appendChild(a); list.appendChild(li); }); block.appendChild(title); block.appendChild(list); return block; }

function createItemCard(item, index) {
  const card = document.createElement("div"); card.className = "item";
  const header = document.createElement("div"); header.className = "item-header clickable";
  const title = document.createElement("strong"); title.textContent = item.name;
  const badge = document.createElement("span"); badge.className = "pill"; badge.textContent = item.semester === "current" ? "This semester" : "Next semester"; badge.dataset.semester = item.semester;
  const arrow = document.createElement("span"); arrow.className = "arrow"; arrow.textContent = "▼";
  header.appendChild(title); header.appendChild(badge); header.appendChild(arrow);

  const details = document.createElement("div"); details.className = "item-details hidden";
  const notes = document.createElement("div"); notes.innerHTML = `<strong>Study method:</strong> ${item.notes || "No study plan added."}`;
  const meta = document.createElement("div"); meta.className = "item-meta";
  const contentLine = createMetaLine("Content", item.content);
  const examLine = createMetaLine("Exam", item.exam);
  const channelsBlock = createLinksBlock("Channels", item.channels);
  const sourcesBlock = createLinksBlock("Sources", item.sources);
  [contentLine, examLine, channelsBlock, sourcesBlock].forEach(el => { if (el) meta.appendChild(el); });

  const actions = document.createElement("div"); actions.className = "actions";
  const moveBtn = document.createElement("button"); moveBtn.className = "action-btn action-move"; moveBtn.textContent = item.semester === "current" ? "Move to Next Semester" : "Move to This Semester";
  moveBtn.addEventListener("click", e => { e.stopPropagation(); toggleSemester(index); });
  const editBtn = document.createElement("button"); editBtn.className = "action-btn action-edit"; editBtn.textContent = "Edit";
  editBtn.addEventListener("click", e => { e.stopPropagation(); editItem(index); });
  const deleteBtn = document.createElement("button"); deleteBtn.className = "action-btn action-delete"; deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", e => { e.stopPropagation(); deleteItem(index); });
  actions.appendChild(moveBtn); actions.appendChild(editBtn); actions.appendChild(deleteBtn);

  details.appendChild(notes); details.appendChild(meta); details.appendChild(actions);

  header.addEventListener("click", () => {
    if (details.classList.contains("hidden")) { details.classList.remove("hidden"); arrow.textContent = "▲"; }
    else { details.classList.add("hidden"); arrow.textContent = "▼"; }
  });

  card.appendChild(header); card.appendChild(details);
  return card;
}

function render() { currentList.innerHTML = ""; nextList.innerHTML = ""; const items = loadSubjects(); items.forEach((item, index) => { const card = createItemCard(item, index); if (item.semester === "current") currentList.appendChild(card); else nextList.appendChild(card); }); }

function addItem() {
  const name = nameInput.value.trim(); const semester = semesterInput.value; const notes = notesInput.value.trim(); const content = contentInput.value.trim(); const exam = examInput.value.trim();
  const channelsParsed = parseLinks(channelsInput.value); const sourcesParsed = parseLinks(sourcesInput.value);
  if (!name) { notify("Please enter a subject name.", "error"); return; }
  if (!notes) { notify("Please write how you will study this subject.", "error"); return; }
  if (channelsParsed.invalid.length) { notify("Study channels must be valid links (http/https). Invalid: " + channelsParsed.invalid.join(", "), "error"); return; }
  if (sourcesParsed.invalid.length) { notify("External sources must be valid links (http/https). Invalid: " + sourcesParsed.invalid.join(", "), "error"); return; }
  const items = loadSubjects(); items.push({ name, semester, notes, content, exam, channels: channelsParsed.links, sources: sourcesParsed.links });
  saveSubjects(items); resetForm(); render();
}

function deleteItem(index) {
  const items = loadSubjects();
  items.splice(index, 1);
  saveSubjects(items);
  render();
}

function toggleSemester(index) {
  const items = loadSubjects();
  if (!items[index]) return;

  items[index].semester =
    items[index].semester === "current" ? "next" : "current";

  saveSubjects(items);
  render();
}

function editItem(index) {
  const items = loadSubjects();
  if (!items[index]) return;
  openEditModal(items[index], index);
}

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", resetForm);

render();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
