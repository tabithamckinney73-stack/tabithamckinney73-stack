let goals = [];
    let goalIdCounter = 0;
    let currentPage = 'trails';

const moodOptions = [
    { emoji: "💪", label: "strong"},
    { emoji: "😌", label: "relieved"},
    { emoji: "😅", label: "tough"},
    { emoji: "😐", label: "neutral"},
    { emoji: "🎉", label: "excited"}
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