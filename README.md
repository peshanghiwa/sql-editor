# Online SQL Editor

#### The Awesome Online SQL Editor

Online SQL Editor is an online lightweight, easy to use and feature-rich sql editing tool template that you can access and use for free.
<a href="https://cheerful-buttercream-e42690.netlify.app/" target="_blank">Check out the website here</a>

## Key Features

- A familiar and easy to use coding environment theme for programmers
- Dark/Light mode support
- Multiple layout splitting support for a better organization flexibility
- Font size editing support
- Beautify option to organize your codebase and format SQL
- Multiple tabs and editor option (You can write multiple queries at once on different tabs)
- A Section to see all the tables of your current working database with the availability of editing table names directly
- An error logger section (just like any other IDE tools) to see sql errors that occur during execution
- Very lightweight, fast and performant

&nbsp;

# Technology Used

**Vue.js** is the main technology being used in this project alongside with pure css for the styling the website.

- Vue.js: used as backbone of the entire project architecture
- Pure CSS: No third party libraries is being used

### All Third party libraries used with their purpose explained:

- @vueuse: a very usefull vue.js library the contains a bunch of helper components and features that helps and speeds up the development process.
- vue3-cookies: a library that helps in controlling browser cookies easily.
- bootstrap-icons-vue: a lightweight svg based icon library
- vue3-treeview: a vue.js component package that helps in building a treeview very easily
- vue-final-modal: a powerfull modal library for package
- sql-formatter: a simple package that formats sql strings
- splitpanes: a package that helps in layout splitting

# Page Load Time

The page load is measured based on some standard criteria which are the following

- **Largest Contentful Paint (LCP)**: took an average of 0.5s - 1.3s based on different tools (2.5s or lower is considered as good UX and fast page load)
- **Cumulative Layout Shift (CLS)**: took absolute zero (0.1 or less is considered as good UX)
- **First Input Delay (FID) or Total Blocking Time (TBT)**: took absolute zero (100ms or less is considered as good UX)

#### The tools that are used for checking these criterias are:

- Chrome's Lighthouse Extension tool
- pagespeed.web.dev
- webpagetest.org

<img src="https://i.ibb.co/6rYYY6X/Screen-Shot-2022-10-23-at-12-27-37-AM.png" alt="Screen-Shot-2022-10-23-at-12-27-37-AM">

### In order to achieve this performance:

- No heavy third party libraries used including UI frameworks (Pure CSS is used to build the entire website for maximum efficiency)
- No large or heavy assets like images are used (which is one of the main cause of load time issue) instead very lightweight svg format icons are used
- No heavyweight Javascript codes are written and the layout is semantically well structured, formatted and fully optimized for large data sets

  ## keyword Shortcuts that are available in the website

| Shortcut action             | Shortcut in Windows | Shortcut in Mac  |
| --------------------------- | :------------------ | :--------------: |
| Save File                   | CTRL + S            |   COMMAND + S    |
| Run Current Editor Query    | CTRL + ENTER        | COMMAND + RETURN |
| Terminate Running Query     | ESC                 |       ESC        |
| Show/Hide the sidebar       | CTRL + B            |   COMMAND + B    |
| Show/Hide error log section | CTRL + J            |   COMMAND + J    |
| Format current editor input | CTRL + H            |   COMMAND + H    |
| Increase Editor Font Size   | CTRL + "+"          |  COMMAND + "+"   |
| Decrease Editor Font Size   | CTRL + "-"          |  COMMAND + "-"   |
| Toggle editor layout mode   | CTRL + /            |   COMMAND + /    |
