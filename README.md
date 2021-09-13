# Kartalytics

This site hosts results for Mario Kart 64 tournaments, namely those held annually in north-central Virginia featuring members of the [mariokart64.com](https://www.mariokart64.com/) community. Additionally, the site presents statistics and analytics of these results, which can be grouped by tournament, by player, or by track. The ultimate goal of this site is to a central source for information on these tournaments, including providing comprehensive breakdowns of the results (in other words, more nerdy stats than you ever wanted to know!).

The main challenge of the development of this site was the inconsistency of structure in the tournaments themselves, particularly in the early years, which featured rounds using a different mode (2 player Grand Prix mode, as opposed to 4 player Versus mode which is universally used in modern tournaments), unusual round structures, especially in play-ins to the main bracket, and missing and possibly erroneous records from 2011 and earlier. To this end, I used a MongoDB database to allow for the flexibility needed to handle the idiosyncracies of each tournament. Other technologies used include ASP.NET Core, C#, TypeScript, React, and Tailwind, and the site is deployed to Heroku using a Docker container.

The live version can be found here: https://mk64.mavalock.dev

Currently, only results for the 2019 tournament are available, though more will be added soon!
