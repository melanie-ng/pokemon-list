<template>
    <div class="container">
        <!--purpose section-->
        <div class="row mt-3">
            <div class="col-12">
                <h1>About</h1>
                <p>
                    This website was created as part of a Distinction/High Distinction assignment 
                    for <b>COS30043 Interface Design and Development</b> at <b>Swinburne University 
                    of Technology</b>. The assignment aims to demonstrate my ability to create a 
                    high quality web application using Bootstrap and VueJS frameworks.
                </p>
            </div>
        </div>

        <!--features section-->
        <div class="row">
            <div class="col-12">
                <hr />
                <h3>Features</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <img 
                    class="img-fluid border border-dark" 
                    src="@/assets/screenshot-of-collection.png" 
                    alt="Screenshot of a spreadsheet" 
                    />
                <br /><br />
            </div>
            <div class="col-xl-6">
                <p class="text-start">
                    This website was inspired by the spreadsheet I was using to keep track of my 
                    Pokémon collection while playing Pokémon Sword and Shield. With this website, 
                    I aimed to offer a more user-friendly interface compared to a spreadsheet for 
                    users to:
                    <ul class="text-start">
                        <li>
                            <b>View their Pokémon collection</b> with the help of filters.
                        </li>
                        <li>
                            <b>Manage their Pokémon collection</b> with Add and Delete 
                            functionalities.
                        </li>
                        <li>
                            <b>Keep track of their "Wish List"</b> by toggling a Pokémon's status.
                        </li>
                    </ul>
                </p>
            </div>
        </div>

        <!--future plans section-->
        <div class="row">
            <div class="col-12">
                <hr />
                <h3>Future Plans</h3>
                <p>
                    Please note that this website is still a work in progress. Due to time constraints, 
                    there are a few known bugs that I have not addressed yet. Additionally, I have a 
                    few features planned that have yet to be implemented. Hopefully, I will get back to 
                    this project in the near future, so if you encounter any bugs or have suggestions 
                    for new features that have not been listed below, please email me at  
                    <a href="mailto:103489466@student.swin.edu.au">103489466@student.swin.edu.au</a>.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-5 mx-auto alert alert-warning">
                <h4>Known Bugs</h4>
                <ul class="text-start">
                    <li><i>Add Pokémon</i> - Missing egg moves for evolved Pokémon</li>
                    <li>
                        <i>Add Pokémon</i> - Unable to retrieve the abilities and moves for some Pokémon 
                        with multiple forms (e.g. Pumpkaboo, Mimikyu)
                    </li>
                </ul>
            </div>
            <div class="col-xl-5 mx-auto alert alert-success">
                <h4>Upcoming Features</h4>
                <ul class="text-start">
                    <li>Ability to actually save your collection</li>
                    <li>Sorting feature to arrange Pokémon according to your preference</li>
                    <li>More fields for Add functionality</li>
                    <li>Ability to edit the information for existing Pokémon in your collection</li>
                    <li>Sharing feature to allow other users to view your collection for trading purposes</li>
                </ul>
            </div>
        </div>

        <!--credits section-->
        <div class="row">
            <div class="col-12">
                <hr/>
                <h3>Credits</h3>
                <ul class="text-start" id="credits">
                    <li><a href="https://pokeapi.co/" target="_blank">PokéAPI</a>: Pokémon data and sprites</li>
                    <li>/u/SaberMarie's <a href="https://docs.google.com/spreadsheets/d/1Q4-AUUhlcyLst40k2Ir2xW1FIdrNDVAWybRe96Zs5jA/edit#gid=1961152828" target="_blank">template</a>: Template for referencing</li>
                    <li>/u/Riobbie303's <a href="https://docs.google.com/spreadsheets/d/1LbNrzvNyRLIy85ltXoDb0Od5irC2Z6q3Ruzt4Tw9Wh0/edit?usp=sharing" target="_blank">template</a>: Template for referencing</li>
                </ul>
                <br />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #credits {
        display: table;
        margin: 0 auto;
    }
</style>