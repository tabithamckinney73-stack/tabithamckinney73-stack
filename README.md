## StepWise

Problem: I feel that a lot of people whether justice impacted or not, they can have lots of goals that just feel so big that they don't know where to begin, or they tend to be put off because they seem out of reach or just seem impossible at the time.

## Value:
The value of this project for me is to help people take a big goal that may be intimidating to someone and help them to break these goals down into smaller steps that can show the user that there are steps they can take towards completing the goals they want to achieve. Giving ideas of where to start, while asking questions to expand steps, asking how completing steps made them feel, and allowing them to reflect on how different steps have affected the user, while also keeping track of the things that the user has achieved.

## Project Plan:
I wanted to make sure that this didn't appear to be a todo app because that's not what I was trying to create, so I did look for assistance on how to separate this website from looking or acting like a todo app. So I knew I wanted to automatically show steps instead of allowing a user to add them themselves freely. I also wanted a way to track the different goals a user was working on to show progress they've made. I also wanted this to be something that could be built upon in the future, as this should be a simple website. I knew I needed to figure out a way to display all of this information on different features without refresh being an issue which is why most of the work is done using JavaScript instead of HTML as well as why I used tabs instead of separate pages. I wanted this to be something that one day I could add users to, databases to, and just overall be something that could be built for common use. The plan behind this project actually stemmed from something that I honestly really could have used when I had just been released because I also had a lot of goals and things I wanted to accomplish, this application being one by far the most important goal of mine. Still this is something that I could use in my day to day life to keep me organized and always progressing and my hope is that maybe one day it could be used to help others as well.

## Features:
The completed features include a Today look, which just shows your current next steps for your active goals just as a quick check in to keep things updated quickly so it doesn't feel overwhelming and helps make feeling like keeping your goals updated isn't a huge task and can be done quickly as you complete a step. The next Feature is the My Trails which shows different cards of your different active goals showing all of your current goals with all of their steps that are completed, and then questions you can answer to add extra steps to further break down your goals. Currently I just have some pre-written data with common goal topics that have pre-written steps and questions. There is also a mood tracker for when you complete a goal you can choose an emoji to describe how that step felt to complete. This feature is also where you can add new goals. The Trail map shows your goals side by side just as a mountain peak (following with the theme of the website) with a percentage of completeness. The Summit log shows you any completed goals that you have marked completed while showing you the name of the goal, the why this goal is important, and the steps you took to complete it as well as any moods you logged. There is also a restore button that allows you to re-activate that goal. The final feature I included is the Reflect page which shows you goals that are still in progress allowing you to check-in and decide if that goal still feels right, or if you feel the steps need to be adjusted to better fit your progress. The reflect page also includes a list of how recent completed steps have made you feel.

For the Future I feel that I would like to add an AI aspect to the page that would break down goals more specific to the user, what they're trying to achieve, and make questions and plans more personalized to a person rather than the generic generalized questions that I currently have. I would also like to include a notes section and just an overall more personalized version of this website for a user to feel more attuned to their own goals, how they're achieving them, and get more assistance in what they're struggling with and what they're doing well with.

## Technologies Used:
I used Visual Studio Code and a go live server to build and test this website.

## AI Tools Used
I also enlisted the help of Claude AI to assist me with this project.

Running the Project:
## Running the App

This is a fully client-side demo — there's no build step, no server, 
and no database. Everything runs directly in your browser from a 
single HTML file.

### Requirements
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- That's it — no Node, no npm, no dependencies to install

### How to run it
1. Download or clone this repository
2. Open `stepwise-demo.html` directly in your browser
   - Double-click the file, or
   - Right-click → Open With → your browser of choice, or
   - Drag the file into an open browser window
3. That's it — the app loads and is ready to use immediately

### A note on data
All goals, steps, and progress are stored in memory in the browser 
tab while it's open. **Refreshing the page or closing the tab will 
reset all data** — this is expected for this stage of the project, 
since there's no backend or persistent storage wired in yet. Each 
time you open the file, you're starting fresh.

### Testing it
Since everything lives in one shared in-memory data structure, you 
can freely:
- Add a goal on the **My Trails** tab and watch it appear on 
  **Today** and **Trail Map** automatically
- Mark steps done, tag moods, and log a finished trail to the 
  **Summit Log**
- Switch between tabs at any point — nothing resets except a full 
  page refresh

No API keys, accounts, or setup required to try any of it.

