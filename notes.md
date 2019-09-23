MAKING A MOVIE APP

1. Read ReadMe
    1. Components
        1. Ghibli logo (url)
        2. Header with “Ghibli Review App” (H1)
        3. Select box  (select)
            1. Every movie (option)
            2. Blank default (option style=“display:none”)
        4. Empty DIV  (div)
            1. Title (h3)
            2. Release year (p)
            3. Description (p)
        5. Form (form)
            1. Text Input (input)
            2. Submit (button)
                1. Must not actually post to the API
        6. UL (ul)
            1. Updates with submitted reviews as (li)
    2. Use
        1. User must select from select box
            1. selected movie populates
            2. New selection overwrites
        2. Review submit
            1. Should display immediately
            2. Each should be new (LI)s 
                1. Title in bold
                2. Body plain text
    3. STYLE
        1. Can use default NO NEED TO RESET
        2. Must be RESPONSIVE
            1. BODY
                1. MONOSPACE font - (SEARCH GOOGLE FONTS IF NOT AVAILABLE)
                2. Lavender BG color
                3. ALL IN ONE COLUMN
                4. Centered by width
            2. HEADER
                1. Contains the H1 and IMG tags
                2. WIDTH: 70%
                3. HEIGHT: 150px
                4. Header IMG should be horizontal
                5. IMG and TEXT should be at opposite ends & centered Vertically 
                6. IMG should have the same HEIGHT as the whole header
                7. PADDING: 10px
                8. MARGIN BOTTOM: 50px
                9. BACKGROUND: sky-blue 
            3. MAIN AREA
                1. All other content
                2. WIDTH: 60%
                3. Column, justified left
            4. REVIEW TEXT INPUT
                1. Explicit Width
                    1. WIDTH: 400px

1. FIND OUT ENDPOINTS
    1. Data Needs
        1. A list of all films in their API. [https://ghibliapi.herokuapp.com/films]
            1. a way to add all the titles to a select box
                1. Could be done manually, but I bet there’s a way to do this automatically
        2. A single film [https://ghibliapi.herokuapp.com/films/{{filmID}}]
            1. Title  Film.title
            2. Release year  Film.release_date
            3. Description  Film.description