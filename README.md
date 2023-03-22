# A web app that displays poems

You should use one of the frameworks Angular, React or VueJS together with the poetrydb API (https://poetrydb.org/index.html) to solve this assignment.

It should contain these features:

- List poems - at the start, display a button with the text "Fetch poems"
- When clicking on the button, fetch 20 random poems through an http call to GET https://poetrydb.org/random/20 (you will get an array with 20 random poems)
- Display the title and author of each poem
- Add a select element with the options 'title' and 'author'. The list of poems should be sorted by the selected value. Show poem details.
- When clicking on one of the poems a child component should be used to show details about the poem (title, author and the actual poem). Select favorite poems
- The poem list component should also contain a list of "favorite poems" that has been chosen by the user.
- In the poem details component you should be able to click on a button that adds or removes the poem from the favourite list.

_Use CSS to make it user friendly and pleasing to the eye._
