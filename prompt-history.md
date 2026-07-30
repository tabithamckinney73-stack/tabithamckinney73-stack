I am looking to build a website like a todo app but it would take goals that someone wants to achieve and help them break those goals down into smaller easier to accomplish tasks that don't seem so hard to acheive. I would like to build it with css, javascript and html. and i would like to start by coming up with some names for the app.

also I don't want this app to be confused with a todo app. I want it to be goal based can you give me ideas on how to set this app apart from a basic todo app?

yes I would also like to incorporate the mood tags as well and I would like to know if these pages can seperately be tested without a database to track the information since I wont be using any api calls at this stage

Okay lets start from the beginning how the tabs working to show the different pages

when trying to add an answered question to my step my dev tools are saying it can't read properties of push at goal.activeQuestions.push(goal.activeQuestion);

what part is adding the answered questions?

how is the how recent steps have felt in the reflect section working

I think im having trouble with the setting of the mood because when i mark a step done and add the mood it isn't being pushed to the allStepWithMood array

when completing steps on one task, all of my trail maps are filling instead of just the one that has any tasks completed

does this code look correct? 

<!-- function mountainSvg(goal) {
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
} -->


when i mark a step as done it strikes through the text but it doesn't just strike through the text of the step that I marked it strikes it out for all of the text until i press a mood or the skip on the mood choice.

can you explain to me why a lot of the functions include the RenderAll() function at the end of them