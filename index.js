let goals = [];
let goalIdCounter = 0;
let currentPage = 'trails';

const moodOptions = [
    { emoji: "💪", label: "strong" },
    { emoji: "😌", label: "relieved" },
    { emoji: "😅", label: "tough" },
    { emoji: "😐", label: "neutral" },
    { emoji: "🎉", label: "excited" }
];

const categories = {
    running: {
        keywords: ["run", "5k", "10k", "marathon", "jog"],
        steps: ["Buy or dig out a pair of running shoes", "Walk/jog for 10 minutes, no pressure", "Look up a beginner training plan", "Pick a date for your first short run"],
        questions: ["What's a distance you could jog today without stopping?", "What's stopping you from lacing up right now?", "What day this week could you do your first run?", "Who could jog with you the first time?"]
    },

    fitness: {
        keywords: ["gym", "workout", "exercise", "strength", "lift", "yoga", "pilates", "fit"],
        steps: ["Pick 3 exercises to start with", "Do a 10-minute session today, no pressure", "Find a beginner routine online", "Schedule your next session on the calendar"],
        questions: ["What's the smallest workout you could do today?", "What's stopping you from starting a session right now?", "What time of day fits your schedule best?", "Who could be your accountability partner?"]
    },

    language: {
        keywords: ["spanish", "french", "german", "japanese", "language", "fluent"],
        steps: ["Pick one app or course to sstart with, maybe a free trial to test a few out.", "Learn 10 words today, pronunciation and written.", "Have a 2-minute practice conversation (even with yourself)", "Set a realistic weekly practice time"],
        questions: ["What's one phrase you'd want to say first?", "What's stopping you from practiing 5 minutes today?", "What time of day could you realistically practice daily?", "Who could you practice a sentence with?"],
    },

    writting: {
        keywords: ["book", "write", "novel", "blog", "essay", "memoir"],
        steps: ["Write a one-sentence summary of the idea", "Set a tiny daily word count", "Write the worst possible first paragraph", "Share it with one person"],
        questions: ["What's the worst possible first scentence you could write?", "What's stopping you from opening the document today?", "What's a 10-minute writing session look like for you?", "Who would you want to read the first draft?"]
    },

    tidying: {
        keywords: ["clean", "declutter", "organize", "tidy"],
        steps: ["Pick just one small area to start with", "Set a 15-minute timer", "Use the four foot rule, pick a direction and work four feet in that direction", "Make one pile: keep, donate, toss", "Put back only what you're keeping"],
        questions: ["What is the smallest drawer or shelf you could clear today?", "What's stopping you from setting a 15-minute timer now?", "What's one thing you could donate right now?", "Who could help you haul stuff away?"]
    },

    finance: {
        keywords: ["save", "saving", "budget", "debt", "invest", "purchase", "buy"],
        steps: ["Write down what you actually spend in a normal week", "Pick one expense to trim this month", "Set an automatic transfer, even a small one", "Check in on progress in 2 weeks"],
        questions: ["What's the smallest amount you could set aside today?", "What's stopping you from checking your balance right now?", "What's one expense you could cut this week?", "Who could help keep you accountable on this?"]
    },

    cooking: {
        keywords: ["cook", "recipe", "bake", "baking", "meal"],
        steps: ["Pick one simple recipe to try first", "Check what ingredients you already have", "Buy just what you don't have", "Cook it once, even if it's not perfect", "Optional: Note any changes you would make to improve the recipe and make it your own"],
        questions: ["What's the simplest recipe you could try first?", "What's stopping you from picking a recipe today?", "What ingredients do you already have on hand?", "Who could you cook this with or for?"]
    },

    jobsearch: {
        keywords: ["job", "resume", "cv", "career", "interview"],
        steps: ["Update one section of your resume", "List 5 companies or roles you'd be excited about", "Ask one person for a coffee chat or referral", "Apply to just one role you'd be excited about this week"],
        questions: ["What's one small update your resume needs?", "What's stopping you from sending one application today?", "Who's one person you could reach out to first?", "What's the smallest research step you could take?"]
    },

    reading: {
        keywords: ["read", "reading"],
        steps: ["Pick the book or article you'll start with", "Read for just 10 minutes today", "Find a time of day that fits best fits in", "Tell someone what you're reading"],
        questions: ["What's the shortest thing you could read today?", "What's stopping you from opening it right now?", "What time of day could you fit in reading?", "Who could you talk to about the book/article you are reading?"]
    },

    mindfulness: {
        keywords: ["meditate", "meditation", "mindfulness", "stress", "calm"],
        steps: ["Pick a guided session under 5 minutes", "Choose one time of day to try it", "Do just one session today", "Notice how you feel afterward, no judgment"],
        questions: ["What's the shortest session you could try today?", "What's stopping you from starting right now?", "What time of day would actually stick?", "What would make this feel more like a passion than a chore?"]
    },

    home: {
        keywords: ["paint", "garden", "renovate", "fix", "repair", "diy"],
        steps: ["Pick the single smalles task in the project", "List what tools or materials you'll need", "Spend 20 minutes on just that one task", "Decide what's next once it's done"],
        questions: ["What's the smallest task in this project?", "What's stopping you from starting this weekend?", "What tools or materials are you missing or do you already have?", "Who could help you with the harder parts?"]
    },

    art: {
        keywords: ["draw", "drawing", "sketch", "paint a", "painting", "art"],
        steps: ["Set a 10 minute timer and just make marks", "Find a simple reference to work from", "Pick one small piece to finish", "Share it with someone, even unfinished"],
        questions: ["What's the smallest sketch you could do today?", "What's stopping you from starting right now?", "What's a reference or subject you'd enjoy drawing?", "Who could you share your work with?"]
    },

    music: {
        keywords: ["guitar", "piano", "instrument", "sing", "singing", "music"],
        steps: ["Learn one chord, note, or phrase today", "Practice just for 10 minutes", "Find a simple song to work toward", "Set a regular practice time, even if it's just for 10 minutes"],
        questions: ["What's the smallest thing you could practice today?", "What's stopping you from picking it up right now?", "What song would you love to eventually be able to play/sing?", "What time of day fits practice the best?"]
    },

    coding: {
        keywords: ["code", "coding", "programming", "app", "website", "software"],
        steps: ["Write down exactly what the first version should do", "Set up the simplest possible starting file", "Get one small piece working end to end", "Show it to one person for feedback"],
        questions: ["What's the smallest working version of this?", "What's stopping you from opening the editor today?", "What's one small piece you could finish in an hour?", "Who could give you feedback early on?"]
    },

    default: {
        keywords: [],
        steps: ["Decide what 'done' looks like for this", "Write down the very first small action", "Do that first action, however small?", "Tell someone you're working on this"],
        questions: ["What's the smallest version of {goal}?", "What's stopping you from starting {goal} today?", "What could you finish in 10 minutes toward {goal}?", "Who could help you with {goal}?"]
    }
};

function categoryFor(title) {
    const t = title.toLowerCase();
    for (const [name, cat] of Object.entries(categories)) {
        if (name === "default")
            continue;
        if (cat.keywords.some(k => t.includes(k))) return name;
    }
    return "default";
}


function suggestSteps(title) {
    return categories[categoryFor(title)].steps
}

function questionsFor(goal) {
    const set = categories[categoryFor(goal.title)].questions;
    return set
        .map(q => q.replace("{goal}", goal.title.toLowerCase()))
        .filter(q => !goal.answeredQuestions.includes(q));
}

function getActiveGoals() {
    return goals.filter(g => !g.archived);
}

function getArchivedGoals() {
    return goals.filter(g => g.archived);
}

function showPage(page) {
    currentPage = page;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('nav-' + page).classList.add('active')
}

function goToInTrails(goalId) {
    showPage('trails');
    setTimeout(() => scrollToGoal(goalId), 30);
}

function scrollToGoal(goalId) {
    const el = document.getElementById(`goal-${goalId}`);
    if (el)
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function createGoal() {
    const titleEl = document.getElementById('goal-input');
    const title = titleEl.value.trim();
    if (!title) {
        titleEl.focus();
        return;
    }
    const whyEl = document.getElementById('why-input')
    const why = whyEl.value.trim();
    const goal = {
        id: goalIdCounter++,
        title,
        why,
        steps:
            suggestSteps(title).map((text, i) => ({ id: i, text, done: false, mood: null })),
        activeQuestion: null,
        answeredQuestions: [],
        archived: false,
        pendingMoodStepId: null,
        checkedIn: false
    };
    goals.unshift(goal);
    titleEl.value = "";
    whyEl.value = "";
    renderAll();
}

function toggleStep(goalId, stepId) {
    const goal = goals.find(g => g.id === goalId);
    const step = goal.steps.find(s => s.id === stepId);
    if (!step.done) {
        step.done = true;
        goal.pendingMoodStepId = stepId;
    } else {
        step.done = false;
        step.mood = null;
        if (goal.pendingMoodStepId === stepId) goal.pendingMoodStepId = null;
    }
    renderAll();
}

function setMood(goalId, stepId, mood) {
    const goal = goals.find(g => g.id === goalId);
    const step = goal.steps.find(s => s.id === stepId);
    step.mood = mood
    goal.pendingMoodStepId = null;
    renderAll();
}

function dismissMood(goalId) {
    const goal = goals.find(g => g.id === goalId);
    goal.pendingMoodStepId = null;
    renderAll();
}

function useQuestion(goalId, question) {
    const goal = goals.find(g => g.id === goalId);
    const input = document.getElementById(`step-input-${goalId}`);
    if (!input || !goal) return;
    goal.activeQuestion = question;
    input.placeholder = question;
    input.value = "";
    input.focus();
}

function addStep(goalId, inputEl) {
    const text = inputEl.value.trim();
    if (!text) return;
    const goal = goals.find(g => g.id === goalId);
    const nextId = goal.steps.length ? Math.max(...goal.steps.map(s => s.id)) + 1 : 0;
    const newStep = { id: nextId, text, done: false, mood: null };
    if (goal.activeQuestion) {
        newStep.question = goal.activeQuestion;

        goal.answeredQuestions.push(goal.activeQuestion);

        goal.activeQuestion = null
    }

    goal.steps.push(newStep);
    inputEl.value = "";
    renderAll();
}

function removeGoal(goalId) {
    goals = goals.filter(g => g.id !== goalId);
    renderAll();
}

function archiveGoal(goalId) {
    const goal = goals.find(g => g.id === goalId);
    goal.archived = true;
    renderAll();
}

function restoreGoal(goalId) {
    const goal = goals.find(g => g.id === goalId);
    goal.archived = false;
    renderAll();
}

function checkInGoal(goalId) {
    const goal = goals.find(g => g.id === goalId);
    goal.checkedIn = true;
    renderAll();
}

function renderStepRow(goal, step, isCurrent) {
    let moodPicker = '';
    if (goal.pendingMoodStepId === step.id) {
        moodPicker = `<div class="mood-picker">
        <span class="mood-prompt">How'd that feel?</span>${moodOptions.map(m => `<button class="mood-btn" onclick="setMood(${goal.id}, ${step.id}, '${m.emoji}')" title="${m.label}">${m.emoji}</button>`).join("")} <button class="mood-skip" onclick="dismissMood(${goal.id})">skip</button>
        `
    }
    return `<div class="step ${step.done ? 'done' : ''} ${isCurrent ? 'current' : ''}">
     <div class="step-line"> </div>
     <div class="stone" onclick="toggleStep(${goal.id}, ${step.id})">${step.done ? (step.mood || '✓') : ''}</div>
    <div class="step-text">${step.question ? `<div class="step-question">${escapeHtml(step.question)}</div>` : ''}
    ${escapeHtml(step.text)}${isCurrent ? '<span class="step-badge">next</span>' : ''}
    ${moodPicker}</div>
    </div>`;
}

function mountainSvg(goal) {
    const total = goal.steps.length;
    const doneCount = goal.steps.filter(s => s.done).length;
    const pct = total ? Math.round((doneCount / total) * 100) : 0;
    const peakHeight = Math.max(34, Math.min(70, 30 + total * 5));
    const viewH = 78;
    const baseY = 74;
    const peakY = baseY - peakHeight;
    const fillH = peakHeight * (pct / 100);
    const fillY = baseY - fillH;
    const reached = total > 0 && pct === 100;
    const clipId = `clip-${goal.id}`;
    return `
     <svg class="peak-svg" width="72" height="${viewH}" viewBox="0 0 72 ${viewH}">
        <defs>
          <clipPath id="${clipId}">
            <rect x="0" y="${fillY}" width="72" height="${fillH + 4}"></rect>
          </clipPath>
        </defs>
        <path d="M6 ${baseY} L36 ${peakY} L66 ${baseY} Z" fill="var(--moss-light)" stroke="var(--line)" stroke-width="1.5"/>
        <path d="M6 ${baseY} L36 ${peakY} L66 ${baseY} Z" fill="var(--moss)" clip-path="url(#${clipId})"/>
        ${reached ? `<circle cx="36" cy="${peakY}" r="3.5" fill="var(--amber)"/>` : ''}
      </svg>`;
}

function renderTrails() {
    const container = document.getElementById('goals-container');
    const active = getActiveGoals();
    if (active.length === 0) {
        const archivedNote = getArchivedGoals().length
            ? `<p style="margin-top:6px;">You've logged ${getArchivedGoals().length} finished trail${getArchivedGoals().length > 1 ? 's' : ''} — check the Summit Log tab.</p>`
            : '';
        container.innerHTML = `
        <div class="empty">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M8 40 L20 16 L27 28 L33 17 L40 40" stroke="#B4B2A9" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
          </svg>
          <p>No trails yet. Add a goal above and we'll suggest a first path up.</p>
          ${archivedNote}
        </div>`;
        return;
    }
    container.innerHTML = active.map(goal => {
        const total = goal.steps.length;
        const doneCount = goal.steps.filter(s => s.done).length;
        const pct = total ? Math.round((doneCount / total) * 100) : 0;
        const firstUndoneIndex = goal.steps.findIndex(s => !s.done);
        const stepsHtml = goal.steps.map((step, i) => renderStepRow(goal, step, i === firstUndoneIndex)).join("");
        const reached = total > 0 && doneCount === total;

        return `
        <div class="goal-card" id="goal-${goal.id}">
          <div class="goal-card-head">
            <div>
              <p class="goal-title">${escapeHtml(goal.title)}</p>
              ${goal.why ? `<p class="goal-why">"${escapeHtml(goal.why)}"</p>` : ''}
            </div>
            <div style="text-align:right;">
              <div class="goal-progress-label">${doneCount}/${total} steps</div>
              <button class="remove-goal" onclick="removeGoal(${goal.id})">remove</button>
            </div>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="breakdown-hint">Suggested first path — tap a stone to mark it done, or add your own step below.</div>
          <div class="trail">${stepsHtml}</div>
          ${questionsFor(goal).length ? `<div class="question-chips">
            ${questionsFor(goal).map(q => `<button class="chip" onclick="useQuestion(${goal.id}, '${escapeAttr(q)}')">${escapeHtml(q)}</button>`).join("")}
          </div>` : ''}
          <div class="add-step-row">
            <input type="text" id="step-input-${goal.id}" placeholder="Add another small step..." onkeydown="if(event.key==='Enter') addStep(${goal.id}, this)">
            <button class="btn btn-ghost" onclick="addStep(${goal.id}, this.previousElementSibling)">Add</button>
          </div>
          <div class="summit ${reached ? 'reached' : ''}">
            <div class="summit-left">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2 L16 14 H4 Z" fill="${reached ? '#3F5A45' : '#DDE2D6'}"/>
                <path d="M10 2 L13 8 H12 L14 12" stroke="${reached ? '#C9793D' : '#B4B2A9'}" stroke-width="1.4"/>
              </svg>
              ${reached ? "Summit reached — you did the hard thing." : "The summit: every step above, done."}
            </div>
            ${reached ? `<button class="btn btn-amber btn-small" onclick="archiveGoal(${goal.id})">Log this summit</button>` : ''}
          </div>
        </div>`;
    }).join("");
}

function renderToday() {
    const container = document.getElementById('today-container');
    const active = getActiveGoals();
    const withNextStep = active.filter(g => g.steps.some(s => !s.done));
    if (withNextStep.length === 0) {
        container.innerHTML = `
        <div class="empty">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M8 40 L20 16 L27 28 L33 17 L40 40" stroke="#B4B2A9" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
          </svg>
          <p>${active.length === 0 ? "No active trails yet — add a goal in My Trails to get started." : "All caught up — every active trail's next step is done."}</p>
        </div>`;
        return;
    }
    container.innerHTML = withNextStep.map(goal => {
        const nextStep = goal.steps.find(s => !s.done);
        return `
        <div class="today-item">
          <p class="today-goal-title">${escapeHtml(goal.title)}</p>
          <div class="trail">${renderStepRow(goal, nextStep, true)}</div>
        </div>`;
    }).join("");
}

function renderTrailMapPage() {
    const section = document.getElementById('trail-map-page-content');
    const active = getActiveGoals();
    if (active.length === 0) {
        section.innerHTML = `
        <div class="empty">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M8 40 L20 16 L27 28 L33 17 L40 40" stroke="#B4B2A9" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
          </svg>
          <p>No active trails yet — add a goal in My Trails to see it appear here.</p>
        </div>`;
        return;
    }
    section.innerHTML = `
      <div class="trail-map-wrap">
        <div class="trail-map-row">
          ${active.map(goal => {
        const total = goal.steps.length;
        const doneCount = goal.steps.filter(s => s.done).length;
        const pct = total ? Math.round((doneCount / total) * 100) : 0;
        return `
              <button class="peak-item" onclick="goToGoalInTrails(${goal.id})">
                ${mountainSvg(goal)}
                <div class="peak-label">${escapeHtml(goal.title)}</div>
                <div class="peak-pct">${pct}%</div>
              </button>`;
    }).join("")}
        </div>
      </div>`;
}

function renderArchive() {
    const container = document.getElementById('summit-log-container');
    const archived = getArchivedGoals();
    if (archived.length === 0) {
        container.innerHTML = `
        <div class="empty">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M10 18 H38 V38 H10 Z" stroke="#B4B2A9" stroke-width="2.5" stroke-linejoin="round"/>
            <path d="M8 12 H40 V18 H8 Z" stroke="#B4B2A9" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
          <p>Nothing logged yet — finish a trail and log its summit to keep a record here.</p>
        </div>`;
        return;
    }
    container.innerHTML = archived.map(goal => {
        const total = goal.steps.length;
        return `
        <div class="archive-card">
          <div class="archive-card-head">
            <div>
              <p class="archive-title">${escapeHtml(goal.title)}</p>
              ${goal.why ? `<p class="goal-why">"${escapeHtml(goal.why)}"</p>` : ''}
            </div>
            <button class="btn btn-ghost btn-small" onclick="restoreGoal(${goal.id})">Restore</button>
          </div>
          <div class="archive-steps">
            ${goal.steps.map(s => `<div>${s.mood ? `<span class="done-mood">${s.mood}</span>` : '✓ '}${escapeHtml(s.text)}</div>`).join("")}
          </div>
          <p style="font-size:12px; color:var(--ink-soft); margin:10px 0 0;">${total} step${total !== 1 ? 's' : ''} completed</p>
        </div>`;
    }).join("");
}

function renderReflect() {
    const container = document.getElementById('reflection-container');
    const active = getActiveGoals().filter(g => g.steps.length > 0 && g.steps.some(s => !s.done));

    const checkinHtml = active.length === 0
        ? `<p style="color:var(--ink-soft); font-size:14px; margin-bottom:28px;">Nothing mid-progress to check in on right now.</p>`
        : active.map(goal => `
          <div class="reflect-card">
            <p class="goal-title" style="font-size:17px;">${escapeHtml(goal.title)}</p>
            ${goal.why ? `<p class="goal-why">"${escapeHtml(goal.why)}"</p>` : `<p class="goal-why">No "why" written down for this one yet.</p>`}
            ${goal.checkedIn
                ? `<p class="reflect-confirmed">✓ Checked in — still on the trail.</p>`
                : `<div class="reflect-actions">
                  <button class="btn btn-primary btn-small" onclick="checkInGoal(${goal.id})">Still feels right</button>
                  <button class="btn btn-ghost btn-small" onclick="goToGoalInTrails(${goal.id})">Adjust the steps</button>
                </div>`
            }
          </div>`).join("");

    const allStepsWithMood = [];
    goals.forEach(goal => {
        goal.steps.forEach(step => {
            if (step.mood) {
                allStepsWithMood.push({ goalTitle: goal.title, text: step.text, mood: step.mood });
            }
        });
    });

    console.log(allStepsWithMood)
    const moodHtml = allStepsWithMood.length === 0 ? `<p style="color:var(--ink-soft); font-size:14px;">No moods logged yet — they'll show up here after you mark steps done.</p>`
        : allStepsWithMood.slice().reverse().map(item => `
          <div class="mood-history-item">
            <span class="mood-history-emoji">${item.mood}</span>
            <span>${escapeHtml(item.text)} <span class="mood-history-goal">— ${escapeHtml(item.goalTitle)}</span></span>
          </div>`).join("");

    container.innerHTML = `
      <p class="today-goal-title" style="margin-bottom:14px;">Still in progress</p>
      ${checkinHtml}
      <p class="today-goal-title" style="margin:28px 0 4px;">How recent steps have felt</p>
      <div class="reflect-card">${moodHtml}</div>
    `;
}

function renderAll() {
    renderTrails();
    renderToday();
    renderTrailMapPage();
    renderArchive();
    renderReflect();
}

function escapeAttr(str) {
    return str.replace(/'/g, "\\'");
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

renderAll();